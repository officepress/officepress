# officepress.css — 21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ */; 22. MOBILE (< 768px) ------------------------------------------------------------------ */; 23. MOTION RESTRAINT -------------------------------------------------------------------- */

Source: `kit/css/officepress.css`, original lines 784–830. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* 21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ */
.op-dialog { width: min(480px, calc(100vw - 32px)); padding: 0; border: 0; border-radius: var(--op-radius-12); background: var(--op-surface); color: var(--op-text); box-shadow: var(--op-elev-pop); }
.op-dialog::backdrop { background: var(--op-scrim); }
.op-dialog[open] { animation: op-dialog-in var(--op-dur) var(--op-ease-out); }
.op-dialog__head { display: flex; flex-direction: column; gap: var(--op-space-1); padding: var(--op-space-5) var(--op-space-6) 0; }
.op-dialog__body { display: flex; flex-direction: column; gap: var(--op-space-4); padding: var(--op-space-4) var(--op-space-6); }
.op-dialog__foot { display: flex; justify-content: flex-end; gap: 8px; padding: var(--op-space-3) var(--op-space-6) var(--op-space-5); }
@keyframes op-dialog-in { from { opacity: 0; translate: 0 4px; } }

/* Scrim */
.op-scrim { position: fixed; inset: 0; z-index: var(--op-z-scrim); background: var(--op-scrim); opacity: 0; visibility: hidden; transition-property: opacity, visibility; transition-duration: var(--op-dur); transition-timing-function: var(--op-ease-out); }

/* 22. MOBILE (< 768px) ------------------------------------------------------------------ */
.op-mobile-only { display: none !important; }
@media (max-width: 767px) {
  .op-mobile-only { display: inline-grid !important; }
  .op-desktop-only { display: none !important; }

  .op-app, .op-app[data-aside="collapsed"] { grid-template-columns: minmax(0, 1fr); }
  .op-aside { position: fixed; inset: 0 auto 0 0; width: var(--op-aside-mobile-w); z-index: calc(var(--op-z-scrim) + 1); translate: -100% 0; transition: translate var(--op-dur) var(--op-ease-out); box-shadow: 8px 0 32px var(--op-shadow-pop); }
  .op-app[data-aside-open] .op-aside { translate: 0 0; }
  .op-app[data-aside-open] .op-scrim, .op-app[data-agent="open"] .op-scrim { opacity: 1; visibility: visible; }

  .op-main { grid-template-rows: 56px minmax(0, 1fr); }
  .op-header { gap: var(--op-space-1); padding: 0 var(--op-space-3) 0 var(--op-space-1); }
  .op-header__actions, .op-header__divider { display: none; }

  .op-app[data-agent="open"] .op-body { grid-template-columns: minmax(0, 1fr) 0; }
  .op-agent { position: fixed; inset: 44px 0 0 0; z-index: var(--op-z-sheet); border: 0; border-radius: var(--op-radius-12) var(--op-radius-12) 0 0; box-shadow: var(--op-elev-pop); translate: 0 100%; transition: translate var(--op-dur) var(--op-ease-out), visibility var(--op-dur); }
  .op-app[data-agent="open"] .op-agent { translate: 0 0; }

  .op-popover { position: fixed; top: 64px; left: var(--op-space-2); right: var(--op-space-2); }
  .op-notifs, .op-menu { width: auto; }
  .op-board { flex-direction: column; align-items: stretch; }
  .op-column, .op-column__add { flex-basis: auto; }
  .op-page { padding: var(--op-space-4); }
  .op-fields--2, .op-fields--3, .op-builder, .op-three-pane, .op-chat { grid-template-columns: minmax(0, 1fr); }
  .op-settings { flex-direction: column; }
  .op-settings__nav { position: static; width: 100%; }
  .op-auth__top { height: 64px; padding: 0 var(--op-space-4); }
}

/* 23. MOTION RESTRAINT -------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  :is(.op-btn, .op-icon-btn, .op-chip, .op-method):active { scale: none; }
}
~~~~
<!-- officepress-source:end -->
