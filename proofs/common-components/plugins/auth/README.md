# Stackpress identity bridge

This plugin brands the **installed `stackpress-session@0.10.8` handlers** using the app’s single Reactus renderer. It owns account boundaries and safe caller projection; feature plugins consume `ctx.plugin<Identity>('identity')` and keep their own permission checks.

The handler modules are not exported by the package, so `framework.ts` resolves its installed package root and imports the pinned ESM files. Recheck this seam on an upgrade. Do not register the aggregate `stackpress-view` plugin alongside the app renderer.

## Services and lifecycle

- `config` requires database, generated client, CSRF and a session seed of at least 32 characters. It registers `session` and `identity`.
- `listen` and `route` return before registering protected behavior when identity is missing. Routes also require the renderer.
- `identity.ready()` checks the generated profile/auth listeners. `caller(req)` verifies the framework JWT, enforces an eight-hour session age, then reads the current active Profile, roles and credential presence. Its return value is `{id,name,roles}` or `null`. `identity.ts` shares the pending lookup within one request using weak request keys; every new request reloads identity. Account POST handlers call `invalidate(req)` before projecting their response, so writes cannot leave stale name/role/credential props. Internal account writers must do the same when they reuse a request.
- `requireUser` and `requireAdmin` return that caller or set 401/403 and return `null`. `csrf(req,res)` validates the submitted token. `publicProps` projects `{user,csrf}` only.
- Authentication and generated model operations remain distinct: resolving a generated event does not imply HTTP authorization.
- Account routes, challenge matching and auth-page links use `auth.base` (default `/auth`). Sign-out is POST with CSRF. Neither the unused `auth-signup` event nor public signup/phone/SMS routes are registered; disposable fixtures still use framework AuthActions directly.

The config **must set `database.seed` explicitly**. Built-in AuthActions defaults to `abc123`, while generated auth events default to an empty string. Mixing defaults produces incompatible encrypted identifiers. Keep the same seed across restart; changing it is a data migration, not a theme/config toggle. Session signing has a separate private seed.

One page-preparation helper supplies the auth base, page, kit family and optional theme. Shared profile fields preserve the account/edit pages’ existing field order. Auth and account pages use the configured kit family and light/dark preference. When the optional theme service is enabled, handlers project only its validated brand/logo/colour fields and revision. Saved app branding therefore carries through to sign-in/account pages; the full Stackpress config never becomes a browser prop.

## Verified integration adapters

These adapters live in app code and do not modify installed packages:

1. `schema-adapter.ts`, called by the auth plugin’s `idea` listener, removes only the unresolved Profile `applications`/`sessions` relations when their external API models are absent. The package’s Idea file references them without defining the models, causing generated selectors to query columns the installer does not create. The exact imported schema remains in `node_modules`; the app does not invent replacement identity models.
2. `cookies.ts` preserves all cookie revisions. Ingest 0.10.8 otherwise overwrites `Set-Cookie` while iterating, losing the session when CSRF deletion follows it. A final response header array uses the normal dispatcher’s final-header pass.
3. The route wrapper supplies CSRF checks missing from profile/password/TOTP-removal handlers, forbids account POST writes by the proof’s READONLY role, makes TOTP removal read-only on GET, and validates an authenticator’s ownership before removal. The package search can return an empty success; that must not authorize deletion by id.
4. HTTP input cannot supply internal `2fa`/`password` event overrides. Redirects must remain local. Account summaries remove the TOTP token; only the authenticated setup page renders its provisioning secret.
5. The account-update wrapper supplies an empty omitted phone value because the built-in normalizer otherwise calls `.trim()` on undefined. This does not add phone/SMS UI.
6. `challenges.ts` wraps the unchanged challenge verification handlers with a persisted `IdentityChallenge` grant. A random identifier accompanies the framework URL, expires after five minutes, and is consumed on successful verification while its database row is locked. Concurrent redemption permits one success. Invalid codes leave the grant usable for a corrected code. Issue time comes from the server; UTC SQL epoch comparison avoids host-timezone reinterpretation of generated timestamp columns. Future email delivery must issue its email-code/link grant before composing the outgoing link.

## Actual scope and gaps

Email/password, username/password, account profile, password change, authenticator setup/challenge/removal and Profile CSV export invoke built-in handlers. The owner’s dedicated authenticator provisioning page necessarily contains its QR/secret; ordinary account pages, logs and receipts must not.

The package has no forgot-password handler. The branded forgot-password/check-email screens explicitly say recovery is unavailable; they do not claim an email was sent. OTP/magic delivery is also unavailable in this proof, while the actual verification routes remain available for malformed/consumed challenge tests. Custom lost-authenticator recovery, SMS and recovery codes are outside scope.

The built-in remove handler intends to remove one installation’s Auth rows and Profile. In the tested generated integration, Auth rows become inactive (soft removal), while Profile stays active: reusing the populated detail response makes the generated profile-remove guard skip the operation. The proof invokes it only on a disposable removal fixture and records this defect. The identity boundary rejects old sessions when no active credentials remain. This handler is not exposed as product deletion. It neither purges app-owned records nor coordinates deletion across apps. Product-wide delete remains disabled until a coordinator exists. These production product concepts remain separate.

## Current-app purge

The app plugin owns [its purge implementation](../app/purge.ts) and registers the browser-safe `AppData` service contract from `plugins/app/types.ts` under `app-data`. Auth consumes only `ready()` and `purge(verifiedCallerId)`; it has no table map or direct deletion implementation. The app fixes `officepress.appId` and checks the database, generated client and four generated data listeners before the action is available. This proof’s explicit ownership map deletes the authenticated user’s rows from **shell_item, shell_operation, shell_notice and shell_agent_run**, restricted by both the configured `officepress.appId` and the verified caller id. Those two scope values never come from submitted fields. All four deletes run in one transaction through the serialized store connection.

`POST /auth/account/security/purge` requires an authenticated writable role, valid CSRF and the exact typed confirmation `Purge`. GET only renders the confirmation screen. An absent or unready `app-data` provider disables POST registration while GET explains availability. The provider also rechecks its services before deleting anything. This does not invoke a generic framework database purge or accept table names from callers.

Profile, Auth, identity challenges, company theme, other users’ records and rows for other apps remain intact. The tests create current-app, other-app and other-user fixtures through generated events, exercise denied/confirmed requests, inspect persisted rows and sign in again afterward. Adopters must replace the four-table ownership map with their own reviewed domain mapping rather than copying assumptions about business/audit data.

The original framework-only run retained failed replay/expiry observations: `Date.toString()` drops milliseconds from its consumed hash, permitting same-second reuse, and there is no wall-clock expiry. The app-owned ledger closes both gaps without replacing password/TOTP verification. The final tests exercise same-second replay, a clock-advanced expired real grant, concurrent redemption, and correction after a wrong code. Their scope is this app’s boundary, not a claim that the upstream package was changed.

## Reproduction

Generate and build first, then run the managed `yarn test` command in the
[proof README](../../README.md). `tests/plugins/all.test.ts`
imports the local `plugins/auth/tests/contract.ts`; both default `/auth` and
custom `/access.v1/team` routes exercise actual framework handlers against fresh
isolated databases. Checks include concurrent request reuse, invalidation after
account writes, next-request role/activation changes, challenge expiry/replay,
cookie preservation, and app-owned purge isolation/unavailable providers.

New isolated proof databases belong under `.build/database/` and are removed
after connections close; receipts persist in `tests/evidence/receipts/`, including
`identity-custom-base-latest.json` (and `identity-default-latest.json` in the
common-components proof). Never initialize an existing application database.

The fixture password in `fixtures.ts` is public test data, not a deployment credential. The real root `.env` values are never copied into fixture rows, browser props or receipts. A top-level runner can import `proveIdentity(baseURL, ctx)` to test through its own live bootstrap connection.
