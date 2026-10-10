//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { FormsService } from '../types.js';
import { error } from './error.js';

/**
 * Return administrator-visible form records or the management list.
 */
export default defineAction(async function readEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const forms = ctx.plugin<FormsService>('forms');

  identity.invalidate(req);
  const user = await identity.requireAdmin(req, res);
  if (!user) return;
  try {
    const id = String(req.data('id') || '');
    res.results(
      id ? await forms.read(user, id) : { items: await forms.list(user) }
    );
  } catch (caughtError) {
    error(res, caughtError);
  }
});
