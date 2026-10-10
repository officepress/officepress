//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { TemplateService } from '../../templates/types.js';
import type { ChatService } from '../types.js';
import { error } from './error.js';

/**
 * Return accessible conversations and configured polling/template
 * availability.
 */
export default defineAction(async function searchEvent({
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
    res.results({
      conversations: await chat.list(caller),
      templates: !!templates,
      liveIntervalMs: ctx.config('officepress').chat.liveIntervalMs,
      emailIntervalMs: ctx.config('officepress').chat.emailIntervalMs
    });
  } catch (caughtError) {
    error(res, caughtError);
  }
});
