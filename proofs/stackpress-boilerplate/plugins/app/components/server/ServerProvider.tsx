//modules
import type { UnknownNest } from '@stackpress/lib/types';

//client
import type { ServerProviderProps } from './types.js';
import { withUnknownHost } from './helpers.js';
import ServerContext from './ServerContext.js';

//--------------------------------------------------------------------//
// Types

//stackpress-view

export type { ServerProviderProps };

//--------------------------------------------------------------------//
// Entry point

/**
 * Create the client-safe server context from serialized page props.
 */
export default function ServerProvider<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O extends UnknownNest = UnknownNest
>(props: Partial<ServerProviderProps<C, I, O>>) {
  const unknownHost = new URL(withUnknownHost('/'));
  const {
    data = {},
    session = {
      id: '',
      name: 'Guest',
      roles: [ 'GUEST' ],
      token: '',
      permits: []
    },
    request = {
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
    response = {
      code: 0,
      status: ''
    },
    children
  } = props;
  return (
    <ServerContext.Provider value={{ data, session, request, response }}>
      {children}
    </ServerContext.Provider>
  );
};
