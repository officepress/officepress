import path from 'node:path';
import unocss from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cwd, build, client, database } from './common.js';
export { cwd, build } from './common.js';
export const config = {
  cwd, env: 'production' as const, client,
  // Building bundles does not connect to a production database.
  database: database('development'),
  assets: path.join(cwd, 'public'),
  view: {
    assetPath: path.join(build, 'public', 'assets'),
    clientPath: path.join(build, 'public', 'client'),
    pagePath: path.join(build, 'server'),
    cssFiles: ['virtual:uno.css'],
    plugins: [unocss(), tsconfigPaths()]
  }
};
export type Config = typeof config;
