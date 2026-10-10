//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from './types.js';

/**
 * Wire the shared Reactus configuration and build lifecycle for the app-
 * neutral proof.
 */
export default function registerAppPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // Provider configuration

  //register shared providers before listen and route handlers use them
  server.on('config', () => import('./events/configure.js'));
  //--------------------------------------------------------------------//
  // Reusable event registration

  //attach request preparation and build hooks only with the view provider
  server.on('listen', ({ ctx }) => {
    if (!ctx.plugin('reactus')) return;
    ctx.on('build', () => import('./events/build.js'));
    ctx.on('request', () => import('./events/request.js'));
  });
};
