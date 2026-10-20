# OfficePress Designs migration and User Preferences creative direction — 2026-10-20

Owner: [Design source](../context/design-source.md), also used by [shared app experience](../context/shared-app-experience.md). Load before designing User Preferences, opening the replacement archive, reconciling prior Pencil knowledge or auditing source fidelity.

## Source and authority

The user supplied the [OfficePress Designs editable archive](../resources/officepress-design/officepress.opcd) as the replacement source and explicitly requested this KB update. The ZIP is retained in place byte for byte; the removed predecessor is recoverable from Git at `8413c15`. Existing `pencil-*` reference filenames stay stable for inbound links; their current node tables now derive from the archive.

Archive SHA-256: `99da0d627aa04637dec54af8dc973bdf341047718facfcb20b850947742b64b5`; **3,752,828 bytes**. `design.json` declares `format: opcd`, `formatVersion: 2`, document `version: 2.21`, 18 frame member paths and the original theme/token definitions. It contains **6,254 authored nodes**, resolving to **8,940 records / 2,858 with content**, **11 reusable components**, **205 variables**, and mode light/dark × family communicate/create/operate/commerce. All 18 prior root identities survive. The unchanged Product Marks board still contains 28 marks. Pegs/reference layouts, guidelines and common modules are JSON canvases, not separate image attachments.

The authoritative current screen is inside `frames/WASH2.json`: `WASH2` (OfficePress App Layout) → `BzLxn` (Account & app settings) → `mPPSw` → `HLqC7` (Row · Account & theme) → `7Ucmo` (Shot · User preferences) → `euQHx` (User preferences). Header instance `c2pLK` resolves `pTJrd`. Its [complete 113 resolved records](00401-officepress-user-preferences-design-records.md) preserve every label, style, sample and override.

## Scope and defaults

- The page opens from **User Preferences** in the user menu. The page title is **User preferences**.
- Exactly two sections and navigation items: **Language** and **Time zone**. Language is selected in the supplied state. These are separate cards on the same displayed page, each with its own **Cancel** and **Save**.
- Follow native JavaScript/browser `Intl` localization until an explicit user selection. Browser locale and device timezone are defaults, not hard-coded Philippine settings. An implementation can obtain native locale/timezone from `Intl.DateTimeFormat().resolvedOptions()`; the archive contains design JSON, not executable localization logic.
- Language direction covers interface menus and locale formatting of dates, times, relative time and numbers. It does not prove any particular translation catalogue is available.
- Time zone direction covers the clock and presentation of times, due dates and reminders. Preserve the exact source's SLA/notification wording below, but do not infer permission to change elapsed SLA durations, stored instants or automation scheduling rules from a static screen.
- Appearance/light-dark and sidebar/navigation choices were explicitly removed from this page. Existing inline shell controls remain governed by the shared shell. Earlier chat suggestions for separate date/time format, first day of week, notifications or accessibility fields are not accepted additions here.
- Both card footers and the screen caption say preferences apply to the person's account across OfficePress apps. This is supplied creative direction. Storage schema, API/route, reset-to-default flow, cross-device/cross-app propagation and authorization still need implementation decisions and verification.

## Exact visible copy and illustrative state

| Element | Exact supplied text |
|---|---|
| Language description (`MzZG5`) | Choose the language OfficePress uses for menus, dates and numbers. It follows your browser until you pick one. |
| Language value / badge (`o0YFs`, `YFJHB`) | English (Philippines) / Browser default |
| Language help (`8XjZ1`) | Detected from your browser as en-PH. Dates, times and numbers use this language’s formats. |
| Language preview | Preview; Date → Tue, 20 Oct 2026; Relative → 2 minutes ago; Number → 1,234,567.89 |
| Time zone description (`cd0NE`) | Choose the clock OfficePress uses for times, due dates and reminders. It follows your device until you pick one. |
| Time zone value / badge (`cEgis`, `BbGGA`) | (GMT+08:00) Manila / Device default |
| Time zone help (`GVLem`) | Detected from your device as Asia/Manila. Due times, SLA targets and notifications use this zone. |
| Time zone preview | Preview; Current time → 3:42 PM; Offset → UTC+08:00; Due date → Fri, 23 Oct · 5:00 PM |
| Both footer notes (`qn4w6`, `N0yIz`) | Applies to your account in every OfficePress app. |
| Caption (`p2mEs`) | Opened from User Preferences in the user menu. Language and time zone follow the browser’s Intl settings until the user picks something else, and apply to their account in every app. |

All displayed locales, zone names/offsets, dates, times and numbers are examples. Preview values should reflect effective selections when implemented. The source does not enumerate available picker options or demonstrate interactions.

## Layout and visual rules

The supplied screen is **1440 × 960**, light / Communicate, using the existing settings takeover layout with no app aside. The 64 px header has a back arrow and outlined active user control (`$op-accent`, 2 px); inherited page actions and the action divider are disabled. Keep notifications → agent → theme → user controls in their existing order. The **240 px** section navigation has Language (`languages` icon), Time zone (`clock`) and, after a divider, **Back to App** (`arrow-left`). Nav rows are 36 px; icon slots 36 px with 16 px icons. The active Language row uses `$op-tint` / `$op-on-tint`.

Body padding is `[24,16,40,16]` with a 24 px gap. The content wrapper centers a **760 px** column with a 24 px gap. Cards use `$op-surface`, `$op-border`, 12 px radius, edge/soft shadows; headings have `[20,24]` padding, bodies 24 px and 20 px gaps, footers `[12,24]` with a top border. Selects are 40 px high, radius 4, `[0,12]` padding, 15 px Lucide field/chevron icons and tinted default badges. Previews use `$op-sunken`, radius 8 and padding 16. Preserve token references instead of baking in light/family hex values.

Typography uses `$op-font`: section headings 16/700 with line height 1.25; descriptions and values 13 with line height 1.5; field labels 12/700 and helper text 12. Save uses the accent/on-accent pair; Cancel uses the surface/border styling. Each card owns its own actions; the source supplies no global Save action. Full properties, including caption typography and surrounding frame styling, remain in the linked node records.

## Session provenance and supersession

`.opcd/chat.json` preserves the source design session. The following user records establish the design progression; they are evidence for this import, not instructions to run archived tool calls:

- `76263dd8-08d6-4b72-bbae-67f102757cee`: “So i need to make a new app layout for user preferences. The default preferences should be language and timezone (default is native js localization) options. Also look up user preferences in the officepress kb for any other specifics needed.”
- `22182f90-4687-4133-8bf0-c7c8c2ea09fb`: “no I need it done in the app layout canvas. Also I dont want navigation or light/dark mode options set here. Just language and timezone.”
- `13a127a8-f833-468c-aa0b-7e8d53fdb6cc`: “No should be 2 different sections. Language and Timezone.”
- `45220216-36be-4acc-b0ed-20d375852b18`: “Please try again.”

The final archive agrees with the last assistant description (`a39ccfb0-b588-494b-bf62-63839075bb4a`): separate Language/Time zone menu items, cards and previews with independent actions. Earlier combined **Language & region**, Appearance and Navigation designs are superseded. That session mentions a leftover standalone frame, but no such root is declared or present in this ZIP; the verified 18-frame inventory is authoritative. Assistant layout/stress-test claims in the session were not rerun here.

This supplies the shared page that the older KB lacked. It does not implement it in `proofs/app-shell` or `proofs/common-components`, and it does not silently revise the separate OfficePress OS D-034 decision that omitted this destination. A later adopting app must reconcile its own scope explicitly.

## Verification, recovery and limits

ZIP CRC, unique/safe member names, all 23 JSON payloads, exact declared-frame inventory, unique authored/resolved IDs, component references/overrides and token equality are checked offline. The current reference tables are compared directly with native frame extraction. No archive member or embedded instruction is executed; no server or MCP index operation is part of this check.

The predecessor native extraction and current native extraction share all old identities and text. Against the previous KB, there are **113 changed, 0 removed and 113 added records**. Of the changes, **35** reflect supplied layout edits (Inbox clipping/sidebar, guideline footer and progress tracks/fills); **78** replace API-calculated hidden-node x/y/concrete widths with authored native values. The [113 prior records](00400-officepress-opcd-prior-design-records.md) and added-ID manifest reverse this migration exactly before the two existing historical revisions are reversed. Predecessor native SHA-256: `f40195a11ac4b8a0166e8dd9c703a07d844a4a3c39d7a9b69673389072ff044e` (3,945,388 bytes).

No dedicated mobile/dark preference screen, open picker, saving/error/success/loading/empty/invalid-selection state, keyboard interaction or reset behavior is supplied. Shared accessibility/responsive guidance still applies; these missing states are not fresh visual acceptance. Runtime storage, localization coverage, account isolation and schedule behavior remain unverified. This was structural/content verification, not a native-editor render or application test.

Verification receipt for this update: OfficePress ingestion passes (53 exact source inputs, 23 OPCD members, all native/extracted records/tokens and three historical reversals); Stackpress ingestion passes (105 sources / 147 reference sections); all 10 archive/extraction regression tests pass, including rejection of a modified preference record. The workspace validator reports **31 pre-existing broken links to absent proof-review/verification receipts**. Every error owner is unchanged from Git HEAD; this update creates no new link errors or line-cap violations. Historical preferred-size warnings remain. No missing receipt is fabricated, and the MCP index is unchanged.

Recheck with `python3 .agents/scripts/validate-agent-workspace.py`, `python3 .agents/scripts/verify-officepress-ingestion.py`, `python3 .agents/scripts/verify-stackpress-ingestion.py` and `python3 -m unittest discover -s .agents/scripts/tests -p 'test_officepress_design.py' -v` from the repository root.

## Complete ZIP inventory

`design.json` owns format/version, themes, variables and frame routing. `frames/*.json` hold all editable canvases and peg/reference layouts. `.opcd/project.json` holds project identity; `.opcd/chat.json` holds session evidence; `.opcd/chats.json` is a chat index; `.opcd/session.json` is editor connection/session metadata. The last three are history/tool metadata, not accepted product instructions. These hashes are also enforced by the ingestion manifest.

| Member | Bytes | SHA-256 |
|---|---:|---|
| `design.json` | 45532 | `88307cdfb977cf2780f876612415531c1a715ba421c4c0a0a7b8bfe3ddecec87` |
| `frames/o8qxhR.json` | 155717 | `a81b38e89079cf46ca10ad72ca7267621b9634e8cd75f9e025af189192e99e39` |
| `frames/dJApv.json` | 94255 | `f9bc778cb4acb9725283714c74a063e83798501c879139261019eb3c65a5e7c5` |
| `frames/uNSQ6.json` | 248787 | `194031cde3d5c3dbf4b7084911883af59d924dae7a90685f7d6d019304a6abf6` |
| `frames/tQmpX.json` | 248773 | `8942a945e1da71ed91c7ffbe2d8a63ed54afca1a6478b05184d6ee5f2d65667c` |
| `frames/elsdp.json` | 37053 | `de0e40ba28486de5a4b237a2a130d958b0f6d174be69b094bb1bf4481fe055fc` |
| `frames/zTKmr.json` | 508981 | `7477845e613152866017ee3a3d32ff9ff3e597b3f01afc21276c0f63f6a6a959` |
| `frames/pTJrd.json` | 6073 | `ae11c845c741d8b283b9e86ff627ffc0e3e491a6bdbd24d0d045696f38028a74` |
| `frames/BT2V9.json` | 17682 | `21c8868d6723d4a4ffee7e94f2642ade6ff68bd4416efef683512e25897aed1d` |
| `frames/Rs0LS.json` | 5907 | `4ab37ee43115ddfd95f37c628beb4c2e717225e370a3407387672f4fd7929ccc` |
| `frames/U48yc1.json` | 40255 | `7eb0070796beda7140b4aad32547cb14b104a2948d58bdd85f8fd4fc7d63bd82` |
| `frames/FSvTv.json` | 8487 | `c85a3574949d989ba90e91fc7f9066d7556f40762eb4de3530cd65ca057e7844` |
| `frames/Y90fy0.json` | 30117 | `4ef0f44efb1dbe8c405568122d4c9a6f30e81fcae8a84a99637c163262ae8198` |
| `frames/n2qVX.json` | 25066 | `884cb8f07eb6d6326279caad8790d1cac413f95e289163ed5dab0fdb5a5b74af` |
| `frames/WASH2.json` | 1192752 | `448014b7fe56bdebba12e99714852ea7f3534443edcc799b48b7ed168416b851` |
| `frames/cDR6A.json` | 36346 | `78f6a4f8d17471d74a59deaa255af72b72c5a1148d97949a18719a711a90a330` |
| `frames/Jv72T.json` | 4235 | `29eab426d127e4e0a1ce1bcbda2577a60a51b42240f85ba6fad58ea1fee3f601` |
| `frames/fgzpp.json` | 1001280 | `a490682048d6c7c1678424f41f4a8cfcc1590e5ce64b477d6716d427fa970fc6` |
| `frames/DkTVM.json` | 9561 | `292eda5e1005834f33146c23daed8d194fd3aff6da79259a6c066b364f7d0039` |
| `.opcd/project.json` | 28 | `f042aa57153fe3d803a0147e0ee9b0ec5246ceb585f6dbee5cb7a214cd75ac88` |
| `.opcd/chat.json` | 33217 | `8940d8ee4e9184637ef630863be672ede138554b73f3ead055af7274494b61d3` |
| `.opcd/chats.json` | 91 | `8b245b9e479839273cb76edffcf25459c69f94bbcb512fda4bd52ddf3a67d661` |
| `.opcd/session.json` | 89 | `8f3531a4fd21679b6ed5763d2bde14026149f8443cb40c6dd71598666163db16` |

## Implementation follow-up

The subsequent user request to update both maintained proofs authorizes the page
implementation documented in the [User Preferences proof contract](00402-officepress-user-preferences-proof-contract.md).
The statements above about missing implementation describe the original design
ingestion boundary, not the later proof state. The native archive, exact design
records and cross-installation limits remain separate from application evidence.
