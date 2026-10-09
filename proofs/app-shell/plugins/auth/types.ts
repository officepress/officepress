import type { HttpRequest, HttpResponse } from "@stackpress/ingest";

/** Safe, live profile projection. No JWT, credential rows or configuration secrets. */
export type Caller = { id: string; name: string; roles: string[] };
export type Identity = {
  ready(): boolean;
  caller(req: HttpRequest): Promise<Caller | null>;
  /** Forget a request projection after changing profile or credential state. */
  invalidate(req: HttpRequest): void;
  requireUser(req: HttpRequest, res: HttpResponse): Promise<Caller | null>;
  requireAdmin(req: HttpRequest, res: HttpResponse): Promise<Caller | null>;
  csrf(req: HttpRequest, res: HttpResponse): boolean;
  publicProps(
    req: HttpRequest,
    res: HttpResponse,
  ): Promise<{ user: Caller | null; csrf: string }>;
};
