//modules
import type { HttpServer, UnknownNest } from '@stackpress/ingest';
import type { ServerConfig as ReactusConfig } from 'reactus';
import type reactus from 'reactus';

//client
import type {
  ServerConfigProps,
  ServerProps
} from './components/server/types.js';

//--------------------------------------------------------------------//
// Types

//internal app-data contract. HTTP callers must pass identity/CSRF policy
// first. app-owned readiness and purge boundary consumed by account
// authorization
export type AppData = {
  ready(): boolean,
  purge(ownerId: string): Promise<{
    items: number,
    operations: number,
    notifications: number,
    agentRuns: number
  }>
};

//inferred configuration contract shared by this bootstrap and its plugins
export type Config = typeof import('../../config/officepress.js').settings & {
  cwd: string,
  env: 'development' | 'production',
  assets: string,
  client: {
    lang: string,
    package: string,
    module: string,
    build: string,
    tsconfig: string
  },
  database: { adapter: string, seed: string, url?: string, directory: string },
  view: Partial<ReactusConfig>
};

//server handler props; this type-only contract does not enter browser
// bundles. Stackpress action context specialized to this proof configuration
export type HttpProps = ReturnType<HttpServer<Config>['props']>;

//serialized request/page inputs accepted by this proof’s view entry points
export type PageProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = ServerProps<ServerConfigProps<C>, I, O> & { styles?: string[] };

//view-provider settings and lifecycle contract consumed during rendering
export type ViewPlugin = ReturnType<typeof reactus>;
