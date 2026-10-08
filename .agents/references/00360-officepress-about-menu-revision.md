# OfficePress About menu revision — 2026-10-02

Owner: [Design source](../context/design-source.md). Load when reconciling current app settings with earlier Updates screens, or auditing preservation of the user's native design edit.

## Accepted current behavior

The user updated the [repository Pencil source](../resources/officepress-design/officepress.pen) and said: “I mainly cleaned up the menu. Updates are now About.” App Settings now has two tabs: **About** and **Theme**. About contains the installed version, updates and change log; its status section is labelled **Version and updates**. Removed navigation examples include General, Members, Agent, Integrations and Notifications. This menu cleanup does not remove the agent or notifications from the app header.

The user separately requires Agent and Notification settings in Stackpress config. Do not recreate configuration tabs for those settings. Keys, types, provider adapters and public projections are to be defined and verified in the proof spec; they are not claimed to be existing Stackpress built-ins.

Upgrade scope was clarified as “Version checks and upgrade instructions for the installed version”. Keep Checking, Up to date, Update available and failure/unavailable states. The About action does not execute an upgrade. The later 2026-10-05 decision selects GitHub Releases: display the release notes’ “Upgrade Instructions” section faithfully. Release publishers own version/installation applicability, backups, verification and rollback content; the app does not generate or append those steps. Preserve admin access and daily notification-only checking. See [source authority](00078-officepress-source-decisions.md) for the accepted correction.

## Design evidence

- `vrGBc` explicitly describes the two tabs and the unchanged app-only theme scope.
- About labels: `vsUvZ`, `NzJYF`, `GyisK`, `ntxz5`.
- Version and updates headings: `s3Q8WQ`, `XSJAT`, `g5RnK`.
- `m1a6QA` describes admin visibility, installed version, updates/change log, conditional update controls and daily notification-only checks.
- `o7dF4`, `odO7S`, `Kf2t5`, `BCtq4`, `Uozi6`, `tYgFi`, `ov1Cv` carry the corresponding About screen names.
- Four tab icons changed to `info`; the Common Modules root moved on the canvas. No new nodes or variable definitions were introduced.

## Lossless extraction receipt

Read through the Pencil API with instances resolved, variables retained symbolically and path geometry excluded. Removed API elision placeholders for geometry; they are not source data. Native geometry stays in the .pen file, which this KB update does not edit.

| Measure | Before | Current |
|---|---:|---:|
| Resolved nodes | 8,837 | 8,761 |
| Nodes with content | 2,828 | 2,809 |
| Root frames | 18 | 18 |
| Reusable components | 11 | 11 |
| Variables | 205 | 205 |

There are 28 changed nodes and 76 removed nodes, with 0 added nodes. The 28 changes cover names, text, icons and the canvas position. All 104 prior records are retained in [superseded design records](00361-officepress-menu-prior-design-records.md) for full recovery; the offline verifier reconstructs the preceding 8,837-record extraction from them and the current extraction. The variable definitions and theme axes are unchanged.

Native SHA-256 before: `41b24eb3b223d7b172192b2da0eefd21f34608a4e29bb81059dd6a93f2ebbbfa` (3,952,049 bytes).

Native SHA-256 current: `df7df88246e6698148e099a56e60f50c046af2ec0dbefb317a2c9cb968a7f7b9` (3,902,117 bytes).

The previous native file remains in Git at `fa33ee1`; the current repository native file is authoritative. The former Documents path is historical provenance, not an update dependency. Existing HTML/CSS/JS archives and screenshots remain exact historical inputs. Their Updates/extra-tab examples are superseded by this accepted revision; preserve them and apply the current menu when adopting them.

## Related planning

The [app-shell and component proof spec](../specs/00001-reusable-app-shell-and-component-proofs/index.md) defines the requested reusable demonstrations. Planning is not implementation or acceptance evidence.
