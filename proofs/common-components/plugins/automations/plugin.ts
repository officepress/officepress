//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';
import type { MailService } from '../mail/types.js';
import type { TemplateService } from '../templates/types.js';
import type { WorkflowService } from '../workflows/types.js';
import type { AutomationService } from './types.js';
import { messageProvider } from './messages.js';
import { createAutomations } from './server.js';

/**
 * Register automation operations and the scheduler after checking workflow,
 * identity, storage and generated model dependencies.
 */
export default function registerAutomationsPlugin(server: HttpServer<Config>) {
  //check automation activation, identity, storage and workflow availability
  // runtime phases also require component-automation-detail listeners
  function canRegisterAutomations(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const config = ctx.config('officepress') as Config['officepress'] & {
      features?: { automations?: boolean }
    };
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    const workflows = ctx.plugin<WorkflowService>('workflows');
    return !(
      config.features?.automations === false ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      !workflows ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['component-automation-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      const config = ctx.config('officepress') as Config['officepress'] & {
        features?: { automations?: boolean }
      };
      const database = ctx.plugin<Engine>('database');
      const workflows = ctx.plugin<WorkflowService>('workflows');
      if (!canRegisterAutomations(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.componentAutomation?.listen !==
          'function'
      )
        return;
      const service = createAutomations(database, config.appId, workflows, {
        scheduler: false,
        ...messageProvider(
          () => ctx.plugin<TemplateService>('templates'),
          () => ctx.plugin<MailService>('mail')
        )
      });
      ctx.register('automations', service);
    },
    -400
  );
  //--------------------------------------------------------------------//
  // Reusable event registration

  //attach operations and start the scheduler only after dependency checks
  server.on(
    'listen',
    ({ ctx }) => {
      if (!canRegisterAutomations(ctx, true)) return;
      if (!ctx.plugin('automations')) return;
      ctx.on(
        'officepress-automations-authorize',
        () => import('./events/authorize.js')
      );
      ctx.on('officepress-automations-read', () => import('./events/read.js'));
      ctx.on(
        'officepress-automations-update',
        () => import('./events/update.js')
      );

      const service = ctx.plugin<AutomationService>('automations');
      service.start();
      ctx.on(
        'officepress-workflow-transition',
        () => import('./events/workflow.js'),
        -100
      );
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterAutomations(ctx, true)) return;
    if (!ctx.plugin('automations')) return;
    ctx.get('/api/automations', () => import('./pages/read.js'));
    ctx.post('/api/automations', () => import('./pages/update.js'));
  });
};
