//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { Identity } from '../../../auth/types.js';
import type { HttpProps } from '../../types.js';

/**
 * Adapt the web request, invoke its feature event and format the HTTP
 * response.
 */
export default action(async function page({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const authorization = await ctx.resolve('officepress-auth-user', req);
  if (authorization.code !== 200) {
    res.fromStatusResponse(authorization);
    return;
  }
  if (!identity.csrf(req, res)) return;
  await ctx.emit('officepress-notifications-read', req, res);
});
