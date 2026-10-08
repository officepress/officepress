# Research — 2026-10-02

Status: Four online research rounds complete (28 topics); compatibility proofs pending

Research scope: updated Pencil menu, existing Stackpress shell/auth/config surfaces, and agent-native action/context/runtime integration. No external framework repository was installed or copied into resources, and no new app implementation was run.

## R-01 Current design — D-02/D-03/G-12

Read the repository native file with Pencil APIs, resolving instances and retaining symbolic variables. App Settings has About and Theme; About covers installed version, updates and change log. Agent/Notifications are no longer settings tabs, and the user directs configuration to Stackpress. The current extraction has 8,761 nodes, 2,809 content nodes and unchanged 205 variables. See the [complete revision receipt](../../references/00360-officepress-about-menu-revision.md), including 104 retained prior records. The native file was not edited by this work.

## R-02 Stackpress source evidence — G-04/G-05/G-06

Source root inspected: `/Users/cblanquera/server/projects/stackpress/stackpress`; Git HEAD `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The checkout has an unrelated scaffold package change; the files listed below were read, not edited. Package metadata identifies stackpress-session 0.10.8. This source observation does not establish equivalence with installed package exports until the proof verifies them.

- `src/auth/plugin.ts` in stackpress-session registers auth signup/signin/signout events, email/username/phone/challenge routes, and low-priority view mappings. OfficePress must exclude unsupported phone/SMS surfaces when composing its routes.
- `src/session/plugin.ts` registers the session service and current-user/authorization events, and account/profile-update/security/password/TOTP/export/removal routes. Authorization behavior depends on session access config; missing security policy must not become permissive proof behavior.
- `src/session/pages/2fa/detail.ts` uses the session and CSRF plugins, scopes Auth records to the signed-in profile, creates TOTP QR data, validates codes and reads `auth.2fa.issuer` with a brand fallback. Reuse this capability and preserve those dependencies.
- `src/auth/pages/signin/email.ts` contains password, email-code and magic-link flow handling. Styling those pages still requires testing challenge lifecycle, errors and view-prop wiring.
- `docs/config-reference.md` documents `auth` and `session` keys, including base/redirect/menu/password/email and key/seed/access. It does not establish the proposed OfficePress Agent/Notification keys.
- The local boilerplate intentionally uses its own Ingest/Reactus renderer and does not yet implement production identity or tenant isolation. Built-in handlers use stackpress-view helpers; verify a deliberate prop/view adapter with a single rendering owner.

No evidence here proves every OfficePress account action, forgot-password flow, distinct purge/delete semantics or full deployment security. These remain explicit proof questions rather than reasons to implement duplicate identity infrastructure.

## R-03 Agent-native shared operations — G-01/G-10

The upstream framework defines capabilities as actions shared by the UI and agent, with additional transports. This supports the desired parity experiment: a user click and an agent request should reach the same validated operation. OfficePress still needs a compatible caller/permission adapter; shared declarations alone do not prove application access control. [Repository overview](https://github.com/BuilderIO/agent-native), [actions documentation](https://www.agent-native.com/docs/actions/).

## R-04 Runtime fit and embedding — G-01/G-02

The documented server uses Nitro/H3 and database infrastructure distinct from this repository's Ingest/Reactus baseline. Consequently a turnkey agent-native scaffold is not an accepted replacement. The embedding documentation describes a host/sidecar bridge for context, actions and UI commands, including origin checks. Compare that bounded integration with a Stackpress-native adaptation; do not assume in-process compatibility or a particular SDK export before pinning and testing a release. [Server architecture](https://www.agent-native.com/docs/server-overview/), [embedding SDK](https://www.agent-native.com/docs/embedding-sdk/).

## R-05 Context and permissions — G-01/G-06/G-10

The context model separates current route/URL, semantic selection, a screen-context action and agent navigation commands. OfficePress can use that distinction to pass small stable IDs and re-fetch permitted data rather than sending whole records indiscriminately. Authenticated actions must recheck access; client selection is not authority. [Context awareness](https://www.agent-native.com/docs/context-awareness/).

Upstream separates action authorization, resource-level access and human approval. Hiding a tool is not a substitute for backend authorization; approval also does not determine row ownership. The comparative proof needs denied-caller, cross-record access and approved-but-unauthorized tests on every exposed execution path. [Action access and authorization](https://www.agent-native.com/docs/actions-access-control/).

## Research disposition

The initial documentation review answers where the integration risks lie, not which route is proven. Package/version/API compatibility, handler/view adaptation, release recipes, configuration schema, action reversibility and published-data lifecycle need the specific checks in [the proof queue](proofs.md). Source URLs are attribution; the relevant findings and test questions are retained locally so planning does not depend on reopening external pages.

## Inspected local file fingerprints

| Path under the inspected Stackpress checkout | SHA-256 |
|---|---|
| `packages/stackpress-session/package.json` | `540e86d646a21c67fc745b58cfb468df767d524612053fd890ab3d858b1660b7` |
| `packages/stackpress-session/src/auth/plugin.ts` | `d3923a0bc22e7a8776b6f9e33469af14983ebbd49bfb8799b3f54851872cc18a` |
| `packages/stackpress-session/src/session/plugin.ts` | `3ef88db19285c961ad5a5af1d74ef75c3bb6a98341e758402790f17a01730e78` |
| `packages/stackpress-session/src/session/pages/2fa/detail.ts` | `2a500a576c626004432f35ba4656d1cfd2b7190aafd4257239ec1a531f5da416` |
| `packages/stackpress-session/src/auth/pages/signin/email.ts` | `147c76378a43fddf8ccdcc05352909bbd7a68f4fcb039a16a066f401d222efbc` |
| `docs/config-reference.md` | `6d8351631daed857cb3636af5155d26ae85080a59e07759811a26dcee3914539` |

## Iterative online research goal

The user requested online research in repeated itemized rounds, expanding related topics until no new topics remained. The goal covered the existing shell/component proof suite. Four rounds searched 9, 10, 7 and 2 topics respectively; the fourth generated no new material in-scope topics. Product decisions and runnable proofs remain open. No implementation, dependency install or MCP indexing was performed.

Load the complete locally retained findings by task:

- [Research rounds, all 28 search topics and rejected leads](../../references/00362-officepress-proof-research-rounds.md) — load to audit coverage, follow-up discovery and the stopping rule.
- [Agent runtime, Stackpress integration and config evidence](../../references/00363-officepress-agent-runtime-research.md) — load for topology, tool exposure, Node compatibility and identity/config boundaries.
- [Shell, releases, themes and authentication](../../references/00364-officepress-shell-release-auth-research.md) — load for About guide resolution, accessible panels, no-flash mode, recovery and TOTP proof cases.
- [Workflow execution, persistence and recovery](../../references/00365-officepress-workflow-data-research.md) — load for revisions, outbox/idempotency, scheduling, concurrency and cancellation.
- [Message-template and form-builder contracts](../../references/00366-officepress-template-form-research.md) — load for safe rendering, validation semantics, published responses, accessibility and uploads.
- [Chat, notifications and adoption](../../references/00367-officepress-chat-adoption-research.md) — load for ordering/reconnect, authorization, public exports and an independent consumer.

The observed agent-native main manifest is 0.198.7 with Node >=22.22.0, while the verified local baseline executable is 22.14.0. This is a candidate compatibility mismatch, not a chosen package/runtime upgrade. Online Stackpress detail fetches failed; initial local fingerprints above remain evidence, with published-package behavior still requiring P-01. All new research is spec-local; only the user's explicit MCP indexing restriction was promoted to maintenance context.

## R-06 Grill model catalogue check — 2026-10-02

For Q-001, OpenRouter lists Gemini 3.5 Flash Lite at model ID `google/gemini-3.5-flash-lite` and GPT-4o mini at `openai/gpt-4o-mini`. These resolve the user's “Gemini 3.5 flash light” and “GPT 4o mini” spellings; the exact answer is retained in [questions](questions.md). Sources checked: [OpenRouter Gemini model page](https://openrouter.ai/google/gemini-3.5-flash-lite), [OpenRouter GPT-4o mini model page](https://openrouter.ai/openai/gpt-4o-mini); [Google model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite) corroborates the Flash-Lite name.

This is catalogue evidence only, not proof of account access, current endpoint compatibility or successful tool use with either integration candidate. P-00/P-01 must supply that evidence through real calls and retain results per model. No API credential or model request was used in this check. It supplements the completed research rounds without reopening that goal or accepting an agent-native package choice.

## R-07 Live-project source correlation — 2026-10-05

The user supplied three live OfficePress repositories and requested source-backed answers before further questions. [The complete source correlation](../../references/00368-officepress-live-project-correlation.md) records pinned GitHub commits, every question/G-01–G-18, scope limits and per-repository evidence. Q-010 elapsed SLA and Q-012 stale-save rejection are evidence-resolved. Delivery retry, immutable publication, realtime transport and plugin composition differ across apps; accepted decisions remain authoritative. The earlier research goal stays complete; this is a newly requested source review, not a proof run or MCP refresh.

## Q-009 scope correction — 2026-10-05

[D-18](decisions.md) supersedes research-derived delivery-reliability requirements for message-template example sends: report the real send-call result, without retries, uncertain-send investigation or recipient-delivery confirmation. The source comparison remains valid background, but its retry differences do not block these proofs. This correction does not accept the earlier stop-for-review default.
