//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../plugins/app/types.js';
import type { Identity } from '../../../plugins/auth/types.js';

/**
 * Adapt this fixture actions web request, call its event and format the
 * response.
 */
export default action(async function undoPage({ req, res, ctx }: HttpProps) {
  //preserve authentication before CSRF without executing the business write
  const auth = await ctx.resolve('officepress-actions-authorize', req);
  if (auth.code !== 200) {
    res.fromStatusResponse(auth);
    return;
  }
  if (!(await ctx.plugin<Identity>('identity').csrf(req, res))) return;
  await ctx.emit('officepress-actions-undo', req, res);
});
