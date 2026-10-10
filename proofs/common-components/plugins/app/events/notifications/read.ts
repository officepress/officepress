//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { Identity } from '../../../auth/types.js';
import type { HttpProps } from '../../types.js';

/**
 * Mark the caller’s app-owned notices read, optionally limiting the update to
 * one notice.
 */
export default defineAction(async function notificationsReadEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');

  const user = await identity.requireUser(req, res);
  if (!user) return;
  const id = req.data('id');
  await database.query(
    'UPDATE "shell_notice" SET "read" = true WHERE "app_id" = ? AND "owner_id" = ?' +
      (id ? ' AND "id" = ?' : ''),
    id
      ? [ officepressConfig.appId, user.id, String(id) ]
      : [ officepressConfig.appId, user.id ]
  );
  res.results({ ok: true });
});
