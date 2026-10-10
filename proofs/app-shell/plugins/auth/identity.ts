//modules
import type { HttpRequest, HttpServer, UnknownNest } from '@stackpress/ingest';
import type { CsrfPlugin } from 'stackpress-csrf/types';
import { Session } from 'stackpress-session';

//client
import type { Caller, Identity } from './types.js';

/**
 * Project live identity once per request, refreshing after account mutations.
 */
export function createIdentity<C extends UnknownNest>(
  ctx: HttpServer<C>,
  csrf: CsrfPlugin
): Identity {
  //pending reads are shared too; the weak keys cannot retain finished
  // requests
  const callers = new WeakMap<HttpRequest, Promise<Caller | null>>();

  //verify the framework token against the current profile and credentials
  async function loadCaller(req: HttpRequest): Promise<Caller | null> {
    if (!identity.ready()) return null;
    const data = await Session.load(req).data();
    //Framework JWTs have no default expiry. Roles and activation come from
    // DB.
    if (
      !data?.id ||
      typeof data.iat !== 'number' ||
      Date.now() / 1000 - data.iat > 8 * 3600
    )
      return null;
    //token claims identify the profile; current activation and roles come
    // from storage so a revoked account cannot rely on old session claims
    const profile = await ctx.resolve<Caller & { active: boolean }>(
      'profile-detail',
      { id: data.id }
    );
    if (profile.code !== 200 || !profile.results?.active) return null;
    //require at least one active credential as well as an active profile
    const auth = await ctx.resolve<Array<{ id: string }>>('auth-search', {
      columns: [ 'id' ],
      eq: { profileId: data.id, active: true }
    });
    if (auth.code !== 200 || !auth.results?.length) return null;
    //project the safe identity fields; keep credential/session details
    // private
    const { id, name, roles } = profile.results;
    return { id, name, roles: Array.isArray(roles) ? roles : [] };
  }

  const identity: Identity = {
    //generated identity events must exist before protected features
    // register
    ready: () =>
      Boolean(
        ctx.listeners['profile-detail']?.size &&
        ctx.listeners['auth-search']?.size
      ),
    //reuse the same verified projection throughout this request
    caller(req) {
      let pending = callers.get(req);
      if (!pending) {
        pending = loadCaller(req);
        callers.set(req, pending);
      }
      return pending;
    },
    //account writers invalidate before preparing a new public projection
    invalidate(req) {
      callers.delete(req);
    },
    //reject anonymous requests without exposing credential or token data
    async requireUser(req, res) {
      const caller = await identity.caller(req);
      if (!caller)
        res.setError('Sign in to continue.').statusCode(401, 'Unauthorized');
      return caller;
    },
    //use the current stored roles for administrator-only operations
    async requireAdmin(req, res) {
      const caller = await identity.requireUser(req, res);
      if (!caller) return null;
      if (!caller.roles.includes('ADMIN')) {
        res
          .setError('Administrator access is required.')
          .statusCode(403, 'Forbidden');
        return null;
      }
      return caller;
    },
    //delegate token validation to the framework CSRF service
    csrf(req, res) {
      return csrf.valid(req, res);
    },
    //share only the safe caller and the form's CSRF token with the browser
    async publicProps(req, res) {
      const existing =
        res.data.path<{ token?: string }>('csrf', {}).token ||
        req.session.get('csrf');
      const token =
        typeof existing === 'string' && existing
          ? existing
          : csrf.generate(
              res,
              //the published CSRF type erases the HTTP request/resource
              // types
              ctx as unknown as Parameters<CsrfPlugin['generate']>[1]
            );
      return { user: await identity.caller(req), csrf: token };
    }
  };
  return identity;
};
