//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';
import { matchPage } from '../routes.js';
import { preparePage } from './props.js';

/**
 * Adapt this auth web request, call its event and format the response.
 */
export default action(async function frameworkPage({
  req,
  res,
  ctx
}: HttpProps) {
  const page = matchPage(
    req.url.pathname,
    ctx.config.path('auth.base', '/auth')
  );
  if (!page) {
    res.statusCode(404);
    return;
  }
  const [ suffix, , isProtectedPage ] = page;
  const identity = ctx.plugin<Identity>('identity');
  await preparePage(ctx, res, suffix);
  if (isProtectedPage) {
    const authorization = await ctx.resolve('officepress-auth-user', req);
    if (authorization.code !== 200) {
      res.fromStatusResponse(authorization);
      return;
    }
  }
  //return locations and CSRF are specific to the web request boundary
  const redirect = String(req.data.path('redirect_uri', '/'));
  if (
    !redirect.startsWith('/') ||
    redirect.startsWith('//') ||
    redirect.includes('\\')
  )
    req.data.set('redirect_uri', '/');
  if (req.method === 'POST' && !identity.csrf(req, res)) return;
  await ctx.emit('officepress-auth-framework', req, res);
  res.data.set('identity', await identity.publicProps(req, res));
});
