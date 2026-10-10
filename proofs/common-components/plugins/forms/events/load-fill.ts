//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { FormsService } from '../types.js';
import { error } from './error.js';

/**
 * Load an active form publication using signed-in or share-token access.
 */
export default defineAction(async function loadFillEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const forms = ctx.plugin<FormsService>('forms');

  identity.invalidate(req);
  try {
    res.results(
      await forms.loadFill(
        await identity.caller(req),
        String(req.data('form') || ''),
        String(req.data('token') || '')
      )
    );
  } catch (caughtError) {
    error(res, caughtError);
  }
});
