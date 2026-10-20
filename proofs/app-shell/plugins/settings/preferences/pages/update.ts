//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';

/**
 * Require a verified session and CSRF before the reusable preference update.
 */
export default action(async function updatePage({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  if (!(await identity.requireUser(req, res)) || !identity.csrf(req, res))
    return;
  await ctx.emit('officepress-preferences-update', req, res);
});
