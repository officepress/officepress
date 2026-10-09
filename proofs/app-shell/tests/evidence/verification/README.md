# Reviewed P-01 evidence — 2026-10-05

These receipts precede the [round 3 generic-shell revision](../reviews/r003-generic-shell/notes.md).
Its neutral content area and read-only app-context agent supersede the sample
card UI and agent rename/Undo scenario described below. These remain historical
results; use the newer review for current behavior and verification scope.

The bounded app-shell experiment executed successfully with explicit uncovered
product paths. It is **not full S-01–S-06 acceptance or production approval**.
The suite remains Planning / Not Frozen. No release, email send or deployment
was performed. Source code and adoption instructions are in [the proof](../../../README.md).

## Fresh runs

| Command | Result | Exact retained receipt |
|---|---|---|
| `npm run generate` | Generated composed models, including the identity challenge ledger; no database was changed. | Source/schema fingerprints in the runs below. |
| `npm run typecheck` | Passed on Node 24.21.0. | Final invocation after the browser fixture correction returned exit 0. |
| `npm run build` | Passed; compiled server and local browser assets. | Exact build hashes and compiled-browser checks in the config receipt. |
| `npm run prove` | 61 checks passed; limitations retained. | [PGlite, real handlers, browser and both live models](p01-2026-10-05.json) |
| `npm run prove:config` | 33 checks passed; no source/build drift during the run. | [Built serving, restart and dependency/configuration absence](config-2026-10-05.json) |
| `npm run prove:postgres` | 11 checks passed; owned container removed. | [PostgreSQL schema, isolation, actions and persistence](postgres-2026-10-05.json) |

Receipts are exact copies of the timestamped successful outputs, not edited
claims. Their screenshot paths identify original ignored run output; the same
PNG files are retained here by basename. Original run captures now live under
`../playwright/` in this evidence directory; recorded receipt paths remain unchanged. Source hashes identify the uncommitted
proof revision. Node 24.21.0 and Chrome 154.0.8037.93 were used. Dependencies are
pinned in the proof's lockfile; PostgreSQL image/runtime metadata is in its receipt.

Both `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini` performed real reads
and renames through OpenRouter. The browser then exercised Undo against the same
persisted item. Receipts retain actual returned IDs, reported usage, per-call
duration and provider route when exposed. No alternate model or scripted reply
counts toward these live results.

## Coverage against the contract

| Area | Evidence obtained | Remaining boundary |
|---|---|---|
| S-01 panels | 260/64 desktop aside, 400 agent, feature-owned details slot, 390px exclusive mobile overlays, focus/Escape/scroll restoration and per-app preference; settings remove app aside. | No exhaustive device matrix or manual screen-reader audit; screenshot matching does not establish every native-design pixel. |
| S-02 About | Actual GitHub API check, stable SemVer selection and section edge cases, safe fixture Markdown rendering and exact clipboard bytes. | `officepress/officepress` returned no stable published release at 04:54:59 UTC. A real available-upgrade path remains unproved. No unattended daily checker. |
| S-03 theme/mode | Admin persisted app-scoped overrides, revision conflict handling, local logo validation, eight family palettes, CSP/no-flash storage fallback and built restart. | Custom colour overrides affect the light palette; family dark colours remain explicit. Not an all-component accessibility audit. |
| S-04 agent | Both live models, shared action parity, persisted cards restored after reload, server-only key, absent/invalid configuration guards; P-00 supplies transport/adversarial comparison evidence. | P-00 does not substitute for every adverse path in this full shell. Process-crash reconciliation of a running agent record and full embedded agent-native runtime remain unproved. |
| S-05 notifications | Local account feed, category filtering/read state, safe destinations, built restart, configured-off/absent/invalid cases. | No realtime transport/provider claim or exhaustive feed error-path browser matrix. |
| S-06 identity | Real pinned Profile/Auth handlers; 32 boundary checks including passwords, TOTP drift/replay/expiry/concurrency, CSRF, ownership, export and scoped purge. | Forgot-password handler absent; code/link delivery unconfigured. Across-app account deletion unavailable; built-in local removal has a characterized Profile defect. |

PostgreSQL checks cover generated installation and the action/theme/store
contracts. The full browser and identity HTTP matrix ran on PGlite; this is not
a claim that the entire shell/identity matrix ran on PostgreSQL.

## Failed observations retained and resolved

- Upstream generated identity relations referred to unavailable models/columns;
  a narrow generation adapter removes only those unresolved external relations.
- Auth secret decoding used inconsistent default database seeds; explicit shared
  configuration aligns the built-in handler and generated model.
- Ingest cookie iteration overwrote earlier Set-Cookie values; a response adapter
  preserves the complete array.
- Built-in account handlers needed CSRF, owner and read-only guards. TOTP grants
  had no wall-clock expiry and permitted same-second replay; an app-owned locked
  grant ledger adds five-minute expiry and one successful redemption.
- Reordered JSONB keys broke naive operation comparisons; normalized structural
  comparison preserves valid idempotent replay. One shared SQL connection allowed
  unrelated work into another transaction; serialization now preserves isolation.
- Production renderer routing started Vite middleware; compiled serving uses the
  app-owned static route instead. SSR JSON is escaped and CSP hashes match scripts.
- Theme-derived surfaces/foregrounds and notification navigation ordering were
  corrected. A screenshot tool's caret-hiding styles caused a hydration warning;
  screenshots now preserve the DOM. A deleted fixture was incorrectly reseeded;
  shell seeding now omits that isolated removal fixture.

Timestamped local failure receipts remain in ignored `tests/evidence/receipts/`. These findings
and their final boundary tests are retained rather than represented as upstream
package fixes. See the [identity contract](../../../plugins/auth/README.md) before
copying its adapters. The upstream account-remove defect remains exposed as a
gap; it is not silently treated as OfficePress-wide deletion.

## Visual evidence

- [Desktop with agent](desktop-agent.png), [real operation cards](agent-result.png)
  and [notifications](notifications.png).
- [390px details overlay](mobile-details.png), [mobile theme](mobile-theme.png),
  [dark theme](dark-theme.png) and [desktop dark mode](desktop-dark.png).
- [Auth chooser](signin.png), [account settings](account.png) and
  [fixture upgrade instructions](about-upgrade.png).

Desktop, mobile, dark and account screenshots were visually inspected. Automated
checks supply functional evidence separately. All temporary listeners, browser
processes and the run-owned PostgreSQL container were stopped. Disposable local
databases and diagnostic failures are retained; no existing app database was
reset. Root credentials remain ignored and are not part of this evidence.
