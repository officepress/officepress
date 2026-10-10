# Stackpress verification

A scaffold is complete only after its declared checks pass. Record commands, resolved versions, input fingerprints, runtime mode, checks and limitations in a receipt. Do not treat file presence, a generated client or a successful bundle as end-to-end completion.

## Required post-verification audit

For custom-app implementation, feature changes and repairs, the first functional pass starts the finishing cycle: **implement → verify → audit → refactor → apply the full applicable style guide → verify final source**. Automatically apply the authorized, scoped, behavior-preserving fixes and repeat when actionable findings remain. Completion requires both checked behavior and human-maintainable final code; do not stop at the first passing proof or formatter run.

- [Post-verification audit and refactor cycle](../references/00392-stackpress-post-verification-audit-cycle.md) — load after implementation works and before declaring completion. Defines required ChrisAI Coding logic/maintainability/language passes, cyclomatic-complexity review, responsibility checks, automatic fix authorization, scoped repetition and final-source evidence.
- [Human-maintainable documentation and code style](../references/00393-stackpress-human-maintainable-code-style.md) — load while applying the final style pass. Gives precise sectional/local comment expectations, module-level-only JSDoc, meaningful naming with `ctx`/`req`/`res` preserved, language-specific checks and code examples.

## Functional verification scope

Cover generation and runtime reconnection, all maintained TypeScript, built JS/CSS/static assets, development HTTP and built production HTTP. Exercise feature enablement, disablement, missing required providers and restart restoration. Confirm absent routes/listeners and continued independent behavior.

Use the normal `.build/database/` PGlite database for development and a uniquely named scratch database only when a proof requires isolation. Test persistence across restart, then remove run-owned scratch data after its connections close while preserving unrelated files. The current adoption policy treats PGlite as the development substitute for PostgreSQL and CockroachDB; do not add or require a separate cross-engine compatibility proof. A receipt must still name the adapter it actually exercised, without claiming direct production-engine execution.

- [Proof evidence and coverage](../references/00206-stackpress-proof-evidence.md) — load for actual findings, source completeness and outstanding proof boundaries.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when changing package scripts, migrating config/bootstrap paths, aggregating plugin tests or storing proof evidence; records the accepted 2026-10-08 conventions and upstream provenance.
