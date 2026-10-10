//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

//intentionally public demonstration; no app identity/tenant policy is
// implied
/**
 * Resolve generated note search with an isolated payload and copy its result
 * or error to the reusable event response.
 */
export default action(async function search({ ctx, res }: HttpProps) {
  const result = await ctx.resolve('note-search', {});
  if (result.code !== 200) {
    res.setError(result.error || 'Search failed');
    return;
  }
  res.fromStatusResponse(result);
});
