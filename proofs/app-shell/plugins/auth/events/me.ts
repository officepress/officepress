//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';

/**
 * Resolve the current caller through the identity adapter and return an empty
 * result for an anonymous request.
 */
export default action(async function me({ req, res, ctx }: HttpProps) {
  res.results((await ctx.plugin<Identity>('identity').caller(req)) || {});
});
