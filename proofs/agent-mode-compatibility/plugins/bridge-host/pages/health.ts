//modules
import { action } from '@stackpress/ingest';

/**
 * Adapt the web request to the bridge-host event and format its HTTP
 * response.
 */
export default action(({ res, ctx }) => {
  res.json({ ready: true, agent: Boolean(ctx.plugin('agent-runtime')) });
});
