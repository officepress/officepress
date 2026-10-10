//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { Identity } from '../../../auth/types.js';
import type { HttpProps } from '../../types.js';

/**
 * Read the caller’s app-owned notification feed and its unread state.
 */
export default defineAction(async function notificationsSearchEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');

  const user = await identity.requireUser(req, res);
  if (!user) return;
  res.results({
    notices: await database.query(
      'SELECT "id","category","title","href","read","created" FROM "shell_notice" WHERE "app_id" = ? AND "owner_id" = ? ORDER BY "created" DESC',
      [ officepressConfig.appId, user.id ]
    )
  });
});
