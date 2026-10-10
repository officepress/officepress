//node
import { createHash, randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { ViewPlugin } from '../../plugins/app/types.js';
import { seedComponents } from '../../.fixtures/seed-components.js';
import { config } from '../../config/develop.js';
import { seedIdentity } from '../../plugins/auth/fixtures.js';
import { bootstrap } from '../bootstrap.js';

/**
 * Prove source-rendered feature hydration within the existing managed test
 * process.
 */
export async function runProof(
  browserContracts: typeof import('../../plugins/settings/shell/tests/browser.js').browserContracts
) {
  const port = Number(process.env.PORT);
  assert.ok(
    Number.isInteger(port) && port >= 3000 && port <= 3020,
    'Development listener tests require devmetrics and PORT={port}'
  );
  const id =
    'develop-' +
    new Date().toISOString().replace(/[:.]/g, '-') +
    '-' +
    randomUUID();
  const parent = path.join(config.cwd, '.build', 'database');
  await fs.mkdir(parent, { recursive: true });
  const directory = await fs.mkdtemp(path.join(parent, id + '-'));
  const receipt = {
    id,
    started: new Date().toISOString(),
    command: 'yarn test',
    node: process.version,
    mode: 'development',
    adapter: 'pglite',
    port,
    database: path.relative(config.cwd, directory),
    checks: [] as string[],
    screenshots: [] as string[],
    failures: [] as string[],
    source: {} as Record<string, string>,
    status: 'running',
    finished: '',
    cleanup: '',
    limitations: [
      'Source rendering and local PGlite only; no PostgreSQL or deployment acceptance.',
      'This campaign uses seeded local records and makes no model or SMTP calls.'
    ]
  };
  let server: Awaited<ReturnType<typeof bootstrap>> | undefined;
  let listener: ReturnType<NonNullable<typeof server>['create']> | undefined;
  let failure: unknown;
  const alive = setInterval(() => {}, 1000);
  //record one observable proof assertion and its diagnostic detail
  function check(name: string) {
    receipt.checks.push(name);
    console.log('PASS ' + name);
  }
  try {
    server = await bootstrap({
      ...config,
      database: { ...config.database, adapter: 'pglite', directory }
    });
    const database = server.plugin<Engine>('database');
    assert.equal(
      (
        await database.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'"
        )
      ).length,
      0,
      'Development proof database must be empty before schema install'
    );
    await (
      await server.plugin<ClientPlugin>('client')()
    ).scripts.install(database);
    check(
      'Development schema installed only into a fresh checked-empty run-owned PGlite database'
    );
    const profiles = await seedIdentity(server, false);
    await seedComponents(server, profiles.admin);
    check(
      'Development feature records use the shared identity and component fixtures'
    );
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once('error', reject);
      listener!.listen(port, '127.0.0.1', resolve);
    });
    const browser = await browserContracts(
      `http://127.0.0.1:${port}`,
      config.cwd,
      id,
      'Development'
    );
    receipt.screenshots = browser.screenshots;
    for (const name of browser.checks) check(name);
    receipt.status = 'passed-with-limitations';
  } catch (error) {
    failure = error;
    receipt.failures.push(
      error instanceof Error ? error.stack || error.message : String(error)
    );
    receipt.status = 'failed';
  } finally {
    //release this run’s owned runtime, browser and disposable state
    async function cleanup(
      label: string,
      operation: () => Promise<unknown> | unknown
    ) {
      try {
        await operation();
      } catch (error) {
        receipt.failures.push(`${label}: ${String(error)}`);
        receipt.status = 'failed';
      }
    }
    await cleanup('Automation worker shutdown', () =>
      server?.plugin<{ stop(): void }>('automations')?.stop()
    );
    await cleanup('Development renderer shutdown', async () => {
      const renderer = server?.plugin<ViewPlugin>('reactus');
      if (renderer && !renderer.production)
        await (await renderer.dev())?.close();
    });
    await cleanup('HTTP listener shutdown', async () => {
      listener?.closeAllConnections();
      if (listener?.listening)
        await new Promise<void>((resolve) => listener!.close(() => resolve()));
    });
    const errorsBeforeDatabaseClose = receipt.failures.length;
    await cleanup('Database shutdown', () =>
      server?.plugin<{ close(): Promise<void> }>('database-lifecycle')?.close()
    );
    clearInterval(alive);
    //retain scratch data if its database could not close; never remove an
    // open store
    if (receipt.failures.length === errorsBeforeDatabaseClose) {
      await cleanup('Run-owned database removal', () =>
        fs.rm(directory, { recursive: true, force: true })
      );
    }
    //hash maintained source inputs so verification receipts can identify
    // the version they exercised
    async function fingerprint(folder: string) {
      for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
        const file = path.join(folder, entry.name);
        if (entry.isDirectory()) {
          if (entry.name !== 'evidence') await fingerprint(file);
        } else
          receipt.source[path.relative(config.cwd, file)] = createHash('sha256')
            .update(await fs.readFile(file))
            .digest('hex');
      }
    }
    for (const folder of [ 'plugins', '.fixtures', 'config', 'public', 'tests' ])
      await fingerprint(path.join(config.cwd, folder));
    for (const filename of [ 'package.json', 'yarn.lock', 'schema.idea' ])
      receipt.source[filename] = createHash('sha256')
        .update(await fs.readFile(path.join(config.cwd, filename)))
        .digest('hex');
    receipt.finished = new Date().toISOString();
    receipt.cleanup =
      receipt.status === 'failed' && receipt.failures.length > (failure ? 1 : 0)
        ? 'Inspect cleanup failures; scratch data is retained if database shutdown failed.'
        : 'Automation/Vite/HTTP/database resources closed; only the run-owned database removed.';
    const output = path.join(config.cwd, 'tests', 'evidence', 'receipts');
    await fs.mkdir(output, { recursive: true });
    await fs.writeFile(
      path.join(output, id + '.json'),
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
  if (failure) throw failure;
  if (receipt.failures.length)
    throw new Error('Development proof cleanup failed; inspect its receipt');
};
