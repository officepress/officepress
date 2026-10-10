//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { TemplateService } from '../../templates/types.js';
import type { AutomationService } from '../types.js';
import { getResponseStatus } from '../validation.js';

/**
 * Authorize the caller and return rule definitions, execution receipts and
 * editor dependencies.
 */
export default defineAction(async function readEvent({
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
    res.results({
      ...(await service.read(caller)),
      templates:
        (await ctx.plugin<TemplateService>('templates')?.published(caller)) ||
        []
    });
  } catch (caughtError) {
    res
      .setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Unable to load automations.'
      )
      .statusCode(getResponseStatus(caughtError));
  }
});
