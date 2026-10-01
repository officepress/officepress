# Stackpress views and OfficePress UI

Implement pages with Reactus/React, the chosen shell's provider and browser-safe props. Keep request orchestration in page handlers and domain behavior in appropriate events/services. Frui supplies reusable behavior; OfficePress tokens, family identity, copy and state rules define appearance.

Translate kit markup and interactions into components. The preserved vanilla scaffold is an example source, not the OfficePress runtime scaffold. Avoid imperative script ownership of React-rendered elements. Preserve accessible labels, keyboard interaction, empty/error/loading/disabled states and safe destructive confirmations.

Keep shared shell/layout in its owner and app-specific views in feature plugins. Hide unavailable capabilities along with disabled routes. Guard required identity/tenant services; absence must not expose protected pages.

- [UI foundations](ui-foundations.md) — load for tokens, spacing, typography, accessibility and motion.
- [Shared app experience](shared-app-experience.md) — load for frame, authentication and settings behavior.
- [UI workflows](../references/00080-officepress-ui-workflows.md) — load for mechanical and visual acceptance of rendered screens.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.
