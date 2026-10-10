//modules
import type { HttpRequest, HttpResponse } from '@stackpress/ingest';

//--------------------------------------------------------------------//
// Types

//safe, live profile projection. No JWT, credential rows or configuration
// secrets. verified public identity projection used by feature access checks
export type Caller = { id: string, name: string, roles: string[] };

//framework-backed identity projection, authorization and safe browser props
export type Identity = {
  ready(): boolean,
  caller(req: HttpRequest): Promise<Caller | null>,
  //forget a request projection after changing profile or credential state
  invalidate(req: HttpRequest): void,
  requireUser(req: HttpRequest, res: HttpResponse): Promise<Caller | null>,
  requireAdmin(req: HttpRequest, res: HttpResponse): Promise<Caller | null>,
  csrf(req: HttpRequest, res: HttpResponse): boolean,
  publicProps(
    req: HttpRequest,
    res: HttpResponse
  ): Promise<{ user: Caller | null, csrf: string }>
};
