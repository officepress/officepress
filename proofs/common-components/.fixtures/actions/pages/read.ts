//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../plugins/app/types.js';

/**
 * Adapt this fixture actions web request, call its event and format the
 * response.
 */
export default action(async function readPage({ req, res, ctx }: HttpProps) {
  await ctx.emit('officepress-actions-read', req, res);
});
