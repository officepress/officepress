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
| [`app`](plugins/app/plugin.ts) | Owns the single Reactus rendering bridge, safe page props, public-file serving and the guarded account notification feed shared by every screen. |
| [`store`](plugins/store/plugin.ts) | Chooses and closes the PostgreSQL or PGlite connection and registers Stackpress SQL once the generated client is available. |
| `stackpress-schema` | Supplies Stackpress Idea generation and the generated-client loader; schema generation remains separate from database installation and rendering builds. |
| [`auth`](plugins/auth/plugin.ts) | Owns authentication, session/caller projection, CSRF and account routes so feature plugins can require a verified caller. Its public service key remains `identity`. |
| [`theme`](plugins/settings/theme/plugin.ts) | Owns app-scoped brand and colour state, which can be unavailable without removing authentication or the frame. |
| [`about`](plugins/settings/about/plugin.ts) | Owns release lookup and Upgrade Instructions display separately from navigation and theme. |
| [`actions`](.fixtures/actions/plugin.ts) | Isolates a revision-checked action/Undo fixture used to prove domain-action behavior; adopters may omit this example. |
| [`agent`](plugins/agent/plugin.ts) | Owns the server-side model adapter, run records and read-only app context, leaving domain actions to adopting apps. |
| [`shell`](plugins/settings/shell/plugin.ts) | Owns the shared app/settings routes and responsive frame after the other services have had a chance to register. |
| [`.fixtures`](.fixtures/plugin.ts) | Registers config `database.populate` sample events only for an explicitly disposable development database. |

## Run locally

Tested runtime: Node **24.21.0**. Stackpress ecosystem packages stay on **0.10.8**.

```bash
npm ci
npm run generate
npm run typecheck
npm run build
# Only a new, empty database may be initialized:
OFFICEPRESS_DISPOSABLE_PROOF=1 npm run init:proof
npm run dev
```

Open `http://127.0.0.1:3020`. Disposable fixture users are
`admin@officepress.test`, `member@officepress.test`, `other@officepress.test` and
`readonly@officepress.test`; their public fixture password is
`OfficePress-proof-123!`. Never seed these accounts in a real app database.

`config/officepress.ts` explicitly loads repository-root `.env`; no credential
file is copied here. The provided `OPENROUTER_TEST_KEY` stays server-only. SMTP
credentials are not used by P-01. Session signing and database identifier
seeds are separate settings. Set private, persistent `PROOF_SESSION_SEED`
(32+ characters) and `PROOF_DATABASE_SEED` when adapting this proof; the local
session default is random on each process start, and the database default is
explicitly disposable. Never rotate the database seed without a data migration.

The current development database is `.build/database/pglite`. Sample accounts,
items and notices are declared through config `database.populate` and installed
only by the explicit disposable initializer. Use `PGLITE_DIR` to select another
temporary local database. Production serving
defaults to PostgreSQL and requires `DATABASE_URL`; it never falls back silently.
For deliberate local verification of built assets only:

```bash
DATABASE_ADAPTER=pglite npm run serve
```

Code generation writes `.build/client`; it neither installs nor resets a
database. Building writes rendering/assets. Ordinary server startup never seeds
or migrates data. Initialization refuses nonempty databases. Proof runs remove
their own closed scratch databases while retaining receipts. Do not delete the
entire `.build` directory to clean a database.

## Reproduce the proof

```bash
npm run generate
npm run typecheck
npm run build
npm run prove
npm run prove:config
npm run prove:agent-context
```

Chrome must be installed. `prove` creates a unique empty PGlite database and
runs real identity handlers, SQL contracts and browser interactions, including
bounded real OpenRouter calls and a live GitHub Releases query. `prove:config`
uses the freshly built renderer and checks restart persistence and configuration
absence. The existing optional `npm run prove:postgres` command uses Docker and
a disposable PostgreSQL 17 container; cross-engine compatibility is not a
required development proof. No script targets a production database or sends email.

`prove:agent-context` runs both real configured models with the action-example
plugin disabled and no domain records. It checks identity/CSRF/model guards,
run replay and account isolation against a fresh PGlite database.

Timestamped `receipts/` retain failures as well as successful runs. Browser
screenshots are under `output/playwright/`. Reviewed, self-contained evidence is
retained in [verification](verification/README.md). Development switches
`npm run prove -- --ui` and `--ui --settings` omit identity checks or earlier UI
checks; their receipts must not be used as full acceptance evidence.

The [round 2 styling review](reviews/r002-kit-alignment/notes.md) records the
subsequent alignment with the local OfficePress kit, desktop/mobile screenshots
and fresh identity checks. It preserves the earlier functional receipts and
distinguishes those runs from the current visual review.

The [round 3 generic-shell review](reviews/r003-generic-shell/notes.md) supersedes
the sample workspace UI: one desktop header toggle, branded mobile navigation,
and an agent panel that expands across the content area and restores to its dock.

## Copy and adapt

| Copy | Responsibility and contract |
|---|---|
| `plugins/app`, `bootstrap`, `config`, build/serve scripts | Single renderer, safe serialized props, CSP, public assets, app-owned notification routes/components/schema and restart-based module selection. Notifications retain per-account read state and All/Mentions/Agent filtering; no live provider/subscription is claimed. Built serving bypasses upstream Vite middleware creation. |
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

The [round 4 settings review](reviews/r004-settings-alignment/notes.md) applies
menu/account copy feedback and aligns About and Theme with the native design's
card composition. It records current checks, screenshots and remaining bounded
adaptations for manual review.
