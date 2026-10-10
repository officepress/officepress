//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../plugins/app/types.js';
import type { Identity } from '../../../plugins/auth/types.js';

/**
 * Handle this reusable fixture actions operation at the event boundary.
 */
export default action(async function authorizeEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  identity.invalidate(req);
  if (await identity.requireUser(req, res))
    res.results({ authenticated: true });
});
