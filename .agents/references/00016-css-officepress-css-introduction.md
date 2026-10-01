# officepress.css — Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- */

Source: `kit/css/officepress.css`, original lines 1–169. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* ==========================================================================
   OfficePress UI Kit — core stylesheet (load in every app)
   --------------------------------------------------------------------------
   Load order:
     1. css/officepress.css             ← this file
     2. css/families/<family>.css       ← exactly one: communicate | create | operate | commerce
   Theme:  <html data-mode="light|dark">  (js/officepress.js manages it)
   Rule:   never hard-code colour, size, radius or shadow. Use var(--op-*).
   Source of truth: docs/guidelines.md (OfficePress App UI Guidelines v1.0)
   Sections
     1  Shared tokens        8  Badges, pills, status   15 Automation builder
     2  Base & type          9  Content: toolbar/board  16 Form builder
     3  Icons & images       10 Cards & sections        17 Message templates
     4  App frame            11 Popovers & menus        18 Chat
     5  Aside                12 Agent panel             19 Settings pages
     6  Header               13 Tables & stats          20 Auth pages
     7  Buttons & controls   14 Workflow board          21 Dialog · 22 Mobile · 23 Motion
   ========================================================================== */

/* 1. SHARED TOKENS ---------------------------------------------------------
   Family tokens (canvas, surface, text, accent, nav …) live in families/*.css */
:root {
  color-scheme: light;

  /* Status & feedback */
  --op-dot: #087050;                 /* new / unread — always green, every family */
  --op-nav-dot: #3DD68C;             /* unread on the sidebar */
  --op-on-accent: #FFFFFF;           /* text on --op-accent-strong */
  --op-danger: #C0362C;
  --op-danger-tint: #FDEDEB;
  --op-warning: #8A4B00;
  --op-warning-tint: #FFF4DB;

  /* Sidebar overlays (white on --op-nav) */
  --op-nav-active: #FFFFFF1A;
  --op-nav-field: #FFFFFF12;
  --op-nav-border: #FFFFFF1A;

  /* Cross-app identity — brand hue of each family. ONLY for app tags / tiles that name
     another app (account-wide notifications, app switchers). Never as an in-app accent. */
  --op-fam-communicate: #2F5BEA;
  --op-fam-create: #6A3BE4;
  --op-fam-operate: #E2551B;
  --op-fam-commerce: #0F8F6A;
  --op-on-fam: #FFFFFF;

  /* Overlays, elevation, images */
  --op-scrim: #0B102266;
  --op-shadow-edge: #18244F24;
  --op-shadow-soft: #18244F14;
  --op-shadow-pop: #18244F29;
  --op-image-outline: #0000001A;

  /* Type — Inter for UI; mono only for codes, keys, {{variables}} */
  --op-font: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --op-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --op-text-display: 700 28px/1.2 var(--op-font);  /* auth pages only */
  --op-text-heading: 700 20px/1.25 var(--op-font); /* drawer & dialog titles */
  --op-text-title: 700 16px/1.25 var(--op-font);   /* page title, app name, section titles */
  --op-text-body: 400 13px/1.5 var(--op-font);     /* nav, card titles, inputs, buttons */
  --op-text-small: 400 12px/1.5 var(--op-font);    /* sender, preview, helper */
  --op-text-caption: 400 11px/1.5 var(--op-font);  /* times, badges, overlines */

  /* Spacing — 4-point scale (every padding, gap and fixed height is a multiple of 4) */
  --op-space-1: 4px;
  --op-space-2: 8px;
  --op-space-3: 12px;
  --op-space-4: 16px;
  --op-space-5: 20px;
  --op-space-6: 24px;
  --op-space-8: 32px;
  --op-space-10: 40px;

  /* Radius — concentric: outer = inner + padding */
  --op-radius-4: 4px;     /* buttons, nav rows, inputs, menu items */
  --op-radius-8: 8px;     /* cards, menus, small panels */
  --op-radius-12: 12px;   /* popovers (4 + 8), settings cards, sheets */
  --op-radius-16: 16px;   /* card holders: columns (8 + 8) */
  --op-radius-full: 999px;

  /* Elevation — shadows for depth; borders only for structure & state */
  --op-elev-card: 0 0 1px var(--op-shadow-edge), 0 1px 3px var(--op-shadow-soft);
  --op-elev-card-hover: 0 0 1px var(--op-shadow-edge), 0 4px 12px var(--op-shadow-soft);
  --op-elev-pop: 0 0 1px var(--op-shadow-edge), 0 12px 32px var(--op-shadow-pop);

  /* Frame metrics */
  --op-header-h: 64px;
  --op-aside-w: 260px;
  --op-aside-rail-w: 64px;
  --op-aside-mobile-w: 300px;
  --op-agent-w: 400px;
  --op-control-h: 36px;
  --op-control-compact-h: 32px;
  --op-control-small-h: 28px;
  --op-input-h: 40px;

  /* Motion — name exact properties, never `all` */
  --op-ease: cubic-bezier(0.2, 0, 0, 1);
  --op-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --op-dur-fast: 150ms;    /* colour, opacity */
  --op-dur: 200ms;         /* transform, layout */
  --op-press-scale: 0.96;  /* never below 0.95 */

  /* Layers */
  --op-z-aside: 30;
  --op-z-popover: 40;
  --op-z-scrim: 50;
  --op-z-sheet: 60;
  --op-z-dialog: 70;
}

[data-mode="dark"] {
  color-scheme: dark;
  --op-dot: #3DD68C;
  --op-on-accent: #0B1022;
  --op-danger: #F2766B;
  --op-danger-tint: #3A1614;
  --op-warning: #F5C26B;
  --op-warning-tint: #33260C;
  --op-nav-active: #FFFFFF14;
  --op-nav-field: #FFFFFF0D;
  --op-nav-border: #FFFFFF14;
  --op-scrim: #00000099;
  --op-shadow-edge: #FFFFFF1A;
  --op-shadow-soft: #00000059;
  --op-shadow-pop: #00000080;
  --op-image-outline: #FFFFFF1A;
}

/* 2. BASE & TYPE ----------------------------------------------------------- */
*, *::before, *::after { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font: var(--op-text-body);
  color: var(--op-text);
  background: var(--op-canvas);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, p { margin: 0; }
button, input, textarea, select { font: inherit; color: inherit; }
button { cursor: pointer; }
a { color: var(--op-accent-text); font-weight: 700; text-decoration: none; }
a:hover { text-decoration: underline; }
:focus-visible { outline: 2px solid var(--op-accent); outline-offset: 2px; }
hr { border: 0; height: 1px; margin: 0; background: var(--op-border); }

[hidden] { display: none !important; }   /* the hidden attribute always wins over component display */
.op-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

.op-display  { font: var(--op-text-display); letter-spacing: -0.02em; }
.op-heading  { font: var(--op-text-heading); }
.op-title    { font: var(--op-text-title); }
.op-body     { font: var(--op-text-body); }
.op-small    { font: var(--op-text-small); }
.op-caption  { font: var(--op-text-caption); }
.op-overline { font: 700 11px/1.5 var(--op-font); letter-spacing: 1px; text-transform: uppercase; color: var(--op-text-2); }
.op-muted    { color: var(--op-text-2); }
.op-strong   { font-weight: 700; }
.op-mono     { font-family: var(--op-font-mono); }
.op-link     { color: var(--op-accent-text); font-weight: 700; }
.op-danger-text { color: var(--op-danger); }

.op-stack   { display: flex; flex-direction: column; gap: var(--op-space-2); }
.op-row     { display: flex; align-items: center; gap: var(--op-space-2); }
.op-spacer  { flex: 1; }
.op-grow    { flex: 1; min-width: 0; }

~~~~
<!-- officepress-source:end -->
