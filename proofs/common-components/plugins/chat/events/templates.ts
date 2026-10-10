//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { TemplateService } from '../../templates/types.js';
import type { ChatService } from '../types.js';
import { error } from './error.js';

/**
 * Return published templates matching an authorized conversation’s channel.
 */
export default defineAction(async function templatesEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const chat = ctx.plugin<ChatService>('chat');
  const templates = ctx.plugin<TemplateService>('templates');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    const { conversation: conversation } = await chat.read(
      caller,
      String(req.data('id'))
    );
    res.results({
      items: templates
        ? (await templates.published(caller)).filter(
            (template) => template.draft.channel === conversation.channel
          )
        : []
    });
  } catch (caughtError) {
    error(res, caughtError);
  }
});
