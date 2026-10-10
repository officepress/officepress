//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';

/**
 * Adapt this forms web request, call its event and format the response.
 */
export default defineAction(async function fillPage({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');

  res.headers.set('Referrer-Policy', 'no-referrer');
  res.headers.set('Cache-Control', 'no-store');
  const safe = await identity.publicProps(req, res);
  const outcome = await ctx.resolve('officepress-forms-load-fill', req);
  const fill = outcome.code === 200 ? outcome.results : null;
  const message =
    outcome.code === 200 ? '' : outcome.error || 'This form is unavailable.';
  if (outcome.code !== 200) res.statusCode(outcome.code || 400);
  res.data.set('formFill', {
    ...safe,
    fill,
    token: String(req.data('token') || ''),
    message,
    family: ctx.config('officepress').family
  });
});
