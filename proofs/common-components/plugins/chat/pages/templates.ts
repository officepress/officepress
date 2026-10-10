//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this chat web request, call its event and format the response.
 */
export default action(async function templatesPage({
  req,
  res,
  ctx
}: HttpProps) {
  await ctx.emit('officepress-chat-templates', req, res);
});
