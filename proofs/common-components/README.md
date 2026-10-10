# OfficePress common-components proof

A separate Stackpress application copied from the user-approved [app shell](../app-shell/APPROVAL.md).
It has four working left-menu entries: Workflows, Messages, Forms
and Chat View. Automations belong to individual workflow stages; open a stage’s
lightning control or its Automations button in the workflow editor. The shell
implementation and database are independent of this proof; devmetrics assigns
each review its own port.

This is a reusable implementation example awaiting its own manual review. It
does not certify production readiness of an adopting app. See the [review notes](tests/evidence/reviews/r001-common-components/README.md)
for the original evidence, bounded adapters and known limits. The latest
[workflow feedback round](tests/evidence/reviews/r002-workflow-feedback/notes.md) supersedes the
original top-level Automations entry and card-details layout. The
[workflow simplification round](tests/evidence/reviews/r003-workflow-simplification/notes.md)
replaces workflow versions/entry restrictions with Draft/Published and any-column
movement, adds the workflow list and simplifies stage automations.

## Why this proof exists

The approved [app-shell proof](../app-shell/README.md) establishes the shared
runtime. This separate app tests whether responsibility-owned feature plugins
can contribute routes, navigation, schemas and contextual panels while optional
services can be absent. It gives adopters a working integration and copy path
without changing the shell proof or its review database.

## Stackpress plugins and why each exists

These are all 16 entries in this proof's `package.json` `plugins` list, in load
order. The first shared units come from app-shell; the feature units add the
reusable capabilities described in the [adoption table](#features-and-adoption-units).
Automations is a plugin even though its UI is reached through a workflow stage.

| Plugin | Why it has its own boundary |
| --- | --- |
| [`app`](plugins/app/plugin.ts) | Keeps one Reactus renderer, safe page props, public-file handling and the guarded account notification feed for all routes. |
| [`store`](plugins/store/plugin.ts) | Selects and closes the PostgreSQL or PGlite connection and registers Stackpress SQL after the generated client is available. |
| `stackpress-schema` | Generates and loads the composed Idea client without tying generation to database installation or UI builds. |
| [`auth`](plugins/auth/plugin.ts) | Delegates authentication to Stackpress and supplies live caller/role checks, session and CSRF boundaries used by the feature plugins. Its public service key remains `identity`. |
| [`theme`](plugins/settings/theme/plugin.ts) | Owns app branding and colour preferences independently of feature state. |
| [`about`](plugins/settings/about/plugin.ts) | Owns release checks and Upgrade Instructions display. |
| [`actions`](.fixtures/actions/plugin.ts) | Retains the shell's isolated action/Undo fixture; it is not required by the new domain features. |
| [`agent`](plugins/agent/plugin.ts) | Retains server-side model runs and read-only app context without adding domain AI tools. |
| [`mail`](plugins/mail/plugin.ts) | Isolates bounded SMTP configuration and handoff so Messages and Chat still work in reduced mode without it. |
| [`workflows`](plugins/workflows/plugin.ts) | Owns workflow/card/stage data and routes, with a public service for stage Automations. |
| [`automations`](plugins/automations/plugin.ts) | Owns rule definitions, event matching, scheduling and run checkpoints; it depends on Workflows but can be disabled separately. |
| [`templates`](plugins/templates/plugin.ts) | Owns reusable message definitions, immutable publications, variables and example-send history independently of Mail. |
| [`forms`](plugins/forms/plugin.ts) | Owns the form builder, published definitions, submissions and revocable respondent links. |
| [`chat`](plugins/chat/plugin.ts) | Owns conversation state, drafts, requests and refresh behavior; Templates and Mail are optional integrations. |
| [`shell`](plugins/settings/shell/plugin.ts) | Collects contributed navigation/routes and renders the shared frame and contextual details dock. |
| [`.fixtures`](.fixtures/plugin.ts) | Registers config `database.populate` events for explicitly disposable development sample data. |

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

Workflows, Messages, Forms and Chat contribute their own `views/index.tsx`
entrypoints through the Shell navigation contract. Shell owns common HTTP page
preparation and exports Frame/Head through its browser-safe `client.ts`; the
frame receives the feature component instead of importing a domain map.
Automations remains a workflow panel and starts its scheduler only from guarded
`listen`. The normal suite also verifies the four built views in Chrome, shared
details interaction and a 390px workflow render; screenshots stay under
`tests/evidence/playwright/`.

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

## Features and adoption units

| Plugin | What to try | Required public dependencies |
| --- | --- | --- |
| [Workflows](plugins/workflows/README.md) | Workflow list, Draft/Published, board, any-column movement, stages/tasks, elapsed SLA, comments and text attachments | identity, database, generated workflow models |
| [Automations](plugins/automations/README.md) | Rules, all/any conditions, timing, ordered actions, dry run and run history | workflows, identity, database, generated automation models |
| [Messages](plugins/templates/README.md) | Message list, detail/update pages, variables, HTML/plain text editors, immutable publications, example email | identity, database, generated template models; mail optional |
| [Forms](plugins/forms/README.md) | Forms list, name/save, canvas/settings, reorder/duplicate, preview, responses and revocable links | identity, database, generated form model |
| [Chat View](plugins/chat/README.md) | Conversations, details, notes, draft, status, template insertion, live/email refresh | identity, database, generated chat models; templates/mail optional |
| [Mail](plugins/mail/README.md) | One bounded SMTP handoff and its accepted/error result | server-only mail configuration |

The shell owns rendering, navigation contributions and the one-active-mobile-panel
contract. Its public `component-navigation` registry is created during config;
features add menu entries only after their route-phase dependency checks. Each
feature has a browser-safe entry component accepting `{csrf, user, path}`.
Workflows additionally receives the checked `automations` capability. Its stage
screen mounts the documented Automations entry with `{workflowId, stageId, onBack}`.
Workflows and Chat use `usePanels()` from the shell for contextual details; the
resizable dock spans the viewport height, with its own scrolling, expand/collapse
and close controls. Stackpress’s Frui/Toastify notifier is mounted once by the shell. A disabled feature registers no
feature routes/navigation; disabling workflows also disables automations. An
absent mail or templates adapter leaves the rest of Chat usable.

Choose plugins with `OFFICEPRESS_DISABLED_PLUGINS=automations,mail` or the
`officepress.features` config. Apply activation changes by restart. Disabling
preserves the schema and records; removal requires an explicit migration.
Agent and Notification settings remain in Stackpress config. Notifications are
owned by `app` (routes, popover and `ShellNotice` schema); use
`OFFICEPRESS_NOTIFICATIONS=off` and restart to disable the feed while preserving
its stored records. There is no separate notifications plugin selection.

To adopt: copy the approved shell dependencies and the selected plugin folders,
their stylesheet files, local fonts/icons/kit assets, and documented public
contracts. Compose their small Idea files in the adopter's root schema, register
plugins in dependency order (see package.json), generate, review/apply migrations,
then build. Adapt business labels, fields, authorization and provider interfaces
in that copy. Do not import this sibling proof at runtime or copy `.build`,
receipts, credentials or fixture accounts into production. Every
implementation input needed to run is contained in this directory, apart from
installed dependencies and optional provider credentials.

## Verify

[Test evidence](tests/evidence/README.md) uses `tests/evidence/playwright/` for
browser captures, `tests/evidence/verification/` for retained reports, and
`tests/evidence/receipts/` / `tests/evidence/reviews/` for run results and reviews.


```sh
yarn typecheck
yarn build
devmetrics start --summary "Component contract tests" -- 'PORT={port} yarn test'
```

`tests/plugins/all.test.ts` imports all six component plugin contract modules;
workflow and automation suites import their nested task, assignment, card-event
and edge-case tests. Plugins without a test directory need no empty placeholder.
The suite creates an isolated empty PGlite database, exercises real HTTP and
restart/absence contracts, and closes listeners/workers/database before cleanup.
Authorization/CSRF, validation, atomic conflicts, legacy workflow compatibility,
mutable status and immutable form/template/automation history remain covered.
Receipts keep source hashes, results and limitations, including failures.

An explicitly requested live SMTP campaign can use
`OFFICEPRESS_SMTP_TESTS=1` with the same managed `yarn test` command. It sends
exactly one template example and one Chat email to the designated
`MAIL_TEST_EMAIL`; ordinary tests use a controlled transport and send no email.
Root `.env` supplies `MAIL_TEST_HOST`, `MAIL_TEST_PORT`, `MAIL_TEST_EMAIL`,
`MAIL_TEST_USER` and `MAIL_TEST_PASS`. Credentials never enter bundles or receipts.
SMTP acceptance does not establish mailbox delivery; there are no automatic
retries or delivery reconciliation.

The inherited agent can read app information. This proof adds no AI tools for
the new domain features and does not repeat model acceptance tests. The app-shell
identity recovery/account-deletion limits and adopter-specific purge map remain
explicit in its identity contract. An independent consumer/P-06 proof and a
production-scale data/provider architecture remain separate work.

## Latest workflow review

[Round 4](tests/evidence/reviews/r004-workflow-assignees-sla/notes.md) adds multiple card/stage
assignees, avatar-only cards, elapsed SLA progress bars, stage settings shortcuts,
and draft-preserving Automations navigation. Its isolated local proof passed
49 checks; typecheck, build and desktop/mobile browser checks passed. This is
reviewable local proof evidence; common-components approval remains pending.

[Round 5](tests/evidence/reviews/r005-card-details-toolbar/notes.md) refines card details with
Todo, the stage selector below its checkboxes, and a live SLA bar/due label above
Files. It also fixes toolbar wrapping, uses an arrow-only back button and Edit,
and removes the designer breadcrumb. Typecheck/build and browser checks passed.

[Round 6](tests/evidence/reviews/r006-dynamic-stage-tasks/notes.md) makes current-stage tasks
dynamic in backend reads and saves, preserving surviving completion and removing
stale copies. Card titles replace REQUEST/ID, with grips on the left; empty
checklists have no progress count. The isolated proof passed 54 checks, with
typecheck/build and browser verification; existing review data was preserved.

[Round 7](tests/evidence/reviews/r007-card-event-automations/notes.md) replaces automation publishing
with Draft/Active/Paused, adds card-action events, typed conditions, seven supported
actions and working run settings, connects stage forms and template messages, and
applies the stage/Form Builder layout corrections. Task data remains dynamic by
stage. Message tests use a controlled transport and do not send real email.

## Latest Chat View review

[Round 8](tests/evidence/reviews/r008-chat-messenger/notes.md) uses the Inbox r015 messenger
shape with current OfficePress colors: compact conversation previews, rounded
bubbles with external sender/time labels, a slim composer and on-demand details.
Drafts, notes, templates, status and existing provider boundaries remain intact.
Typecheck/build, 62 contract/HTTP checks and desktop/mobile browser checks passed.

[Round 9](tests/evidence/reviews/r009-message-requests/notes.md) corrects the missing Messages
and Requests navigation, adds persisted request acceptance/block/delete/undo,
and makes app-sidebar hover/active backgrounds reach both edges. Existing
conversations remain in Messages. The 64-check suite and desktop/mobile checks
passed; request sender recognition and provider integrations remain bounded.

[Round 10](tests/evidence/reviews/r010-request-list/notes.md) removes subjects and action buttons
from request list cards, retaining those controls in the full preview. Typecheck,
build and browser verification passed.

## Latest Forms review

[Round 11](tests/evidence/reviews/r011-forms-list-drag/notes.md) starts on a forms list with direct
editor links, removes Reload and fixes question dragging with pointer capture.
Typecheck, builds, the 64-check suite and browser save/reopen verification passed.

[Round 12](tests/evidence/reviews/r012-forms-save/notes.md) renames navigation to Forms/Messages,
replaces the editor's back/title row with Form Name and Draft/Active fields,
and provides one Save action for edits and status. Active saves retain immutable
response history. Typecheck, builds, 66 checks and browser save/reload checks passed.

[Round 13](tests/evidence/reviews/r013-forms-toolbar/notes.md) removes the list Status column
and editor Status selector, moves Save beside Form Name and uses Update Form as
the editor heading. Save makes the form available for responses. Typecheck,
build, 66 checks and browser activation/reopening checks passed.

## Clean page routes

[Round 14](tests/evidence/reviews/r014-clean-paths/notes.md) makes each screen addressable directly.
Messages starts on a list; clicking a message row opens its update form.

| Path | Screen |
| --- | --- |
| `/form/search` | Forms list |
| `/form/update/:id` | Form editor |
| `/message/search` | Messages list |
| `/message/detail/:id` | Read-only saved message content |
| `/message/update/:id` | Message editor |
| `/workflow/search` | Workflows list |
| `/workflow/create` | New workflow editor |
| `/workflow/detail/:id` | Workflow board |
| `/workflow/update/:id` | Workflow editor |

Feature plugins contribute their page paths only after dependency checks; the
shell owns authentication and rendering. Old `/forms`, `/forms?form=<id>`,
`/message-templates` and `/workflows` URLs redirect to their clean equivalents.
Existing API endpoints, respondent links and Chat routes remain available.
Typecheck, builds, 67 checks and browser navigation/save/reload checks passed.

## Latest Messages review

[Round 15](tests/evidence/reviews/r015-message-editor/notes.md) removes Channel/Viber controls and
the Message content header. Separate HTML and Plain text editors, matching previews
and saved-content tabs preserve both alternatives. Existing messages remain
compatible; the server and preview apply the same restricted HTML policy.

[Round 16](tests/evidence/reviews/r016-message-wysiwyg/notes.md) makes HTML a WYSIWYG editor with
a Source code toggle, retained formatting/variable selections and native undo.
It also removes View message from the update-page header.

Current script migration checks: [Yarn and CLI verification](tests/evidence/verification/yarn-verification.md), including command outputs, managed HTTP checks and final test results.

## Auth integration refinements

The test aggregator runs the local [auth contract](plugins/auth/tests/contract.ts)
under both default and custom auth bases, independently of domain tests. The
[identity service](plugins/auth/identity.ts) shares caller lookups within each
request and invalidates after account writes. [App-owned purge](plugins/app/purge.ts)
provides the explicit four-table shell-data map; auth only checks the verified
caller, CSRF, writable role and typed confirmation before calling `app-data`.
Component business records remain outside that existing purge map. Adopters
must review their own domain scope. Version-specific auth guards remain in place.

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
policy. The 2026-10-10 refactor removes the earlier page-factory adapters and runtime workflow subscription wiring. Routes load default actions directly; reusable business operations use authenticated named Stackpress events. Workflow integrations use the committed `officepress-workflow-transition` event at priority -100.

Current all-proof guideline alignment and fresh checks: [2026-10-10 refactor verification](../app-shell/tests/evidence/verification/all-proofs-guideline-refactor.md).
