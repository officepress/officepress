//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { FormsService } from '../../forms/types.js';
import type { WorkflowService } from '../types.js';

/**
 * Authorize the caller and load or submit a form attached to the card’s
 * current stage.
 */
export default defineAction(async function formsEvent({
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
    const forms = ctx.plugin<FormsService>('forms');
    if (req.data('cardId'))
      res.results(
        await service.loadForm(
          caller,
          String(req.data('cardId')),
          String(req.data('formId'))
        )
      );
    else
      res.results({
        forms: forms
          ? (await forms.list(caller)).filter(
              (form) => form.publishedVersion > 0
            )
          : []
      });
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to load forms.'
      )
      .statusCode((caughtError as { status?: number }).status || 400);
  }
});
