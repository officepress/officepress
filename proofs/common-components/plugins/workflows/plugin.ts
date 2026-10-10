//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';
import type { FormsService } from '../forms/types.js';
import type { ComponentNavigation } from '../settings/shell/registry.js';
import { createWorkflows } from './server.js';

/**
 * Register workflow operations, navigation and views after identity, storage
 * and generated workflow models are available.
 */
export default function registerWorkflowsPlugin(server: HttpServer<Config>) {
  //check workflow activation, identity and storage runtime phases also
  // require component-workflow-detail listeners
  function canRegisterWorkflows(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    const config = ctx.config('officepress') as Config['officepress'] & {
      features?: { workflows?: boolean }
    };
    return !(
      config.features?.workflows === false ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['component-workflow-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const database = ctx.plugin<Engine>('database');
      const config = ctx.config('officepress') as Config['officepress'] & {
        features?: { workflows?: boolean }
      };
      if (!canRegisterWorkflows(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.componentWorkflow?.listen !==
          'function'
      )
        return;
      const service = createWorkflows(database, config.appId, undefined, {
        forms: () => ctx.plugin<FormsService>('forms'),
        dispatch: async (transition) => {
          //await integrations after commit, preserving the existing failure
          // propagation
          await ctx.resolve('officepress-workflow-transition', { transition });
        }
      });
      ctx.register('workflows', service);
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
      if (!canRegisterWorkflows(ctx, true)) return;
      if (!ctx.plugin('workflows')) return;
      ctx.on(
        'officepress-workflows-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on('officepress-workflows-read', () => import('./events/read.js'));
      ctx.on(
        'officepress-workflows-update',
        () => import('./events/update.js')
      );
      ctx.on('officepress-workflows-forms', () => import('./events/forms.js'));

      ctx.plugin<ComponentNavigation>('component-navigation')?.add({
        id: 'workflows',
        view: '@/plugins/workflows/views/index',
        label: 'Workflows',
        href: '/workflow/search',
        pages: [
          { path: '/workflow/search', title: 'Workflows' },
          { path: '/workflow/create', title: 'Create Workflow' },
          { path: '/workflow/detail/:id', title: 'Workflow Details' },
          { path: '/workflow/update/:id', title: 'Update Workflow' }
        ],
        icon: 'columns-3'
      });
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterWorkflows(ctx, true)) return;
    if (!ctx.plugin('workflows')) return;
    ctx.get('/workflows', () => import('./pages/legacy.js'));
    ctx.get('/api/workflows/forms', () => import('./pages/forms.js'));
    ctx.get('/api/workflows', () => import('./pages/read.js'));
    ctx.post('/api/workflows', () => import('./pages/update.js'));
  });
};
