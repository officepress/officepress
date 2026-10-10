//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Config } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import { GithubReleases } from './releases.js';

/**
 * Register release metadata and lazy About operations behind the identity
 * dependency check.
 */
export default function registerAboutPlugin(server: HttpServer<Config>) {
  //check identity before configuring the release adapter listen and route
  // additionally require a live identity provider
  function canRegisterAbout(
    ctx: HttpServer<Config>,
    shouldCheckRuntimeReadiness = false
  ) {
    const identity = ctx.plugin<Identity>('identity');
    return !(!identity || (shouldCheckRuntimeReadiness && !identity.ready()));
  }
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -400 after schema/store and identity; omit incomplete providers
  server.on(
    'config',
    async ({ ctx }) => {
      if (!canRegisterAbout(ctx)) return;

      const officepressConfig = ctx.config('officepress');
      const adapter = new GithubReleases(
        officepressConfig.about.repository,
        officepressConfig.version,
        officepressConfig.about.cacheMs
      );
      ctx.register('about', adapter);
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
      if (!canRegisterAbout(ctx, true) || !ctx.plugin('about')) return;
      ctx.on('officepress-about-read', () => import('./events/read.js'));
      ctx.on('officepress-about-check', () => import('./events/check.js'));
    },
    -400
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //expose lazy web adapters only while their providers are ready
  server.on('route', ({ ctx }) => {
    if (!canRegisterAbout(ctx, true)) return;
    if (!ctx.plugin('about')) return;
    ctx.get('/api/about', () => import('./pages/read.js'));
    ctx.post('/api/about/check', () => import('./pages/check.js'));
  });
};
