# Workflow execution, persistence and recovery research

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load for T-05/T-11/T-14/T-15/T-21/T-28, G-10/G-11/G-14/G-17 and P-00/P-02/P-05. Access date: 2026-10-02. Status: evidence and proposed contracts; no queue or workflow engine selected.

**Later authority note (2026-10-06):** D-23 in [the decisions ledger](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) replaces numbered workflow definitions with mutable Draft/Published workflows and removes movement prerequisites/WIP. The research below is preserved as historical evidence; immutable automation run definitions remain distinct from editable business workflow stages.

## Definition, execution and side effects

BullMQ recommends simple idempotent jobs whose eventual result is independent of retry count. Temporal distinguishes workflow definitions from executions and requires deterministic replay of workflow commands, with external effects outside replay and versioning for code changes. [Idempotent jobs](https://docs.bullmq.io/patterns/idempotent-jobs), [Temporal definitions](https://docs.temporal.io/workflow-definition).

**OfficePress inference:** separate the designer's draft, immutable published revision, trigger instance, run and ordered step attempts. Bind a started run to a definition revision and stable action inputs. Editing the draft does not silently rewrite a waiting run. A business workflow stage definition and scheduler implementation are different responsibilities. Do not add Temporal-style replay unless that execution model is deliberately adopted.

Proposed minimum run evidence: definition revision, scoped trigger/event ID, run ID, step ID, actor or authorized service identity, planned time, attempt, input reference, result/error and any compensation reference. A dry run may read authorized data and return a proposed plan, but must not write business rows, enqueue live work or call sending adapters. Validation and preview remain possible without a production worker.

## Transactional dispatch and idempotency

An outbox addresses a database-write/message-send dual-write failure by recording dispatch intent with the business change. Dispatch can still duplicate messages, so consumers need idempotency. This is a pattern, not a requirement to use AWS services. [Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html).

BullMQ job-ID uniqueness no longer suppresses a duplicate after the previous job is removed. Queue retention therefore cannot alone define permanent business deduplication. PostgreSQL serialization failures require retrying the complete transaction, including its decision logic. [Job IDs](https://docs.bullmq.io/guide/jobs/job-ids), [PostgreSQL 17 serialization handling](https://www.postgresql.org/docs/17/mvcc-serialization-failure-handling.html).

**Proposed model:** use a scoped operation/idempotency key and request digest; replay an existing result for the same request, reject reuse with different content, and give an intentional new operation a new key. Persist business dedupe separately from disposable queue records. Establish a retention/replay horizon and policy for replay after expiry (G-14). Outbox dispatch retries are distinct from transaction retries and must not repeat irreversible work inside a retried transaction.

Required experiments: crash before commit, after commit/before dispatch, after adapter acceptance/before acknowledgment, duplicate triggers, two workers claiming the same work and retry after queue cleanup. Count committed domain changes and adapter effects, not just successful responses. A local sink can demonstrate the contract; it cannot prove an external provider's exactly-once behavior. If the provider lacks dedupe or outcome lookup, report an ambiguous outcome instead of blind resend.

## Time and scheduling

BullMQ delayed jobs become eligible after a delay; actual processing can occur later under load. Its current scheduler documentation is separate from legacy Repeatable APIs. [Delayed jobs](https://docs.bullmq.io/guide/jobs/delayed), [job schedulers](https://docs.bullmq.io/guide/job-schedulers/).

TC39's Temporal documentation explains why local wall time can be absent or repeated at offset transitions. A local date/time without a zone/disambiguation rule does not uniquely identify an instant. [Time zones and ambiguity](https://tc39.es/proposal-temporal/docs/timezone.html).

**Proposed time contract:** distinguish elapsed delay, absolute instant and calendar/SLA deadline. Persist UTC instants and the IANA zone/local input needed to explain a calendar schedule. Decide DST ambiguity, missed-run catch-up, paused definitions, due-time changes, holidays/business hours and whether an SLA is elapsed or business time (G-14). Do not assume the user's Asia/Manila timezone settles all future app users' schedules. This research does not require native Temporal support or a polyfill.

Use an injectable server clock plus independently controlled browser time. Test before/at/after due time, process downtime across a deadline, repeated/skipped local times and a late worker. Report scheduled time and actual execution time separately. Plugin disablement suppresses worker registration after restart while preserving definitions, runs and stored deadlines; resumption policy must be explicit.

## Concurrent edits and isolation

HTTP If-Match supports conditional updates that prevent overwriting a resource changed since it was fetched. [If-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/If-Match).

Proposed equivalent public-action contract: expected revision plus mutation, checked atomically in the database. A stale update returns a conflict and current revision; UI, agent and automation callers follow the same rule. Test simultaneous card transitions, definition edits, theme saves and form publication. A preflight read followed by an unconditional write is insufficient. Immutable published revisions preserve prior response/run meaning; optimistic concurrency protects competing new edits. These solve different problems (G-11/G-17).

PostgreSQL table owners and BYPASSRLS/superuser roles normally bypass row policies. [PostgreSQL 17 row security](https://www.postgresql.org/docs/17/ddl-rowsecurity.html).

A schema or database separate from agent-native framework state prevents name collisions but does not itself establish tenant isolation. If RLS is part of the chosen implementation, test with the actual restricted runtime role, two identities and connection reuse. Retain server authorization even when database policies are added. Do not infer production PostgreSQL isolation from PGlite fixtures or an owner-role test.

## Cancellation and compensation

Microsoft's asynchronous-request pattern distinguishes requesting cancellation from a backend-confirmed canceled result. Compensation is application-specific, can itself fail and should support safe retries; it need not restore the exact old state. [Async operation status](https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply), [compensating transactions](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction).

**Proposed action lifecycle:** pending/running, cancellation requested, succeeded/failed/cancelled, with compensation state separately recorded when applicable. A cancellation that loses a race to commit must report completed work; closing an agent panel or aborting HTTP is not proof of rollback. Undo is a new authorized action with a validity/precondition check, not deletion of an audit record.

Proof cases: cancel before execution, while waiting on a local adapter and just after a commit; retry a compensation; revoke permission before Undo; attempt Undo after a conflicting later edit. An external send cannot generally be recalled. Preserve partial outcomes and expose review/reconciliation when the true result is unknown. No distributed saga engine is required to demonstrate this bounded behavior.

## Subsequent publication decision — 2026-10-05

The user accepted [Q-008 / D-15](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md): publishing a changed definition creates a new immutable version for new work, while existing responses, sent messages and in-progress or completed runs retain their original versions. This accepts the revision-preservation policy proposed above, including waiting runs; it does not select a scheduler, replay engine, concurrency policy or schema implementation. P-02 must demonstrate that publication and restart preserve an existing run’s definition and that new runs use the new publication. Any migration of existing work requires a separate contract; publication is not migration.
