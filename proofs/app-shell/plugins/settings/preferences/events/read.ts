//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import type { PreferencesService } from '../types.js';

/**
 * Read only the authenticated caller's account preferences in every medium.
 */
export default action(async function readEvent({ req, res, ctx }: HttpProps) {
  const caller = await ctx.plugin<Identity>('identity').requireUser(req, res);
  if (!caller) return;
  res.results(
    await ctx.plugin<PreferencesService>('preferences').read(caller.id)
  );
});
