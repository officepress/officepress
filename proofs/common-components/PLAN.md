# Combined common-components proof

Authorized on 2026-10-05 after the user approved the app-shell proof. This is a
separate app in `proofs/common-components/`, based on that approved source copy.
The app-shell implementation and manual-review database stay intact. This proof
is a functional adoption example, not production acceptance of the whole suite.

## Scope and implementation defaults

- Four left-menu entries: Workflows, Message Templates, Form Builder, Chat View.
  Per user feedback on 2026-10-05, Automations are stage-scoped within Workflows,
  superseding the initial separate menu entry. Plugins still own dependency checks.
- Stackpress 0.10.8, one renderer, PostgreSQL production/PGlite proof, separate
  composed Idea files, database, app ID and session cookie; port 3040.
- Workflows are mutable with Draft/Published status (2026-10-06 correction).
  Form/template publications and automation run snapshots remain immutable.
- Atomic revision checks, authenticated/role-checked server mutations and CSRF.
- Workflows: list/designer/board, elapsed SLA, Assignee/Tasks, any-column moves;
  automations: all/any conditions, now/delay/date/SLA, ordered local actions,
  persisted checkpoints, dry run, explicit failures. Single-process scheduler;
  no distributed worker or external-message compensation claims.
- Templates: automatic/custom variables, email subject/rich text and plain-text
  channels, safe previews, versioned dispatch snapshots and bounded SMTP.
- Forms: stable IDs, outline/field editor, validation, preview, published versions,
  signed-in/public submission, revocable opaque share links, response history.
- Chat: list/thread/details, notes/status/attachments, draft/send/template insert,
  caller-scoped access, persisted fixture arrivals with live multichannel or
  periodic/manual email refresh. Live SMTP only; no incoming/social-provider claim.
- SMTP is independently disableable. Only MAIL_TEST_EMAIL is an allowed test
  recipient. Root credentials stay server-only; acceptance means the actual send
  call accepted the message, not verified recipient delivery. No automatic retry.
- Common component visual structure follows the local kit/native design. Keep
  proof setup, simulation details and validation notes outside the product UI.

## Implementation sequence

1. Copy approved app-shell source and pin its dependency baseline.
2. Author component-owned schemas and public plugin contracts; generate.
3. Implement independent feature plugins and integrate shell navigation/content.
4. Verify normal/denied/invalid/absent-dependency/restart/version paths, bounded
   SMTP, browser desktop/mobile states, and source-copy independence.
5. Record evidence/limits and present the separate app for manual approval.

## Public integration contracts

The shell registers `component-navigation` during config with `add({id,label,
href,icon})` and `items()`. Each feature checks its identity/database and required
peer service in `plugin.ts` before routes/listeners/navigation registration.
Feature React entrypoints accept `{csrf, user, path}` from shell data. No secret
config is serialized. The shell remains the sole renderer and page-route owner.
Each feature owns `schema.idea`, `plugin.ts`, `types.ts`, server services,
`components/`, `fixtures.ts`, tests and README. Imports into another feature use
only documented public types/services. Seed signature: `seed(server, owner)`;
contract-test signature: `contracts(server, callers)` returning check strings.
`callers` contains admin/member/readonly/other Caller projections. Seed/test code
runs only against a new explicitly disposable database.
