# P-01: OfficePress app shell

A runnable Stackpress 0.10.8 proof, copied from the maintained boilerplate. It
keeps one Reactus renderer with app-owned notifications and separates identity,
theme, About and the agent adapter into independently guarded plugins. The default shell
has an empty app-content area and non-clickable menu examples; it supplies no
workspace, cards or other mandatory business feature.

The app uses the Stackpress-native model runner tested by
[P-00](../agent-mode-compatibility/README.md). Both actual OpenRouter models are
supported: `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`. The default
agent exposes a read-only `read_app` action for app identity, version, available
features and permitted settings routes. Apps supply their own domain actions.
This is a bounded adoption example; it does not establish production readiness.

## Why this proof exists

OfficePress apps need a common authenticated frame and independently selectable
services before adding domain features. This proof tests the plugin boundaries,
startup dependencies and shared experience in one runnable app. The empty
content area leaves business navigation and records to an adopter. The separate
[common-components proof](../common-components/README.md) shows domain plugins
integrated with a copy of this shell.

## Stackpress plugins and why each exists

These are all 10 entries in this proof's `package.json` `plugins` list, in load
order. A plugin is a runtime responsibility; it need not have a visible page.
The [copy map](#copy-and-adapt) gives the detailed adoption contract.

| Plugin | Why it has its own boundary |
| --- | --- |
| [`app`](plugins/app/plugin.ts) | Owns the single Reactus rendering bridge, safe page props, public-file serving the guarded account notification feed shared by every screen and the app-owned data-purge service. |
| [`store`](plugins/store/plugin.ts) | Chooses and closes the PostgreSQL or PGlite connection and registers Stackpress SQL once the generated client is available. |
| `stackpress-schema` | Supplies Stackpress Idea generation and the generated-client loader; schema generation remains separate from database installation and rendering builds. |
| [`auth`](plugins/auth/plugin.ts) | Owns authentication, session/caller projection, CSRF and account routes so feature plugins can require a verified caller. Its public service key remains `identity`. |
| [`theme`](plugins/settings/theme/plugin.ts) | Owns app-scoped brand and colour state, which can be unavailable without removing authentication or the frame. |
| [`about`](plugins/settings/about/plugin.ts) | Owns release lookup and Upgrade Instructions display separately from navigation and theme. |
| [`actions`](.fixtures/actions/plugin.ts) | Isolates a revision-checked action/Undo fixture used to prove domain-action behavior; adopters may omit this example. |
| [`agent`](plugins/agent/plugin.ts) | Owns the server-side model adapter, run records and read-only app context, leaving domain actions to adopting apps. |
| [`shell`](plugins/settings/shell/plugin.ts) | Owns the shared app/settings routes and responsive frame after the other services have had a chance to register. |
| [`.fixtures`](.fixtures/plugin.ts) | Registers config `database.populate` sample events only for an explicitly disposable development database. |

## Plugin files and lifecycle

The plugins follow the installed Stackpress AI shape. Create only folders used
by the owning capability:

| Location | Responsibility |
| --- | --- |
| `plugin.ts` | Lifecycle wiring and dependency guards; route/view registration. |
| `pages/` | Default-exported HTTP actions: CSRF, web request adaptation, event calls and response/view formatting. |
| `events/` | Named business actions with caller/role validation, plus lifecycle, rendering/build and identity policy actions. |
| `views/` | Browser entrypoints composed from `components/`. |
| `components/` and `client.ts` | Reusable browser-safe bodies/layouts and explicit public exports. |
| `types.ts` and existing service/helper files | Public contracts and capability-owned domain logic. |
| `transform/` | Used generation logic: auth's early Profile schema normalization. |
| Plugin-local `tests/` | Behavior contracts; root tests aggregate and orchestrate them. |

Providers register in `config` after checking services and generated model
metadata. Generated SQL listeners exist during `listen`, so dependent callbacks
check them again before registering navigation, subscriptions or workers.
`route` independently checks readiness before binding page handlers and views.
The app owns the request renderer and the CLI build event. The auth adapter keeps
its existing early `idea` priority rather than becoming a later code emitter.
Existing schemas, HTTP paths and authorization contracts remain the same.

See the [refactor verification](tests/evidence/verification/plugin-structure-refactor.md)
for the completed checks and fresh receipts.

## Run locally

Use Node 24 and Yarn 1.22.22. Stackpress ecosystem packages remain pinned to
0.10.8. `yarn.lock` is the dependency lockfile; there is no npm lockfile.

```sh
yarn install --frozen-lockfile
yarn generate
yarn typecheck
yarn build
# First inspect the target: push can replace schema and data.
# Use these only for an intentionally disposable local proof database.
OFFICEPRESS_DISPOSABLE_PROOF=1 PGLITE_DIR="$PWD/.build/database/pglite" yarn push
OFFICEPRESS_DISPOSABLE_PROOF=1 PGLITE_DIR="$PWD/.build/database/pglite" yarn populate
devmetrics start --summary "Proof development review" -- 'PORT={port} yarn dev'
# Or preview the already-built assets:
devmetrics start --summary "Proof built preview" -- 'PORT={port} yarn preview'
```

Use the URL and stop time printed by devmetrics, and stop that assigned port
when finished. The proofs have independent databases and assigned ports.
Development disables the extra HMR listener; restart/reload after changes.
`dev:clean` removes only `node_modules/.vite`. No command deletes `.build`.

`config/develop.ts` configures source rendering, `config/build.ts` rendering
builds, `config/preview.ts` built local PGlite serving, and
`config/production.ts` production PostgreSQL serving. `config/client.ts` shares
the composed development generator. Each exports an awaited default bootstrap;
shared startup lives in `tests/bootstrap.ts`. Generation normalizes
identity schema through the auth plugin's `idea` listener and writes generated
client/revision metadata without applying database changes. `migrate` writes SQL
to `migrations/` (override `OFFICEPRESS_MIGRATIONS_DIR` for an isolated check).
`push`, `populate` and `purge` require an explicit disposable PGlite target.
Ordinary startup never installs, seeds, or migrates data. `push` is a framework
database command, unrelated to Git push, and may replace tables on first install.

Production `yarn serve` requires `DATABASE_URL`; it never silently falls back to
PGlite. Start it through devmetrics with `PORT={port}`. Root `.env` is loaded by
`config/officepress.ts`; credentials remain server-only. Keep private persistent
`PROOF_SESSION_SEED` (32+ characters) and `PROOF_DATABASE_SEED` when adopting;
never rotate the database seed without migration. Local public fixture accounts
are `admin@officepress.test`, `member@officepress.test`, `other@officepress.test`
and `readonly@officepress.test`, with password `OfficePress-proof-123!`.
Never use these accounts in production. Preserve existing review databases;
proof tests use fresh scratch directories and remove them after closing.

## Reproduce the proof

```sh
yarn generate
yarn typecheck
yarn build
devmetrics start --summary "Shell contract tests" -- 'PORT={port} OFFICEPRESS_FINAL_BUILD=1 yarn test'
# Explicit optional live browser and model campaign (requires Chrome/provider key):
devmetrics start --summary "Shell live model tests" -- 'PORT={port} OFFICEPRESS_FINAL_BUILD=1 OFFICEPRESS_LIVE_TESTS=1 yarn test'
```

`tests/plugins/all.test.ts` imports all existing plugin test modules plus the
fixture action contract, and runs the shared proof runners sequentially. The
normal suite covers identity, SQL, settings, compiled-browser hydration,
notification isolation, missing providers and persistence across restarts.
`OFFICEPRESS_LIVE_TESTS=1` adds the existing real OpenRouter/GitHub browser
campaign and action-free model context checks. Optional network checks are
reported separately; no email is sent by this proof. The identity suite also runs under a custom auth base, verifies request reuse
and post-write invalidation, and checks the app-owned purge provider. The
redundant standalone identity and PostgreSQL executable wrappers were removed; identity stays in the normal
suite, and cross-engine compatibility remains outside the required proof gate.

Timestamped `tests/evidence/receipts/` retain failures as well as successes.
Browser captures go in `tests/evidence/playwright/`; reviewed reports remain in
[verification](tests/evidence/verification/README.md) and `tests/evidence/reviews/`.
Old receipts preserve the commands and paths actually used at their run time.

The [round 2 styling review](tests/evidence/reviews/r002-kit-alignment/notes.md) records the
subsequent alignment with the local OfficePress kit, desktop/mobile screenshots
and fresh identity checks. It preserves the earlier functional receipts and
distinguishes those runs from the current visual review.

The [round 3 generic-shell review](tests/evidence/reviews/r003-generic-shell/notes.md) supersedes
the sample workspace UI: one desktop header toggle, branded mobile navigation,
and an agent panel that expands across the content area and restores to its dock.

## Copy and adapt

| Copy | Responsibility and contract |
|---|---|
| `plugins/app`, `tests/bootstrap.ts`, `config`, CLI manifest scripts | Single renderer, safe serialized props, CSP, public assets, app-owned notification routes/components/schema and restart-based module selection. Notifications retain per-account read state and All/Mentions/Agent filtering; no live provider/subscription is claimed. Built serving bypasses upstream Vite middleware creation. |
| `plugins/store` | Explicit PostgreSQL/PGlite connection, guarded Stackpress SQL registration and shutdown. This baseline owns one connection; its serializer prevents another request joining a transaction. A pooled adopter needs a transaction-bound connection instead. |
| Root `schema.idea`, `stackpress-schema` | Composed generated models and client loading. Keep generation separate from migrations; do not change composed models when disabling runtime plugins. |
| `plugins/auth` | Actual pinned Stackpress handlers, current caller/role checks, CSRF, cookie and schema adapters, expiring one-use challenges, and branded auth/account views. Read its [complete contract](plugins/auth/README.md). |
| `plugins/settings/shell` | Header, neutral app-content region, inert menu examples, app/settings layouts, per-app aside preference, expandable agent dock and one active mobile overlay with focus/scroll restoration. Feature plugins own real menus, content and any details panel. |
| `plugins/settings/theme` | App-scoped revisioned theme, local logo validation, derived foreground/surface tokens, safe preview/save/reset. Custom colours apply to the light palette; the family dark palette remains explicit. Brand/logo apply in both modes. |
| `plugins/settings/about` | Stable-version selection from configured GitHub Releases, five-minute cache, faithful Upgrade Instructions extraction and safe rendering/copying. No command execution. |
| `.fixtures/actions` | Separate domain-action proof fixture: owner/role checks, revision-checked rename, durable idempotency receipt and conflict-safe Undo. Neither shell nor agent depends on it. Omit it when copying the generic shell; retain its schema/data until an explicit migration if it was already installed. |
| `.fixtures/plugin.ts`, `config/fixtures.ts` | Disposable config population event and sample data; omit both from a production adopter. |
| `plugins/agent` | Configured server-only OpenRouter runner, read-only app context, durable run status, duplicate-run claims, cancellation and action results. No default card/record selection, arbitrary SQL, filesystem or external-message tool. |
| `public/styles/kit`, `public/icons.svg`, `public/logo.svg` | Local copies of the ingested OfficePress kit. React owns interactions; no imperative kit script mutates React nodes. |
| `public/styles/fonts.css`, `public/fonts/inter` | Bundled Inter font and license; auth and shell need no remote font service. Keep `shell.css` limited to app composition so it does not override kit-wide controls or typography. |

Copy the selected plugins, their Idea files and public assets into the adopting
app, pin required dependencies, retain a single rendering owner and compose
smaller schemas from `schema.idea`. Include the identity generation adapter
before generating. Update app identity/family and domain action schemas. Create
an explicit migration for existing databases instead of using proof install.
Run the relevant copied plugin contracts after modifying the code. P-06 remains
the separate clean-consumer adoption check; this directory is not that evidence.

Each plugin checks its own required services before registering routes or
contributions. Agent and Notification settings are server-owned Stackpress
configuration in `config/officepress.ts`, not settings tabs. Set
`OFFICEPRESS_AGENT=off`, `OFFICEPRESS_NOTIFICATIONS=off`, or use
`OFFICEPRESS_DISABLED_PLUGINS` for separate plugins and restart. Notifications
are part of `app`; disable their feed with `OFFICEPRESS_NOTIFICATIONS=off`, not
a separate plugin selection. Disabling preserves stored records.
There is no live unloading or automatic dependency graph validator.

## About policy

`OFFICEPRESS_RELEASE_REPOSITORY` defaults to this app's repository,
`officepress/officepress`. Read at most the first 100 releases; ignore drafts,
prereleases and malformed versions, and select the highest stable SemVer.
Manual admin checks bypass the five-minute cache. A cached read retains its
original check time. No unattended daily scheduler is implemented in this proof.

The section named exactly `Upgrade Instructions` supports ATX and Setext
headings, nested subsections and fenced code. Its bytes remain unchanged for
copying; raw HTML stays text, and only HTTP(S) links are interactive. Missing or
empty content is unavailable. Publishers own version applicability; a newer
version alone does not establish migration compatibility. Fixture releases are
clearly test data and are never published or offered as real upgrade guidance.

## Remaining product boundaries

The installed Stackpress package has no forgot-password handler. Email-code/link
delivery is also not configured here; those screens explicitly report
unavailability. This does not implement custom lost-authenticator recovery.

Current-app purge is an app-owned, confirmed operation with a fixed record map.
The framework removal handler was found to deactivate Auth records while leaving
Profile active in this integration; it is not exposed as product deletion.
OfficePress-wide account deletion requires coordination across app stores and
remains unavailable. These findings do not change the accepted production scopes
of Purge and Delete account.

The proof retains failed checks and their fixes. Its receipts distinguish real
provider results from fixtures, PGlite from PostgreSQL, and implemented behavior
from uncovered contract cases. Do not treat styled unavailable screens as a
completed recovery, delivery or cross-app deletion workflow.

The [round 4 settings review](tests/evidence/reviews/r004-settings-alignment/notes.md) applies
menu/account copy feedback and aligns About and Theme with the native design's
card composition. It records current checks, screenshots and remaining bounded
adaptations for manual review.

Current script migration checks: [Yarn and CLI verification](tests/evidence/verification/yarn-verification.md), including command outputs, managed HTTP checks and final test results.

### Lazy registration guard

Authored page handlers are registered with literal `() => import("./pages/read.js")`
callbacks; rendered views bind separately. Plugin entrypoints contain lifecycle
wiring/guards, while pages/events/views keep their own responsibilities.
From the repository root, run `node .agents/scripts/verify-stackpress-patterns.mjs`
and `node --test .agents/scripts/tests/stackpress-patterns.test.mjs` before the
affected proof's Yarn checks. Read the [KB lazy-registration contract](../../.agents/references/00374-stackpress-lazy-registration-and-pattern-maintenance.md)
for direct default actions, proof-only adaptations and recurring-pattern maintenance.

This proof is a reference for apps with their own custom modules. Source-prescribed
Stackpress patterns and OfficePress policy have different authority: config/listen/
route placement is prescribed; repeated ready helpers implement local dependency
policy. The 2026-10-10 refactor removes the earlier page-factory adapters. Routes load default actions directly; reusable business operations use authenticated named Stackpress events.

Current all-proof guideline alignment and fresh checks: [2026-10-10 refactor verification](tests/evidence/verification/all-proofs-guideline-refactor.md).
