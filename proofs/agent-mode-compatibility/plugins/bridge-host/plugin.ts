//modules
import type { HttpServer } from '@stackpress/ingest';

/**
 * Register the SDK build event and lazy fixture routes, guarding HTTP actions
 * on the domain, caller sessions and CSRF configuration.
 */
export default function registerBridgeHostPlugin(server: HttpServer) {
  //--------------------------------------------------------------------//
  // Reusable event registration

  //runtime checks prevent partially configured features from exposing
  // events
  server.on('listen', ({ ctx }) => {
    ctx.on('build', () => import('./events/build.js'));
  });
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (
      !ctx.plugin('agent-domain') ||
      !ctx.config('proof', 'sessions') ||
      !ctx.config('proof', 'csrf')
    )
      return;
    ctx.get('/health', () => import('./pages/health.js'));
    ctx.get('/sdk.js', () => import('./pages/sdk.js'));
    ctx.get('/agent-frame', () => import('./pages/frame.js'));
    ctx.get('/', () => import('./pages/host.js'));
    ctx.post('/api/action', () => import('./pages/action.js'));
  });
};
