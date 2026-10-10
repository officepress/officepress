//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';
import { preparePage } from './props.js';

/**
 * Adapt this auth web request, call its event and format the response.
 */
export default action(async function purgePage({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  await preparePage(ctx, res, '/account/security/purge');
  const authorization = await ctx.resolve('officepress-auth-user', req);
  if (authorization.code !== 200) {
    res.fromStatusResponse(authorization);
    return;
  }
  if (!identity.csrf(req, res)) return;
  res.data.set('identity', await identity.publicProps(req, res));
  res.data.set('identityPurgeReady', true);
  await ctx.emit('officepress-auth-purge', req, res);
  if (res.code === 200) res.data.set('identityPurgeComplete', true);
});
