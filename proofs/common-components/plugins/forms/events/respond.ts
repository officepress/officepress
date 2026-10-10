//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { FormsService } from '../types.js';
import { error } from './error.js';

/**
 * Validate publication access and persist a deduplicated form answer receipt.
 */
export default defineAction(async function respondEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const forms = ctx.plugin<FormsService>('forms');

  identity.invalidate(req);
  try {
    res.results(
      await forms.respond(
        await identity.caller(req),
        String(req.data('id') || ''),
        String(req.data('token') || ''),
        Number(req.data('version')),
        req.data('answers'),
        String(req.data('requestId') || '')
      )
    );
  } catch (caughtError) {
    error(res, caughtError);
  }
});
