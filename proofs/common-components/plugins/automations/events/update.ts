//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { AutomationDraft } from '../types.js';
import type { AutomationService } from '../types.js';
import { WorkflowError, getResponseStatus } from '../validation.js';

/**
 * Dispatch an authorized save, dry-run or resume command to the automation
 * service.
 */
export default defineAction(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const service = ctx.plugin<AutomationService>('automations');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    const action = req.data('action');
    const id = String(req.data('id') || '');
    const revision = Number(req.data('revision'));
    if (action === 'save')
      res.results(
        await service.save(
          caller,
          req.data('draft') as AutomationDraft,
          revision
        )
      );
    else if (action === 'dry-run')
      res.results(
        await service.dryRun(
          caller,
          req.data('draft') as AutomationDraft,
          String(req.data('cardId') || '')
        )
      );
    else if (action === 'resume') {
      await service.resume(caller, id);
      res.results({ ok: true });
    } else throw new WorkflowError('Unknown automation action.');
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Automation action failed.'
      )
      .statusCode(getResponseStatus(caughtError));
  }
});
