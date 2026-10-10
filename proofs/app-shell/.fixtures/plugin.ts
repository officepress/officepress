//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { ShellPopulate } from '../config/fixtures.js';
import type { Config } from '../plugins/app/types.js';
import { seedShell } from '../plugins/settings/shell/fixtures.js';

/**
 * Register the fixture actions plugin services, guarded listeners and lazy
 * handlers.
 */
export default function registerFixturesPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // Reusable event registration

  //runtime checks prevent partially configured features from exposing
  // events
  server.on('listen', ({ ctx }) => {
    if (
      process.env.OFFICEPRESS_DISPOSABLE_PROOF !== '1' ||
      ctx.config('env') !== 'development'
    )
      return;
    ctx.on('proof-shell-populate', async ({ req, res }) => {
      await seedShell(ctx, req.data<ShellPopulate>());
      res.statusCode(200);
    });
  });
};
