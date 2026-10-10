//modules
import { action } from '@stackpress/ingest';

//client
import { tools } from '../../agent-domain/index.js';
import { hostPage } from '../views/templates.js';

/**
 * Adapt the web request to the bridge-host event and format its HTTP
 * response.
 */
export default action(({ res, ctx }) => {
  res.html(hostPage(ctx.config<string>('proof', 'csrf'), tools));
});
