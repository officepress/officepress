# All-proof Stackpress guideline alignment — 2026-10-10

Scope: all four executable proof manifests in this repository. The current KB is the design contract; proof implementations and receipts establish bounded behavior, not independent universal prescriptions. App-shell remains the maintained scaffold, common-components the feature reference, and the two earlier proofs historical comparisons.

## Applied changes

- Plugin entrypoints contain provider construction, dependency guards and lifecycle/route/view wiring. Literal lazy page imports return their default actions directly; earlier parameterized page-factory namespace adapters are removed.
- Shared notifications, agent operations, settings and purge now have named business events. Component workflow/automation/template/form/chat orchestration and historical notes/SDK operations also live in events. Events enforce caller and role checks independently of HTTP pages; pages handle CSRF, web adaptation and response/view metadata.
- Existing authorization/CSRF rejection order is preserved with authenticated preflight events where needed. Business mutations reauthorize independently; no mutation occurs before web CSRF validation.
- Workflow runtime integration resolves the internal committed `officepress-workflow-transition` contract. Automations observes at priority -100. Tests prove priority 100/core 0/post -100, false cancellation, disabled integration absence and propagated post-commit failure. Isolated observer subscriptions remain available only for service contracts.
- Auth continues delegating password, TOTP, account operations and JWT mechanisms to pinned Stackpress 0.10.8. Its framework event is a version-specific HTTP adapter because the built-in handler consumes method, URL, sessions and redirects. It does not teach medium-dependent custom business events.
- Explicit transaction executors use callback Connections in app purge, auth challenge queries, action fixtures and component mutations. Existing single-connection serialization and domain query hooks remain; rollback/isolation regressions pass.
- All proofs use Yarn locks and supported Stackpress CLI scripts/configs; obsolete npm locks, old executable scripts and bootstrap/config paths are removed from the older proofs. Root tests aggregate plugin suites, share `tests/bootstrap.ts` and store evidence under proof-relative `tests/evidence/`.
- The AST guard now covers all four proofs and local action fixtures. Its regression rejects factory `.then()` loaders, eager pages, hidden/nonliteral imports, inline HTTP actions and eager external event bindings. Dependencies/generated code remain outside this scoped guard.

## Corrective findings during verification

Failed receipts remain in their original timestamped locations.

1. A new direct-event assertion found the missing chat authorize binding used by SSE. The guarded listener is now registered and the direct/HTTP SSE checks pass.
2. Component mutation page refactoring initially moved CSRF ahead of authentication. Fresh HTTP regressions restored guest401, Forms-admin403 and other invalid-CSRF419 ordering through nonmutating authorization preflights.
3. The synthetic auth projection test emitted a route with no request URL. Default page dispatch needs the actual web URL; the test now supplies it and retains its post-write caller refresh assertions.
4. A cold development browser run passed interactions but caught React hook errors. Reactus virtual hydration dependencies were discovered too late by Vite. Both maintained development configs prebundle their actual React/Markdown imports and deduplicate React; clean-cache browser suites pass with the console/page-error assertions retained. The KB records this as a local version-specific integration correction.
5. The expanded historical CLI campaign exposed the published schema Revisions module’s undeclared fast-glob dependency. The older proof now explicitly pins the same dev dependency already present in maintained proofs; its full CLI campaign passes.

## Fresh verification

| Proof | Final checks | Fresh evidence |
| --- | --- | --- |
| App-shell | Frozen Yarn install, generate, typecheck and build; 4/4 Node suites. Main72, built config38, app-context agent5, custom-base identity39. Real browser/model checks enabled; cold cache clean. | [Main72](../receipts/2026-10-10T08-14-43-646Z.json), [built config38](../receipts/config-2026-10-10T08-15-04-155Z.json), [agent5](../receipts/agent-context-qwU1Dp.json), [identity39](../receipts/identity-90c1632f-d4dc-44c5-8697-d4c70995d3d8.json) |
| Common-components | Frozen Yarn install, generate, typecheck and build; 3/3 Node suites. Main98 plus default/custom identity39 each and development8. Direct business events, extension priorities, HTTP, SSE, attachments and all four built/development feature views pass without console/page errors. | [Main98](../../../../common-components/tests/evidence/receipts/2026-10-10T08-14-50-747Z.json), [default39](../../../../common-components/tests/evidence/receipts/identity-700323fe-c950-4a0c-82b9-89830f4c33ba.json), [custom39](../../../../common-components/tests/evidence/receipts/identity-3d6222ef-70b5-4429-b64e-482f981ba079.json), [development8](../../../../common-components/tests/evidence/receipts/develop-2026-10-10T08-15-11-046Z-6145740a-1cf1-49b1-8b2a-4ccb0d8a13f0.json) |
| Historical boilerplate | Frozen install, generate, typecheck and build; 24 integration checks and 2/2 Node tests. CLI generate/client, push/populate/query/purge on empty scratch data, migration SQL, emit, dev cleanup, generated CRUD, rendering, restart, dependencies and managed watcher checked. | [Detailed campaign](../../../../stackpress-boilerplate/tests/evidence/verification/guideline-refactor.md), [receipt24](../../../../stackpress-boilerplate/tests/evidence/receipts/2026-10-10T07-54-35-175Z.json) |
| Agent-mode compatibility | Frozen install, SDK integrity preparation, typecheck and build; 7/7 plugin tests, offline32 and live41 matrix checks. Both real models × both original candidates, cancellation/Undo and supported CLI watcher/serve paths pass. | [Detailed campaign](../../../../agent-mode-compatibility/tests/evidence/verification/p00-kb-refactor-2026-10-10.json), [offline32](../../../../agent-mode-compatibility/tests/evidence/receipts/2026-10-10T07-54-12-339Z.json), [live41](../../../../agent-mode-compatibility/tests/evidence/receipts/2026-10-10T07-54-17-875Z.json) |

All listeners were launched through devmetrics with assigned ports. Final maintained suites exited0 and self-unregistered on3000/3001. Historical managed watchers/listeners were stopped. Run-owned scratch databases/storage were closed and removed; existing databases and unrelated servers remain intact. Receipt source hashes were checked against final files; see the [fingerprint/cleanup audit](all-proofs-fingerprint-audit.json). The five-check agent context receipt is correlated with the main campaign’s complete source map, which includes its runner.

The root pattern guard and all9 regression tests pass. Required KB workspace, OfficePress-ingestion and Stackpress-ingestion validations pass (workspace preferred-length warnings remain on existing files). No MCP index rebuild, commit or push was performed.

## Boundaries retained

- Development/database checks use PGlite; direct production PostgreSQL, deployment acceptance and assistive-technology review are not established. No cross-engine campaign is required by the current policy.
- Common-components uses controlled mail transports; no real SMTP send campaign was run. Auth intentionally keeps unavailable delivery/cross-app deletion flows explicit.
- The portable SDK comparison retains its original self-contained HTML views and JSON fixture store; no invented Reactus/Idea/database requirements were added to that comparison fixture. Original SDK integrity and model/domain implementation are preserved.
- Historical receipts keep their original paths/commands and are not rewritten to imply current compliance. Current successful receipts supersede failed/intermediate runs only for their actual bounded scope.
