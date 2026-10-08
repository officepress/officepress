# P-00 and P-01 execution results — 2026-10-05

Status: Executed / Not Frozen. The user authorized the first two bounded proofs.
This records experiment results, not full suite acceptance, a production release
or permission to replace the maintained Stackpress baseline. P-02–P-06 remain
planned. The first grill's exact answers and accepted decisions are unchanged.

## Evidence and reproducibility

| Proof | Result | Local source and evidence |
|---|---|---|
| P-00 agent comparison | Proved within the portable comparison boundary: 40 checks passed. Full framework embedding remains unproved. | [Implementation and copy contract](../../../proofs/agent-mode-compatibility/README.md); [exact receipt](../../../proofs/agent-mode-compatibility/verification/p00-2026-10-05.json). |
| P-01 shell | Executed; 61 combined checks, 33 built/configuration checks and 11 PostgreSQL checks passed. Full S-01–S-06 exit is inconclusive because explicit paths remain uncovered/unavailable. | [Runnable shell and adoption instructions](../../../proofs/app-shell/README.md); [reviewed receipts, coverage matrix and screenshots](../../../proofs/app-shell/verification/README.md). |

Both proofs passed typecheck and build on Node 24.21.0, with Chrome
154.0.8037.93. P-01 retains the accepted Stackpress 0.10.8 ecosystem and composed
responsibility-owned Idea schemas. Lockfiles are included. The generated schema
was installed only into checked-empty, run-owned databases. Generation, schema
installation and rendering build remain separate commands.

P-00's fresh live comparison ran 04:21:33–04:21:48 UTC. P-01's combined run ran
04:54:44–04:55:01 UTC. Exact timestamps, runtime metadata, source fingerprints,
checks and outcomes are in the receipts. P-01's final config/PostgreSQL runs show
no source drift. The PostgreSQL test used 17.11 in its own Docker container;
identity HTTP/browser acceptance was exercised on PGlite, not reclassified as a
complete PostgreSQL identity test.

## Agent comparison and P-01 selection — G-01/G-02/G-06/G-10

Candidate A uses the actual unmodified portable browser bridge export from
`@agent-native/core@0.198.7`: create host bridge, request context/actions and run
host action. An actual iframe/host pair is exercised in Chrome. Candidate B
calls the Stackpress action endpoint directly. Each candidate executes the same
read and reversible rename with real OpenRouter calls to both
`google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`; returned model IDs and
reported usage are retained. P-01 separately runs both models through its real
Stackpress session, SQL action owner and rendered shell, retaining exposed
Google/OpenAI provider routes and per-call duration.

P-00 covers viewer/company denial, stale revisions, duplicate/lost-reply replay,
operation-key misuse, explicit Undo, cancellation immediately after a real
mutation commits, restart persistence, wrong origin/frame, listener lifecycle
and required-plugin absence. Cancellation does not roll back committed effects;
the retained mutation card remains available for explicit Undo.

The pinned portable module is 34,090 bytes with no runtime imports. Its npm
archive is 9,067,956 bytes, expanding to 30,012,411 bytes / 3,978 files; npm
integrity and export hashes are retained. The full package's React >=19.2.7 and
optional PGlite ^0.5.8 peers differ from baseline React 19.2.4/PGlite 0.3.15, and
its framework owns Nitro/H3/Drizzle services. No baseline peer override was used.

Recommendation and experiment choice: use the Stackpress-native shared-action
runner in P-01. The portable SDK remains a viable optional frame adapter. This
is not a permanent user decision or a claim that the full embedded agent-native
app/engine/UI was integrated. P-00's fixture session and single-process JSON
store are comparison scaffolding; P-01 supplies actual identity and SQL evidence.

## Shell capabilities — G-03/G-06/G-09/G-12/G-17/G-18

The shell keeps one Reactus renderer with separate identity, theme, About,
notifications, actions and agent plugins. Each owns dependency/config guards
before registering its feature. Restart tests cover disabled, missing and
malformed agent/notification configuration, missing store/schema/data/actions,
no remaining dependent routes/header controls, and restored persisted state.
Provider credentials remain server-only. Activation changes do not remove data.

Browser checks cover 260/64 desktop navigation, 400px agent, feature details,
390px exclusive mobile overlays, focus transfer/Escape/scroll restoration,
settings/account layout, all eight family/mode palettes, theme reload, CSP,
no-flash mode and denied-storage fallback. Screenshots were inspected separately.
Themes are scoped by app ID with admin writes and atomic revision checks;
custom colours affect light mode while family dark palettes remain explicit.
Notifications use a local account feed with persisted read state; no realtime
provider is claimed.

Actions enforce caller/owner/role, app scope, expected revision, durable
idempotency and conflict-safe Undo. Structural input comparison tolerates JSONB
key reordering. A serializer prevents unrelated requests sharing the baseline's
single SQL connection from joining and disappearing inside another transaction.
PostgreSQL checks prove those store/action/theme contracts and restart persistence.
A pooled adopter must use transaction-bound connections instead.

About queried `officepress/officepress` GitHub Releases at 04:54:59 UTC and found
no stable published release. The real check passed; a real available-upgrade path
remains unproved. Local fixtures prove stable SemVer filtering and exact
“Upgrade Instructions” extraction/copying with nested headings, fenced commands,
unsafe markup and empty/missing sections. The adapter reads the first 100
releases, ignores draft/prerelease/invalid versions, caches for five minutes and
allows admin refresh. It does not execute commands or infer compatibility. An
unattended daily checker is not implemented.

## Actual identity findings — G-04/G-05/G-13

[The auth plugin's identity adapter contract](../../../proofs/app-shell/plugins/auth/README.md)
contains precise handlers, routes, dependencies and adapters to copy. Actual
pinned handlers cover email/username password sign-in, profile/password updates,
authenticator setup/challenge/removal and Profile export. Thirty-two checks
exercise CSRF, read-only/owner guards, wrong credentials, password policy,
expired session, TOTP drift, replay, expiry/concurrent redemption, sensitive
projection, removal characterization and current-app purge.

Observed framework integration defects required narrow app-owned adapters:
- Imported schema relations referenced absent Application/Session models and
  generated nonexistent-column selectors; generation omits only unresolved
  external relations without editing the vendor Idea source.
- Handler/generated identifier decoding had different default database seeds;
  explicit shared configuration aligns them. Session seed is separately private.
- Ingest cookie iteration lost earlier Set-Cookie values; the response adapter
  preserves all cookies. Profile/password/TOTP writes need explicit CSRF,
  role/ownership checks, local redirects and rejection of internal event overrides.
- Built-in challenges lacked wall-clock expiry and allowed same-second replay.
  A persisted locked grant supplies random identity, five-minute expiry and one
  successful redemption around unchanged password/TOTP verification. UTC epoch
  comparison avoids host-timezone reinterpretation.
- Built-in removal deactivates Auth but leaves Profile active in this integration
  because the populated response skips generated profile removal. A prior session
  with no active credentials is rejected. This is characterized on disposable
  data and is not exposed as product account deletion.

Current-app purge is implemented separately with POST, CSRF and typed `Purge`.
It deletes the caller's shell_item, shell_operation, shell_notice and
shell_agent_run rows for the configured app only. Tests prove preservation of
Profile/Auth, identity challenges, company theme, other users and other apps,
plus successful sign-in afterward. Adopters need their own reviewed record map.

The installed package has no forgot-password handler; code/magic-link delivery
is unconfigured. Styled unavailable screens are not recovery/delivery proof.
Across-app account deletion remains unavailable pending a coordinator. This does
not change the accepted production Purge/Delete scopes or D-21's exclusion of
custom lost-authenticator recovery. No SMTP connection or message send occurred.

## Remaining disposition and adoption boundary

P-00's portable question is proved; permanent architecture adoption is still a
review decision. P-01's complete product exit remains inconclusive until the
unavailable recovery/deletion paths and other omissions are implemented or
explicitly deferred. No fallback or deferral is silently accepted by this result.
Additional limits: no full-shell process-crash reconciliation of a running agent,
no complete adverse agent/network browser matrix, no manual screen-reader audit,
no live notification transport, and no P-06 independent-consumer proof. The
[coverage matrix](../../../proofs/app-shell/verification/README.md#coverage-against-the-contract)
separates each S-01–S-06 result from its uncovered boundary.

The READMEs document source copying, dependency pins, server config, schema
composition/migrations, built-in integration and verification commands. P-01 is
self-contained; it does not import the sibling P-00 runner. Proof-specific fixes
are not automatically promoted to the maintained baseline or accepted context.
Original failed receipts remain locally; reviewed evidence preserves their
findings and resolved/remaining status. No secret, dependency tree, local database
or generated build is added to Git. Temporary servers/Chrome/container stopped;
disposable diagnostic data remains. No commit, push, deployment or MCP indexing.

Next: review the explicit P-01 gaps and P-00 recommendation, then continue the
remaining component proofs when requested. The spec remains Planning / Not Frozen.

## Subsequent approval and component continuation

The user subsequently approved app-shell as the basis for a separate combined
components proof. See [the approval record](../../../proofs/app-shell/APPROVAL.md)
and [combined result](common-components-result.md). This supersedes the earlier
sequencing recommendation to wait before beginning components. Earlier runtime
findings and production limitations remain evidence; approval is not a claim
that missing handlers or integrations appeared.
