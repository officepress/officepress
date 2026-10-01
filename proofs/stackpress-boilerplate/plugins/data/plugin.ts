import type { HttpServer } from '@stackpress/ingest';
import sql from 'stackpress-sql/plugin';
import type { Config } from '../app/types.js';

// This integration owns the required services for the framework SQL plugin.
// Generation and runtime SQL listeners both depend on the schema client service.
export default function plugin(server: HttpServer<Config>) {
  server.on('config', ({ ctx }) => {
    if (!ctx.plugin('database') || !ctx.plugin('client')) return;
    // Published plugin signature is transport-generic; it only uses registry/events.
    sql(ctx as unknown as Parameters<typeof sql>[0]);
  }, -100);
}
