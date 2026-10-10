//modules
import { action } from '@stackpress/ingest';

//client
import { framePage } from '../views/templates.js';

/**
 * Adapt the web request to the bridge-host event and format its HTTP
 * response.
 */
export default action(({ res }) => {
  res.html(framePage());
});
