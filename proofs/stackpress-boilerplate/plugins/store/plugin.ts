//modules
import type { HttpServer } from '@stackpress/ingest';
import sql from 'stackpress-sql/plugin';

//client
import type { Config } from '../app/types.js';
import connect from './connect.js';

/**
 * Register the configured database and its close lifecycle, then guard
 * destructive fixture commands before they execute.
 */
export default function registerStorePlugin(server: HttpServer<Config>) {
  for (const event of [ 'push', 'purge', 'populate' ]) {
    server.on(event, () => import('./events/disposable.js'), 1000);
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //own connection setup and explicit shutdown for every app/test bootstrap
  server.on('config', ({ ctx }) => {
    const connection = connect(ctx.config('database'));
    ctx.register('database', connection.engine);
    ctx.register('database-lifecycle', { close: connection.close });
  });
  //--------------------------------------------------------------------//
  // Provider configuration

  //attach generated SQL operations after the client and connection exist
  server.on(
    'config',
    ({ ctx }) => {
      if (!ctx.plugin('database') || !ctx.plugin('client')) return;
      sql(ctx as unknown as Parameters<typeof sql>[0]);
    },
    -100
  );
};
