//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';
import type { ComponentNavigation } from '../settings/shell/registry.js';
import { createForms } from './domain.js';

/**
 * Register the Form Builder service, navigation, lazy operations and views
 * after identity, storage and schema checks.
 */
export default function registerFormsPlugin(server: HttpServer<Config>) {
  //check the enabled forms feature, identity, storage and shell navigation
  // runtime phases also require component-form-detail listeners
  function canRegisterForms(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    const navigation = ctx.plugin<ComponentNavigation>('component-navigation');
    return !(
      !ctx.config('officepress').features?.forms ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      !navigation ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['component-form-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const database = ctx.plugin<Engine>('database');
      if (!canRegisterForms(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.componentForm?.listen !== 'function'
      )
        return;
      const forms = createForms(database, ctx.config('officepress').appId);
      ctx.register('forms', forms);
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
      if (!canRegisterForms(ctx, true)) return;
      if (!ctx.plugin('forms')) return;
      ctx.on(
        'officepress-forms-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on('officepress-forms-read', () => import('./events/read.js'));
      ctx.on(
        'officepress-forms-load-fill',
        () => import('./events/load-fill.js')
      );
      ctx.on('officepress-forms-respond', () => import('./events/respond.js'));
      ctx.on('officepress-forms-update', () => import('./events/update.js'));

      navigation.add({
        id: 'forms',
        view: '@/plugins/forms/views/index',
        label: 'Forms',
        href: '/form/search',
        pages: [
          { path: '/form/search', title: 'Forms' },
          { path: '/form/update/:id', title: 'Update Form' }
        ],
        icon: 'file-text'
      });
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterForms(ctx, true)) return;
    if (!ctx.plugin('forms')) return;
    ctx.get('/forms', () => import('./pages/legacy.js'));
    ctx.get('/api/forms', () => import('./pages/read.js'));
    for (const action of [
      'create',
      'save',
      'publish',
      'share',
      'revoke',
      'close'
    ])
      ctx.post(`/api/forms/${action}`, () => import('./pages/update.js'));
    ctx.get('/api/forms/fill', () => import('./pages/load-fill.js'));
    ctx.post('/api/forms/respond', () => import('./pages/respond.js'));
    ctx.get('/forms/fill', () => import('./pages/fill.js'));
    ctx.view.get('/forms/fill', '@/plugins/forms/views/fill');
  });
};
