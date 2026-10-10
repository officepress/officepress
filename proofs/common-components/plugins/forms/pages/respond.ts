//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Adapt this forms web request, call its event and format the response.
 */
export default action(async function respondPage({ req, res, ctx }: HttpProps) {
  if (!ctx.plugin<Identity>('identity').csrf(req, res)) return;
  await ctx.emit('officepress-forms-respond', req, res);
});
