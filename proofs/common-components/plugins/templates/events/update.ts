//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { MailService } from '../../mail/types.js';
import type { Channel } from '../types.js';
import type { TemplateService } from '../types.js';
import { renderDraft } from '../client.js';
import { requireWrite } from '../domain.js';

/**
 * Dispatch an authorized template edit, publication, preview or one mail
 * handoff.
 */
export default defineAction(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const operation = req.data<string>('operation');
  const identity = ctx.plugin<Identity>('identity');
  const templates = ctx.plugin<TemplateService>('templates');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    if (![ 'save', 'publish', 'preview', 'send' ].includes(operation))
      throw new Error('Unknown template action.');
    if (operation === 'preview') {
      res.results(
        renderDraft(
          req.data('draft'),
          req.data('context') || {},
          req.data('values') || {}
        )
      );
      return;
    }
    requireWrite(caller);
    if (operation === 'save') {
      res.results(
        await templates.save(
          caller,
          req.data('id') || undefined,
          Number(req.data('revision')),
          req.data('draft')
        )
      );
      return;
    }
    if (operation === 'publish') {
      res.results(
        await templates.publish(
          caller,
          req.data('id'),
          Number(req.data('revision'))
        )
      );
      return;
    }
    const mail = ctx.plugin<MailService>('mail');
    if (!mail?.ready())
      throw new Error(
        'Email sending is unavailable. You can still edit and preview.'
      );
    const rendered = await templates.renderPublished(caller, {
      id: req.data('id'),
      channel: 'email' as Channel,
      context: req.data('context') || {},
      values: req.data('values') || {}
    });
    //persist this immutable render and the single SMTP call result; no
    // automatic retry
    const result = await mail.send({
      subject: rendered.subject,
      text: rendered.text,
      html: rendered.html
    });
    res.results(await templates.recordDispatch(caller, { rendered, result }));
  } catch (caughtError) {
    const message = (caughtError as Error).message;
    res
      .setError(message)
      .statusCode(
        message.includes('access') || message.includes('denied')
          ? 403
          : message.includes('changed')
            ? 409
            : 400
      );
  }
});
