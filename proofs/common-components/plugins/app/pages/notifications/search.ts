//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../types.js';

/**
 * Adapt the web request, invoke its feature event and format the HTTP
 * response.
 */
export default action(async function page({ req, res, ctx }: HttpProps) {
  await ctx.emit('officepress-notifications-search', req, res);
});
