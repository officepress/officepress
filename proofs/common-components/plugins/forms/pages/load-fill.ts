//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this forms web request, call its event and format the response.
 */
export default action(async function loadfillPage({
  req,
  res,
  ctx
}: HttpProps) {
  await ctx.emit('officepress-forms-load-fill', req, res);
});
