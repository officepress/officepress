//modules
import { action } from '@stackpress/ingest';

//client
import type { ActionStore, Caller } from '../store.js';

/**
 * Internal caller is supplied by the authenticated server adapter, never
 * model input.
 */
export default action(({ req, res, ctx }) => {
  const domain = ctx.plugin<ActionStore>('agent-domain');
  if (!domain) {
    res.setError('Domain unavailable').statusCode(503);
    return;
  }
  try {
    res.results(
      domain.execute(
        req.data<Caller>('caller'),
        req.data<string>('name'),
        req.data<Record<string, unknown>>('input') || {},
        req.data<string>('operationId')
      )
    );
  } catch (error) {
    res
      .setError(error instanceof Error ? error.message : 'Action failed')
      .statusCode(409);
  }
});
