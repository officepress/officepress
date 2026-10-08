# Support reusable-component source evidence

Owner: [live-project correlation](00368-officepress-live-project-correlation.md). Load for chat streaming, outbound delivery, board concurrency, responsive panels and source-adoption limits. Inspected 2026-10-05 at `operations-support@c791e71a98d5feca4d07989d5d60ca4b1a977fb2`. All findings describe source, not a new deployment or test result.

## Outbound mail retries differ from Inbox — Q-009 / G-10 / G-14

[Outbound worker](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/services/outbound-delivery-worker.ts#L87) claims a batch without holding SQL locks during external sending. Default maximum attempts is five; stale processing claims are eligible after ten minutes. It selects Gmail API or SMTP transport, sends, then records completion. Its catch path marks `PermanentDeliveryError` or exhausted attempts failed; other exceptions return the job to a delayed retry queue.

[SMTP adapter](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/infrastructure/gmail-smtp-transport.ts#L76) uses Gmail TLS SMTP, sends with stable message headers, maps auth/envelope errors and 5xx responses to permanent rejection, and rethrows other errors. It has no separate uncertain-delivery result in this inspected path. Thus a timeout or failure after provider acceptance can enter the general retry policy; a stable Message-ID does not itself demonstrate deduplication by the receiver.

[Outbox claim](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/infrastructure/stackpress-outbound-delivery-repository.ts#L64) uses `FOR UPDATE SKIP LOCKED` to claim due pending or stale processing rows and increments attempts. [Completion and retry persistence](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/infrastructure/stackpress-outbound-delivery-repository.ts#L261) updates status under the current processing attempt; retry returns it to `PENDING` with a new available time. Completion stores `SENT` after the provider handoff; that state is not a separately observed mailbox receipt.

[Retry timing assertions](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/tests/outbound-delivery-worker.test.ts#L216) specifies exponential jittered backoff, including 15/30/60 seconds at the midpoint and a six-hour cap. These tests were read, not run. The presence of tests does not reconcile this policy with Inbox's no-automatic-uncertain-retry behavior. At review time this left Q-009 as a source conflict; D-18 subsequently removes that choice from example-send scope.

## Chat changes use SSE with reconciliation — Q-011 / G-16

[Stream connection lifecycle](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/views/support/ui/use-support-stream.ts#L38) opens credentialed EventSource, deduplicates sequences in a bounded set, pauses while hidden, refreshes on return, reconnects with 1–30 second backoff plus jitter, and requires a heartbeat within 45 seconds. A 60-second timer reconciles visible state. When EventSource is unsupported the hook returns paused; do not claim this branch starts a complete polling fallback by itself.

[Stackpress streaming endpoint](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/pages/support/stream.ts#L42) writes SSE through `res.resource`, sets status 200 and calls `res.stop()`. Frames carry identifiers/kinds rather than message bodies. A reader refetches through authorized endpoints. Defaults are 15-second heartbeats and a 55-second connection lifetime; reconnect recovery is bounded to 15 minutes with a ten-second overlap.

[Live and replay authorization](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/services/support-realtime-hub.ts#L35) fans out hints only within the subscriber's tenant/department snapshot; replay uses the same check. Authorization is refreshed on reconnect. Mid-connection membership is not reloaded on every hint in this hub, although content refetches reauthorize; the general proof must still test permission revocation. Persisted cursor/history and content authorization are separate from network transport.

This is a concrete immediate-update reference. Inbox uses polling, so neither the source comparison nor the prior generic polling proposal selects a single shared transport. D-19 subsequently settles the expected conversation behavior by use case: live updates for Support-style multichannel chat and acceptable periodic/manual email-only refresh. Adapt the mechanisms accordingly; a universal transport is not required.

## Board edits and checklist versions — Q-012 / G-17

[Board placement mutation](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/domain/board-work.ts#L309) checks tenant/department scope, requires an expected version for an existing placement, rejects mismatches, increments the version and saves inside a repository transaction. Board/column/checklist mutations also check expected versions. Existing placement work captures a selected checklist version when creating its checklist.

[Stale-board response contract](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/tests/board-api.test.ts#L84) expects HTTP 409, `reloadRequired: true` and a message that the draft was not applied. [Transaction wrapper](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/infrastructure/stackpress-board-work-repository.ts#L68) delegates to the database engine. Source establishes reject-and-reload behavior; source inspection alone does not prove every concurrent race or isolation level. Q-012 is evidence-resolved for the shared policy, with atomic enforcement retained as a proof criterion.

The inspected board model did not establish an elapsed-versus-business-hours SLA engine. Use Resourcing and Inbox for Q-010's elapsed-time evidence; do not turn lack of a keyword match into a claim that no timing feature exists anywhere in Support.

## Responsive details — Q-013 / G-12

[Responsive details rule](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/views/support/ui/responsive-workspace.ts#L1) closes Details when initially entering or crossing below 1200px, without repeatedly closing a drawer opened at that width. [Workspace resize behavior](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/views/support/entry.tsx#L855) also constrains details width and compact layout. Its [Mobile filters toggle](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/views/support/entry.tsx#L1461) changes its own open state. These are useful controls but do not establish a common navigation/details/AI-panel mutual-exclusion contract. This app's support “Agent” terminology can refer to a human operator, not an AI panel.

## Theme and recovery — G-09 / Q-014

[Theme bootstrap](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/config/theme.ts#L10) uses a `theme` cookie, defaults missing/invalid values to dark and aligns hydration with the server-rendered theme. That is evidence for a mode preference, not an app-admin logo/accent configuration store. Do not copy its default/cookie scope as a new OfficePress-wide rule.

[Recovery request](https://github.com/officepress/operations-support/blob/c791e71a98d5feca4d07989d5d60ca4b1a977fb2/plugins/app/domain/support-onboarding.ts#L320) returns a uniform acceptance response, checks eligible identity/access, issues a recovery challenge and sends email while keeping delivery failure from becoming an account-enumeration signal. This does not establish lost-authenticator recovery. Q-014 remains open; SMS, recovery codes and security keys remain excluded by the accepted KB.

## Adoption boundary

Most of these domain/infrastructure/service/UI responsibilities currently sit beneath `plugins/app/`. Their logical modules are useful reuse inputs, but copying the whole app plugin would contradict the accepted separation and independent disablement requirements. Extract bounded feature plugins with public contracts and per-plugin guards during the proofs. No package or application code was changed, no dependency was installed and no live message was sent during this review.

## Subsequent proof-scope correction — Q-009

The user resolved Q-009 through [D-18](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md): Message Templates need example sends and their send-call result. The delivery/retry/recovery paths above remain accurate source background, not required proof behavior or blockers. Do not import retry, uncertain-send investigation or recipient-delivery verification into the example-send proof.
