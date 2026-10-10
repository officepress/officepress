//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../../app/types.js';

/**
 * Register shared shell pages and view mappings only when the rendering
 * provider is available.
 */
export default function registerShellPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //map registered pages to lazy web adapters and their owning views
  server.on('route', ({ ctx }) => {
    if (!ctx.plugin('reactus')) return;
    const paths = [ '/', '/settings/about', '/settings/theme' ];
    for (const route of paths) {
      ctx.get(route, () => import('./pages/index.js'));
      ctx.view.get(route, '@/plugins/settings/shell/views/index');
    }
  });
};
