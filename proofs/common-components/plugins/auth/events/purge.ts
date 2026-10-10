//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { AppData, HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';

/**
 * Authorize and confirm removal of this app’s data while preserving the
 * framework identity and other apps’ records.
 */
export default action(async function purge({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  if (caller.roles.includes('READONLY')) {
    res.setError('This proof account has read-only access.').statusCode(403);
    return;
  }
  if (req.data('confirmation') !== 'Purge') {
    res.setError('Type Purge to confirm this action.').statusCode(400);
    return;
  }
  const appData = ctx.plugin<AppData>('app-data');
  if (!appData?.ready()) {
    res.setError('App data services are unavailable.').statusCode(503);
    return;
  }
  res.results({ purged: await appData.purge(caller.id) });
});
