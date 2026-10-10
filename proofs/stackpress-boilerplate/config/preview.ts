//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { database } from './common.js';
import { config as production } from './production.js';

//--------------------------------------------------------------------//
// Constants

//configuration consumed by this module’s bootstrap/provider
export const config = { ...production, database: database('development') };

//--------------------------------------------------------------------//
// Entry point

/**
 * Create a configured Stackpress instance for this entry point.
 */
export default async function bootstrap() {
  return createServer(config);
};
