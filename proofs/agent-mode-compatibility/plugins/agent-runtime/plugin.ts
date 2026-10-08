import type { HttpServer } from '@stackpress/ingest';
import { runAgent } from './openrouter.js';
export default function plugin(server: HttpServer) {
  server.on('config', ({ ctx }) => {
    if (!ctx.plugin('agent-domain') || !process.env.OPENROUTER_TEST_KEY) return;
    ctx.register('agent-runtime', runAgent);
  }, -200);
}
