//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { Family } from './domain.js';
import { readTheme } from './domain.js';

/**
 * Register persisted theme operations and their lazy routes after identity
 * and generated theme storage are available.
 */
export default function registerThemePlugin(server: HttpServer<Config>) {
  //check identity and persisted theme storage runtime phases also require
  // shell-theme-detail listeners
  function canRegisterTheme(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    return !(
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['shell-theme-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const database = ctx.plugin<Engine>('database');
      if (!canRegisterTheme(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.shellTheme?.listen !== 'function'
      )
        return;
      const officepressConfig = ctx.config('officepress');
      ctx.register('theme', {
        read: () =>
          readTheme(
            database,
            officepressConfig.appId,
            officepressConfig.family as Family
          )
      });
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
      if (!canRegisterTheme(ctx, true) || !ctx.plugin('theme')) return;
      ctx.on('officepress-theme-read', () => import('./events/read.js'));
      ctx.on('officepress-theme-update', () => import('./events/update.js'));
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterTheme(ctx, true)) return;
    if (!ctx.plugin('theme')) return;
    ctx.get('/api/theme', () => import('./pages/read.js'));
    ctx.post('/api/theme', () => import('./pages/update.js'));
  });
};
