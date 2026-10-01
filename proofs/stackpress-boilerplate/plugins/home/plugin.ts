import type { HttpServer } from '@stackpress/ingest';
import type { Config } from '../app/types.js';
export default function plugin(server: HttpServer<Config>) {
  server.on('route', ({ ctx }) => {
    if (!ctx.plugin('reactus')) return;
    ctx.get('/', '@/plugins/home/views/index');
  });
}
