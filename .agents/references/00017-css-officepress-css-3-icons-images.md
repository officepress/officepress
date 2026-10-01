# officepress.css — 3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ */; 6. HEADER

Source: `kit/css/officepress.css`, original lines 170–304. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* 3. ICONS & IMAGES -------------------------------------------------------
   Lucide via js/icons.js: <svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg>
   Stroke 1.5 beside regular text, 2 beside bold (buttons, active nav). */
.op-icon {
  width: 16px; height: 16px; flex: none;
  fill: none; stroke: currentColor; stroke-width: 1.5;
  stroke-linecap: round; stroke-linejoin: round;
}
.op-icon--12 { width: 12px; height: 12px; }
.op-icon--14 { width: 14px; height: 14px; }
.op-icon--15 { width: 15px; height: 15px; }
.op-icon--18 { width: 18px; height: 18px; }
.op-icon--20 { width: 20px; height: 20px; }
.op-icon--bold, .op-strong .op-icon { stroke-width: 2; }

.op-img { outline: 1px solid var(--op-image-outline); outline-offset: -1px; }

.op-icon-tile {
  display: grid; place-items: center; flex: none;
  width: 28px; height: 28px;
  border-radius: var(--op-radius-8);
  background: var(--op-tint); color: var(--op-accent-text);
}
.op-icon-tile--32 { width: 32px; height: 32px; }
.op-icon-tile--40 { width: 40px; height: 40px; }
.op-icon-tile--accent { background: var(--op-accent); color: #FFFFFF; }
.op-icon-tile--danger { background: var(--op-danger-tint); color: var(--op-danger); }
.op-icon-tile--neutral { background: var(--op-sunken); color: var(--op-text-2); }
/* Another app's identity: <span class="op-icon-tile op-icon-tile--family" data-family="operate"> */
[data-family="communicate"] { --op-fam: var(--op-fam-communicate); }
[data-family="create"]      { --op-fam: var(--op-fam-create); }
[data-family="operate"]     { --op-fam: var(--op-fam-operate); }
[data-family="commerce"]    { --op-fam: var(--op-fam-commerce); }
.op-icon-tile--family { background: var(--op-fam, var(--op-accent)); color: var(--op-on-fam); }

.op-avatar {
  display: grid; place-items: center; flex: none;
  width: 36px; height: 36px;
  border-radius: var(--op-radius-full);
  background: var(--op-accent-strong); color: var(--op-on-accent);
  font: 700 12px/1 var(--op-font);
  overflow: hidden;
}
.op-avatar img { width: 100%; height: 100%; object-fit: cover; outline: 1px solid var(--op-image-outline); outline-offset: -1px; }
.op-avatar--20 { width: 20px; height: 20px; font-size: 11px; }
.op-avatar--24 { width: 24px; height: 24px; font-size: 11px; }
.op-avatar--32 { width: 32px; height: 32px; font-size: 11px; }
.op-avatar--40 { width: 40px; height: 40px; }
.op-avatar--96 { width: 96px; height: 96px; font-size: 28px; }
.op-avatar--soft { background: var(--op-tint-2); color: var(--op-on-tint); }
.op-avatar--neutral { background: var(--op-sunken); color: var(--op-text); box-shadow: inset 0 0 0 1px var(--op-border); }
.op-avatar--square { border-radius: var(--op-radius-8); }

/* 4. APP FRAME --------------------------------------------------------------
   .op-app[data-aside="expanded|collapsed"][data-agent="open|closed"][data-aside-open] */
.op-app {
  display: grid;
  grid-template-columns: var(--op-aside-w) minmax(0, 1fr);
  height: 100dvh;
  overflow: hidden;
  transition: grid-template-columns var(--op-dur) var(--op-ease-out);
}
.op-app[data-aside="collapsed"] { --op-aside-w: var(--op-aside-rail-w); }
.op-app--no-aside { grid-template-columns: minmax(0, 1fr); }   /* settings pages */

.op-main { display: grid; grid-template-rows: var(--op-header-h) minmax(0, 1fr); min-width: 0; min-height: 0; }
.op-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 0;
  min-height: 0;
  overflow: hidden;
  transition: grid-template-columns var(--op-dur) var(--op-ease-out);
}
.op-app[data-agent="open"] .op-body { grid-template-columns: minmax(0, 1fr) var(--op-agent-w); }
.op-content { display: flex; flex-direction: column; min-width: 0; min-height: 0; overflow: auto; background: var(--op-canvas); }

.op-page { display: flex; flex-direction: column; gap: var(--op-space-5); padding: var(--op-space-6) var(--op-space-8); }
.op-page-head { display: flex; align-items: flex-end; gap: var(--op-space-3); }
.op-page-head__text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.op-crumbs { font: var(--op-text-small); color: var(--op-text-2); }
.op-crumbs a { color: var(--op-text-2); font-weight: 400; }

/* 5. ASIDE ------------------------------------------------------------------ */
.op-aside {
  display: flex; flex-direction: column; gap: var(--op-space-4);
  min-width: 0; padding: var(--op-space-4);
  overflow: hidden auto;
  background: var(--op-nav); color: var(--op-nav-text);
  z-index: var(--op-z-aside);
}
.op-brand { display: flex; align-items: center; gap: var(--op-space-3); min-height: 32px; }
.op-brand__logo { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: var(--op-radius-8); background: var(--op-accent); color: #FFFFFF; overflow: hidden; }
.op-brand__logo img { width: 100%; height: 100%; object-fit: cover; }
.op-brand__name { flex: 1; min-width: 0; font: var(--op-text-title); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.op-aside__search { display: flex; align-items: center; gap: var(--op-space-2); height: var(--op-control-h); padding: 0 var(--op-space-3); border: 1px solid var(--op-nav-border); border-radius: var(--op-radius-full); background: var(--op-nav-field); color: var(--op-nav-text-2); }
.op-aside__search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--op-nav-text); }
.op-aside__search input::placeholder { color: var(--op-nav-text-2); }

.op-nav { display: flex; flex-direction: column; gap: var(--op-space-1); }
.op-nav__heading { margin-bottom: var(--op-space-1); font: 700 11px/1.5 var(--op-font); letter-spacing: 1px; text-transform: uppercase; color: var(--op-nav-text-2); }
.op-nav__item {
  display: flex; align-items: center; gap: var(--op-space-3);
  height: var(--op-control-h); padding: 0 var(--op-space-3);
  border-radius: var(--op-radius-4);
  color: var(--op-nav-text-2); font-weight: 400; text-decoration: none; white-space: nowrap;
  transition-property: background-color, color; transition-duration: var(--op-dur-fast); transition-timing-function: var(--op-ease-out);
}
.op-nav__item:hover { background: var(--op-nav-field); color: var(--op-nav-text); text-decoration: none; }
.op-nav__item[aria-current="page"] { background: var(--op-nav-active); color: var(--op-nav-text); font-weight: 700; }
.op-nav__item[aria-current="page"] .op-icon { stroke-width: 2; }
.op-nav__label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.op-nav__count { font: 700 12px/1 var(--op-font); color: var(--op-nav-text-2); }
.op-nav__dot { width: 8px; height: 8px; border-radius: var(--op-radius-full); background: var(--op-nav-dot); flex: none; }
.op-aside__footer { margin-top: auto; }
.op-aside .op-icon-btn { color: var(--op-nav-text-2); }
.op-aside .op-icon-btn:hover { background: var(--op-nav-field); color: var(--op-nav-text); }

@media (min-width: 768px) {
  .op-app[data-aside="collapsed"] .op-aside { padding: var(--op-space-4) var(--op-space-3); align-items: center; }
  .op-app[data-aside="collapsed"] :is(.op-brand__name, .op-nav__label, .op-nav__count, .op-nav__heading, .op-aside__search input, [data-aside-hide]) { display: none; }
  .op-app[data-aside="collapsed"] .op-aside__search { width: 40px; padding: 0; justify-content: center; }
  .op-app[data-aside="collapsed"] .op-nav { align-items: center; }
  .op-app[data-aside="collapsed"] .op-nav__item { position: relative; width: 40px; height: 40px; padding: 0; justify-content: center; }
  .op-app[data-aside="collapsed"] .op-nav__dot { position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; }
}

/* 6. HEADER -------------------------------------------------------------------
   title + page actions | divider | notifications · agent · theme · user */
.op-header { display: flex; align-items: center; gap: var(--op-space-3); min-width: 0; padding: 0 var(--op-space-4); background: var(--op-surface); border-bottom: 1px solid var(--op-border); }
.op-header__title { flex: 1; min-width: 0; font: var(--op-text-title); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.op-header__actions { display: flex; align-items: center; gap: var(--op-space-3); }
.op-header__divider { width: 1px; height: 24px; background: var(--op-border); flex: none; }
.op-globals { position: relative; display: flex; align-items: center; gap: var(--op-space-2); }

~~~~
<!-- officepress-source:end -->
