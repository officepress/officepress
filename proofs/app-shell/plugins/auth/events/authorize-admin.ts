//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';

/**
 * Nonmutating authorization for adapters; mutations also authorize
 * independently.
 */
export default action(async function authorize({ req, res, ctx }: HttpProps) {
  const caller = await ctx.plugin<Identity>('identity').requireAdmin(req, res);
  if (caller) res.results(caller);
});
