//modules
import { action } from '@stackpress/ingest';

//client
import { ActionStore } from '../store.js';

/**
 * Register the durable comparison action store at the configured state path.
 * An absent path leaves this optional provider unavailable.
 */
export default action(({ ctx }) => {
  const file = ctx.config<string>('proof', 'stateFile');
  if (file) ctx.register('agent-domain', new ActionStore(file));
});
