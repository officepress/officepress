//node
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { ProofReceipt } from '../receipt.js';
import { config } from '../../config/develop.js';
import { seedIdentity } from '../../plugins/auth/fixtures.js';
import { seedShell } from '../../plugins/settings/shell/fixtures.js';
import { bootstrap } from '../bootstrap.js';

/**
 * Run service, identity and hydrated shell contracts against an owned
 * database, retaining model/browser outcomes and final source fingerprints.
 */
export async function runProof(contracts: {
  sharedEvents: typeof import('../../plugins/app/tests/events.js').eventContracts,
  proveIdentity: typeof import('../../plugins/auth/tests/contract.js').proveIdentity,
  aboutContracts: typeof import('../../plugins/settings/about/tests/contract.js').aboutContracts,
  themeContracts: typeof import('../../plugins/settings/theme/tests/contract.js').themeContracts,
  actionContracts: typeof import('../../.fixtures/actions/tests/contract.js').actionContracts,
  proveBrowser: typeof import('../../plugins/settings/shell/tests/browser.js').proveBrowser
}) {
  const {
    proveIdentity,
    aboutContracts,
    themeContracts,
    actionContracts,
    proveBrowser,
    sharedEvents
  } = contracts;

  //allocate a fresh isolated database for the main app-shell campaign
  const id = new Date().toISOString().replace(/[:.]/g, '-');
  const directory = path.join(
    path.dirname(config.database.directory),
    'p01-' + id
  );
  const receipt: ProofReceipt & {
    models: unknown[],
    failures: (string | undefined)[],
    source: Record<string, string>,
    limitations: string[]
  } = {
    id,
    started: new Date().toISOString(),
    command: 'yarn test',
    node: process.version,
    checks: [],
    limitations: [],
    failures: [],
    models: [],
    source: {},
    database: path.relative(config.cwd, directory)
  };
  //record one observable proof assertion and its diagnostic detail
  const check = (name: string, detail?: unknown) => {
    receipt.checks.push({ name, passed: true, detail });
    console.log('PASS ' + name);
  };
  const server = await bootstrap({
    ...config,
    database: { ...config.database, adapter: 'pglite', directory }
  });
  let listener: ReturnType<typeof server.create> | undefined;
  try {
    //require an empty database before installing the generated schema
    const database = server.plugin<Engine>('database');
    assert.equal(
      (
        await database.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'"
        )
      ).length,
      0
    );
    const client = await server.plugin<ClientPlugin>('client')();
    await client.scripts.install(database);
    check('Generated schema installed only into a new empty proof database');

    //run direct service contracts before exercising HTTP and browser
    // adapters
    for (const name of aboutContracts()) check(name);
    for (const name of await themeContracts(database)) check(name);
    for (const name of await actionContracts(database)) check(name);
    listener = server.create();

    //bind the devmetrics-assigned port after fixture setup is complete
    await new Promise<void>((resolve, reject) => {
      listener!.once('error', reject);
      listener!.listen(Number(process.env.PORT || 0), '127.0.0.1', resolve);
    });
    const address = listener.address() as { port: number };
    const origin = `http://127.0.0.1:${address.port}`;
    if (!process.argv.includes('--ui')) {
      const identity = await proveIdentity(origin, server, (identityCheck) => {
        if (!identityCheck.passed)
          throw new Error('Identity check failed: ' + identityCheck.name);
        check(identityCheck.name);
      });
      receipt.limitations.push(...identity.limitations);
    } else
      receipt.limitations.push(
        'UI development run: identity checks omitted; not full P-01 acceptance.'
      );
    await seedShell(server);
    check('Single-company multiuser fixture records installed');
    const profiles = await seedIdentity(server, false);
    for (const name of await sharedEvents(server, profiles)) check(name);
    if (process.env.OFFICEPRESS_LIVE_TESTS === '1') {
      const result = await proveBrowser(origin, config.cwd, id, check);
      receipt.models = result.models;
      receipt.liveRelease = result.liveRelease;
      receipt.browser = result.browser;
      receipt.screenshots = result.screenshots;
      receipt.limitations.push(...result.limitations);
    } else
      receipt.limitations.push(
        'Live browser/model checks require OFFICEPRESS_LIVE_TESTS=1.'
      );
    receipt.status = 'passed-with-limitations';
  } catch (caughtError) {
    receipt.status = 'failed';
    receipt.failures.push((caughtError as Error).stack);
    process.exitCode = 1;
    console.error((caughtError as Error).message);
  } finally {
    const engine =
      server.plugin<import('../../plugins/app/types.js').ViewPlugin>('reactus');
    if (engine) await (await engine.dev())?.close();
    listener?.closeAllConnections();

    //close owned resources before removing scratch data and writing
    // fingerprints
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    await server
      .plugin<{ close: () => Promise<void> }>('database-lifecycle')
      ?.close();
    await fs.rm(directory, { recursive: true, force: true });
    //visit maintained source files recursively for the proof input
    // fingerprint
    async function walk(directory: string) {
      for (const entry of await fs.readdir(directory, {
        withFileTypes: true
      })) {
        const sourcePath = path.join(directory, entry.name);
        if (entry.isDirectory() && entry.name !== 'evidence')
          await walk(sourcePath);
        else if (entry.isDirectory()) continue;
        else if (/\.(ts|tsx|idea|css|js)$/.test(sourcePath))
          receipt.source[path.relative(config.cwd, sourcePath)] = createHash(
            'sha256'
          )
            .update(await fs.readFile(sourcePath))
            .digest('hex');
      }
    }
    for (const directory of [
      'plugins',
      '.fixtures',
      'config',
      'public',
      'tests'
    ])
      await walk(path.join(config.cwd, directory));
    for (const sourceFile of [ 'package.json', 'yarn.lock', 'schema.idea' ])
      receipt.source[sourceFile] = createHash('sha256')
        .update(await fs.readFile(path.join(config.cwd, sourceFile)))
        .digest('hex');
    receipt.finished = new Date().toISOString();
    receipt.cleanup =
      'Temporary HTTP server and database connection closed; run-owned database removed.';
    await fs.mkdir(path.join(config.cwd, 'tests/evidence/receipts'), {
      recursive: true
    });
    await fs.writeFile(
      path.join(config.cwd, 'tests/evidence/receipts', id + '.json'),
      JSON.stringify(receipt, null, 2) + '\n'
    );
    await fs.writeFile(
      path.join(config.cwd, 'tests/evidence/receipts/latest.json'),
      JSON.stringify(receipt, null, 2) + '\n'
    );
    console.log(
      JSON.stringify({
        status: receipt.status,
        checks: receipt.checks.length,
        receipt: `tests/evidence/receipts/${id}.json`
      })
    );
  }

  if (process.exitCode) throw new Error('Proof failed; inspect its receipt');
};
