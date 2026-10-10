//modules
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { FormDefinition, FormsService, FormStatus } from '../types.js';
import { error } from './error.js';

/**
 * Dispatch the requested administrator form management operation.
 */
export default defineAction(async function updateEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const operation = req.data<string>('operation');
  const identity = ctx.plugin<Identity>('identity');
  const forms = ctx.plugin<FormsService>('forms');

  identity.invalidate(req);
  const user = await identity.requireAdmin(req, res);
  if (!user) return;
  try {
    if (
      ![ 'create', 'save', 'publish', 'share', 'revoke', 'close' ].includes(
        operation
      )
    )
      throw new Error('Unknown form action.');
    const id = String(req.data('id') || '');
    const revision = Number(req.data('revision'));
    const result =
      operation === 'create'
        ? await forms.create(user, req.data('draft') as FormDefinition)
        : operation === 'save'
          ? await forms.save(
              user,
              id,
              revision,
              req.data('draft') as FormDefinition,
              req.data('status') as FormStatus | undefined
            )
          : operation === 'publish'
            ? await forms.publish(user, id, revision)
            : operation === 'share'
              ? await forms.share(user, id, revision)
              : operation === 'revoke'
                ? await forms.revoke(user, id, revision)
                : await forms.close(user, id, revision);
    res.results(result);
  } catch (caughtError) {
    error(res, caughtError);
  }
});
