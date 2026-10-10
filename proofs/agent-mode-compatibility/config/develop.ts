//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { config as settings } from './common.js';

//--------------------------------------------------------------------//
// Constants

//configuration consumed by this module’s bootstrap/provider
export const config = settings();

//--------------------------------------------------------------------//
// Entry point

/**
 * Comparison fixture only; this target does not claim production
 * storage/auth.
 */
export default async function bootstrap() {
  return createServer(config);
};
