//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';
import { ChallengeLedger } from '../challenges.js';
import { frameworkHandler } from '../framework.js';
import { matchPage } from '../routes.js';

/**
 * Installed-version auth adapter: framework mechanisms retain their
 * ownership.
 */
export default action(async function frameworkEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const page = matchPage(
    req.url.pathname,
    ctx.config.path('auth.base', '/auth')
  );
  if (!page || ![ 'GET', 'POST' ].includes(req.method)) {
    res.setError('Auth operation unavailable.').statusCode(404);
    return;
  }
  //select only the pinned handler from trusted route metadata
  const [ suffix, handler, isProtectedPage ] = page;
  const identity = ctx.plugin<Identity>('identity');
  //account operations require a current caller before any credential
  // changes
  const caller = isProtectedPage ? await identity.requireUser(req, res) : null;
  if (isProtectedPage && !caller) return;
  if (req.method === 'POST' && caller?.roles.includes('READONLY')) {
    res.setError('This proof account has read-only access.').statusCode(403);
    return;
  }
  //keep caller-supplied overrides out of the pinned framework's credential
  // flow
  req.data.delete('2fa');
  req.data.delete('password');
  if (suffix === '/account/update' && !req.data.has('phone'))
    req.data.set('phone', '');
  //the pinned framework permits confirmed GET removal; this adapter fails
  // closed
  if (req.method === 'GET') req.data.delete('confirmed');
  if (req.method === 'POST' && suffix === '/account/security/2fa/remove') {
    const owned = await ctx.resolve<Array<{ id: string }>>('auth-search', {
      eq: {
        id: String(req.data.path('authId', '')),
        profileId: caller!.id,
        type: '2fa'
      }
    });
    if (owned.code !== 200 || !owned.results?.length) {
      res
        .setError('Authenticator does not belong to this account.')
        .statusCode(403);
      return;
    }
  }
  if (
    req.method === 'POST' &&
    suffix === '/signin/email' &&
    req.data.path('auth', 'pass') !== 'pass'
  ) {
    res
      .setError('Email sign-in delivery is not configured in this proof.')
      .statusCode(503, 'Service Unavailable');
  } else {
    await ctx
      .plugin<ChallengeLedger>('identity-challenges')
      .run(req, res, ctx, await frameworkHandler(handler));
  }
  //account summaries must not reveal the setup-only TOTP token
  const result = res.body as
    | { auth?: Record<string, { token?: string }> }
    | undefined;
  if (result?.auth?.['2fa']) delete result.auth['2fa'].token;
  if (req.method === 'POST' && isProtectedPage) identity.invalidate(req);
});
