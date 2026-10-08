import type { HttpServer } from '@stackpress/ingest';
import { ActionStore } from './store.js';
export default function plugin(server: HttpServer) {
  server.on('config', ({ ctx }) => {
    if (!ctx.config<string>('proof', 'stateFile')) return;
    ctx.register('agent-domain', new ActionStore(ctx.config<string>('proof', 'stateFile')));
  }, -100);
}
