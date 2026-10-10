//modules
import { createContext } from 'react';

//client
import type { ServerContextProps } from './types.js';
import { withUnknownHost } from './helpers.js';

//--------------------------------------------------------------------//
// Types

export type { ServerContextProps };

//--------------------------------------------------------------------//
// Constants

//fallback URL for initial client context before a real request is supplied
export const unknownHost = new URL(withUnknownHost('/'));

//configuration consumed by this module’s bootstrap/provider
export const config: ServerContextProps = {
  data: {},
  session: {
    id: '',
    name: 'Guest',
    roles: [ 'GUEST' ],
    token: '',
    permits: []
  },
  request: {
    url: {
      hash: unknownHost.hash,
      host: unknownHost.host,
      hostname: unknownHost.hostname,
      href: unknownHost.href,
      origin: unknownHost.origin,
      pathname: unknownHost.pathname,
      port: unknownHost.port,
      protocol: unknownHost.protocol,
      search: unknownHost.search
    },
    headers: {},
    session: {},
    method: 'GET',
    mime: '',
    data: {}
  },
  response: {
    code: 0,
    status: ''
  }
};

const ServerContext = createContext<ServerContextProps>(config);

//--------------------------------------------------------------------//
// Entry point

export default ServerContext;
