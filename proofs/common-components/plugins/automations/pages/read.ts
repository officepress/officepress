//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';

/**
 * Adapt this automations web request, call its event and format the response.
 */
export default action(async function readPage({ req, res, ctx }: HttpProps) {
  await ctx.emit('officepress-automations-read', req, res);
});
