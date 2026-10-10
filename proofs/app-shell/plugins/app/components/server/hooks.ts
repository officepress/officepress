//modules
import type { UnknownNest } from '@stackpress/lib/types';
import { nest } from '@stackpress/lib/Nest';
import { useContext } from 'react';

//client
import type { ServerRequestProps, ServerResponseProps } from './types.js';
import ClientContext from './ServerContext.js';
import Request from './ServerRequest.js';
import Response from './ServerResponse.js';
import Session from './ServerSession.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Read the page configuration supplied by the server provider.
 */
export function useConfig<C extends UnknownNest = UnknownNest>() {
  const { data } = useContext(ClientContext);
  return nest<C>(data as C);
};

/**
 * Read the request facade supplied by the nearest server provider.
 */
export function useRequest<I extends UnknownNest = UnknownNest>() {
  const { request } = useContext(ClientContext);
  return new Request<I>(request as ServerRequestProps<I>);
};

/**
 * Read the response facade supplied by the nearest server provider.
 */
export function useResponse<O = UnknownNest>() {
  const { response } = useContext(ClientContext);
  return new Response<O>(response as ServerResponseProps<O>);
};

/**
 * Read the combined request, response, session and configuration facades.
 */
export function useServer<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
>() {
  const { data, request, response, session } = useContext(ClientContext);
  return {
    config: nest<C>(data as C),
    request: new Request<I>(request as ServerRequestProps<I>),
    response: new Response<O>(response as ServerResponseProps<O>),
    session: new Session(session)
  };
};

/**
 * Read the serialized session facade; server authorization remains
 * authoritative.
 */
export function useSession() {
  const { session } = useContext(ClientContext);
  return new Session(session);
};
