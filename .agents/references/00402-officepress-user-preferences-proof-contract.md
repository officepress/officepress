# User Preferences proof implementation and adoption contract

Owner: [Shared app experience](../context/shared-app-experience.md). Load when
copying, changing or verifying the account preferences capability in the maintained
[app-shell](../../proofs/app-shell/README.md) and
[common-components](../../proofs/common-components/README.md) proofs.

## Authority and scope

The 2026-10-20 user request explicitly asks both proofs to adopt the
[OPCD User Preferences creative direction](00399-officepress-opcd-user-preferences-direction.md).
Language and Time zone are separate cards, each with its own preview, Cancel,
Save, pending state, local error and conflict/reload recovery. The existing inline
theme and navigation controls remain separate. This is bounded proof adoption,
not deployment acceptance or an update to another app's scoped decisions.

Runtime pins remain Stackpress/Reactus 0.10.8, Node 24 and Yarn 1.22.22. No new
dependency, schema, migration or lockfile change is needed. PostgreSQL remains the
production target; verification uses fresh disposable PGlite databases.

## Ownership and execution boundaries

Both proofs contain `plugins/settings/preferences/`:

| Owner | Responsibility |
|---|---|
| `plugin.ts` | Guard identity/database/client providers; register a read service in config, authenticated business events in listen and literal lazy API adapters in route. |
| `events/read.ts`, `events/update.ts` | Resolve the live caller, validate the requested section/value/revision and read or write only that account. |
| `pages/read.ts`, `pages/update.ts` | Adapt HTTP to events; PUT requires an authenticated caller and valid framework CSRF. |
| `storage.ts` | Project the account namespace and apply one atomic SQL patch with a section revision check. |
| `types.ts`, `client.ts` | Public state/service contracts and browser-safe exports/REST adapter. |
| `components/Provider.tsx` | Account choices plus post-hydration native defaults, available r22n catalog, effective locale/timezone and a date formatter. |
| `components/Preferences.tsx`, `Card.tsx`, `Navigation.tsx` | Native options/previews, independent controlled drafts/actions and in-page section navigation. |
| `tests/contract.ts` | Session/CSRF/input/ownership/conflict checks and real Chrome browser interactions. |
| Existing shell | Own the visible page, shared layout and menu availability after dependency checks. |

The provider must be mounted on the **actual Frame** above hook consumers. These
custom Reactus view entries render Frame directly; editing the unused app Provider
wrapper does not mount a new context. The first browser failure retained in local
receipts caught controls remaining disabled because they read the default context.
The regression waits for an existing, enabled selector, then saves/reloads choices.
This reinforces the existing [provider boundary and hydration guideline](00381-stackpress-views-and-browser-contracts.md);
it is a proof-specific adaptation, not a new prescribed Stackpress wrapper.

## Storage and conflict contract

`Profile.references.officepressPreferences` contains:

```json
{
  "language": { "value": "en-US", "revision": 1 },
  "timeZone": { "value": "Asia/Manila", "revision": 1 }
}
```

A missing choice reads as `{ "value": null, "revision": 0 }`. `null` means follow
the browser locale/device timezone on each page load; the detected value is not
written automatically. Shared native `Intl` formatting handles dates, time,
relative time, offsets and numbers. Illustrative design dates/locales are not
hard-coded defaults.

The namespace has no app ID: apps using the same identity/Profile database can
read the same account choices. These two proof installations have independent
databases; no synchronization service, federation or cross-installation update
protocol is demonstrated. The design's account-wide footer remains intended scope,
not evidence that separate databases synchronize.

A single bound SQL UPDATE patches one namespace key and compares only that card's
revision. It preserves sibling choices and unrelated metadata. Existing JSON/SQL
null metadata is normalized to an object for the patch. Runtime Profile stores
use JSON; cast to JSONB for PostgreSQL/PGlite JSON patch operators. Do not assume
that a metadata Hash is already stored as JSONB. This SQL is a reviewed local
adaptation around framework-owned Profile, not a framework-prescribed schema.

Caller IDs come only from live authenticated identity. Submitted caller/profile/
app IDs cannot choose another owner. All authenticated business roles, including
READONLY, may edit their personal locale/zone; this does not permit editing
framework profile/security fields or domain records. Account export naturally
includes Profile metadata; current-app data purge preserves account preferences.

## Routes and outcomes

- `GET /user-preference/update`: shared settings takeover page, Language and Time
  zone anchors, Back to App, no domain aside.
- `GET /api/v1/user-preference/me`: own saved state only.
- `PUT /api/v1/user-preference/me`: `section`, `value`, `revision`, `csrf`.
- `officepress-preferences-read` / `officepress-preferences-update`: reusable,
  authenticated events. Web CSRF belongs to the page adapter; direct business
  dispatch still rechecks the caller and validates the operation.
- HTTP 401 rejects absent identity; 419 rejects bad CSRF; 422 rejects unsupported
  catalogs, invalid zones/sections/revisions; 409 rejects a stale section revision.
- A conflict keeps the draft visible and offers a real page reload, which fetches
  current revisions. Cancel resets only the local card without a network write.

Missing required providers, or disabling the preferences plugin then restarting,
removes its API/events/page/menu contribution. Stored choices remain. Restoring
the plugin after restart reuses them; no live unload or dependency graph is added.

## Presentation and adoption limits

The choices apply to preference previews, document language, configured r22n
catalog selection, About check dates and notification day grouping in the shared
frame. Only the existing English catalog is shipped. The picker is derived from
configured catalogs; it does not advertise unimplemented translations. Native
locale defaults can still format regional dates/numbers when English is the
available interface catalog.

Feature-specific timestamps in workflow/chat/forms/templates and automation
screens retain their existing formatting pending adopter integration with the
public localization hook. Scheduling, persisted instants, date-only semantics,
elapsed SLA duration and delivery clocks are unchanged. Do not reinterpret these
business rules from a static timezone preference or its example helper copy.

Defaults are detected after hydration to avoid server/browser locale mismatches.
The language/timezone sample previews use the current instant and a three-day
sample due instant; these are illustrative displays, not actual scheduled work.
Save is independently disabled when unchanged/pending, errors are local, and
success messages use status regions. Native labels/selects and section anchors
support keyboard use. Desktop light and 390px dark layouts are browser-checked.

The proof sprites add the missing `languages` and `clock` symbols from Lucide
revision `c29c276f16590cf017126671535ad8c792be64d8` (ISC), preserving 24-unit,
currentColor stroke semantics and the existing notices. These are proof asset
extensions; the archived kit/native source is not modified.

## Verification and evidence

Run both proofs' `yarn typecheck`, `yarn build`, and managed `yarn test` with Node
24. The existing shared-event contract requires the documented offline placeholder
agent key even though these checks make no model calls. Use
`OPENROUTER_TEST_KEY=unused-offline-proof-key` only for the disposable test run.
Run listener-owning tests sequentially through devmetrics; never bind a test
server or an additional HMR port directly. The source rendering configs explicitly
prebundle `r22n` with the hydration imports to avoid late optimizer reloads.

New contracts cover guest/caller injection, CSRF, invalid locale/zone/revision,
per-section stale/concurrent saves, other-account and unrelated-metadata retention,
JSON-null namespace compatibility, native defaults, independent save/cancel,
read-only personal edits, actual stale-conflict/reload recovery, reload persistence,
desktop/mobile rendering and console/page errors. Existing restart campaigns check
physical database close/reopen and disabled dependencies; common-components still
runs its feature browser and source-rendering campaigns.

Fresh receipts, screenshots and the mandatory post-verification code/style audit
are retained under each proof's ignored `tests/evidence/` folders. Review the
commands, hashes and limitations in those files before repeating a pass claim.
Production PostgreSQL, additional translation catalogs, cross-installation sync
and real model/SMTP integration remain outside this preference campaign. No
source deployment, Git commit/push or MCP reindex is implied by the implementation.

## Fresh bounded verification — 2026-10-20

Both proofs pass Node 24.21.0 / Yarn 1.22.22 typechecks, rendering builds and their
required managed suites. App-shell's source campaign records 58 checks, and its
built/restart/configuration campaign 45; common-components records 108 main checks
and 12 development checks. Preference contracts run in source and built modes in
both copies after clearing only the disposable Vite cache. All nine AST pattern
regressions pass. The optional app-shell live-model campaign remains skipped.

Receipts: app-shell `2026-10-20T12-20-23-336Z` and
`2026-10-20T12-20-31-683Z`; common-components `2026-10-20T12-22-00-190Z` and
`develop-2026-10-20T12-22-14-090Z-2f60248c-831f-4d33-99ef-34a40a7dd396`.
Their source/build fingerprints and limitations are retained under the proof's
`tests/evidence/receipts/`; reviewed desktop/mobile captures are under
`tests/evidence/playwright/`, with per-file code audits in
`tests/evidence/reviews/user-preferences-2026-10-20/notes.md`.

Separate existing KB failures remain: 31 missing historical proof-receipt links
and the OPCD archive/manifest checksum mismatch. The archive is unchanged from
Git HEAD and passes ZIP integrity; this task does not repair its snapshot or
checksum. Stackpress source ingestion passes (105 sources / 147 sections). The
MCP index is unchanged; implementation does not authorize another refresh.
