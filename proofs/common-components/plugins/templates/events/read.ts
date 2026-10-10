//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { MailService } from '../../mail/types.js';
import type { TemplateService } from '../types.js';

/**
 * Return accessible template records and caller-visible dispatch history.
 */
export default defineAction(async function readEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const templates = ctx.plugin<TemplateService>('templates');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    res.results({
      records: await templates.list(caller),
      published: await templates.published(caller),
      dispatches: await templates.dispatches(caller),
      mailReady: ctx.plugin<MailService>('mail')?.ready() || false
    });
  } catch (caughtError) {
    res.setError((caughtError as Error).message).statusCode(403);
  }
});
