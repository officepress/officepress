//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../../plugins/app/types.js';
import type { Identity } from '../../plugins/auth/types.js';
import { Actions } from './domain.js';

/**
 * Register the fixture actions plugin services, guarded listeners and lazy
 * handlers.
 */
export default function registerFixtureActionsPlugin(
  server: HttpServer<Config>
) {
  //check whether the dependencies or provider required by this owner are
  // available
  function canRegisterFixtureActions(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const identity = ctx.plugin<Identity>('identity');
    return Boolean(
      identity &&
      ctx.plugin<Engine>('database') &&
      (!shouldCheckRuntimeReadiness ||
        (identity.ready() && ctx.listeners['shell-item-detail']?.size))
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    ({ ctx }) => {
      if (!canRegisterFixtureActions(ctx)) return;
      ctx.register(
        'actions',
        new Actions(
          ctx.plugin<Engine>('database'),
          ctx.config('officepress').appId
        )
      );
    },
    -400
  );
  //--------------------------------------------------------------------//
  // Reusable event registration

  //runtime checks prevent partially configured features from exposing
  // events
  server.on(
    'listen',
    ({ ctx }) => {
      if (!canRegisterFixtureActions(ctx, true) || !ctx.plugin('actions'))
        return;
      ctx.on(
        'officepress-actions-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on('officepress-actions-read', () => import('./events/read.js'));
      ctx.on('officepress-actions-rename', () => import('./events/rename.js'));
      ctx.on('officepress-actions-undo', () => import('./events/undo.js'));
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (
      !canRegisterFixtureActions(ctx, true) ||
      !ctx.plugin('actions') ||
      !ctx.listeners['officepress-actions-read']?.size
    )
      return;
    ctx.get('/api/item', () => import('./pages/read.js'));
    ctx.post('/api/item', () => import('./pages/rename.js'));
    ctx.post('/api/item/undo', () => import('./pages/undo.js'));
  });
};
