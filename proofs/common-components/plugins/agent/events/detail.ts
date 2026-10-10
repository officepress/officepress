//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Read one authorized, app-scoped agent run without exposing provider
 * credentials.
 */
export default defineAction(async function detailEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');

  const user = await identity.requireUser(req, res);
  if (!user) return;
  const rows = await database.query<{ payload: Record<string, unknown> }>(
    'SELECT "payload" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
    [ String(req.data('id')), user.id, officepressConfig.appId ]
  );
  if (!rows[0]) {
    res.setError('Run unavailable.').statusCode(404);
    return;
  }
  res.results(rows[0].payload);
});
