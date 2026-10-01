# officepress-app-ui-guidelines.md — 10 Polish & motion

Source: `ui-guidelines.md`, original lines 314–343. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Contents; 01 How theming works; 02 Families in the shell; 03 Colour tokens; 04 Typography](00071-ui-guidelines-md-introduction.md) · [05 Spacing & sizing; 06 Shape & elevation; 07 Components; 08 Rules; 09 App frame](00072-ui-guidelines-md-05-spacing-sizing.md) · [10 Polish & motion](00073-ui-guidelines-md-10-polish-motion.md)

<!-- officepress-source:start -->
## 10 Polish & motion

Small details that compound. Static rules apply in design; motion rules are the engineering spec for every app.

### Concentric radius
Outer radius = inner radius + padding. Cards (8) in columns with 8 padding → column 16. Menu items (4) in popovers with 8 padding → popover 12. Pills stay full.

### Elevation
Raised surfaces (cards, popovers, sheets) use layered shadows, not borders: `op-shadow-edge` (0 0 1) + `op-shadow-soft` (0 1 3), or `op-shadow-pop` (0 12 32) for popovers. Keep borders for structure and state: inputs, dividers, docked panels, selection, focus, danger.

### Optical alignment
Text buttons pad 16 / 16. Leading-icon buttons pad 12 on the icon side, 16 on the text side; a trailing icon mirrors it. Icon-only controls are square and centred.

### Press & transitions
Pressable controls scale to `0.96` on press (never below `0.95`), with a `static: true` opt-out for dense lists. Transitions name exact properties (never `all`), ease-out, 150 ms for colour and opacity, 200 ms for transform.

### Icon swaps
Theme, copy → check and similar swaps cross-fade both icons: scale `0.25 → 1`, opacity `0 → 1`, blur `4px → 0`. Spring, duration `0.3`, bounce `0` (or `cubic-bezier(0.2, 0, 0, 1)` without a motion library).

### Enter & exit
Popovers and panels enter with opacity + 4 px `translateY`, ease-out; exits are softer and shorter. Stagger only rare, staged entrances (onboarding, empty states) by ~100 ms. Skip enter animations on first page load.

### Icons
One library per surface (Lucide). Stroke matches text weight: 1.5 px beside regular text, 2 px beside bold. One SVG recoloured per state; outline by default, fill only to mark the active state.

### Images
Photos and avatars get a 1 px inside outline in `op-image-outline` (black 10% in light, white 10% in dark), never a tinted neutral.

### Motion restraint
No custom animation on high-frequency actions (typing, hovering rows, toggling filters). Motion is never the only signal: every animated change also changes colour, icon or label.
<!-- officepress-source:end -->
