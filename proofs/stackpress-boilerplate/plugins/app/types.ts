//modules
import type { UnknownNest } from '@stackpress/ingest';
import type { ServerConfig as ReactusConfig } from 'reactus';
import type reactus from 'reactus';

//client
import type {
  ServerProps,
  ServerConfigProps
} from './components/server/types.js';

//--------------------------------------------------------------------//
// Types

//inferred configuration contract shared by this bootstrap and its plugins
export type Config = {
  cwd: string,
  cli?: { idea: string },
  server?: { host: string, port: number, develop: { ignore: string[] } },
  env: 'development' | 'production',
  assets: string,
  client: {
    lang: string,
    package: string,
    module: string,
    build: string,
    tsconfig: string
  },
  database: {
    adapter: string,
    url?: string,
    directory: string,
    migrations?: string,
    populate?: { event: string, data: Record<string, unknown> }[]
  },
  view: Partial<ReactusConfig>
};

//Stackpress action context specialized to this proof configuration
export type HttpProps = ReturnType<
  import('@stackpress/ingest').HttpServer<Config>['props']
>;

//serialized request/page inputs accepted by this proof’s view entry points
export type PageProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = ServerProps<ServerConfigProps<C>, I, O> & { styles?: string[] };

//view-provider settings and lifecycle contract consumed during rendering
export type ViewPlugin = ReturnType<typeof reactus>;
