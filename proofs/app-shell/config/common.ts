//node
import { fileURLToPath } from 'node:url';
import path from 'node:path';

//modules
import { CLIENT_TEMPLATE, DOCUMENT_TEMPLATE, PAGE_TEMPLATE } from 'reactus';
import NodeFS from '@stackpress/lib/NodeFS';

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
  //generate executable JavaScript; client.ts shares this target intentionally
  lang: 'js',
  //schema history supports migrate/push; it is not an applied migration ledger
  revisions: path.join(build, 'revisions'),
  package: 'officepress-client',
  module: path.join(build, 'client', 'index.js'),
  build: path.join(build, 'client'),
  tsconfig: path.join(cwd, 'tsconfig.json'),
  //format TypeScript generation; the JavaScript target uses compiler output
  prettier: {
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'none' as const,
    bracketSpacing: true,
    experimentalTernaries: false
  }
};

//shared CLI server settings; each command supplies its environment mode
export const server = {
  build,
  cwd,
  host: process.env.HOST || '127.0.0.1',
  port: Number(process.env.PORT || 3000),
  process: 'STACKPRESS_CHILD',
  develop: {
    //coalesce backend edits and wait for the replacement server to listen
    debounce: 100,
    extensions: [ '.ts' ],
    ignore: [ 'tests/evidence/**', 'migrations/**' ],
    timeout: 10000,
    watch: [ '.' ]
  }
};

//CLI label and root Idea input; cli.idea remains the generator's input owner
export const terminal = {
  label: '[APP]',
  idea: path.join(cwd, 'schema.idea')
};

//the app owns Reactus directly, so these are flat view settings, not engine
export const view = {
  //request ?json skips HTML; only deliberate public props belong in this object
  noview: 'json',
  props: {},
  cwd,
  basePath: '/',
  clientRoute: '/client',
  cssRoute: '/assets',
  //source rendering uses Reactus's default cache paths; build overrides them
  assetPath: path.join(cwd, '.reactus', 'assets'),
  clientPath: path.join(cwd, '.reactus', 'client'),
  pagePath: path.join(cwd, '.reactus', 'page'),
  clientTemplate: CLIENT_TEMPLATE,
  documentTemplate: DOCUMENT_TEMPLATE,
  pageTemplate: PAGE_TEMPLATE,
  fs: new NodeFS(),
  cssFiles: [],
  optimizeDeps: undefined,
  plugins: [],
  vite: undefined,
  watchIgnore: [],
  //the blog's react-toastify notify options do not apply to this Frui shell
  // feature feedback is rendered by local components, not this config block
  notify: undefined
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
  //connection setup stays separate from explicit schema and populate commands
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
    //document the blog schema options and matching SQL 0.10.8 defaults
    // the installed store/migration generators hardcode these values;
    // changing this block alone does not change generated foreign keys
    schema: { onDelete: 'CASCADE' as const, onUpdate: 'RESTRICT' as const },
    //sample rows are proof-only; a generic adopter starts with populate: []
    // production never inherits development accounts or component examples
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
