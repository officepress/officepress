//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { ComponentPopulate } from '../config/fixtures.js';
import type { Config } from '../plugins/app/types.js';
import { seedIdentity } from '../plugins/auth/fixtures.js';
import { seedComponents } from './seed-components.js';

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
    ctx.on('proof-components-populate', async ({ req, res }) => {
      const data = req.data<ComponentPopulate>();
      const profiles = await seedIdentity(ctx, true, data.accounts);
      await seedComponents(ctx, profiles.admin, data.components);
      res.statusCode(200);
    });
  });
};
