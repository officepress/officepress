//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { WorkflowDraft } from '../types.js';
import type { WorkflowService } from '../types.js';
import { WorkflowError } from '../validation.js';

/**
 * Dispatch an authorized workflow definition or card mutation with its
 * revision.
 */
export default defineAction(async function updateEvent({
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
    const action = req.data('action');
    const id = String(req.data('id') || '');
    const revision = Number(req.data('revision'));
    if (action === 'save')
      res.results(
        await service.save(caller, req.data('draft') as WorkflowDraft, revision)
      );
    else if (action === 'create-card')
      res.results(
        await service.createCard(
          caller,
          id,
          String(req.data('title') || ''),
          req.data('assignees') as string[] | undefined
        )
      );
    else if (action === 'move')
      res.results(
        await service.move(
          caller,
          id,
          revision,
          String(req.data('stageId') || '')
        )
      );
    else if (action === 'submit-form')
      res.results(
        await service.submitForm(
          caller,
          id,
          revision,
          String(req.data('formId')),
          Number(req.data('version')),
          req.data('answers'),
          String(req.data('requestId'))
        )
      );
    else if (action === 'update-card')
      res.results(
        await service.update(
          caller,
          id,
          revision,
          (req.data('change') || {}) as Parameters<typeof service.update>[3]
        )
      );
    else throw new WorkflowError('Unknown workflow action.');
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Workflow action failed.'
      )
      .statusCode(
        caughtError instanceof WorkflowError ? caughtError.status : 500
      );
  }
});
