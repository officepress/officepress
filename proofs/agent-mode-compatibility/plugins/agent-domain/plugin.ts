//modules
import type { HttpServer } from '@stackpress/ingest';

/**
 * Register the durable action store first, then expose the reusable action
 * event only when that store exists.
 */
export default function registerAgentDomainPlugin(server: HttpServer) {
  //--------------------------------------------------------------------//
  // Provider configuration

  //configure the durable action store before the model runtime uses it
  server.on('config', () => import('./events/config.js'), -100);
  //--------------------------------------------------------------------//
  // Reusable event registration

  //expose the operation only after its providers have been registered
  server.on('listen', ({ ctx }) => {
    if (!ctx.plugin('agent-domain')) return;
    ctx.on('agent-action', () => import('./events/execute.js'));
  });
};
