//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Preflight identity/access before the web CSRF gate, without any business
 * write.
 */
export default action(async function authorizeEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  identity.invalidate(req);
  if (await identity.requireAdmin(req, res)) res.results({ authorized: true });
});
