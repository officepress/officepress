//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import { frameworkHandler } from '../framework.js';

/**
 * Delegate sign-in to the pinned framework handler so credential verification
 * retains its framework owner.
 */
export default action(async function signin(props: HttpProps) {
  await (
    await frameworkHandler('auth/events/signin')
  )(props);
});
