//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import { readPreferences } from './storage.js';

/**
 * Register account preferences only with live identity and profile storage.
 */
export default function registerPreferencesPlugin(
  server: HttpServer<Config>
) {
  //providers may be configured before generated profile listeners exist
  server.on(
    'config',
    ({ ctx }) => {
      const database = ctx.plugin<Engine>('database');
      const identity = ctx.plugin<Identity>('identity');
      if (!database || !identity || !ctx.plugin('client')) return;
      ctx.register('preferences', {
        ready: () => identity.ready(),
        read: (profileId: string) => readPreferences(database, profileId)
      });
    },
    -400
  );

  //repeat runtime dependency checks independently in each lifecycle phase
  server.on(
    'listen',
    ({ ctx }) => {
      if (
        !ctx.plugin<Identity>('identity')?.ready() ||
        !ctx.plugin('database') ||
        !ctx.plugin('preferences')
      )
        return;
      ctx.on(
        'officepress-preferences-read',
        () => import('./events/read.js')
      );
      ctx.on(
        'officepress-preferences-update',
        () => import('./events/update.js')
      );
    },
    -400
  );
  server.on('route', ({ ctx }) => {
    if (
      !ctx.plugin<Identity>('identity')?.ready() ||
      !ctx.plugin('database') ||
      !ctx.plugin('preferences')
    )
      return;
    ctx.get('/api/v1/user-preference/me', () => import('./pages/read.js'));
    ctx.put('/api/v1/user-preference/me', () => import('./pages/update.js'));
  });
};
