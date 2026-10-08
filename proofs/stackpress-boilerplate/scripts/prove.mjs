import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { spawn, spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checks = [];
const servers = new Set();
let container;
await fs.mkdir(path.join(root, '.build'), { recursive: true });
const scratch = await fs.mkdtemp(path.join(root, '.build', 'proof-'));
const base = { ...process.env, OFFICEPRESS_BUILD_DIR: path.join(scratch, 'output'),
  PGLITE_DIR: path.join(scratch, 'pglite'), DATABASE_ADAPTER: 'pglite',
  OFFICEPRESS_DISABLED_PLUGINS: '', OFFICEPRESS_DISPOSABLE_PROOF: '1' };
delete base.DATABASE_URL;
const marker = path.join(root, '.build', `preserve-${randomUUID()}.txt`);
await fs.writeFile(marker, 'unrelated build sibling must survive');
const receipt = { started: new Date().toISOString(), node: process.version, checks,
  scratch: path.relative(root, scratch), status: 'running', sourceSha256: {}, packages: {}, limitations: [] };
function run(label, file, args, env = base) {
  const result = spawnSync(file, args, { cwd: root, env, encoding: 'utf8', timeout: 180000, maxBuffer: 8e6 });
  const output = (result.stdout || '') + (result.stderr || '');
  if (result.status !== 0) throw new Error(`${label} failed (${result.status}): ${output.slice(-6000)}`);
  checks.push({ name: label, passed: true });
  console.log(`PASS ${label}`);
  return output;
}
const ts = (label, script, args = [], env = base) => run(label, process.execPath, ['--import', 'tsx', script, ...args], env);
async function start(script, env) {
  const child = spawn(process.execPath, ['--import', 'tsx', script], {
    cwd: root, env: { ...env, HOST: '127.0.0.1', PORT: '0' }, stdio: ['ignore', 'pipe', 'pipe']
  });
  servers.add(child);
  let output = '';
  child.stdout.on('data', chunk => { output += chunk; });
  child.stderr.on('data', chunk => { output += chunk; });
  for (let i = 0; i < 200; i++) {
    if (child.exitCode !== null) throw new Error(`Server exited: ${output.slice(-6000)}`);
    const match = output.match(/Server is running on (http:\/\/127\.0\.0\.1:\d+)/);
    if (match) return { child, url: match[1] };
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error(`Server startup timeout: ${output.slice(-6000)}`);
}
async function stop(child) {
  if (child.exitCode === null) {
    child.kill('SIGTERM');
    for (let i = 0; i < 50 && child.exitCode === null; i++) await new Promise(resolve => setTimeout(resolve, 100));
    if (child.exitCode === null) child.kill('SIGKILL');
  }
  servers.delete(child);
}
async function httpCheck(label, script, env, enabled, production = false) {
  const { child, url } = await start(script, env);
  try {
    const response = await fetch(url, { headers: { cookie: 'secret-cookie=must-not-serialize', authorization: 'Bearer must-not-serialize' } });
    const html = await response.text();
    assert.equal(response.status, 200, html.slice(0, 500));
    assert.ok(html.includes('Home Page'));
    assert.ok(!html.includes('must-not-serialize'), 'Private request headers must not enter HTML props');
    assert.equal((await fetch(`${url}/styles/globals.css`)).status, 200);
    const notes = await fetch(`${url}/notes`);
    assert.equal(notes.status, enabled ? 200 : 404, await notes.clone().text());
    if (enabled) assert.ok((await notes.text()).includes('Persisted OfficePress proof'));
    assert.equal((await fetch(`${url}/missing-page`)).status, 404);
    if (production) {
      assert.ok(!html.includes('/@vite/client'), 'Production must use built assets');
      const sources = [...html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)].map(m => m[1]);
      assert.ok(sources.some(s => s.includes('/client/')), 'Built hydration script is referenced');
      for (const source of sources) assert.equal((await fetch(new URL(source, url))).status, 200, source);
    }
    checks.push({ name: label, passed: true }); console.log(`PASS ${label}`);
  } finally { await stop(child); }
}
async function fingerprint(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (['node_modules', '.build', '.data', 'receipts', '.git'].includes(entry.name) || entry.name.startsWith('.env') && entry.name !== '.env.example') continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await fingerprint(file);
    else receipt.sourceSha256[path.relative(root, file)] = createHash('sha256').update(await fs.readFile(file)).digest('hex');
  }
}
try {
  await fingerprint(root);
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
  for (const [name, version] of Object.entries(manifest.dependencies)) {
    const installed = JSON.parse(await fs.readFile(path.join(root, 'node_modules', name, 'package.json'), 'utf8')).version;
    assert.equal(installed, version, name);
    receipt.packages[name] = installed;
    if (name.startsWith('@stackpress/') || name.startsWith('stackpress-')) assert.equal(version, '0.10.8', name);
  }
  checks.push({ name: 'Pinned package versions', passed: true });
  run('TypeScript including config, bootstrap, plugins and scripts', process.execPath, ['node_modules/typescript/bin/tsc', '--noEmit']);
  ts('Composed Idea generation', 'scripts/generate.ts');
  ts('PGlite generated CRUD and validation', 'scripts/check-runtime.ts', ['init']);
  ts('PGlite persistence after process restart', 'scripts/check-runtime.ts', ['read']);
  ts('Reactus client/server/CSS build', 'scripts/build.ts');
  await httpCheck('Development HTTP and safe serialized props', 'scripts/develop.ts', base, true);
  await httpCheck('Built production HTTP with explicit proof PGlite adapter', 'scripts/serve.ts', base, true, true);
  for (const disabled of ['notes', 'store', 'stackpress-schema']) {
    const env = { ...base, OFFICEPRESS_DISABLED_PLUGINS: disabled };
    ts(`Dependency registration checks: ${disabled} disabled`, 'scripts/check-runtime.ts', ['dependencies'], env);
    await httpCheck(`Shell survives and feature route absent: ${disabled}`, 'scripts/serve.ts', env, false, true);
  }
  ts('Feature restored after restart', 'scripts/check-runtime.ts', ['read']);
  if (process.argv.includes('--postgres')) {
    container = `officepress-proof-${randomUUID()}`;
    run('Start disposable PostgreSQL', 'docker', ['run', '--rm', '-d', '--name', container,
      '-e', 'POSTGRES_USER=officepress', '-e', 'POSTGRES_PASSWORD=officepress-proof',
      '-e', 'POSTGRES_DB=officepress_proof', '-p', '127.0.0.1::5432', 'postgres:17-alpine']);
    let ready = false;
    for (let i = 0; i < 100; i++) {
      const r = spawnSync('docker', ['exec', container, 'pg_isready', '-U', 'officepress', '-d', 'officepress_proof'], { encoding: 'utf8' });
      if (r.status === 0) { ready = true; break; }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    assert.ok(ready, 'PostgreSQL must become ready');
    const port = run('Resolve isolated PostgreSQL port', 'docker', ['port', container, '5432/tcp']).trim().split(':').pop();
    const env = { ...base, DATABASE_ADAPTER: 'postgres', DATABASE_URL: `postgresql://officepress:officepress-proof@127.0.0.1:${port}/officepress_proof` };
    ts('PostgreSQL generated CRUD and validation', 'scripts/check-runtime.ts', ['init'], env);
    ts('PostgreSQL persistence after process restart', 'scripts/check-runtime.ts', ['read'], env);
    delete env.DATABASE_ADAPTER;
    await httpCheck('Production defaults to PostgreSQL and serves built app', 'scripts/serve.ts', env, true, true);
    receipt.postgresImage = 'postgres:17-alpine';
  } else receipt.limitations.push('This run used PGlite; direct PostgreSQL execution was not performed.');
  assert.equal(await fs.readFile(marker, 'utf8'), 'unrelated build sibling must survive');
  checks.push({ name: 'Unrelated build sibling preserved; proof never deletes shared build/data directories', passed: true });
  receipt.status = 'passed';
  receipt.limitations.push('This is an app-neutral framework proof, not business-feature, authentication/tenant, browser-interaction or deployment acceptance.');
  receipt.limitations.push('Split Idea composition is verified; no incremental-generation speedup is claimed.');
} catch (error) {
  receipt.status = 'failed'; receipt.error = String(error); console.error(error); process.exitCode = 1;
} finally {
  for (const child of servers) await stop(child);
  if (container) {
    const result = spawnSync('docker', ['rm', '-f', container], { encoding: 'utf8' });
    if (result.status !== 0) { receipt.cleanupError = result.stderr; receipt.status = 'failed'; process.exitCode = 1; }
  }
  await fs.rm(scratch, { recursive: true, force: true });
  await fs.unlink(marker);
  receipt.finished = new Date().toISOString();
  await fs.mkdir(path.join(root, 'receipts'), { recursive: true });
  await fs.writeFile(path.join(root, 'receipts', 'latest.json'), JSON.stringify(receipt, null, 2) + '\n');
  console.log(`${receipt.status.toUpperCase()}: ${checks.length} checks; receipts/latest.json`);
}
