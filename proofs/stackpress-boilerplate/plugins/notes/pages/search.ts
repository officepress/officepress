//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt the web request, invoke its feature event and format the HTTP
 * response.
 */
export default action(async function search({ ctx, req, res }: HttpProps) {
  await ctx.emit('notes-search', req, res);
});
