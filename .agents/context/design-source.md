# OfficePress design source

The current editable source is the local **OfficePress Designs `.opcd` ZIP archive**, replacing the former Pencil resource. It contains `design.json`, 18 frame JSON files and four `.opcd/` project/session records. Consult the extracted references for text, variables and component metadata; use the archive when editing graphical geometry. The original archive stays byte-identical during KB ingestion.

The design extraction covers 18 root frames, 11 reusable components, 8,940 resolved nodes, 2,858 nodes with content, and 205 variable definitions. The theme axes are mode and family. Resolved instances use full instance paths so inherited content remains traceable.

## Design areas

- OfficePress Product Marks and OfficePress Logo: construction, family identity, symbol explanations and lockups. The board shows the current 28 family product marks.
- Inbox Board — Light / Dark: the reference app layout and board examples.
- OfficePress App UI Guidelines: theming, family shells, colour tokens, typography, spacing, shape, components, rules, app frame and motion.
- OfficePress App Layout: aside states, header globals, User Preferences (Language and Time zone), account/app settings and authentication.
- OfficePress Common Modules: workflows, automations, forms, message templates and chat.
- Reusable components: shell preview, header, sidebar/rail, board content, user popover, agent panel/empty state, notifications/empty state and workflow card.

## Retrieval

- [OPCD verification and User Preferences creative direction](../references/00399-officepress-opcd-user-preferences-direction.md) — load for the archive format/inventory/hash, exact preference scope and defaults, layout, copy, provenance and unresolved implementation details.

- [Product Marks revision and lossless history](../references/00396-officepress-product-marks-revision.md) — load for the 28-mark board, the Clients/Content family moves, the meaning of the five new marks, the revised kit files and recovery of the earlier board and assets.
- [About menu revision and lossless history](../references/00360-officepress-about-menu-revision.md) — load for the current two-tab settings menu, config-owned Agent/Notification settings, and preservation of changed or removed design records.

- [Complete screen and component map](../references/00075-officepress-pencil-design-map.md) — load when finding all text and structural/style properties by design section.
- [Full variable and theme map](../references/00076-officepress-pencil-variable-map.md) — load when resolving a token or comparing active op-* values with historical namespaces.
- [Native file and visual resources](../references/00077-officepress-visual-asset-map.md) — load when opening the editable source or a supplied screenshot.
- [Current authority and corrections](../references/00078-officepress-source-decisions.md) — load when encountering older auth options, proposed functionality or sample updates.

The native file preserves path geometry, authored component overrides and original serialization. The extracted node tables preserve all current authored non-geometry properties with resolved instances; prior API-computed hidden-node layouts remain recoverable in history. Historical sample labels, copy and unused variables remain available with source status; they do not override accepted context.
