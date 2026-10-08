# OfficePress common-components proof

A separate Stackpress application copied from the user-approved [app shell](../app-shell/APPROVAL.md).
It has four working left-menu entries: Workflows, Messages, Forms
and Chat View. Automations belong to individual workflow stages; open a stage’s
lightning control or its Automations button in the workflow editor. The shell implementation and database on port 3020
are independent of this proof on port **3040**.

This is a reusable implementation example awaiting its own manual review. It
does not certify production readiness of an adopting app. See the [review notes](reviews/r001-common-components/README.md)
for the original evidence, bounded adapters and known limits. The latest
[workflow feedback round](reviews/r002-workflow-feedback/notes.md) supersedes the
original top-level Automations entry and card-details layout. The
[workflow simplification round](reviews/r003-workflow-simplification/notes.md)
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
| [`auth`](plugins/auth/plugin.ts) | Provides authentication, caller/role checks, session and CSRF boundaries used by the feature plugins. Its public service key remains `identity`. |
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

## Run locally

Use Node 24 and npm in this directory. Stackpress ecosystem packages are 0.10.8.
Install, generate code, initialize a new disposable database, build, then serve:

```sh
npm ci
npm run generate
OFFICEPRESS_DISPOSABLE_PROOF=1 npm run init:proof
npm run build
DATABASE_ADAPTER=pglite npm run serve
```

Open `http://127.0.0.1:3040/`. The initializer refuses an existing database;
do not rerun it for ordinary starts. Subsequent starts need only the last command.
Fixture sign-in: `admin@officepress.test` / `OfficePress-proof-123!`.
Also available: `member@officepress.test`, `readonly@officepress.test`,
`other@officepress.test`, with the same public fixture password. These credentials
are for the disposable local proof only. Form administration and workflow/rule
design require the administrator; ordinary operators can work cards and messages.

`npm run dev` uses source rendering and a separate HMR port 24680. Prefer the
built preview above for manual review. Rebuild after source changes before
restarting the built preview. Generation does not install tables or build views.

The database defaults to `.build/database/pglite`, the app ID to `common-components-proof`,
and the session cookie to `officepress-components-session`. Override `PGLITE_DIR`,
`PORT`, `OFFICEPRESS_APP_ID` when needed. `PROOF_SESSION_SEED` stabilizes local
sessions across restarts; without it, restarting requires signing in again.
Production selects PostgreSQL and requires `DATABASE_URL`; it never silently
falls back to PGlite. Config `database.populate` selects repeatable sample
accounts and component fixture sets for a fresh disposable database. Ordinary
builds do not reset or repopulate the database.

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

```sh
npm run typecheck
npm run build
npm run prove
# Sends exactly one template example and one Chat email to MAIL_TEST_EMAIL:
npm run prove:smtp
```

The proof creates an isolated, empty PGlite directory and temporary loopback HTTP
server, then closes them. Receipts retain source hashes, results and limitations;
failed receipts are kept. Contract tests cover authorization/CSRF, validation,
atomic conflicts, legacy workflow compatibility, mutable workflow status, immutable
form/template/automation history, restart and plugin absence.
Real sends use the already configured root `.env` values `MAIL_TEST_HOST`,
`MAIL_TEST_PORT`, `MAIL_TEST_EMAIL`, `MAIL_TEST_USER`, `MAIL_TEST_PASS`.
Only that designated account is allowed; no credentials enter client bundles or
receipts. A successful call means SMTP acceptance, not confirmed mailbox delivery.
No automatic mail retries or delivery reconciliation are implemented.

The inherited agent can read app information. This proof adds no AI tools for
the new domain features and does not repeat model acceptance tests. The app-shell
identity recovery/account-deletion limits and adopter-specific purge map remain
explicit in its identity contract. An independent consumer/P-06 proof and a
production-scale data/provider architecture remain separate work.

## Latest workflow review

[Round 4](reviews/r004-workflow-assignees-sla/notes.md) adds multiple card/stage
assignees, avatar-only cards, elapsed SLA progress bars, stage settings shortcuts,
and draft-preserving Automations navigation. Its isolated local proof passed
49 checks; typecheck, build and desktop/mobile browser checks passed. This is
reviewable local proof evidence; common-components approval remains pending.

[Round 5](reviews/r005-card-details-toolbar/notes.md) refines card details with
Todo, the stage selector below its checkboxes, and a live SLA bar/due label above
Files. It also fixes toolbar wrapping, uses an arrow-only back button and Edit,
and removes the designer breadcrumb. Typecheck/build and browser checks passed.

[Round 6](reviews/r006-dynamic-stage-tasks/notes.md) makes current-stage tasks
dynamic in backend reads and saves, preserving surviving completion and removing
stale copies. Card titles replace REQUEST/ID, with grips on the left; empty
checklists have no progress count. The isolated proof passed 54 checks, with
typecheck/build and browser verification; existing review data was preserved.

[Round 7](reviews/r007-card-event-automations/notes.md) replaces automation publishing
with Draft/Active/Paused, adds card-action events, typed conditions, seven supported
actions and working run settings, connects stage forms and template messages, and
applies the stage/Form Builder layout corrections. Task data remains dynamic by
stage. Message tests use a controlled transport and do not send real email.

## Latest Chat View review

[Round 8](reviews/r008-chat-messenger/notes.md) uses the Inbox r015 messenger
shape with current OfficePress colors: compact conversation previews, rounded
bubbles with external sender/time labels, a slim composer and on-demand details.
Drafts, notes, templates, status and existing provider boundaries remain intact.
Typecheck/build, 62 contract/HTTP checks and desktop/mobile browser checks passed.

[Round 9](reviews/r009-message-requests/notes.md) corrects the missing Messages
and Requests navigation, adds persisted request acceptance/block/delete/undo,
and makes app-sidebar hover/active backgrounds reach both edges. Existing
conversations remain in Messages. The 64-check suite and desktop/mobile checks
passed; request sender recognition and provider integrations remain bounded.

[Round 10](reviews/r010-request-list/notes.md) removes subjects and action buttons
from request list cards, retaining those controls in the full preview. Typecheck,
build and browser verification passed.

## Latest Forms review

[Round 11](reviews/r011-forms-list-drag/notes.md) starts on a forms list with direct
editor links, removes Reload and fixes question dragging with pointer capture.
Typecheck, builds, the 64-check suite and browser save/reopen verification passed.

[Round 12](reviews/r012-forms-save/notes.md) renames navigation to Forms/Messages,
replaces the editor's back/title row with Form Name and Draft/Active fields,
and provides one Save action for edits and status. Active saves retain immutable
response history. Typecheck, builds, 66 checks and browser save/reload checks passed.

[Round 13](reviews/r013-forms-toolbar/notes.md) removes the list Status column
and editor Status selector, moves Save beside Form Name and uses Update Form as
the editor heading. Save makes the form available for responses. Typecheck,
build, 66 checks and browser activation/reopening checks passed.

## Clean page routes

[Round 14](reviews/r014-clean-paths/notes.md) makes each screen addressable directly.
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

[Round 15](reviews/r015-message-editor/notes.md) removes Channel/Viber controls and
the Message content header. Separate HTML and Plain text editors, matching previews
and saved-content tabs preserve both alternatives. Existing messages remain
compatible; the server and preview apply the same restricted HTML policy.

[Round 16](reviews/r016-message-wysiwyg/notes.md) makes HTML a WYSIWYG editor with
a Source code toggle, retained formatting/variable selections and native undo.
It also removes View message from the update-page header.
