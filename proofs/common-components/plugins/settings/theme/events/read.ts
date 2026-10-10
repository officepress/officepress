//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import type { Family } from '../domain.js';
import { readTheme } from '../domain.js';

/**
 * Read the authenticated app theme through the registered theme provider.
 */
export default defineAction(async function readEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');

  if (!(await identity.requireUser(req, res))) return;
  res.results(
    await readTheme(
      database,
      officepressConfig.appId,
      officepressConfig.family as Family
    )
  );
});
