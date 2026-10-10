//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Identity } from '../auth/types.js';
import type { Config } from './types.js';
import { createAppData } from './purge.js';
import * as view from './view.js';

/**
 * Register shared rendering and app-owned notifications. Stackpress invokes
 * this entry point once; restarting applies activation changes.
 */
export default function registerAppPlugin(server: HttpServer<Config>) {
  //config checks declared providers; listen/route also check live identity
  // and generated notice listeners, which do not exist during config yet
  function canRegisterNotifications(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const notifications = ctx.config('officepress').notifications;
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');

    //--------------------------------------------------------------------//
    // Supported feed configuration

    //accept exactly the three supported categories before exposing a feed
    // that the shell assumes has all, mentions and agent tabs
    const hasSupportedCategories =
      Array.isArray(notifications?.categories) &&
      notifications.categories.length === 3 &&
      new Set(notifications.categories).size === 3 &&
      notifications.categories.every((category) =>
        [ 'all', 'mentions', 'agent' ].includes(category)
      );

    //disabled or incomplete providers register no notification capability
    return Boolean(
      notifications?.enabled === true &&
      notifications.adapter === 'local' &&
      hasSupportedCategories &&
      identity &&
      database &&
      (!shouldCheckRuntimeReadiness ||
        (identity.ready() && ctx.listeners['shell-notice-detail']?.size))
    );
  }

  //--------------------------------------------------------------------//
  // Build and shared rendering

  //keep the build handler lazy so tooling can discover its own chunk
  server.on('build', () => import('./events/build.js'));
  server.on('config', ({ ctx }) => {
    //shared views and app-data ownership remain available without a feed
    view.configureViews(ctx);
    ctx.register('app-data', createAppData(ctx));
  });

  //--------------------------------------------------------------------//
  // Notification provider

  //-400 runs after store/schema setup and identity's -300 config handler
  server.on(
    'config',
    async ({ ctx }) => {
      if (!canRegisterNotifications(ctx)) return;

      //a configured client is insufficient if its notice model was omitted
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.shellNotice?.listen !== 'function'
      )
        return;

      //dependent shell code discovers availability through this provider
      ctx.register('notifications', { available: true });
    },
    -400
  );

  //--------------------------------------------------------------------//
  // Request and reusable notification events

  //initialize rendering for every request, even when notifications are off
  server.on('listen', ({ ctx }) => {
    ctx.on('request', () => import('./events/request.js'));
  });

  //the generated model and identity listeners must exist before feed events
  server.on(
    'listen',
    ({ ctx }) => {
      if (!canRegisterNotifications(ctx, true)) return;
      if (!ctx.plugin('notifications')) return;

      //events own feed access and mutations for web/API/other callers
      ctx.on(
        'officepress-notifications-search',
        () => import('./events/notifications/search.js')
      );
      ctx.on(
        'officepress-notifications-read',
        () => import('./events/notifications/read.js')
      );
    },
    -400
  );

  //--------------------------------------------------------------------//
  // HTTP adapters

  server.on('route', ({ ctx }) => {
    //fail closed if runtime readiness or provider registration is missing
    if (!canRegisterNotifications(ctx, true)) return;
    if (!ctx.plugin('notifications')) return;

    //pages translate HTTP requests to the reusable events above
    ctx.get(
      '/api/notifications',
      () => import('./pages/notifications/search.js')
    );
    ctx.post(
      '/api/notifications/read',
      () => import('./pages/notifications/read.js')
    );
  });
};
