# Proof-suite research rounds — 2026-10-02

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load for the itemized search queue, discovery trail, scope and completion test.

Status: Online research complete for the current scope; implementation and product decisions remain open. All linked web sources were accessed on 2026-10-02. Findings are locally retained research evidence, not newly accepted implementation policy. No package was installed, proof executed, or MCP index refreshed.

## Method and stopping rule

The user requested an explicit goal: itemize topics, search each, discover related topics at the end of each round and repeat until no more topics. Start with G-01–G-12 and the requested shell/four components. Admit a follow-up when it could change their capability boundary, correctness, user journey, adoption contract or proof result. Merge duplicates into existing topics. Exclude unrelated product capabilities and vendor deployment internals. Stop when a whole round creates no new material in-scope topic; this is bounded research saturation, not a claim that the internet has no further information.

Searches used official project documentation, repositories, package publisher records and primary standards. Failed page reads are recorded below. Search wording below records representative executed queries; direct opens and targeted in-page searches refined the evidence. Sources and concrete findings are in the linked topic packets, including remaining uncertainty and proof consequences.

## Round ledger

| Round | Topics searched | Newly discovered topics | Disposition |
|---|---|---|---|
| 1 | T-01–T-09: nine starting topics | T-10–T-19 | Runtime ownership, authorization, storage, replay, rendering and publishing required deeper checks. |
| 2 | T-10–T-19: ten follow-ups | T-20–T-26 | Engine mismatch, queue retention, schema mutation, stream behavior, secrets, recovery and proof limits needed precision. |
| 3 | T-20–T-26: seven follow-ups | T-27–T-28 | TOTP replay and cancellation/compensation needed explicit failure semantics. |
| 4 | T-27–T-28: two follow-ups, then whole-queue review | None | New candidates mapped to covered topics or excluded scope. Queue empty. |

## Itemized topics and executed search leads

| ID | Topic / discovery parent | Search lead | Local findings |
|---|---|---|---|
| T-01 | Agent-native integration, actions and permissions / initial | `site:github.com/BuilderIO/agent-native package.json packages sdk`; `site:agent-native.com/docs actions access control server overview` | [Runtime packet](00363-officepress-agent-runtime-research.md) |
| T-02 | Stackpress auth/account/rendering fit / initial | `"stackpress" "session" "plugin" "github"`; `"stackpress" "0.10.8"` | [Runtime packet](00363-officepress-agent-runtime-research.md) |
| T-03 | Versions and upgrade instructions / initial | `site:semver.org semantic version precedence prerelease`; `site:docs.github.com REST releases latest release prerelease` | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-04 | Panels, theme and mode / initial | `site:w3.org WAI APG dialog modal window splitter`; `site:developer.mozilla.org color-scheme prefers-color-scheme localStorage` | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-05 | Workflows, retries and definitions / initial | `site:docs.bullmq.io idempotent jobs retry delayed job schedulers`; `site:docs.temporal.io workflow definition versioning deterministic execution` | [Execution packet](00365-officepress-workflow-data-research.md) |
| T-06 | Templates and delivery / initial | `site:mustache.github.io mustache manual html escaping` | [Content packet](00366-officepress-template-form-research.md) |
| T-07 | Forms, validation and published revisions / initial | `site:json-schema.org conditional validation if then else additionalProperties`; `site:w3.org WAI forms notifications errors` | [Content packet](00366-officepress-template-form-research.md) |
| T-08 | Chat order, reconnect and unread / initial | `site:socket.io docs v4 delivery guarantees connection state recovery` | [Chat and adoption packet](00367-officepress-chat-adoption-research.md) |
| T-09 | Plugin config and consumer reuse / initial | `site:docs.npmjs.com package json exports peerDependencies workspaces` | [Chat and adoption packet](00367-officepress-chat-adoption-research.md) |
| T-10 | Host identity, origin checks and tool exposure / T-01 | `site:developer.mozilla.org postMessage origin source security`; targeted `authorize` and `database: "off"` searches in agent-native docs | [Runtime packet](00363-officepress-agent-runtime-research.md) |
| T-11 | Framework table ownership and row isolation / T-01 | `site:postgresql.org/docs/current/ddl-rowsecurity.html owner bypass row level security` | [Execution packet](00365-officepress-workflow-data-research.md) |
| T-12 | Release freshness, cache and rollback / T-03 | `site:theupdateframework.github.io specification rollback freeze metadata`; `site:docs.github.com rest using conditional requests etag last-modified rate limits` | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-13 | CSP, hydration and unavailable preference storage / T-04 | `site:developer.mozilla.org CSP script-src nonce hash localStorage SecurityError prefers-color-scheme`; `site:react.dev hydrateRoot identical server client mismatches` | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-14 | Committed writes, failed dispatch and transaction retry / T-05/T-08 | `site:docs.aws.amazon.com transactional outbox pattern duplicate messages`; PostgreSQL transaction-isolation search | [Execution packet](00365-officepress-workflow-data-research.md) |
| T-15 | Wall time, duration, DST and scheduler delay / T-05 | `site:tc39.es proposal-temporal docs timezone ambiguity DST`; BullMQ delayed jobs | [Execution packet](00365-officepress-workflow-data-research.md) |
| T-16 | Rich-content sanitization versus interpolation / T-06 | `site:cheatsheetseries.owasp.org Cross Site Scripting Prevention Cheat Sheet HTML sanitization` | [Content packet](00366-officepress-template-form-research.md) |
| T-17 | File upload and form access boundaries / T-07 | `site:cheatsheetseries.owasp.org File Upload Cheat Sheet` | [Content packet](00366-officepress-template-form-research.md) |
| T-18 | Reconnect authorization and announcements / T-08 | Socket.IO recovery page, `skipMiddlewares`; `site:w3.org WAI ARIA log role chat messages` | [Chat and adoption packet](00367-officepress-chat-adoption-research.md) |
| T-19 | Export boundaries, optional peers and hidden dependencies / T-09 | `site:nodejs.org/api/packages.html exports encapsulation`; npm optional peers | [Chat and adoption packet](00367-officepress-chat-adoption-research.md) |
| T-20 | Candidate release/API pin and Node compatibility / T-01/T-13 | `site:npmjs.com/package/@agent-native/core "0.198.7"`; repository release search; direct core manifest | [Runtime packet](00363-officepress-agent-runtime-research.md) |
| T-21 | Durable deduplication and concurrent edits / T-14 | `site:docs.bullmq.io guide jobs job-ids removed duplicate`; `site:developer.mozilla.org If-Match lost update 412` | [Execution packet](00365-officepress-workflow-data-research.md) |
| T-22 | Validation dialect, data mutation and complexity / T-07/T-16 | `site:json-schema.org understanding-json-schema reference string format annotation`; `site:ajv.js.org guide modifying data coerceTypes removeAdditional` | [Content packet](00366-officepress-template-form-research.md) |
| T-23 | Stream resume, proxies and revoked sessions / T-18 | `site:developer.mozilla.org Using server sent events Last-Event-ID X-Accel-Buffering`; `site:cheatsheetseries.owasp.org WebSocket Security Cheat Sheet session expiration logging` | [Chat and adoption packet](00367-officepress-chat-adoption-research.md) |
| T-24 | Config projection, credentials and audit content / T-10 | `site:cheatsheetseries.owasp.org Secrets Management Cheat Sheet logging` | [Runtime packet](00363-officepress-agent-runtime-research.md) |
| T-25 | Sensitive account actions, reset and CSRF / T-02 | OWASP Authentication, Forgot Password and CSRF Cheat Sheet searches and direct reads | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-26 | Contrast, forced colors and realistic proof evidence / T-04/T-13 | `site:playwright.dev docs accessibility-testing axe limitations`; `site:playwright.dev docs clock`; W3C contrast and MDN forced-colors | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-27 | TOTP replay, drift and lost authenticator / T-25 | `site:rfc-editor.org rfc6238 verifier MUST NOT accept second attempt successful`; OWASP MFA resetting | [Shell packet](00364-officepress-shell-release-auth-research.md) |
| T-28 | Cancellation races and compensation / T-21/T-23 | Temporal cancellation/heartbeat search; `site:learn.microsoft.com azure architecture patterns compensating transaction idempotent` | [Execution packet](00365-officepress-workflow-data-research.md) |

## Rejected, unavailable and bounded leads

- Stackpress website confirms built-in categories and npm publisher pages show 0.10.8, but its linked API/built-in pages and attempted GitHub/raw `main` config/auth files returned fetch errors. No absence or implementation claim is inferred. Preserve the earlier local source fingerprints and require a locked-package proof.
- Agent-native raw `main` and docs are mutable. One raw redirect had an older crawl; the directly opened manifest supplied the candidate observation. Package/release searches did not establish a published artifact equivalent to that source. Do not turn the observed version into an accepted dependency pin.
- npm v7 search hits are historical; optional-peer guidance uses current official documentation. BullMQ legacy Repeatable examples are not the basis for a new scheduler API. Temporal Nexus Standalone Activity is explicitly prerelease and is not proposed as a dependency.
- Full agent-created extensions, marketplace/billing, raw SQL tools, autonomous code editing and browser automation add capabilities outside this proof request. They remain excluded; their existence is a reason to test exposed tool inventories.
- TUF provides useful freshness/trust concepts; implementing its full signing infrastructure is outside an instructions-only About proof. Likewise, BullMQ, Redis, Temporal and Azure/AWS services are researched comparisons, not selected OfficePress infrastructure.
- Real channel-provider delivery, production LLM selection, enterprise SSO, distributed CRDT editing, full scheduler clustering and compliance regimes are outside this round's scope. Their relevant local boundaries are represented by adapters, version checks, denial cases and unresolved product choices.
- Lost-authenticator policy cannot be answered by web documentation. User exclusions of SMS, recovery codes and security keys remain intact. Mobile header dimensions, tenant policy, release ownership and final packaging likewise need project decisions or proof evidence.

## Coverage and preservation

All 28 admitted topics have a finding/disposition and proof consequence in the five linked packets. Prior R-01–R-05, local source fingerprints, design extraction and G-01–G-12 remain retained. The new research adds G-13–G-18 and tightens P-00–P-06; it does not close runtime gaps or Freeze the spec. Research packets contain original synthesis and necessary technical details with attribution, not wholesale copies of external articles. Existing exact ingestion archives and hashes are unaffected.

## Validation receipt — 2026-10-02

Workspace validation passed after correcting descriptive link labels; only pre-existing preferred-line-count warnings remain. OfficePress verification recovered 53 text/code sources, 207 native/visual files, all 24 requested code archives, the prior design revision, 8,761 current nodes, 2,809 content nodes, 205 variables and 23 product descriptions. Stackpress verification recovered 105 sources from 147 reference sections. No existing source payload or ingestion manifest changed in this research pass.

Coverage check found T-01–T-28 exactly once in the topic table and verified the six reference partitions against the completed draft. All 22 existing MCP data files retained their SHA-256 hashes across research writes and validation; no MCP process with the inspected runtime command was running and no index/start/watch command was issued. Git whitespace checks passed. No application proof was run because this pass changed planning and maintenance documentation only.
