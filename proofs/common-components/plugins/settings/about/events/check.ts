//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';
import type { Identity } from '../../../auth/types.js';
import { GithubReleases } from '../releases.js';

/**
 * Require administrator access before refreshing external release metadata.
 */
export default defineAction(async function checkEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const adapter = ctx.plugin<GithubReleases>('about');

  if (!(await identity.requireAdmin(req, res))) return;
  res.results(await adapter.check(true));
});
