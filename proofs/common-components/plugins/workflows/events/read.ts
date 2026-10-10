//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { WorkflowService } from '../types.js';
import { WorkflowError } from '../validation.js';

/**
 * Return authorized workflow/card snapshots and optional automation
 * availability.
 */
export default defineAction(async function readEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const service = ctx.plugin<WorkflowService>('workflows');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    res.results(await service.read(caller));
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to load workflows.'
      )
      .statusCode(
        caughtError instanceof WorkflowError ? caughtError.status : 500
      );
  }
});
