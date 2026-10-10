//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { AppData, HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';
import { preparePage } from './props.js';

/**
 * Adapt this auth web request, call its event and format the response.
 */
export default action(async function statusPage({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const page = req.url.pathname.slice(
    ctx.config.path('auth.base', '/auth').length
  );
  await preparePage(ctx, res, page);
  if (page.startsWith('/account')) {
    const authorization = await ctx.resolve('officepress-auth-user', req);
    if (authorization.code !== 200) {
      res.fromStatusResponse(authorization);
      return;
    }
  }
  res.data.set('identity', await identity.publicProps(req, res));
  if (page === '/account/security/purge')
    res.data.set(
      'identityPurgeReady',
      Boolean(ctx.plugin<AppData>('app-data')?.ready())
    );
  res.statusCode(200);
});
