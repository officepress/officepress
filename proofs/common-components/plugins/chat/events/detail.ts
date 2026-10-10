//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { ChatService } from '../types.js';
import { error } from './error.js';

/**
 * Return the authorized conversation and the caller’s independent draft/read
 * state.
 */
export default defineAction(async function detailEvent({
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
    res.results(await chat.read(caller, String(req.data('id'))));
  } catch (caughtError) {
    error(res, caughtError);
  }
});
