//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import { GithubReleases } from '../releases.js';

/**
 * Read cached release status for an authenticated caller without forcing a
 * provider request.
 */
export default defineAction(async function readEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const adapter = ctx.plugin<GithubReleases>('about');

  if (!(await identity.requireUser(req, res))) return;
  res.results(await adapter.check());
});
