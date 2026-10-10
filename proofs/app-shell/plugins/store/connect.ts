//node
import fs from 'node:fs/promises';

//modules
import { PGlite } from '@electric-sql/pglite';
import { connect as postgres } from '@stackpress/inquire-pg';
import { connect as pglite } from '@stackpress/inquire-pglite';
import pg from 'pg';

//client
import type { Config } from '../app/types.js';

//--------------------------------------------------------------------//
// Types

//store-owned Engine and explicit close callback for bootstrap cleanup
export type ConnectionLifecycle = { close: () => Promise<void> };

//--------------------------------------------------------------------//
// Entry point

/**
 * Register the configured database connection without falling back across
 * production and development engines.
 */
export default function connect(config: Config['database']) {
  if (config.adapter === 'postgres') {
    if (!config.url)
      throw new Error(
        'DATABASE_URL is required for PostgreSQL; no PGlite fallback.'
      );
    let client: pg.Client | undefined;
    const engine = postgres(async () => {
      client = new pg.Client({ connectionString: config.url });
      await client.connect();
      return client;
    });
    return {
      engine,
      close: async () => {
        await client?.end();
      }
    };
  }
  let client: PGlite | undefined;
  const engine = pglite(async () => {
    await fs.mkdir(config.directory, { recursive: true });
    client = new PGlite(config.directory);
    await client.waitReady;
    return client;
  });
  return {
    engine,
    close: async () => {
      await client?.close();
    }
  };
};
