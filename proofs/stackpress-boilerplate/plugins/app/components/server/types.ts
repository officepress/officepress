//modules
import type { StatusResponse, UnknownNest } from '@stackpress/lib/types';
import type { NotifierOptions } from 'frui/Notifier';
import type { ReactNode } from 'react';
import type { LanguageConfig } from 'stackpress-language/types';

//--------------------------------------------------------------------//
// Types

//--------------------------------------------------------------------//
// Config Types

//ie. ctx.config<BrandConfig>('brand')
export type BrandConfig = {
  name?: string,
  logo?: string,
  icon?: string,
  favicon?: string
};

//HTTP method names exposed in the serialized server request context
export type Method =
  | 'GET'
  | 'ALL'
  | 'CONNECT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'TRACE';

//page-specific rendering configuration exposed to the browser
export type ServerConfigPageProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = ServerPageProps<ServerConfigProps<C>, I, O>;

//--------------------------------------------------------------------//
// Server Types

//public configuration fields read by the client provider
export type ServerConfigProps<C extends UnknownNest = UnknownNest> = C & {
  brand: BrandConfig,
  language: LanguageConfig,
  view: ViewConfig
};

//serialized server/request/response/session data available to React hooks
export type ServerContextProps = ServerProps<UnknownNest, UnknownNest, unknown>;

//page inputs read by the serialized server provider
export type ServerPageProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = ServerProps<C, I, O> & { styles?: string[] };

//Stackpress view inputs adapted into the browser context
export type ServerProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = {
  data: C,
  session: ServerSessionProps,
  request: ServerRequestProps<I>,
  response: ServerResponseProps<O>
};

//provider props used to initialize the serialized server context
export type ServerProviderProps<
  C extends UnknownNest = UnknownNest,
  I extends UnknownNest = UnknownNest,
  O = UnknownNest
> = Partial<ServerProps<C, I, O>> & {
  children: ReactNode
};

//serializable request metadata; excludes live request objects
export type ServerRequestProps<I extends UnknownNest = UnknownNest> = {
  url: ServerUrlProps,
  headers: Record<string, string | string[]>,
  session: Record<string, string | string[]>,
  method: Method,
  mime: string,
  data: I
};

//response status and public payload available to the view
export type ServerResponseProps<O = UnknownNest> = Partial<StatusResponse<O>>;

//public permission descriptor used by session helpers
export type ServerSessionPermission = string | ServerSessionRoute;

//public session projection consumed by client identity helpers
export type ServerSessionProps = Record<string, unknown> & {
  id: string,
  name: string,
  image?: string,
  roles: string[],
  token: string,
  permits: ServerSessionPermission[]
};

//public permitted-route descriptor used by session helpers
export type ServerSessionRoute = { method: string, route: string };

//serializable URL fields used by client request hooks
export type ServerUrlProps = {
  hash: string,
  host: string,
  hostname: string,
  href: string,
  origin: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string
};

//ie. ctx.config<ViewConfig>('view')
export type ViewConfig = {
  //url flag (ie. ?json) used to disable template rendering and show the raw
  // json data instead defaults to `json`
  noview?: string,
  //used by vite and in development mode to determine the root of the
  // project defaults to `/`
  base?: string,
  props?: Record<string, unknown>,
  //notifier (frui) settings
  notify?: NotifierOptions
};
