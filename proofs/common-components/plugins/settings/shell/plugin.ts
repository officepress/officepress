//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../../app/types.js';
import type { ComponentNavigation } from './registry.js';
import { createNavigation, shellPages } from './registry.js';

/**
 * Register shared shell pages and view mappings only when the rendering
 * provider is available.
 */
export default function registerShellPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // Provider configuration

  //create navigation before dependent features contribute menu entries
  server.on('config', ({ ctx }) => {
    ctx.register('component-navigation', createNavigation());
  });
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //map registered pages to lazy web adapters and their owning views
  server.on('route', ({ ctx }) => {
    if (!ctx.plugin('reactus')) return;
    const components = ctx
      .plugin<ComponentNavigation>('component-navigation')
      .items();
    const pages = shellPages(components);
    for (const page of pages) {
      const route = page.path;
      ctx.get(route, () => import('./pages/index.js'));
      ctx.view.get(
        route,
        'view' in page && page.view
          ? page.view
          : '@/plugins/settings/shell/views/index'
      );
    }
  });
};
