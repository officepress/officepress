//node
import { randomUUID } from 'node:crypto';

//modules
import type { HttpRequest, HttpResponse, HttpServer } from '@stackpress/ingest';
import { Session } from 'stackpress-session';
import Engine from '@stackpress/inquire/Engine';

//client
import type { HttpProps, Config } from '../app/types.js';

//--------------------------------------------------------------------//
// Types

type Challenge = {
  id: string,
  kind: string,
  authId: string,
  profileId: string,
  challenge: string,
  expiresMs: number,
  used: boolean
};

//--------------------------------------------------------------------//
// Functions

/**
 * Recognize supported sign-in challenge paths and extract their bound
 * identity fields.
 */
function target(url: URL, base: string) {
  const prefix = base + '/signin/';
  if (!url.pathname.startsWith(prefix)) return null;
  const found = url.pathname
    .slice(prefix.length)
    .match(/^(2fa|otp|link)\/(.+)$/);
  if (!found) return null;
  const parts = found[2].split('/').map(decodeURIComponent);
  if (found[1] === '2fa' && parts.length === 3)
    return {
      kind: found[1],
      profileId: parts[0],
      authId: parts[1],
      challenge: parts[2]
    };
  if (found[1] !== '2fa' && parts.length === 2)
    return {
      kind: found[1],
      profileId: '',
      authId: parts[0],
      challenge: parts[1]
    };
  return null;
}

//--------------------------------------------------------------------//
// Classes

/**
 * Bind short-lived sign-in grants to redirects and consume them
 * transactionally after successful verification.
 */
export class ChallengeLedger {
  //injectable for expiry tests; production/default always uses Date.now
  public now = () => Date.now();
  //maximum lifetime for a persisted sign-in grant
  public readonly ttlMs = 5 * 60 * 1000;
  //bind grant storage and redirect recognition to this configured auth
  // prefix
  public constructor(
    //store-owned executor used to issue and consume sign-in grants
    public readonly database: Engine,
    //configured auth prefix used to recognize bound challenge redirects
    public readonly base = '/auth'
  ) {}
  //persist a short-lived grant bound to this sign-in redirect and append
  // its opaque identifier
  public async issue(
    location: string,
    origin: string,
    database = this.database
  ) {
    const url = new URL(location, origin);
    const expected = target(url, this.base);
    if (!expected) return location;
    const id = randomUUID();
    const issued = new Date(this.now());
    const expires = new Date(this.now() + this.ttlMs);
    await database.query(
      'INSERT INTO "identity_challenge" ("id","kind","auth_id","profile_id","challenge","issued","expires","used") VALUES (?, ?, ?, ?, ?, ?, ?, false)',
      [
        id,
        expected.kind,
        expected.authId,
        expected.profileId,
        expected.challenge,
        issued,
        expires
      ]
    );
    url.searchParams.set('proofChallenge', id);
    return url.pathname + url.search;
  }
  //run the framework handler under the grant lock; consume only successful
  // sign-in challenges
  public async run(
    req: HttpRequest,
    res: HttpResponse,
    ctx: HttpServer<Config>,
    handler: (props: HttpProps) => unknown | Promise<unknown>
  ) {
    //ordinary auth routes still delegate to the installed framework handler
    const expected = target(req.url, this.base);
    if (!expected) {
      //run credential verification only after the grant passed its binding
      // checks
      await handler(ctx.props(req, res));
      await this._issueRedirect(req, res);
      return;
    }
    //Serialize on the stored row. The store adapter keeps this transaction
    // on the current request while other HTTP requests wait for its
    // completion.
    await this.database.transaction(async (connection) => {
      const database = new Engine(connection);
      const id = req.url.searchParams.get('proofChallenge') || '';
      //Generated Datetime columns are timestamp without timezone. Compare
      // their UTC epoch in SQL rather than letting the host timezone reparse
      // a string.
      const rows = await database.query<Challenge>(
        'SELECT "id","kind","auth_id" AS "authId","profile_id" AS "profileId","challenge",EXTRACT(EPOCH FROM "expires") * 1000 AS "expiresMs","used" FROM "identity_challenge" WHERE "id" = ? FOR UPDATE',
        [ id ]
      );
      //the stored grant must match the redirect’s identity fields and
      // remain unused and unexpired
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
            'This sign-in challenge expired or was already used. Start sign-in again.'
          )
          .statusCode(410, 'Gone');
        return;
      }
      await handler(ctx.props(req, res));
      const hasIssuedSession =
        res.session.revisions.get(Session.key)?.action === 'set';
      const next = res.headers.get('Location');
      const hasNextChallenge =
        typeof next === 'string' &&
        !!target(new URL(next, req.url.origin), this.base);
      //consume only a successful session or follow-up challenge; wrong
      // codes can be corrected
      if (hasIssuedSession || (res.redirected && hasNextChallenge)) {
        await database.query(
          'UPDATE "identity_challenge" SET "used" = true WHERE "id" = ? AND "used" = false',
          [ id ]
        );
        await this._issueRedirect(req, res, database);
      }
      // Failed verification leaves the grant unconsumed for a corrected code.
    });
  }
  //attach a stored challenge grant only to a recognized sign-in redirect
  private async _issueRedirect(
    req: HttpRequest,
    res: HttpResponse,
    database = this.database
  ) {
    const location = res.headers.get('Location');
    if (
      res.redirected &&
      typeof location === 'string' &&
      target(new URL(location, req.url.origin), this.base)
    ) {
      res.headers.set(
        'Location',
        await this.issue(location, req.url.origin, database)
      );
    }
  }
};
