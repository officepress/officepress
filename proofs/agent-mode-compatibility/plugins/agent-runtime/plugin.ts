//modules
import type { HttpServer } from '@stackpress/ingest';

/**
 * Register the model runtime after the action store, then expose agent runs
 * only while both providers are available.
 */
export default function registerAgentRuntimePlugin(server: HttpServer) {
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -200 after the domain store’s -100 configuration
  server.on('config', () => import('./events/config.js'), -200);
  //--------------------------------------------------------------------//
  // Reusable event registration

  //expose the operation only after its providers have been registered
  server.on('listen', ({ ctx }) => {
    if (!ctx.plugin('agent-domain') || !ctx.plugin('agent-runtime')) return;
    ctx.on('agent-run', () => import('./events/run.js'));
  });
};
