import type { HttpServer } from '@stackpress/ingest';
import sql from 'stackpress-sql/plugin';
import type { Config } from '../app/types.js';
import connect from './connect.js';
export default function plugin(server: HttpServer<Config>) {
  server.on('config', ({ ctx }) => {
    const connection = connect(ctx.config('database'));
    ctx.register('database', connection.engine);
    ctx.register('database-lifecycle', { close: connection.close });
  });
  server.on('config', ({ ctx }) => {
    if (!ctx.plugin('database') || !ctx.plugin('client')) return;
    sql(ctx as unknown as Parameters<typeof sql>[0]);
  }, -100);
}
