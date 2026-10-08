import fs from 'node:fs';
import path from 'node:path';
import type { HttpServer } from '@stackpress/ingest';
import type { ActionStore, Caller } from '../agent-domain/store.js';
import { tools } from '../agent-domain/store.js';
import { hostPage, framePage } from './pages.js';
export default function plugin(server: HttpServer) {
  server.on('route', ({ ctx }) => {
    const domain = ctx.plugin<ActionStore>('agent-domain');
    if (!domain) return;
    const sessions = ctx.config<Record<string, Caller>>('proof', 'sessions');
    const csrf = ctx.config<string>('proof', 'csrf');
    const sdk = path.join(ctx.config<string>('cwd'), '.build/sdk/package/dist/client/host-bridge.js');
    ctx.get('/health', ({ res }) => { res.json({ ready: true, agent: Boolean(ctx.plugin('agent-runtime')) }); });
    ctx.get('/sdk.js', ({ res }) => { res.set('text/javascript', fs.readFileSync(sdk, 'utf8')); });
    ctx.get('/agent-frame', ({ res }) => { res.html(framePage()); });
    ctx.get('/', ({ res }) => { res.html(hostPage(csrf, tools)); });
    ctx.post('/api/action', ({ req, res }) => {
      const session = String(req.headers('cookie') || '').match(/(?:^|;\s*)proof_session=([^;]+)/)?.[1];
      const caller = session ? sessions[session] : undefined;
      if (!caller) { res.json({ error: 'Unauthenticated' }, 401); return; }
      if (req.headers('x-proof-csrf') !== csrf || req.headers('origin') !== ctx.config('proof', 'origin')) { res.json({ error: 'Invalid origin or CSRF' }, 403); return; }
      try {
        const result = domain.execute(caller, req.data<string>('name'), req.data<Record<string, unknown>>('input') || {}, req.data<string>('operationId'));
        res.json(result);
      } catch (error) { res.json({ error: error instanceof Error ? error.message : 'Action failed' }, 409); }
    });
  });
}
