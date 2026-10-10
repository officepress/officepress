//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Adapt this templates web request, call its event and format the response.
 */
export default action(async function updatePage({ req, res, ctx }: HttpProps) {
  //preserve the original identity/role rejection before web CSRF validation
  const auth = await ctx.resolve('officepress-templates-authorize', req);
  if (auth.code !== 200) {
    res.fromStatusResponse(auth);
    return;
  }
  if (!ctx.plugin<Identity>('identity').csrf(req, res)) return;
  req.data.set('operation', req.url.pathname.split('/').at(-1));
  await ctx.emit('officepress-templates-update', req, res);
});
