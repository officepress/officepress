//node
import path from 'node:path';

//modules
import unocss from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { cwd, client, database, server, view } from './common.js';
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
  server: { ...server, mode: 'development' },
  env: 'development' as const,
  client,
  database: database('development'),
  assets: path.join(cwd, 'public'),
  view: {
    ...view,
    production: false,
    basePath: '/',
    clientRoute: '/client',
    cssFiles: [ 'virtual:uno.css' ],
    //prebundle virtual hydration imports before serving the first page
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'marked',
        'r22n'
      ]
    },
    vite: {
      resolve: { dedupe: [ 'react', 'react-dom' ] },
      server: {
        middlewareMode: true,
        //the CLI restarts backend code; disable an extra unmanaged HMR port
        hmr: false,
        watch: { ignored: [ '**/.build/database/**', '**/tests/evidence/**' ] }
      }
    },
    plugins: [ unocss(), tsconfigPaths() ]
  }
};

//--------------------------------------------------------------------//
// Entry point

export { cwd } from './common.js';

/**
 * Bootstrap the selected plugins for the Stackpress CLI.
 */
export default async function bootstrap() {
  return createServer(config);
};
