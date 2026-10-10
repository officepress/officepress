//node
import path from 'node:path';

//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { cwd, build, client, database } from './common.js';

//--------------------------------------------------------------------//
// Types

//inferred configuration contract shared by this bootstrap and its plugins
export type Config = typeof config;

//--------------------------------------------------------------------//
// Constants

//configuration consumed by this module’s bootstrap/provider
export const config = {
  cwd,
  cli: { idea: path.join(cwd, 'schema.idea') },
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: Number(process.env.PORT || 3000),
    develop: { ignore: [ 'tests/evidence/**', 'migrations/**' ] }
  },
  env: 'production' as const,
  client,
  database: database('production'),
  assets: path.join(build, 'public'),
  view: {
    basePath: '/',
    clientRoute: '/client',
    assetPath: path.join(build, 'public', 'assets'),
    clientPath: path.join(build, 'public', 'client'),
    pagePath: path.join(build, 'server')
  }
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Create a configured Stackpress instance for this entry point.
 */
export default async function bootstrap() {
  return createServer(config);
};
