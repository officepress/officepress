//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../types.js';
import * as view from '../view.js';

/**
 * Configure the shared Reactus view provider from the current server
 * configuration.
 */
export default action(function configure({ ctx }: HttpProps) {
  view.configureViews(ctx);
});
