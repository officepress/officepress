//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';

/**
 * Adapt the web request, invoke its feature event and format the HTTP
 * response.
 */
export default action(async function page({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const authorization = await ctx.resolve('officepress-auth-admin', req);
  if (authorization.code !== 200) {
    res.fromStatusResponse(authorization);
    return;
  }
  if (!identity.csrf(req, res)) return;
  await ctx.emit('officepress-theme-update', req, res);
});
