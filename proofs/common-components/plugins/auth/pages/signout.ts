//modules
import { action as defineAction } from '@stackpress/ingest/Server';
import { Session } from 'stackpress-session';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../types.js';

/**
 * Adapt this auth web request, call its event and format the response.
 */
export default defineAction(async function signoutPage({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const base = ctx.config.path('auth.base', '/auth');

  if (!identity.csrf(req, res)) return;
  res.session.delete(Session.key);
  res.redirect(base + '/signin');
});
