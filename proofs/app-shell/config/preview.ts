//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { database } from './common.js';
import { config as production } from './production.js';

//--------------------------------------------------------------------//
// Constants

//inherit the complete built-serving defaults, including production rendering
// only the local database changes; preview does not use production PostgreSQL
export const config = { ...production, database: database('development') };

//--------------------------------------------------------------------//
// Entry point

/**
 * Preview built assets with the explicitly local development database.
 */
export default async function bootstrap() {
  return createServer(config);
};
