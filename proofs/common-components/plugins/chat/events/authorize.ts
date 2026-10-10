//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Current identity is checked again for long-lived web streams and other
 * callers.
 */
export default action(async function authorizeEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (caller) res.results(caller);
});
