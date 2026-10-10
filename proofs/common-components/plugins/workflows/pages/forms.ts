//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this workflows web request, call its event and format the response.
 */
export default action(async function formsPage({ req, res, ctx }: HttpProps) {
  await ctx.emit('officepress-workflows-forms', req, res);
});
