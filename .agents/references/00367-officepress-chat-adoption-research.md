# Chat, notifications and consumer-adoption research

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load for T-08/T-09/T-18/T-19/T-23, G-06/G-08/G-16 and P-01/P-05/P-06. Access date: 2026-10-02. Status: evidence and proposed contracts; no realtime library or packaging format selected.

## Ordering is not durable delivery

Socket.IO documents ordering for events that arrive, but default delivery is at most once; extra delivery guarantees belong to the application. Recovery can fail, and its skipMiddlewares option can omit middleware after successful recovery. [Delivery guarantees](https://socket.io/docs/v4/delivery-guarantees/), [connection-state recovery](https://socket.io/docs/v4/connection-state-recovery/).

**Proposed chat contract:** persist messages before advertising authoritative success, use stable message/operation IDs and a server-owned ordering cursor, and reconcile after reconnect from an authorized persisted source. Deduplicate repeated acknowledgments/events. Do not sort solely by client wall clocks. Retain a local draft and explicit pending/failed/unknown state; do not reinterpret a missing acknowledgment as proof the provider did nothing.

Define unread/read as caller-specific state with a monotonic acknowledged cursor or equivalent rule. A bulk mark-read operation should identify the snapshot boundary so a concurrently arriving message remains unread. Test two tabs, duplicate events, delayed/reordered delivery, thread switching during send, reconnect outside the replay window and a gap requiring a fresh snapshot. Private internal notes never enter outbound adapter payloads. These are proposed application semantics, not promises supplied by a transport library.

## Streaming, permission changes and accessibility

Server-sent events support event IDs and reconnect timing; the documented server example addresses buffering/flush behavior. Automatic reconnection does not supply application storage or access control. [SSE mechanics](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

OWASP recommends validating sessions during long-lived WebSocket connections and avoiding sensitive payload/token logging. [WebSocket security](https://cheatsheetseries.owasp.org/cheatsheets/WebSocket_Security_Cheat_Sheet.html).

**Proposed transport comparison:** ordinary authenticated mutations plus polling is a useful correctness baseline; SSE can carry server-to-client notifications, while bidirectional sockets are optional if a proved requirement warrants them. Record the selected transport's deployed proxy behavior, connection limits, heartbeat/timeout, resume window and bounded queue size. The later [D-19 decision](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) resolves visible conversation behavior: live multichannel chat versus acceptable periodic/manual email-only refresh. Adapter mechanics remain implementation work; the earlier proposal does not require all consumers to share one transport. A deterministic local adapter can test application state without claiming deployed streaming works.

Recheck permissions for each operation and authorize replay/catch-up. Session expiry, logout, account switch and permission revocation must stop further unauthorized delivery; do not rely solely on the initial connection handshake. Test revocation during a stream, stale replay tokens, cross-account cursors and duplicate reconnects. Bound slow-consumer buffering and fall back to a snapshot when retained history is unavailable. The shell notification feed uses the same rules but keeps its own category/read-state responsibility.

WAI's log role offers polite announcements for appended sequential content without moving focus. [Accessible log updates](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23).

Proposed chat UX: announce new relevant messages without rereading an entire restored history; preserve the scroll anchor while loading older messages; avoid forcing the viewport to the bottom while someone reads earlier content. Provide a new-message affordance. Verify behavior with assistive technology; virtualization/reconciliation can change what is announced. Keep details sheets and the global agent panel within the shell's focus contract.

## Plugin boundaries and distribution

Node package exports define supported entry points and encapsulate undeclared subpaths. npm workspaces auto-link local packages, while optional peers are not automatically installed. These mechanisms do not perform Stackpress service dependency checks. [Node package exports](https://nodejs.org/api/packages.html), [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces/), [optional peer dependencies](https://docs.npmjs.com/cli/configuring-npm/package-json/).

**Proposed adoption boundary:** publish/document browser-safe types and components separately from server services, handlers, config and schema imports. Avoid private sibling imports. An optional dependency that is unconditionally imported at module load can crash before plugin.ts has a chance to degrade gracefully; test both package absence where supported and service absence after plugin selection. Provider configuration happens before dependent registration; each plugin still owns guards in both listen and route phases.

Keep schema compatibility when disabling a runtime plugin. A clean consumer must prove that contracts do not depend on hoisted packages, workspace symlinks, absolute paths or undeclared fixture data. If packaging is chosen, npm pack supports a dry-run inventory; actual artifact installation is a later proof, not a command run here. [npm pack](https://docs.npmjs.com/cli/v11/commands/npm-pack/).

The research initially proposed source adoption while leaving package distribution open. The later [D-09 decision](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) selects copying documented plugins and modifying them for each app. P-06 must prove that path and an app-specific modification; package artifact evaluation is not required for initial adoption. Copy only maintained inputs, change app identity/family, import root-composed Idea files and use config-owned adapters. Disable templates while keeping chat composition, disable automations while keeping boards, disable agent/notifications while keeping the shell, and restore after restart without data loss. G-08 is resolved by D-09; package mechanics above remain background evidence, and no package publication is part of this proof.

## Evidence boundary

For P-05/P-06 retain exact fixture inputs, stored outcomes, effective routes/listeners/tools, browser interactions, commands, versions and failure/recovery results. Verify PostgreSQL separately when claiming concurrency or isolation behavior. Screenshots demonstrate appearance, while persisted rows and effect counts demonstrate work. No browser, backend, deployment or consumer proof was executed in this research round.
