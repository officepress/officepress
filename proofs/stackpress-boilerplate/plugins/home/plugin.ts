//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../app/types.js';

/**
 * Register the lazy Home page and view when the rendering provider is
 * available.
 */
export default function registerHomePlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!ctx.plugin('reactus')) return;
    ctx.get('/', () => import('./pages/index.js'));
    ctx.view.get('/', '@/plugins/home/views/index');
  });
};
