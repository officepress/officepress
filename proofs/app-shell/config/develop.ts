//node
import path from 'node:path';

//modules
import unocss from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

//client
import { bootstrap as createServer } from '../tests/bootstrap.js';
import { cwd, client, database } from './common.js';
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
  env: 'development' as const,
  client,
  database: database('development'),
  assets: path.join(cwd, 'public'),
  view: {
    basePath: '/',
    clientRoute: '/client',
    cssFiles: [ 'virtual:uno.css' ],
    //Reactus creates virtual hydration entries; prebundle their React
    // imports before the first page so dependency discovery cannot replace
    // them mid-hydration
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'marked'
      ]
    },
    vite: {
      resolve: { dedupe: [ 'react', 'react-dom' ] },
      server: {
        middlewareMode: true,
        hmr: false,
        watch: { ignored: [ '**/tests/evidence/**' ] }
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
