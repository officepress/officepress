//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';
import type { ComponentNavigation } from '../settings/shell/registry.js';
import { createTemplates } from './domain.js';

/**
 * Register versioned message-template operations, navigation and views after
 * identity, storage and schema checks.
 */
export default function registerTemplatesPlugin(server: HttpServer<Config>) {
  //check template activation, identity, storage and shell navigation
  // runtime phases also require component-template-detail listeners
  function canRegisterTemplates(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const config = ctx.config('officepress');
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    const navigation = ctx.plugin<ComponentNavigation>('component-navigation');
    return !(
      config.features?.templates === false ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      !navigation ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['component-template-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const config = ctx.config('officepress');
      const database = ctx.plugin<Engine>('database');
      if (!canRegisterTemplates(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.componentTemplate?.listen !==
          'function'
      )
        return;
      const templates = createTemplates(database, config.appId);
      ctx.register('templates', templates);
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
      const navigation = ctx.plugin<ComponentNavigation>(
        'component-navigation'
      );
      if (!canRegisterTemplates(ctx, true)) return;
      if (!ctx.plugin('templates')) return;
      ctx.on(
        'officepress-templates-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on('officepress-templates-read', () => import('./events/read.js'));
      ctx.on(
        'officepress-templates-update',
        () => import('./events/update.js')
      );

      navigation.add({
        id: 'templates',
        view: '@/plugins/templates/views/index',
        label: 'Messages',
        href: '/message/search',
        pages: [
          { path: '/message/search', title: 'Messages' },
          { path: '/message/detail/:id', title: 'Message Details' },
          { path: '/message/update/:id', title: 'Update Message' }
        ],
        icon: 'mail'
      });
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterTemplates(ctx, true)) return;
    if (!ctx.plugin('templates')) return;
    ctx.get('/message-templates', () => import('./pages/legacy.js'));
    ctx.get('/api/templates', () => import('./pages/read.js'));
    for (const action of [ 'save', 'publish', 'preview', 'send' ] as const)
      ctx.post('/api/templates/' + action, () => import('./pages/update.js'));
  });
};
