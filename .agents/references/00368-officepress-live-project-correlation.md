# Live OfficePress projects correlated with proof questions

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load before asking further grill questions or selecting reusable component inputs. Review date: 2026-10-05. Scope: the user's three GitHub repositories, focused on all existing proof gaps and question decisions; this is not a lossless ingestion of every file in those repositories.

## User direction and authority

The user identified `officepress/operations-resourcing`, `officepress/operations-support` and `officepress/office-inbox` as live projects covering reusable components and requested that questions be correlated with source-code answers. This authorizes a source comparison and evidence-resolved questions. It does not supersede previously accepted rules wherever apps differ. Their live status is user-supplied; this review did not identify or verify deployed commit IDs.

GitHub API HEAD checks and isolated shallow clones pinned the review below. Local Resourcing/Support checkouts were older; local Inbox had unrelated Synology changes. No local app checkout, deployment, database or MCP index was changed. No dependencies, migrations, servers or live messages were run.

| Repository | Reviewed GitHub commit | Earlier local HEAD, excluded from review |
|---|---|---|
| operations-resourcing | `75523ff3a6b141c5a46054a9b469bd4f8a6045a6` | `3be46f9c2b8f2f30b923066a5079097218745e3c` |
| operations-support | `c791e71a98d5feca4d07989d5d60ca4b1a977fb2` | `dc7e1cfa6b005cc4f8e25bd8de9fdc8c50384782` |
| office-inbox | `9ae3e4e6c39b185863152d6dc3eb24d50caba55d` | Same committed HEAD; dirty `synology` worktree excluded. |

All three manifests declare Stackpress 0.10.8. Source inspection used implementation paths first; tests supplied expected behavior, not newly observed passes. Primary GitHub page rendering failed, but authenticated GitHub API reads and pinned clones succeeded. Findings below are self-contained; pinned links supply provenance, not a requirement to reopen external sources to understand the result.

## Complete deferred evidence by repository

- [Resourcing implementations and qualifications](00369-officepress-resourcing-component-evidence.md) — load for editable workflow definitions versus automation revisions, message persistence/recovery, forms provider boundaries, auth view styling, drawer focus and MCP authorization.
- [Support implementations and qualifications](00370-officepress-support-component-evidence.md) — load for SMTP retry behavior, SSE/replay/reconciliation, stale board writes, responsive details and app-plugin extraction.
- [Inbox implementations and qualifications](00371-officepress-inbox-component-evidence.md) — load for uncertain SMTP/confirmed resend, elapsed SLA, snapshots, atomic version checks, polling, operator purge and central dependency validation.

## Question correlation

| Question | Source answer | Disposition |
|---|---|---|
| Q-001 real models | Resourcing has Stackpress AI/MCP authorization; none of the inspected application/config/manifests references agent-native. | D-07 remains real OpenRouter tests against both user-selected models; P-00 still needed. |
| Q-002 real test delivery | Inbox has SMTP intent/recovery code; Support has Gmail SMTP/API transport; Resourcing message delivery uses MTP/Twilio. | Useful adapters, not evidence that the proof has made its real SMTP example send. D-18 requires the call result, not observed recipient delivery. |
| Q-003 copy documented plugins | Feature/domain modules are concrete reuse inputs. Source coupling and guard differences require adaptation. | D-09 unchanged; P-06 remains necessary. |
| Q-004 one company | Source apps have their own user/tenant/department scopes. | Does not override D-10's single-company proof scope or remove authorization tests. |
| Q-005 / Q-005a / Q-006 releases | No matching GitHub release-section implementation found in inspected application/config/manifests. | D-11/D-12 remain; Q-006 remains superseded. |
| Q-007 / Q-007a forms | Resourcing has admin management and guest/share-grant fill routes, forwarded to office-forms APIs. | Supports the access separation; provider-side version/revocation enforcement is not established here. D-13/D-14 unchanged. |
| Q-008 publication | Resourcing message versions and automation revision IDs; Inbox action/template snapshots. Resourcing workflow definitions are shared editable; Inbox template rows update in place. | D-15 remains accepted, with an explicit source-adaptation conflict in G-11. Do not claim every existing component implements it. |
| Q-009 uncertain send | Inbox forbids automatic uncertain retries and requires confirmed resend. Resourcing explicit unknowns stop, but non-personnel-form stale claims retry. Support retries general transient exceptions/stale claims. | Resolved by subsequent D-18 scope correction: example sends only need their call result. No retry/reconciliation or downstream delivery verification; the source differences remain background. |
| Q-010 SLA clock | Resourcing calculates elapsed stage hours; Inbox snapshots entry plus SLA seconds. | Evidence-resolved: elapsed time for the initial reusable proof. Business calendars are not implied. |
| Q-011 new chat/notifications | Support uses SSE plus periodic reconciliation; Inbox polls sync state plus local refresh events. | Resolved by subsequent D-19: live Support-style multichannel chat; periodic/manual refresh acceptable for email-only use. No universal transport is required. |
| Q-012 stale save | Resourcing/Support reject stale workflow/board revisions; Inbox uses conditional SQL updates for moves and preferences. | Evidence-resolved: reject stale writes with visible conflict/reload recovery. Reprove atomic enforcement after adaptation. |
| Q-013 mobile panel interaction | Source apps have different narrow breakpoints and independent navigation/details state; Resourcing supplies drawer focus handling. | Resolved by subsequent D-20: one mobile overlay at a time; desktop behavior unchanged. Source focus handling remains a reuse input. |
| Q-014 lost authenticator | Resourcing and Support have password/email recovery; Resourcing also requires verified factor state for protected work. | Resolved by subsequent D-21: custom lost-authenticator recovery is outside the initial proof; existing 2FA screens remain. No production recovery policy or excluded factor method is introduced. |
| Q-015 purge/delete | Inbox has operator-controlled inactive-mailbox purge. Resourcing brands vendor account removal as sign-in-method removal/sign-out. | Evidence-resolved as D-22 from the already accepted kit/design: current-app user-data purge versus across-app account deletion. These runtime sources still do not prove enforcement or record coverage. |

## Full gap correlation and next use

| Gap | Evidence / remaining work |
|---|---|
| G-01/G-02 agent-native fit | No agent-native integration found in scoped paths; Resourcing's agent-auth/MCP is a different capability. P-00 comparison remains. |
| G-03/G-18 releases | Authored GitHub section display remains a new shared proof capability; source identity/selection/cache/extraction still need proof. |
| G-04 auth/rendering | Reuse Resourcing's branded route/view mapping and provider props; adapt deliberately to the baseline renderer. |
| G-05 auth operations | D-22 resolves intended purge/delete scope; inspect locked handlers and affected records to prove enforcement. D-21 excludes custom lost-authenticator recovery. Branded labels alone are insufficient runtime evidence. |
| G-06 Agent/Notification config | Resourcing config-owned agent authorization and Inbox notification preferences are references, not the new adapter schema. D-02 still governs. |
| G-07 integration depth | Existing Inngest/SMTP/MTP paths clarify concrete inputs; real model/SMTP proof evidence and worker deployment depth remain separate. |
| G-08 adoption | Copy bounded components with documented dependencies; central graph validation, unconditional registrations and Support's broad app ownership require changes under D-01. |
| G-09 theme | Stackpress theme hook and Support theme cookie are implementation precedents; app-admin override storage/key scope remains open. |
| G-10/G-14 execution | Q-010 elapsed timing resolved. D-18 removes example-send retry/reconciliation from scope. Internal automation dedupe, cancellation, resume and compensation remain separate; use relevant retained snapshots/checkpoints. |
| G-11 definitions | D-15 stays authoritative. Keep editable workflow state, immutable automation revision, rendered payload snapshot and published form version distinct. |
| G-12 panels | D-20 selects one mobile overlay at a time; reuse source focus handling with that rule. Source 992/1200px thresholds do not supersede accepted shared geometry; the separate mobile header discrepancy still requires visual verification. |
| G-13 account safety | D-21 excludes custom lost-authenticator recovery from initial proof scope; D-22 recovers the intended destructive-action distinction. Registered-factor checks and operator cleanup do not prove fresh reauthentication or actual shared data mapping; these remain verification needs. |
| G-15 forms | Local UI, type catalogue and authorized provider client are known. Provider implementation is outside these repos; validate rules/uploads/revocation there or prove them locally. |
| G-16 realtime | SSE plus reconciliation and polling are both evidenced. D-19 resolves conversation freshness by use case; adapter mechanics and authorization/reconnect verification remain proof work, without imposing a global notification cadence. |
| G-17 concurrency | Reject stale edits; retain atomic compare-and-set and UI/agent/automation parity tests in the adopted contract. No claim that every source editor is protected. |

## Proof reuse map and boundaries

P-00: Resourcing agent authorization/tool projection as a boundary reference; still compare actual agent-native fit. P-01: Resourcing account view styling/navigation focus and Support mode bootstrap. P-02: Resourcing workflow designer and automation revisions; Inbox elapsed deadlines and snapshots. P-03: Resourcing versioned messages plus a bounded SMTP example-send adapter under D-18, without Inbox delivery-recovery machinery. P-04: Resourcing Forms UI/client, with the separate provider boundary explicit. P-05: Support SSE for live multichannel chat and Inbox polling/manual refresh for email-only use under D-19. P-06: extract/adapt these to independently guarded, documented plugins rather than copy whole app composition.

The raw repositories stay outside `.agents/resources/`; no source-tree archive was requested. These evidence packets retain the behavior, important branches, conflicts, provenance and scope limits needed for the questions. A new application test was neither required nor run for this documentation-only comparison. Existing accepted source archives and their ingestion receipts remain intact.

## Later grill closeout

D-21 resolves Q-014 by excluding custom lost-authenticator recovery from the initial proof. Q-015 is resolved by [the accepted account template](00059-templates-settings-account-html.md) and [source corrections](00078-officepress-source-decisions.md), not by claiming the reviewed runtimes already implement it. The source review initially overlooked that intended distinction: current-app user-data purge preserves the account/other apps, while account deletion is across apps. D-22 records it; verify actual data/handler behavior separately. All questions in grill pass 1 now have dispositions; the spec and proofs are not Frozen or implemented.
