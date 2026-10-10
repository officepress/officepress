//node
import { createHash, randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { AppData, ViewPlugin } from '../../plugins/app/types.js';
import { config } from '../../config/production.js';
import { bootstrap } from '../bootstrap.js';

/**
 * Run the identity boundary against a fresh database and a chosen route base.
 */
export async function runProof(
  proveIdentity: typeof import('../../plugins/auth/tests/contract.js').proveIdentity,
  authBase = '/access.v1/team'
) {
  //allocate one disposable database for this authentication base-path
  // variant
  const id = 'identity-' + randomUUID();
  const directory = path.join(path.dirname(config.database.directory), id);
  const checks: string[] = [];
  const failures: string[] = [];
  const source: Record<string, string> = {};
  let limitations: string[] = [];
  const started = new Date().toISOString();
  const server = await bootstrap({
    ...config,
    auth: { ...config.auth, base: authBase },
    database: { ...config.database, adapter: 'pglite', directory }
  });
  const alive = setInterval(() => {}, 1000);
  let listener: ReturnType<typeof server.create> | undefined;
  //record only checks whose assertions completed successfully
  function check(name: string) {
    checks.push(name);
    console.log('PASS ' + name);
  }

  try {
    //require an empty database before installing schema for the variant
    const database = server.plugin<Engine>('database');
    assert.equal(
      (
        await database.query(
          "SELECT tablename FROM pg_tables WHERE schemaname='public'"
        )
      ).length,
      0
    );
    await (
      await server.plugin<ClientPlugin>('client')()
    ).scripts.install(database);
    check('Identity variant installs only into its new empty proof database');

    //losing one generated data provider must disable the app's destructive
    // action. purge requires both an authenticated owner and available data
    // providers
    const appData = server.plugin<AppData>('app-data');
    assert.ok(appData.ready());
    await assert.rejects(() => appData.purge(''), /authenticated owner/);
    const listeners = server.listeners['shell-item-detail']!;
    //temporarily remove generated listeners and restore their exact prior
    // bindings
    const saved = [ ...listeners ];
    try {
      listeners.clear();
      assert.equal(appData.ready(), false);
      await assert.rejects(() => appData.purge('untrusted'), /unavailable/);
    } finally {
      for (const action of saved) listeners.add(action);
    }
    assert.ok(appData.ready());
    check(
      'App-owned purge rejects missing owners and unavailable data providers'
    );

    //bind the assigned loopback port before exercising real authentication
    // handlers
    listener = server.create();
    await new Promise<void>((resolve, reject) => {
      listener!.once('error', reject);
      listener!.listen(Number(process.env.PORT || 0), '127.0.0.1', resolve);
    });
    const origin = `http://127.0.0.1:${(listener.address() as { port: number }).port}`;
    //forward every handler observation into the enclosing proof receipt
    const result = await proveIdentity(
      origin,
      server,
      ({ name, passed: hasPassed }) => {
        assert.ok(hasPassed, name);
        check(name);
      }
    );
    limitations = result.limitations;
  } catch (error) {
    failures.push((error as Error).stack || String(error));
    throw error;
  } finally {
    //stop owned schedulers, renderer and HTTP connections before closing
    // the database
    server.plugin<{ stop(): void }>('automations')?.stop();
    const renderer = server.plugin<ViewPlugin>('reactus');
    if (renderer && !renderer.production) await (await renderer.dev())?.close();
    listener?.closeAllConnections();
    if (listener?.listening)
      await new Promise<void>((resolve) => listener!.close(() => resolve()));
    await server
      .plugin<{ close(): Promise<void> }>('database-lifecycle')
      ?.close();
    //clear the keepalive and remove only this variant database after
    // closure
    clearInterval(alive);
    await fs.rm(directory, { recursive: true, force: true });
    //fingerprint maintained sources while excluding generated evidence
    async function fingerprint(folder: string) {
      for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
        const file = path.join(folder, entry.name);
        if (entry.isDirectory()) {
          if (entry.name !== 'evidence') await fingerprint(file);
        } else {
          source[path.relative(config.cwd, file)] = createHash('sha256')
            .update(await fs.readFile(file))
            .digest('hex');
        }
      }
    }
    //hash maintained identity inputs while excluding receipt output
    for (const folder of [ 'plugins/auth', 'plugins/app', 'config', 'tests' ])
      await fingerprint(path.join(config.cwd, folder));
    const receipt = {
      id,
      started,
      finished: new Date().toISOString(),
      command: 'yarn test',
      node: process.version,
      authBase,
      status: failures.length ? 'failed' : 'passed-with-limitations',
      checks,
      failures,
      limitations,
      source,
      database: path.relative(config.cwd, directory),
      cleanup:
        'Owned HTTP listener and connection closed; run-owned database removed.'
    };
    //write both a dated record and the appropriate variant latest pointer
    const receipts = path.join(config.cwd, 'tests/evidence/receipts');
    await fs.mkdir(receipts, { recursive: true });
    const variant = authBase === '/auth' ? 'default' : 'custom-base';
    for (const name of [ id, `identity-${variant}-latest` ])
      await fs.writeFile(
        path.join(receipts, name + '.json'),
        JSON.stringify(receipt, null, 2) + '\n'
      );
    console.log(
      JSON.stringify({
        status: receipt.status,
        checks: checks.length,
        authBase
      })
    );
  }
};
