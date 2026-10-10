//modules
import { action } from '@stackpress/ingest';

//client
import { runAgent } from '../openrouter.js';

/**
 * Register the model runner only when its action store and live-test key are
 * available; callers can otherwise detect the absent capability.
 */
export default action(({ ctx }) => {
  if (ctx.plugin('agent-domain') && process.env.OPENROUTER_TEST_KEY)
    ctx.register('agent-runtime', runAgent);
});
