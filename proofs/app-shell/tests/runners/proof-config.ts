//node
import { createHash, randomBytes } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

//client
import type { ProofReceipt } from '../receipt.js';
import { config } from '../../config/production.js';

/**
 * Verify built-server restart and dependency variants, rejecting any source
 * or build changes observed during the configuration campaign.
 */
export async function runProof(
  proveConfig: typeof import('../../plugins/settings/shell/tests/config.js').proveConfig
) {
  //allocate a fresh database and receipt for the built-server configuration
  // campaign
  const id = new Date().toISOString().replace(/[:.]/g, '-');
  const directory = path.join(
    path.dirname(config.database.directory),
    `p01-config-${id}`
  );
  const receipt: ProofReceipt & {
    failures: string[],
    source: Record<string, string>,
    build: Record<string, string>,
    sourcesChangedDuringRun?: string[],
    buildChangedDuringRun?: string[]
  } = {
    id,
    started: new Date().toISOString(),
    node: process.version,
    command: 'yarn test',
    scope:
      'Built-server restart and independent plugin dependency/configuration contracts; no model calls',
    buildStatus:
      process.env.OFFICEPRESS_FINAL_BUILD === '1'
        ? 'Caller explicitly confirmed fresh final build'
        : 'Preliminary existing build; repeat after final yarn build',
    checks: [],
    failures: [],
    source: {},
    build: {},
    database: path.relative(config.cwd, directory)
  };
  //hash maintained source inputs so verification receipts can identify the
  // version they exercised
  async function fingerprints(directories: string[]) {
    const result: Record<string, string> = {};
    //visit maintained source files recursively for the proof input
    // fingerprint
    async function walk(directory: string) {
      for (const entry of await fs.readdir(directory, {
        withFileTypes: true
      })) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory() && entry.name !== 'evidence') await walk(file);
        else if (entry.isDirectory()) continue;
        else
          result[path.relative(config.cwd, file)] = createHash('sha256')
            .update(await fs.readFile(file))
            .digest('hex');
      }
    }
    for (const directory of directories)
      await walk(path.join(config.cwd, directory));
    if (directories.includes('tests')) {
      for (const name of [ 'package.json', 'yarn.lock', 'schema.idea' ]) {
        result[name] = createHash('sha256')
          .update(await fs.readFile(path.join(config.cwd, name)))
          .digest('hex');
      }
    }
    return result;
  }

  //capture source and build hashes before running so mid-campaign edits
  // cannot pass
  receipt.source = await fingerprints([
    'plugins',
    '.fixtures',
    'config',
    'tests'
  ]);
  receipt.build = await fingerprints([ '.build/server', '.build/public' ]);
  //record one observable proof assertion and its diagnostic detail
  const check = (name: string, hasPassed: boolean, detail?: unknown) => {
    receipt.checks.push({ name, passed: hasPassed, detail });
    if (!hasPassed) receipt.failures.push(name);
    console.log(`${hasPassed ? 'PASS' : 'FAIL'} ${name}`);
  };
  try {
    //use a fresh private session seed while retaining all other accepted
    // configuration
    const result = await proveConfig(
      {
        ...config,
        session: { ...config.session, seed: randomBytes(32).toString('hex') },
        database: { ...config.database, adapter: 'pglite', directory }
      },
      check
    );
    Object.assign(receipt, result);
  } catch (error) {
    receipt.failures.push((error as Error).message);
  } finally {
    //compare the final source hashes with the same inputs captured before
    // testing
    const after = await fingerprints([
      'plugins',
      '.fixtures',
      'config',
      'tests'
    ]);
    receipt.sourcesChangedDuringRun = Object.keys({
      ...receipt.source,
      ...after
    }).filter((file) => receipt.source[file] !== after[file]);
    if (receipt.sourcesChangedDuringRun.length)
      receipt.failures.push('Source changed during proof; rerun required');

    //built assets must also remain unchanged throughout the campaign
    const buildAfter = await fingerprints([ '.build/server', '.build/public' ]);
    receipt.buildChangedDuringRun = Object.keys({
      ...receipt.build,
      ...buildAfter
    }).filter((file) => receipt.build[file] !== buildAfter[file]);
    if (receipt.buildChangedDuringRun.length)
      receipt.failures.push('Build changed during proof; rerun required');
    receipt.finished = new Date().toISOString();
    receipt.status = receipt.failures.length ? 'failed' : 'passed';

    //remove only this owned database after the campaign closes its runtime
    await fs.rm(directory, { recursive: true, force: true });
    receipt.cleanup =
      'Owned HTTP listeners, Chrome and PGlite connections closed. Owned database removed; no production database accessed.';
    const versions = JSON.parse(
      await fs.readFile(path.join(config.cwd, 'package.json'), 'utf8')
    );
    receipt.dependencies = versions.dependencies;

    //write dated evidence and the latest pointer with any failure details
    await fs.mkdir(path.join(config.cwd, 'tests/evidence/receipts'), {
      recursive: true
    });
    await fs.writeFile(
      path.join(config.cwd, 'tests/evidence/receipts', `config-${id}.json`),
      JSON.stringify(receipt, null, 2) + '\n'
    );
    await fs.writeFile(
      path.join(config.cwd, 'tests/evidence/receipts', 'config-latest.json'),
      JSON.stringify(receipt, null, 2) + '\n'
    );
    console.log(
      JSON.stringify({
        status: receipt.status,
        checks: receipt.checks.length,
        failures: receipt.failures,
        receipt: `tests/evidence/receipts/config-${id}.json`
      })
    );
  }

  if (receipt.failures.length) throw new Error(receipt.failures.join('; '));
};
