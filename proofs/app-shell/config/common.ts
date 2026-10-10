//node
import { fileURLToPath } from 'node:url';
import path from 'node:path';

//client
import { fixtureAccounts, shellFixture } from './fixtures.js';

//--------------------------------------------------------------------//
// Constants

//app root derived from this module rather than the caller’s working
// directory
export const cwd = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);

//build root resolved from the app directory or an explicit proof override
export const build = path.resolve(
  process.env.OFFICEPRESS_BUILD_DIR || path.join(cwd, '.build')
);

//generated client output paths shared by CLI and runtime configuration
export const client = {
  lang: 'js',
  revisions: path.join(build, 'revisions'),
  package: 'officepress-client',
  module: path.join(build, 'client', 'index.js'),
  build: path.join(build, 'client'),
  tsconfig: path.join(cwd, 'tsconfig.json')
};

//--------------------------------------------------------------------//
// Functions

/**
 * Resolve the configured database engine and its environment-specific
 * connection settings.
 */
export function database(mode: 'development' | 'production') {
  const adapter =
    process.env.DATABASE_ADAPTER ||
    (mode === 'production' ? 'postgres' : 'pglite');
  if (adapter !== 'pglite' && adapter !== 'postgres')
    throw new Error('Unsupported DATABASE_ADAPTER');
  return {
    adapter,
    seed: process.env.PROOF_DATABASE_SEED || 'disposable-proof-only',
    url: process.env.DATABASE_URL,
    directory: path.resolve(
      process.env.PGLITE_DIR || path.join(build, 'database', 'pglite')
    ),
    migrations: path.resolve(
      process.env.OFFICEPRESS_MIGRATIONS_DIR || path.join(cwd, 'migrations')
    ),
    populate:
      mode === 'development'
        ? [
            {
              event: 'proof-shell-populate',
              data: { accounts: fixtureAccounts, ...shellFixture }
            }
          ]
        : []
  };
};
