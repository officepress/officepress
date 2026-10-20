//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../app/types.js';

/**
 * Delegate preference reads to the authenticated business action.
 */
export default action(async function readPage({ req, res, ctx }: HttpProps) {
  await ctx.emit('officepress-preferences-read', req, res);
});
