//modules
import { action } from '@stackpress/ingest';

//client
import type { Caller } from '../../agent-domain/index.js';

/**
 * Adapt the web request to the bridge-host event and format its HTTP
 * response.
 */
export default action(async ({ req, res, ctx }) => {
  const token = String(req.headers('cookie') || '').match(
    /(?:^|;\s*)proof_session=([^;]+)/
  )?.[1];
  const sessions = ctx.config<Record<string, Caller>>('proof', 'sessions');
  const caller = token ? sessions[token] : undefined;
  if (!caller) {
    res.json({ error: 'Unauthenticated' }, 401);
    return;
  }
  if (
    req.headers('x-proof-csrf') !== ctx.config('proof', 'csrf') ||
    req.headers('origin') !== ctx.config('proof', 'origin')
  ) {
    res.json({ error: 'Invalid origin or CSRF' }, 403);
    return;
  }
  const outcome = await ctx.resolve('agent-action', {
    caller,
    name: req.data('name'),
    input: req.data('input') || {},
    operationId: req.data('operationId')
  });
  if (outcome.code !== 200) {
    res.json({ error: outcome.error || 'Action failed' }, outcome.code || 500);
    return;
  }
  res.json(outcome.results as Record<string, unknown>);
});
