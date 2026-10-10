//node
import { spawn, spawnSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//--------------------------------------------------------------------//
// Constants

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..'
);
const checks = [];
//a devmetrics-owned parent reserves this port; children bind it
// sequentially
const port = Number(process.env.PORT);
assert.ok(
  Number.isInteger(port) && port >= 3000 && port <= 3020,
  'Run listener tests through devmetrics with PORT={port}'
);
const servers = new Set();

await fs.mkdir(path.join(root, '.build'), { recursive: true });
const scratch = await fs.mkdtemp(path.join(root, '.build', 'proof-'));
const base = {
  ...process.env,
  OFFICEPRESS_BUILD_DIR: path.join(scratch, 'output'),
  PGLITE_DIR: path.join(scratch, 'pglite'),
  OFFICEPRESS_MIGRATIONS_DIR: path.join(scratch, 'migrations'),
  DATABASE_ADAPTER: 'pglite',
  OFFICEPRESS_DISABLED_PLUGINS: '',
  OFFICEPRESS_DISPOSABLE_PROOF: '1'
};
delete base.DATABASE_URL;
const marker = path.join(root, '.build', `preserve-${randomUUID()}.txt`);
await fs.writeFile(marker, 'unrelated build sibling must survive');
const receipt = {
  started: new Date().toISOString(),
  node: process.version,
  checks,
  scratch: path.relative(root, scratch),
  status: 'running',
  sourceSha256: {},
  packages: {},
  limitations: []
};
//--------------------------------------------------------------------//
// Functions

/**
 * Run one bounded CLI step, capture its output and fail the campaign if the
 * child exits unsuccessfully.
 */
function run(label, file, args, env = base) {
  const result = spawnSync(file, args, {
    cwd: root,
    env,
    encoding: 'utf8',
    timeout: 180000,
    maxBuffer: 8e6
  });
  const output = (result.stdout || '') + (result.stderr || '');
  if (result.status !== 0)
    throw new Error(
      `${label} failed (${result.status}): ${output.slice(-6000)}`
    );
  checks.push({ name: label, passed: true });
  console.log(`PASS ${label}`);
  return output;
}
/**
 * Run the TypeScript verification entry point with the local toolchain.
 */
const runTypeScript = (label, script, args = [], env = base) =>
  run(label, process.execPath, [ '--import', 'tsx', script, ...args ], env);
/**
 * Run the requested Stackpress CLI step with the proof’s configuration.
 */
const runCli = (label, script, env = base) => run(label, 'yarn', [ script ], env);
/**
 * Start one Stackpress serve child on the assigned port and retain it for
 * bounded readiness checks and campaign-owned shutdown.
 */
async function start(script, env) {
  const command =
    script === 'dev:start'
      ? [ 'serve', '--b', 'config/develop' ]
      : [ 'serve', '--b', 'config/preview' ];
  const child = spawn(
    process.execPath,
    [ '--import', 'tsx', 'node_modules/stackpress-server/bin.ts', ...command ],
    {
      cwd: root,
      env: { ...env, HOST: '127.0.0.1', PORT: String(port) },
      stdio: [ 'ignore', 'pipe', 'pipe' ]
    }
  );
  servers.add(child);
  let output = '';
  child.stdout.on('data', (chunk) => {
    output += chunk;
  });
  child.stderr.on('data', (chunk) => {
    output += chunk;
  });
  const url = `http://127.0.0.1:${port}`;
  for (let attempt = 0; attempt < 300; attempt++) {
    if (child.exitCode !== null)
      throw new Error(`Server exited: ${output.slice(-6000)}`);
    try {
      await fetch(url, { signal: AbortSignal.timeout(1000) });
      return { child, url };
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Server startup timeout: ${output.slice(-6000)}`);
}
/**
 * Stop the owned runtime or scheduler and release its lifecycle resources.
 */
async function stop(child) {
  if (child.exitCode === null) {
    child.kill('SIGTERM');
    for (let attempt = 0; attempt < 50 && child.exitCode === null; attempt++)
      await new Promise((resolve) => setTimeout(resolve, 100));
    if (child.exitCode === null) child.kill('SIGKILL');
  }
  servers.delete(child);
}
/**
 * Verify one observable response from the running proof.
 */
async function httpCheck(label, script, env, enabled, isProduction = false) {
  const { child, url } = await start(script, env);
  try {
    const response = await fetch(url, {
      headers: {
        cookie: 'secret-cookie=must-not-serialize',
        authorization: 'Bearer must-not-serialize'
      }
    });
    const html = await response.text();
    assert.equal(response.status, 200, html.slice(0, 500));
    assert.ok(html.includes('Home Page'));
    assert.ok(
      !html.includes('must-not-serialize'),
      'Private request headers must not enter HTML props'
    );
    assert.equal((await fetch(`${url}/styles/globals.css`)).status, 200);
    const notes = await fetch(`${url}/notes`);
    assert.equal(notes.status, enabled ? 200 : 404, await notes.clone().text());
    if (enabled)
      assert.ok((await notes.text()).includes('Persisted OfficePress proof'));
    assert.equal((await fetch(`${url}/missing-page`)).status, 404);
    if (isProduction) {
      assert.ok(
        !html.includes('/@vite/client'),
        'Production must use built assets'
      );
      const sources = [
        ...html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)
      ].map((match) => match[1]);
      assert.ok(
        sources.some((assetUrl) => assetUrl.includes('/client/')),
        'Built hydration script is referenced'
      );
      for (const source of sources)
        assert.equal((await fetch(new URL(source, url))).status, 200, source);
    }
    checks.push({ name: label, passed: true });
    console.log(`PASS ${label}`);
  } finally {
    await stop(child);
  }
}
/**
 * Hash maintained source inputs so verification receipts can identify the
 * version they exercised.
 */
async function fingerprint(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (
      [ 'node_modules', '.build', '.data', 'evidence', '.git' ].includes(
        entry.name
      ) ||
      (entry.name.startsWith('.env') && entry.name !== '.env.example')
    )
      continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await fingerprint(file);
    else
      receipt.sourceSha256[path.relative(root, file)] = createHash('sha256')
        .update(await fs.readFile(file))
        .digest('hex');
  }
}
try {
  await fingerprint(root);
  const manifest = JSON.parse(
    await fs.readFile(path.join(root, 'package.json'), 'utf8')
  );
  for (const [ name, version ] of Object.entries(manifest.dependencies)) {
    const installed = JSON.parse(
      await fs.readFile(
        path.join(root, 'node_modules', name, 'package.json'),
        'utf8'
      )
    ).version;
    assert.equal(installed, version, name);
    receipt.packages[name] = installed;
    if (name.startsWith('@stackpress/') || name.startsWith('stackpress-'))
      assert.equal(version, '0.10.8', name);
  }
  checks.push({ name: 'Pinned package versions', passed: true });
  run(
    'TypeScript including config, bootstrap, plugins and scripts',
    process.execPath,
    [ 'node_modules/typescript/bin/tsc', '--noEmit' ]
  );
  runCli('Composed Idea generation via CLI', 'generate');
  const commandEnv = {
    ...base,
    PGLITE_DIR: path.join(scratch, 'commands-pglite')
  };
  runCli('CLI push into its own empty disposable database', 'push', commandEnv);
  runCli('CLI config-owned population', 'populate', commandEnv);
  const rows = run(
    'CLI bound to selected app query bootstrap',
    'yarn',
    [ 'query', 'SELECT title FROM note' ],
    commandEnv
  );
  assert.ok(rows.includes('Persisted OfficePress proof'));
  runCli('CLI purge only its run-owned populated database', 'purge', commandEnv);
  runCli('Composed client generation via CLI', 'generate:client');
  runCli('CLI migration SQL without applying to runtime data', 'migrate');
  run('CLI named app event dispatch', 'yarn', [ 'emit', 'notes-status' ], base);
  runCli('Development cache cleanup without build deletion', 'dev:clean');
  runTypeScript('PGlite generated CRUD and validation', 'tests/runners/check-runtime.ts', [
    'init'
  ]);
  runTypeScript(
    'PGlite persistence after process restart',
    'tests/runners/check-runtime.ts',
    [ 'read' ]
  );
  runCli('Reactus client/server/CSS build via CLI', 'build');
  await httpCheck(
    'Development HTTP and safe serialized props',
    'dev:start',
    base,
    true
  );
  await httpCheck(
    'Built production HTTP with explicit proof PGlite adapter',
    'preview',
    base,
    true,
    true
  );
  for (const disabled of [ 'notes', 'store', 'stackpress-schema' ]) {
    const env = { ...base, OFFICEPRESS_DISABLED_PLUGINS: disabled };
    runTypeScript(
      `Dependency registration checks: ${disabled} disabled`,
      'tests/runners/check-runtime.ts',
      [ 'dependencies' ],
      env
    );
    await httpCheck(
      `Shell survives and feature route absent: ${disabled}`,
      'preview',
      env,
      false,
      true
    );
  }
  runTypeScript('Feature restored after restart', 'tests/runners/check-runtime.ts', [
    'read'
  ]);
  receipt.limitations.push(
    'This run used PGlite; direct PostgreSQL execution was not performed.'
  );
  assert.equal(
    await fs.readFile(marker, 'utf8'),
    'unrelated build sibling must survive'
  );
  checks.push({
    name: 'Unrelated build sibling preserved; proof never deletes shared build/data directories',
    passed: true
  });
  receipt.status = 'passed';
  receipt.limitations.push(
    'This is an app-neutral framework proof, not business-feature, authentication/tenant, browser-interaction or deployment acceptance.'
  );
  receipt.limitations.push(
    'Split Idea composition is verified; no incremental-generation speedup is claimed.'
  );
} catch (error) {
  receipt.status = 'failed';
  receipt.error = String(error);
  console.error(error);
  process.exitCode = 1;
} finally {
  for (const child of servers) await stop(child);
  await fs.rm(scratch, { recursive: true, force: true });
  await fs.unlink(marker);
  receipt.finished = new Date().toISOString();
  await fs.mkdir(path.join(root, 'tests/evidence/receipts'), {
    recursive: true
  });
  const serialized = JSON.stringify(receipt, null, 2) + '\n';
  await fs.writeFile(
    path.join(
      root,
      'tests/evidence/receipts',
      `${receipt.started.replace(/[:.]/g, '-')}.json`
    ),
    serialized
  );
  await fs.writeFile(
    path.join(root, 'tests/evidence/receipts', 'latest.json'),
    serialized
  );
  console.log(
    `${receipt.status.toUpperCase()}: ${checks.length} checks; tests/evidence/receipts/latest.json`
  );
}
