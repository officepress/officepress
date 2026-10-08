# Inbox reusable-component source evidence

Owner: [live-project correlation](00368-officepress-live-project-correlation.md). Load for SMTP ambiguity, board/SLA persistence, automation snapshots, templates, preferences and adoption differences. Inspected 2026-10-05 at `office-inbox@9ae3e4e6c39b185863152d6dc3eb24d50caba55d` using an isolated GitHub copy; unrelated local Synology work was excluded. Source and test definitions were read; no new test or live integration was run.

## Unknown SMTP outcomes and deliberate resend — Q-009

[Submission and recovery implementation](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/smtp/runtime.ts#L18) coalesces active profile/intent requests, persists a submission intent and exact message content, and returns prior accepted/rejected/uncertain results instead of sending again under the same key. Recovery marks stale `submitting` intents uncertain after 30 seconds, sets the active draft to `unknown`, and finalizes accepted intents missing their local Sent record. It reports zero uncertain automatic retries.

[Resend authorization](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/smtp/runtime.ts#L115) requires explicit duplicate-risk confirmation and a matching uncertain original intent for the same profile/draft. A deliberate resend supplies a new intent key and `resendOf`. The runtime exposes `automaticRetry: false`. Its accepted-send finalizer locks the accepted intent and avoids duplicating the Sent row.

[SMTP error classification](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/smtp/client.ts#L71) distinguishes explicit rejection from ambiguous failure during submission. [Lost-acknowledgment and resend assertions](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/tests/verification/task-00014.ts#L122) captures DATA before dropping the connection, expects one capture after repeating the original intent, rejects unconfirmed resend and uses a new confirmed intent. This was Q-009 background, but the assertions were not executed in this review; D-18 subsequently excludes this recovery machinery from the example-send proof. It differs from Support's general transient retry and Resourcing's non-personnel-form stale-lease recovery.

Use this contract as a candidate for the shared SMTP proof, with known rejection, lost acknowledgment, crash recovery and explicit resend tested separately. The source does not establish an exactly-once external mail guarantee.

## Elapsed SLA and optimistic updates — Q-010 / Q-012

[Atomic board move](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/board/domain.ts#L129) updates a placement only when the stored version equals `expectedVersion`; if no row matches it returns a conflict with current state. [Entry SLA snapshot](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/board/domain.ts#L289) records entry time, `sla_seconds`, an absolute deadline computed as entry plus seconds, and checklist contents. Existing entries keep their stored deadline/checklist when column defaults change; re-entry creates a fresh entry.

[Board deadline assertions](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/tests/verification/task-00010.ts#L98) covers preserved prior entries and a new deadline on re-entry; the later fake-clock assertions check expiry. [Preference compare-and-set](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/settings/domain.ts#L29) atomically matches `expectedRevision`, increments it, and raises `PREFERENCE_REVISION_CONFLICT` when stale. These establish elapsed time and stale-write rejection as existing behavior; Q-010/Q-012 no longer need generic preference questions.

## Automation snapshots and template limits — Q-008 / G-10 / G-11 / G-14

[Enqueue-time snapshots](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/automation/domain.ts#L290) loads matching rule conditions/actions and referenced templates and persists them in the event payload. Delay timing adds seconds to now; SLA-relative timing offsets the stored card deadline. Duplicate scoped event keys do not create another event.

[Checkpointed execution](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/automation/domain.ts#L186) reads persisted action/template snapshots, locks the placement, skips completed/skipped action attempts and uses run-plus-action-index idempotency. Its [Retry and ordered-action assertions](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/tests/verification/task-00011.ts#L124) covers completed actions not replaying; the suite also contains delay/SLA and stale-lease recovery cases. These are source/test candidates, not new passing receipts.

[Template authoring persistence](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/templates/domain.ts#L19) updates the same `mail_template` row on save and has no immutable publication entity in this path. Removal sets `active=false`; stable resolution can still find it. The allowlisted variables are `sender_name`, `subject` and `account_email`. Automation snapshots and compiled sent-message content preserve prior payloads, but that is narrower than D-15's complete published-definition contract. Reuse the payload/checkpoint pattern while explicitly adding or preserving accepted publication semantics in the proof.

## Automatic refresh and panel state — Q-011 / Q-013

[Account sync polling](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/app/views/components/product-shell.tsx#L273) polls per-account sync status about every 1.5 seconds while active and 15 seconds while idle, refreshing navigation/mail on state changes. Notification refresh also responds to storage/custom events. This is polling/event reconciliation, not Support's SSE transport and not evidence that every chat/notification change streams immediately.

[Panel state handlers](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/app/views/components/product-shell.tsx#L216) closes the left navigation below 992px on resize; Escape closes details and narrow navigation. The details event independently toggles the right panel without closing navigation in that handler. These are useful shell inputs, but do not establish the requested mutual exclusion with an agent panel. The accepted design's 768px breakpoint remains separate.

## Purge is an operator mailbox lifecycle — Q-015

[Inactive-account purge gate](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/operator/domain.ts#L134) requires an inactive mailbox account, verified migration/backup receipts and an operator identity. It records a content-free external watermark ledger before deletion and a passed/failed disposition afterwards. [Account-scoped deletion graph](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/operator/domain.ts#L238) deletes the affected account's related automation, board, message, draft and storage records, with restore replay driven by the ledger.

This is a maintenance operation for an inactive connected mailbox, not proof of the shared user-facing current-app Purge or cross-app Delete account contract. Likewise disconnecting a mail account is not deleting the OfficePress identity. Keep the semantics distinct and leave the unverified shared operations in G-05/G-13.

## Configuration and dependency conflicts

Inbox uses Stackpress 0.10.8 and explicitly composes its platform packages in [Platform composition](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/platform/plugin.ts#L1). It also supplies a central [Dependency graph validator](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/composition/graph.ts#L27) that rejects missing hard dependencies/cycles, and [Activation profile loader](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/composition/plugin.ts#L55) routes startup through it. The [SMTP plugin](https://github.com/officepress/office-inbox/blob/9ae3e4e6c39b185863152d6dc3eb24d50caba55d/plugins/smtp/plugin.ts#L6) directly registers the runtime using sibling services. This is not the KB's accepted per-dependent-plugin graceful absence contract and must not be copied wholesale.

Preferences store per-profile notification selections with reading/view settings; the shell also has browser notification fallback state. Those existing preferences do not replace the accepted requirement that shared Agent/Notification adapter setup belongs in Stackpress config. Source code must be adapted to the existing D-01/D-02 contracts, not promoted by folder name alone.

## Subsequent proof-scope correction — Q-009

The user resolved Q-009 through [D-18](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md): Message Templates need example sends and their send-call result. The delivery/retry/recovery paths above remain accurate source background, not required proof behavior or blockers. Do not import retry, uncertain-send investigation or recipient-delivery verification into the example-send proof.
