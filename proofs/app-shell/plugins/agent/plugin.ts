//modules
import type { HttpServer } from '@stackpress/ingest';
import type { ClientPlugin } from 'stackpress-sql/types';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../app/types.js';
import type { Identity } from '../auth/types.js';

/**
 * Register the configured model service and its lazy events and routes only
 * when identity, storage and generated models are ready.
 */
export default function registerAgentPlugin(server: HttpServer<Config>) {
  //check model configuration, credentials, identity and storage runtime
  // phases also require shell-agent-run-detail listeners
  function canRegisterAgent(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const officepressConfig = ctx.config('officepress');
    const identity = ctx.plugin<Identity>('identity');
    const database = ctx.plugin<Engine>('database');
    return !(
      !officepressConfig.agent ||
      !identity ||
      (shouldCheckRuntimeReadiness && !identity.ready()) ||
      !database ||
      officepressConfig.agent.enabled !== true ||
      !Array.isArray(officepressConfig.agent.models) ||
      !officepressConfig.agent.models.length ||
      !officepressConfig.agent.models.every((model) =>
        [ 'google/gemini-3.5-flash-lite', 'openai/gpt-4o-mini' ].includes(model)
      ) ||
      officepressConfig.agent.provider !== 'openrouter' ||
      typeof officepressConfig.agent.apiKey !== 'string' ||
      !officepressConfig.agent.apiKey.trim() ||
      !Number.isInteger(officepressConfig.agent.timeoutMs) ||
      officepressConfig.agent.timeoutMs < 1000 ||
      (shouldCheckRuntimeReadiness &&
        !ctx.listeners['shell-agent-run-detail']?.size)
    );
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      if (!canRegisterAgent(ctx)) return;
      const client = ctx.plugin<ClientPlugin>('client');
      if (
        !client ||
        typeof (await client(true))?.model?.shellAgentRun?.listen !== 'function'
      )
        return;
      const running = new Map<string, AbortController>();
      ctx.register('agent', { available: true, running });
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
      if (!canRegisterAgent(ctx, true) || !ctx.plugin('agent')) return;
      ctx.on('officepress-agent-detail', () => import('./events/detail.js'));
      ctx.on('officepress-agent-cancel', () => import('./events/cancel.js'));
      ctx.on('officepress-agent-run', () => import('./events/run.js'));
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterAgent(ctx, true)) return;
    if (!ctx.plugin('agent')) return;
    ctx.get('/api/agent/:id', () => import('./pages/detail.js'));
    ctx.post('/api/agent/:id/cancel', () => import('./pages/cancel.js'));
    ctx.post('/api/agent', () => import('./pages/run.js'));
  });
};
