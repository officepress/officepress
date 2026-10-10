//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { ChatService } from '../types.js';
import { ChatError } from '../service.js';
import { error } from './error.js';

/**
 * Authorize conversation access before returning a requested attachment
 * snapshot.
 */
export default defineAction(async function attachmentEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const chat = ctx.plugin<ChatService>('chat');

  identity.invalidate(req);
  const caller = await identity.requireUser(req, res);
  if (!caller) return;
  try {
    const { conversation } = await chat.read(caller, String(req.data('id')));
    const file = conversation.messages
      .flatMap((message) => message.attachments || [])
      .find((attachment) => attachment.id === req.data('file'));
    if (!file) throw new ChatError('File is unavailable.', 404);
    res.results(file);
  } catch (caughtError) {
    error(res, caughtError);
  }
});
