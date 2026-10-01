import type { HttpServer } from '@stackpress/ingest';
import type { Config } from '../app/types.js';
import connect from './connect.js';
export default function plugin(server: HttpServer<Config>) {
  server.on('config', ({ ctx }) => {
    const connection = connect(ctx.config('database'));
    ctx.register('database', connection.engine);
    ctx.register('database-lifecycle', { close: connection.close });
  });
}
