//modules
import type { HttpServer } from '@stackpress/ingest';
import type { CsrfPlugin } from 'stackpress-csrf/types';
import { Session } from 'stackpress-session';
import csrfPlugin from 'stackpress-csrf/plugin';

//client
import type { AppData, Config } from '../app/types.js';
import type { Identity } from './types.js';
import { ChallengeLedger } from './challenges.js';
import { createIdentity } from './identity.js';
import { pages } from './routes.js';
import { normalizeIdentitySchema } from './transform/normalize.js';

/**
 * Register the framework authentication adapters, identity service and
 * guarded account pages without replacing credential verification.
 */
export default function registerAuthPlugin(server: HttpServer<Config>) {
  //--------------------------------------------------------------------//
  // Schema preparation

  //normalize identity metadata at priority 1000 before schema generation
  server.on('idea', normalizeIdentitySchema, 1000);
  //config callbacks run before every dependent feature's listen/route
  // guards
  csrfPlugin(server as unknown as Parameters<typeof csrfPlugin>[0]);
  //--------------------------------------------------------------------//
  // Provider configuration

  //run at -300 after store/schema config, before dependent -400 providers
  server.on(
    'config',
    ({ ctx }) => {
      if (
        !ctx.plugin('database') ||
        !ctx.plugin('client') ||
        !ctx.plugin('csrf')
      )
        return;
      const seed = ctx.config.path<string>('session.seed', '');
      if (seed.length < 32)
        throw new Error(
          'Identity requires a private session seed of at least 32 characters'
        );
      Session.configure(ctx.config.path('session.key', 'session'), seed, {});
      ctx.register('session', Session);
      ctx.register(
        'identity-challenges',
        new ChallengeLedger(
          ctx.plugin('database'),
          ctx.config.path('auth.base', '/auth')
        )
      );
      const csrf = ctx.plugin<CsrfPlugin>('csrf');
      const identity = createIdentity(ctx, csrf);
      ctx.register('identity', identity);
    },
    -300
  );
  //--------------------------------------------------------------------//
  // Reusable event registration

  //run after generated auth listeners; expose authorization and account
  // adapters
  server.on(
    'listen',
    ({ ctx }) => {
      if (!ctx.plugin<Identity>('identity')?.ready()) return;
      ctx.on('auth-signin', () => import('./events/signin.js'));
      ctx.on('me', () => import('./events/me.js'));
      ctx.on(
        'officepress-auth-user',
        () => import('./events/authorize-user.js')
      );
      ctx.on(
        'officepress-auth-admin',
        () => import('./events/authorize-admin.js')
      );
      ctx.on(
        'officepress-auth-framework',
        () => import('./events/framework.js')
      );
      if (ctx.plugin<AppData>('app-data')?.ready())
        ctx.on('officepress-auth-purge', () => import('./events/purge.js'));
      ctx.on('response', () => import('./events/response.js'), -10000);
    },
    -300
  );
  //--------------------------------------------------------------------//
  // HTTP routes and views

  //keep framework account handlers and app-owned status pages behind
  // identity
  server.on('route', ({ ctx }) => {
    const identity = ctx.plugin<Identity>('identity');
    if (!identity?.ready() || !ctx.plugin('reactus')) return;
    const base = ctx.config.path('auth.base', '/auth');
    for (const [ suffix ] of pages) {
      for (const method of [ 'GET', 'POST' ] as const) {
        ctx.route(method, base + suffix, () => import('./pages/framework.js'));
        ctx.view.route(
          method,
          base + suffix,
          '@/plugins/auth/views/page',
          -100
        );
      }
    }
    ctx.post(base + '/signout', () => import('./pages/signout.js'));
    //the app owns its data scope; identity owns only this HTTP
    // authorization
    const appData = ctx.plugin<AppData>('app-data');
    const canPurge = Boolean(appData?.ready());
    if (canPurge) {
      ctx.post(
        base + '/account/security/purge',
        () => import('./pages/purge.js')
      );
      ctx.view.post(
        base + '/account/security/purge',
        '@/plugins/auth/views/page',
        -100
      );
    }
    //These product capabilities have no equivalent built-in handler. Keep
    // their status explicit; never label local Profile deletion as cross-app
    // deletion.
    for (const page of [
      '/forgot-password',
      '/check-email',
      '/account/security/remove',
      '/account/security/purge'
    ]) {
      ctx.get(base + page, () => import('./pages/status.js'));
      ctx.view.get(base + page, '@/plugins/auth/views/page', -100);
    }
  });
};
