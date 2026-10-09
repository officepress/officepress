import { randomUUID } from "node:crypto";
import type Engine from "@stackpress/inquire/Engine";
import type { HttpRequest, HttpResponse, HttpServer } from "@stackpress/ingest";
import type { ServerAction } from "@stackpress/ingest/types";
import { Session } from "stackpress-session";

type Challenge = {
  id: string;
  kind: string;
  authId: string;
  profileId: string;
  challenge: string;
  expiresMs: number;
  used: boolean;
};
function target(url: URL, base: string) {
  const prefix = base + "/signin/";
  if (!url.pathname.startsWith(prefix)) return null;
  const found = url.pathname
    .slice(prefix.length)
    .match(/^(2fa|otp|link)\/(.+)$/);
  if (!found) return null;
  const parts = found[2].split("/").map(decodeURIComponent);
  if (found[1] === "2fa" && parts.length === 3)
    return {
      kind: found[1],
      profileId: parts[0],
      authId: parts[1],
      challenge: parts[2],
    };
  if (found[1] !== "2fa" && parts.length === 2)
    return {
      kind: found[1],
      profileId: "",
      authId: parts[0],
      challenge: parts[1],
    };
  return null;
}
export class ChallengeLedger {
  /** Injectable for expiry tests; production/default always uses Date.now. */
  now = () => Date.now();
  readonly ttlMs = 5 * 60 * 1000;
  constructor(
    readonly database: Engine,
    readonly base = "/auth",
  ) {}
  async issue(location: string, origin: string) {
    const url = new URL(location, origin);
    const expected = target(url, this.base);
    if (!expected) return location;
    const id = randomUUID();
    const issued = new Date(this.now());
    const expires = new Date(this.now() + this.ttlMs);
    await this.database.query(
      'INSERT INTO "identity_challenge" ("id","kind","auth_id","profile_id","challenge","issued","expires","used") VALUES (?, ?, ?, ?, ?, ?, ?, false)',
      [
        id,
        expected.kind,
        expected.authId,
        expected.profileId,
        expected.challenge,
        issued,
        expires,
      ],
    );
    url.searchParams.set("proofChallenge", id);
    return url.pathname + url.search;
  }
  async run(
    req: HttpRequest,
    res: HttpResponse,
    ctx: HttpServer<any>,
    handler: ServerAction<any, any, any, any>,
  ) {
    const expected = target(req.url, this.base);
    if (!expected) {
      await handler(ctx.props(req, res));
      await this.issueRedirect(req, res);
      return;
    }
    // Serialize on the stored row. The store adapter keeps this transaction on
    // the current request while other HTTP requests wait for its completion.
    await this.database.transaction(async () => {
      const id = req.url.searchParams.get("proofChallenge") || "";
      // Generated Datetime columns are timestamp without timezone. Compare their
      // UTC epoch in SQL rather than letting the host timezone reparse a string.
      const rows = await this.database.query<Challenge>(
        'SELECT "id","kind","auth_id" AS "authId","profile_id" AS "profileId","challenge",EXTRACT(EPOCH FROM "expires") * 1000 AS "expiresMs","used" FROM "identity_challenge" WHERE "id" = ? FOR UPDATE',
        [id],
      );
      const grant = rows[0];
      if (
        !grant ||
        grant.used ||
        Number(grant.expiresMs) <= this.now() ||
        grant.kind !== expected.kind ||
        grant.authId !== expected.authId ||
        grant.profileId !== expected.profileId ||
        grant.challenge !== expected.challenge
      ) {
        res
          .setError(
            "This sign-in challenge expired or was already used. Start sign-in again.",
          )
          .statusCode(410, "Gone");
        return;
      }
      await handler(ctx.props(req, res));
      const sessionIssued =
        res.session.revisions.get(Session.key)?.action === "set";
      const next = res.headers.get("Location");
      const nextChallenge =
        typeof next === "string" &&
        !!target(new URL(next, req.url.origin), this.base);
      if (sessionIssued || (res.redirected && nextChallenge)) {
        await this.database.query(
          'UPDATE "identity_challenge" SET "used" = true WHERE "id" = ? AND "used" = false',
          [id],
        );
        await this.issueRedirect(req, res);
      }
      // Failed verification leaves the grant unconsumed for a corrected code.
    });
  }
  private async issueRedirect(req: HttpRequest, res: HttpResponse) {
    const location = res.headers.get("Location");
    if (
      res.redirected &&
      typeof location === "string" &&
      target(new URL(location, req.url.origin), this.base)
    ) {
      res.headers.set("Location", await this.issue(location, req.url.origin));
    }
  }
}
