//node
import assert from 'node:assert/strict';

//modules
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { ConnectionLifecycle } from '../../plugins/store/connect.js';
import { database } from '../../config/common.js';
import { config } from '../../config/develop.js';
import { checkNotes } from '../../plugins/notes/tests/contract.js';
import { bootstrap } from '../bootstrap.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Run the entry point and report an actionable failure when verification
 * cannot complete.
 */
async function main() {
  const adapter = process.env.DATABASE_ADAPTER;
  delete process.env.DATABASE_ADAPTER;
  assert.equal(database('production').adapter, 'postgres');
  assert.equal(database('development').adapter, 'pglite');
  if (adapter) process.env.DATABASE_ADAPTER = adapter;
  const server = await bootstrap(config);
  try {
    const disabled = new Set(
      (process.env.OFFICEPRESS_DISABLED_PLUGINS || '').split(',')
    );
    const isEnabled = ![ 'store', 'stackpress-schema', 'notes' ].some((name) =>
      disabled.has(name)
    );
    await checkNotes(server, isEnabled);
    if (process.argv[2] === 'init') {
      assert.equal(
        process.env.OFFICEPRESS_DISPOSABLE_PROOF,
        '1',
        'Initialization is proof-only'
      );
      const engine = server.plugin<Engine>('database');
      const tables = await engine.query(
        "SELECT tablename FROM pg_tables WHERE schemaname = 'public'"
      );
      assert.equal(
        tables.length,
        0,
        'Only initialize a completely empty proof database'
      );
      const client = await server.plugin<ClientPlugin>('client')();
      assert.deepEqual(Object.keys(client.model), [ 'note' ]);
      await client.scripts.install(engine);
      const populated = await server.resolve('populate');
      assert.equal(populated.code, 200, JSON.stringify(populated));
      const invalid = await server.resolve('note-create', {
        id: 'invalid-note',
        title: ''
      });
      assert.notEqual(
        invalid.code,
        200,
        'Generated validation must reject an empty title'
      );
    }
    if (process.argv[2] === 'init' || process.argv[2] === 'read') {
      const found = await server.resolve<{ title: string }>('note-detail', {
        id: 'proof-note'
      });
      assert.equal(found.code, 200, JSON.stringify(found));
      assert.equal(found.results?.title, 'Persisted OfficePress proof');
    }
    console.log(
      JSON.stringify({
        check: process.argv[2],
        adapter: config.database.adapter,
        featureEnabled: isEnabled,
        passed: true
      })
    );
  } finally {
    await server.plugin<ConnectionLifecycle>('database-lifecycle')?.close();
  }
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
