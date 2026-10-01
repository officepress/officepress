import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type { Config } from '../app/types.js';

// Public read-only demonstration of a responsibility-owned dependent feature.
// Real app routes must add their own identity, tenant and permission contracts.
export default function plugin(server: HttpServer<Config>) {
  async function ready(ctx: HttpServer<Config>) {
    const client = ctx.plugin<ClientPlugin>('client');
    if (!ctx.plugin('database') || !client) return false;
    const generated = await client(true);
    return Boolean(generated?.model?.note && ctx.listeners['note-search']?.size);
  }
  server.on('listen', async ({ ctx }) => {
    if (!await ready(ctx)) return;
    ctx.on('notes-status', ({ res }) => { res.results({ available: true }); });
  }, -100);
  server.on('route', async ({ ctx }) => {
    if (!await ready(ctx)) return;
    ctx.get('/notes', async ({ ctx, res }) => {
      const result = await ctx.resolve('note-search', {});
      if (result.code !== 200) { res.setError(result.error || 'Search failed'); return; }
      res.fromStatusResponse(result);
    });
  });
}
