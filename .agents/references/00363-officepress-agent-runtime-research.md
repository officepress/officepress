# Agent runtime, Stackpress fit and configuration research

Owner: [Spec 00001 research](../specs/00001-reusable-app-shell-and-component-proofs/research.md). Load for T-01/T-02/T-10/T-20/T-24, G-01/G-02/G-04/G-06 and P-00/P-01. Access date: 2026-10-02. Status: evidence and proposed proof guidance, not accepted package adoption.

## Integration candidates

**Observed:** agent-native documents a full embedded runtime with server-verified host identity and framework-managed SQL tables, plus a portable host/sidecar bridge. Browser actions depend on an open tab; durable mutations belong on the backend. A separate framework database/schema is recommended upstream to avoid table collisions. [Embedding SDK](https://www.agent-native.com/docs/embedding-sdk/).

Its server architecture uses Nitro/H3 and Drizzle. This is a runtime adaptation question for the existing Ingest/Reactus shell, even though both ecosystems can use PostgreSQL. [Server overview](https://www.agent-native.com/docs/server-overview/).

**Proposed comparison:** keep Stackpress as the owner of app identity and domain data. Candidate A uses a pinned agent-native bridge/sidecar or supported embedded adapter; record exactly which. Candidate B implements the shared action/context contract through Stackpress services. Give both the same read and reversible mutation, fixture caller, permission denials and unavailable-provider tests. Do not compare a real SDK integration against an unrelated chat mock. Native embedding, separate sidecar and a host bridge are distinct topologies with different state, transport and deployment costs.

P-00 must report startup, shutdown, dependency size, generated tables/migrations, browser assets, React compatibility, request/session mapping, action registration and disabled behavior. A second renderer or identity authority is a failure unless a deliberate boundary is documented and accepted. The database choice does not grant a framework permission to create tables in a host product database.

## Version and engine evidence

The directly inspected upstream `main` manifest reports `@agent-native/core` **0.198.7**, ESM, `./client/host` and `./client/host-bridge` exports, and Node **>=22.22.0**. This is a source snapshot observation, not a verified published release or OfficePress dependency selection. [Inspected manifest](https://raw.githubusercontent.com/BuilderIO/agent-native/main/packages/core/package.json).

Locally, the maintained baseline README specifies Node 22.14+ within Node 22, and `/Users/cblanquera/.nvm/versions/node/v22.14.0/bin/node --version` returned `v22.14.0` during this research. That verified executable does not satisfy the observed candidate engine requirement. No runtime or package was changed. P-00 must choose and record an explicit compatible runtime/candidate artifact, verify exports against that artifact, and keep the OfficePress Stackpress 0.10.8 contract. A permissive install warning is not compatibility evidence.

**Unresolved:** registry artifact equivalence, dependency/peer compatibility, exact supported H3-to-Ingest adaptation and footprint. Capture the package integrity, source revision and lockfile in a future receipt. Do not execute an upstream repository install or postinstall merely to inspect an API.

## Actions, authority and host context

Upstream exposes actions across UI, agent, HTTP and additional transports. `authorize` is documented as a pre-run guard across dispatch paths; surface visibility flags and approval are separate. [Action overview](https://www.agent-native.com/docs/actions-overview/), [access controls](https://www.agent-native.com/docs/actions-access-control/).

The production tool configuration defaults to database read tools; `frameworkTools.database: "off"` removes those raw database tools. Therefore adopting its action API does not by itself establish an actions-only agent. [Production agent access](https://www.agent-native.com/docs/actions-agent-tools/).

**Proposed proof:** enumerate effective UI/HTTP/agent/MCP/A2A/CLI exposure where actually enabled. Disable unneeded transports and raw database/code/extension capabilities. Reuse the same authenticated action implementation rather than a second agent mutation path. Re-fetch selected record IDs using the current caller; ignore browser-supplied role/organization assertions. Test approval followed by revoked access, stale selection, cross-account IDs, rejected direct HTTP calls and forged action names. Never claim every upstream transport was tested when the candidate enables only one.

For a window bridge, MDN requires checking sender origin and, where relevant, window source, with an exact target origin. Validate message structure after sender checks. [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

Proposed cases: a second tab sends the same request ID; an iframe navigates; a reply arrives after route change; the browser closes during a durable operation. Correlate tab/session/action IDs, reject stale or wrong-origin replies and return operation status from the backend. Keep ephemeral selection commands separate from durable business work. These tests are inferences for OfficePress, not claims that the upstream adapter already satisfies them.

## Stackpress evidence boundary

The official site advertises built-in auth, sessions, roles and CSRF; publisher records identify `stackpress-server` and `stackpress-view` 0.10.8. These corroborate package existence and broad capability only. [Stackpress](https://www.stackpress.io/), [server package](https://www.npmjs.com/package/stackpress-server), [view package](https://www.npmjs.com/package/stackpress-view).

Online detailed source reads failed as recorded in the [round ledger](00362-officepress-proof-research-rounds.md). The earlier local route/CSRF/TOTP observations and six file fingerprints remain in the research owner. No web result establishes compatibility between built-in view helpers and this custom renderer, or proves distinct purge/delete semantics. P-01 still needs real locked handlers and schema, safe view props, one rendering owner and denial tests. Styling must not become a replacement authentication implementation.

## Configuration and audit proposal

Accepted ownership remains Stackpress config; exact `officepress.agent` and `officepress.notifications` keys are proposed. Separate four concerns: server configuration, effective capability availability, browser presentation props and user preference data. A configured flag is not evidence that required services registered successfully. Each dependent plugin guards its own listen/route/worker contributions after providers are available; missing security dependencies fail closed. Restart activation remains unchanged.

OWASP recommends managing secret lifecycle and avoiding exposure through logs. [Secrets management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html).

Proposed receipt fields: operation ID, actor reference, app/account scope, action name, definition revision, outcome, attempt and timestamps. Browser props expose only necessary safe flags; logs/receipts omit credentials, session tokens, TOTP secrets and complete private message/context payloads. Test with distinctive fake sentinel secrets so accidental serialization is detectable. Do not add a new settings page to expose server config. Disabled notifications must leave domain work readable; unavailable agent capability must leave normal UI actions usable.
