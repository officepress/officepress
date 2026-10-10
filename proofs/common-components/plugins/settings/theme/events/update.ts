//node
import fs from 'node:fs/promises';
import path from 'node:path';

//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import type { Family } from '../domain.js';
import { getDefaultTheme, validateTheme } from '../client.js';
import { readTheme, saveTheme } from '../domain.js';

/**
 * Require administrator access and save a validated theme with a revision
 * check.
 */
export default defineAction(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');

  if (!(await identity.requireAdmin(req, res))) return;
  try {
    const theme = validateTheme(
      req.data('reset')
        ? getDefaultTheme(officepressConfig.family as Family)
        : req.data('theme')
    );
    const asset = path.resolve(ctx.config('assets'), '.' + theme.logo);
    if (!(await fs.stat(asset).catch(() => null))?.isFile())
      throw new Error('Logo asset is unavailable.');
    await saveTheme(
      database,
      officepressConfig.appId,
      theme,
      Number(req.data('revision'))
    );
    res.results(
      await readTheme(
        database,
        officepressConfig.appId,
        officepressConfig.family as Family
      )
    );
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error ? caughtError.message : 'Save failed.'
      )
      .statusCode(409);
  }
});
