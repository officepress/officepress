import path from 'node:path';
import { cwd, build, client, database } from './common.js';
export const config = {
  cwd, env: 'production' as const, client,
  database: database('production'),
  assets: path.join(build, 'public'),
  view: {
    basePath: '/', clientRoute: '/client',
    assetPath: path.join(build, 'public', 'assets'),
    clientPath: path.join(build, 'public', 'client'),
    pagePath: path.join(build, 'server')
  }
};
export type Config = typeof config;
