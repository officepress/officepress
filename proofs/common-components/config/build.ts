//node
import path from 'node:path';

//modules
import unocss from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { cwd, build, client, database } from './common.js';
import { settings } from './officepress.js';

//--------------------------------------------------------------------//
// Types

//inferred configuration contract shared by this bootstrap and its plugins
export type Config = typeof config;

//--------------------------------------------------------------------//
// Constants

//configuration consumed by this module’s bootstrap/provider
export const config = {
  ...settings,
  cwd,
  cli: { idea: path.join(cwd, 'schema.idea') },
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: Number(process.env.PORT || 3000),
    develop: { ignore: [ 'tests/evidence/**', 'migrations/**' ] }
  },
  env: 'production' as const,
  client,
  //building bundles does not connect to a production database
  database: database('development'),
  assets: path.join(cwd, 'public'),
  view: {
    assetPath: path.join(build, 'public', 'assets'),
    clientPath: path.join(build, 'public', 'client'),
    pagePath: path.join(build, 'server'),
    cssFiles: [ 'virtual:uno.css' ],
    plugins: [ unocss(), tsconfigPaths() ]
  }
};

//--------------------------------------------------------------------//
// Entry point

export { cwd, build } from './common.js';

/**
 * Bootstrap the selected plugins for the Stackpress CLI.
 */
export default async function bootstrap() {
  return createServer(config);
};
