//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { AgentRuntime } from '../types.js';

/**
 * Authorize the caller and cancel only their app-scoped in-flight run.
 */
export default defineAction(async function cancelEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');
  const running = ctx.plugin<AgentRuntime>('agent').running;

  const user = await identity.requireUser(req, res);
  if (!user) return;
  const rows = await database.query(
    'SELECT "id" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
    [ String(req.data('id')), user.id, officepressConfig.appId ]
  );
  if (!rows.length) {
    res.setError('Run unavailable.').statusCode(404);
    return;
  }
  running.get(String(req.data('id')))?.abort();
  res.results({
    message: 'Stop requested. Completed operations remain recorded.'
  });
});
