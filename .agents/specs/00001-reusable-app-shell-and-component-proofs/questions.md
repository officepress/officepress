# Grill pass 1 — decisions needed before proofs

Status: Grill pass 1 complete / Frozen on 2026-10-05. Started 2026-10-02 at the user's request. Spec 00001 remains Planning / Not Frozen. Q-001–Q-005, Q-005a, Q-007, Q-007a, Q-008, Q-009, Q-011, Q-013 and Q-014 are accepted; Q-006 is superseded. Q-010/Q-012 are evidence-resolved by the live-project review; Q-015 is evidence-resolved from the accepted kit/design scope. Q-009 is resolved by the user's example-send scope correction; Q-011 is resolved by the user's channel-context distinction; Q-013 accepts one mobile overlay at a time; Q-014 excludes custom lost-authenticator recovery from this proof. All current-pass questions have a disposition; no question is awaiting an answer. Do not re-ask source-resolved questions. Closing this grill does not Freeze the spec, accept remaining implementation proposals, start proofs or authorize MCP indexing.

## Operating rules

Ask one short, neutral question at a time using the [grill workflow](../../workflows/spec-grill-session.md). Preserve every exact answer here before normalizing it in [decisions](decisions.md). From Q-005 onward, include a suggested default and brief reason with every question, as the user requested in Q-004. Lead with the neutral question and label the recommendation “Suggested default, not accepted unless you choose it”. Suggested defaults remain unaccepted until chosen; previous records without a default remain historical. Recheck relevant context/source evidence before asking each queued question; refine or resolve it from evidence where possible. The queue is an initial ordering, not a promise that fifteen answers settle every subquestion.

This pass establishes proof scope and expected behavior. G-01/G-02 runtime compatibility and G-04/G-05 built-in behavior remain proof-owned technical questions; do not demand that the user predict proof results. G-06 implementation naming may be proposed by the proof author within accepted config ownership. Product semantics in those gaps may still require a sharper human question.

## Accepted history

[Exact Q-001 through Q-008 records](../../references/00372-officepress-grill-accepted-history.md) preserve all nine accepted replies, their proposed/asked defaults and Q-006 supersession. Load before interpreting D-07–D-15 or revisiting an earlier answer. **Later correction:** the user's 2026-10-06 workflow review supersedes the workflow-version part of Q-008/D-15 through D-23; the exact earlier reply remains historical evidence, not current workflow policy.

## Q-009 — uncertain message delivery

- Status: accepted-decision (scope correction; retry choice rejected as unnecessary).
- Source: gaps G-10/G-14; email delivery in P-02/P-03/P-05; user-requested live-project source correlation.
- Question: If a message may have been sent but no acknowledgment arrives, should the app stop for review or automatically retry?
- Agent default: Suggested default, not accepted unless you choose it: Stop for review and mark the outcome as unknown. Check what happened before authorizing a resend, because an automatic retry could send the same message twice.
- Earlier response: The user requested source correlation instead of choosing the default; exact request is retained below.
- User answer: That's going too far. These are message templates with example sends. You don't need to consider retries. As long as we can determine whether if the message was sent off, we don't need to figure out if it was actually sent if that makes sense.
- Normalized scope: Render a template, make an example send and report the send call's acceptance/success or returned error. Real SMTP and designated test recipients remain D-08. Retry/reconciliation and downstream delivery or test-mailbox receipt verification are outside this example-send proof. A local preview/enqueue alone is not the SMTP result.
- Evidence answer: [Live-project correlation](../../references/00368-officepress-live-project-correlation.md) finds Inbox blocks automatic uncertain retries and requires confirmed resend, Support retries general transient errors, and Resourcing has a stale-claim exception outside personnel-form delivery. These source differences remain background evidence. D-18 removes their reconciliation from the example-send proof; the earlier stop-for-review recommendation was not accepted.
- Follow-up: None for Q-009. Do not ask retry policy or require investigation of an ambiguous send for these example sends. An error is the returned send-call outcome, not proof that delivery was impossible.
- Decision update: [D-18 and G-07/G-10/G-14](decisions.md); example-send scope resolved.

## User source-correlation request — 2026-10-05

- Exact user answer (link labels and targets preserved; the first supplied URL has trailing whitespace): Can you look at [https://github.com/officepress/operations-resourcing ](https://github.com/officepress/operations-resourcing), [https://github.com/officepress/operations-support](https://github.com/officepress/operations-support) and [https://github.com/officepress/office-inbox](https://github.com/officepress/office-inbox) ? These projects are live and cover most of the reusable components you are asking about. Please correlate questions with answers in the source code found in these repos.
- Scope: source evidence can resolve questions; conflicting existing implementations do not override accepted user decisions. No Q-009 default was accepted by this reply.

## Source-correlated questions

All rows below were previously queued and retain their exact question text. Source: gap plus the user-requested source-code review; User answer and Agent default: see individual records where asked; Q-015 is resolved from prior accepted source guidance rather than a new user reply. [The source correlation](../../references/00368-officepress-live-project-correlation.md) and its repository packets retain exact paths, commits, behavior and limits. Evidence-resolved rows must not be asked again; partial rows need only their remaining concrete difference or missing behavior resolved.

| ID | Status | Exact original question | Evidence and remaining gap |
|---|---|---|---|
| Q-010 | evidence-resolved | Should the workflow proof measure SLA deadlines as elapsed time, or only during configured business hours? | Resourcing elapsed stage hours and Inbox entry plus seconds; D-16/G-14. Initial proof uses elapsed time. |
| Q-011 | accepted-decision | Should new chat messages and notifications appear immediately, or is periodic refresh acceptable for the first proofs? | D-19: Support-style email/messenger/whatsapp/viber chat uses automatic live updates; email-only use permits periodic/manual refresh. Exact answer below. |
| Q-012 | evidence-resolved | If another user or agent changes a record before you save, should the app reject the stale save or overwrite the newer change? | All three have stale workflow/board guards; Inbox uses conditional SQL. Reject stale writes with conflict/reload, D-17/G-17; atomic adaptation remains proof work. |
| Q-013 | accepted-decision | On mobile, should opening the agent or details panel close the navigation drawer? | D-20 accepts the suggested default: one mobile overlay at a time, including navigation, agent and details. Desktop docked behavior is unchanged. |
| Q-014 | accepted-decision | What should happen when a user loses access to their authenticator app? | Narrowed to initial proof scope below; D-21 excludes custom recovery while retaining built-in 2FA setup/sign-in/removal. Production recovery policy is not chosen. |
| Q-015 | evidence-resolved | What should Purge remove, and what additional data should Delete account remove? | D-22 recovers the existing kit/design rule: Purge removes the user’s current-app data and preserves the account/other apps; Delete account removes the OfficePress account across apps. Backend data mapping remains G-05 verification. |

Follow-ups may split compound gaps: supported form rules/files, any separately requested migration of existing work, cancel/Undo behavior, retention/replay limits, release ownership, account reauthentication and theme persistence. These remain visible in G-01–G-18 and are not accepted or deferred by closing this bounded pass. Address concrete implementation/coverage gaps when preparing the affected proof; reopen a narrowly scoped question only if source and accepted decisions cannot resolve a material product choice.

## Q-011 — visible chat and notification updates

- Status: accepted-decision.
- Source: G-16 and the user-requested source correlation; resumed when the user asked “So no more questions?”.
- Question: Should new chat messages and notifications appear immediately, or is periodic refresh acceptable for the first proofs?
- Agent default: Suggested default, not accepted unless you choose it: Automatic live updates, using Support’s existing approach as the starting point. That gives us working code to adapt for the shared Chat View.
- User answer: the context for support in chat mode is email/messenger/whatsapp/viber. It makes sense for automatic live updates in this case, but if it's just email, periodic/manual refresh is acceptable.
- Normalized scope: Refresh follows the conversation use case. Support-style multichannel chat has automatic live updates; email-only use may refresh periodically or manually. This does not require one transport for all apps, authorize live social-channel integrations or impose a global notification cadence.
- Evidence answer: Support has SSE updates with reconciliation; Inbox has polling/events. Both are documented in the [source correlation](../../references/00368-officepress-live-project-correlation.md). The question concerns the visible proof behavior; low-level transport details are implementation work.
- Follow-up: No further product question on Q-011. Demonstrate both conversation contexts; keep adapter/transport mechanics as proof implementation work and preserve D-18 example-send scope.
- Decision update: D-19 resolves conversation freshness in G-16; technical authorization/reconnect details remain proof work, without a universal notification/agent cadence decision.

## Q-013 — mobile panel interaction

- Status: accepted-decision.
- Source: G-12; accepted shared overlay/sheet geometry and the live-project correlation.
- Question: On mobile, should opening the agent or details panel close the navigation drawer?
- Agent default: Suggested default, not accepted unless you choose it: Yes—show one overlay panel at a time, so panels do not cover each other and focus stays clear.
- User answer: Suggested default.
- Normalized scope: On mobile, opening navigation, agent or details closes the currently open overlay panel. Keep one overlay active, transfer focus to the newly opened panel and retain the existing close/Escape/focus-restoration behavior. Desktop docked panels retain their existing behavior.
- Evidence answer: [Shared app experience](../../context/shared-app-experience.md) defines mobile navigation overlays and an agent sheet. The [source correlation](../../references/00368-officepress-live-project-correlation.md) supplies focus handling but no common navigation/details/agent exclusivity rule. Desktop docked panels are a separate layout.
- Follow-up: Prove mobile panel switching without overlap or stale scrims; preserve desktop geometry. No further Q-013 product question.
- Decision update: D-20 resolves mobile overlay exclusivity in G-12. The separately recorded header geometry remains a visual verification item.

## Q-014 — lost-authenticator proof scope

- Status: accepted-decision.
- Source: G-13/G-05; the requested Stackpress auth/account styling and integration proof, accepted authenticator-only guidance, and source review.
- Original queued question: What should happen when a user loses access to their authenticator app?
- Question: Should the app-shell proof include a custom lost-authenticator recovery flow?
- Agent default: Suggested default, not accepted unless you choose it: Keep custom recovery outside this proof. Cover Stackpress’s existing 2FA setup, sign-in and removal screens; this keeps the proof focused on the requested styling and integration.
- User answer: Suggested default.
- Normalized scope: Keep custom lost-authenticator recovery outside this proof. Cover Stackpress’s existing 2FA setup, sign-in and removal screens with the OfficePress styling/integration. This does not choose a production recovery policy or remove normal forgot-password behavior from scope.
- Evidence answer: [Shared authentication guidance](../../context/shared-app-experience.md#authentication) excludes SMS, recovery codes and security keys. [The Resourcing source review](../../references/00369-officepress-resourcing-component-evidence.md) supplies branded Stackpress factor screens and password recovery, but does not establish lost-authenticator recovery. Locked-package behavior remains P-01 verification work; the proposed scope is not a claim that recovery is impossible or a new production policy.
- Follow-up: No further Q-014 question for this proof. Preserve the production recovery question outside initial proof acceptance; no custom bypass or fake recovery success.
- Decision update: D-21 resolves recovery proof inclusion. G-13 retains separate built-in security verification; production recovery policy remains outside initial proof scope.

## Q-015 — existing purge and account-deletion scope

- Status: evidence-resolved.
- Source: accepted kit/design guidance and user corrections; G-05/G-13.
- Question: What should Purge remove, and what additional data should Delete account remove?
- Agent default: None; existing accepted source scope governs.
- User answer: Not re-asked; no new reply is attributed to the user.
- Evidence answer: The [complete account template](../../references/00059-templates-settings-account-html.md) explicitly limits Purge to the user's data in the current app, leaving their account and other apps intact; its Inbox example lists cards, drafts, filters and agent history. Delete account permanently removes the OfficePress account across every app. [Accepted source corrections](../../references/00078-officepress-source-decisions.md) confirm these are production material and require preserving the documented scopes. The [native danger-zone content](../../references/00139-pencil-officepress-app-layout-section-danger-zone.md) corroborates the across-app account wording. Earlier source correlation covered runtime implementations but overlooked this already-documented intended scope.
- Follow-up: Map the adopting app's actual records and verify locked handlers against these distinct meanings in G-05/P-01. Do not infer deletion of every business/audit record across all apps from account deletion wording. Preserve the known template discrepancy where both buttons open the same purge dialog; it does not authorize identical operations. No destructive operation ran.
- Decision update: D-22 records the existing scope; runtime enforcement and per-record mapping remain proof work. Do not re-ask the product distinction.

## Earlier clarification history — do not re-ask as unanswered

### H-001 — agent-native package choice

- Status: partial (historical; not the active question).
- Source: user clarification from this conversation.
- Question: For agent mode, should the proof integrate the actual @agent-native framework, or adopt its shared-action/UI-state architecture using Stackpress?
- Agent default: No accepted choice.
- User answer: im actually not sure...
- Evidence answer: Research identifies alternatives; only a comparative runtime proof can establish their fit.
- Follow-up: P-00 comparison, then revisit G-01 with evidence; Q-001 establishes provider test depth independently.
- Decision update: G-01 remains open.

### H-002 — upgrade behavior

- Status: accepted-decision (historical).
- Source: user clarification from this conversation.
- Question: For app upgrades in About, what should the proof demonstrate?
- Agent default: Not applicable; exact user direction governs.
- User answer: Version checks and upgrade instructions for the installed version
- Evidence answer: Recorded in D-03 and shared app context.
- Follow-up: Q-005/Q-005a resolved source and instruction ownership; Q-006 is superseded.
- Decision update: D-03 retained; no in-app upgrade command execution.

## Pass checkpoint

Frozen pass: 13 accepted-decisions (Q-001–Q-005, Q-005a, Q-007, Q-007a, Q-008, Q-009, Q-011, Q-013 and Q-014), 3 evidence-resolved (Q-010/Q-012/Q-015), 1 superseded (Q-006), 0 asked/partial/queued. Historical clarification records: 1 partial, 1 accepted-decision. D-07/D-08 resolve model and email-delivery depth within G-07; D-09 resolves G-08; D-10 resolves company scope within G-09; D-11 resolves live-check depth and D-12 resolves GitHub/source-content ownership within G-03/G-18. D-13/D-14 resolve respondent modes and public-link revocation within G-15. D-15 resolves publication/version preservation in G-11; runtime evidence remains pending. D-16/D-17 resolve elapsed SLA and stale-write policy from source. All eighteen gap records remain tracked; live-source conflicts are recorded within the existing gaps, without overriding D-01/D-02/D-15. The source-copy-and-modify rule, GitHub release-note display contract, proof form-access modes and published-version preservation are promoted to context; provider/model, test-delivery and company-scope choices remain specific to these proofs. Future questions include a suggested default as requested. Validation is recorded in [status](status.md). The source review alone did not Freeze the grill or start proofs. This closeout freezes only the current grill pass; the spec remains Planning / Not Frozen and proofs remain unrun. D-18 resolves example-send scope and removes retries and downstream delivery confirmation from its acceptance. D-19 resolves conversation refresh by channel context. D-20 resolves mobile overlay exclusivity. D-21 excludes custom recovery from the proof and D-22 resolves the existing purge/delete product distinction. No current-pass question remains. Historical H-001 stays owned by P-00 compatibility research; this pass does not choose the agent-native dependency or silently accept remaining G-01–G-18 proposals.
