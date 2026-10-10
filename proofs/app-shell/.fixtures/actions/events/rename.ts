//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../../plugins/app/types.js';
import type { Identity } from '../../../plugins/auth/types.js';
import type { Actions, Input } from '../domain.js';

/**
 * Handle this reusable fixture actions operation at the event boundary.
 */
export default action(async function renameEvent({ req, res, ctx }: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  identity.invalidate(req);
  const user = await identity.requireUser(req, res);
  if (!user) return;
  const actions = ctx.plugin<Actions>('actions');
  try {
    res.results(await actions.rename(user, req.data<Input>()));
  } catch (caughtError) {
    res.setError((caughtError as Error).message).statusCode(409);
  }
});
