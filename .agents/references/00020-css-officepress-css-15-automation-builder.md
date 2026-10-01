# officepress.css — 15. AUTOMATION BUILDER ---------------------------------------------------------- */; 16. FORM BUILDER ---------------------------------------------------------------- */; 17. MESSAGE TEMPLATES --------------------------------------------------------- */; 18. CHAT ---------------------------------------------------------------------- */; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES

Source: `kit/css/officepress.css`, original lines 618–783. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* 15. AUTOMATION BUILDER ---------------------------------------------------------- */
.op-builder { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: var(--op-space-5); align-items: start; }
.op-step { border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-step__head { display: flex; align-items: center; gap: var(--op-space-3); padding: var(--op-space-4) var(--op-space-5); border-bottom: 1px solid var(--op-border); }
.op-step__no { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: var(--op-radius-full); background: var(--op-accent-strong); color: var(--op-on-accent); font: 700 12px/1 var(--op-font); }
.op-step__body { display: flex; flex-direction: column; gap: 12px; padding: var(--op-space-5); }
.op-condition { display: flex; align-items: flex-end; gap: 8px; padding: 12px; border-radius: var(--op-radius-8); background: var(--op-sunken); }
.op-ordered { display: flex; align-items: center; gap: var(--op-space-3); padding: 12px var(--op-space-3); border: 1px solid var(--op-border); border-radius: var(--op-radius-8); background: var(--op-sunken); }
.op-ordered__no { display: grid; place-items: center; flex: none; width: 24px; height: 24px; border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-full); background: var(--op-surface); font: 700 11px/1 var(--op-font); }
.op-add-row { display: flex; align-items: center; justify-content: center; gap: 4px; width: 100%; height: var(--op-control-h); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-4); background: transparent; color: var(--op-text); font-weight: 700; }
.op-add-row:hover { background: var(--op-sunken); }
.op-preview-panel { position: sticky; top: var(--op-space-6); display: flex; flex-direction: column; gap: var(--op-space-4); padding: var(--op-space-5); border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-summary { padding: var(--op-space-3); border-radius: var(--op-radius-8); background: var(--op-tint); color: var(--op-on-tint); }

/* 16. FORM BUILDER ---------------------------------------------------------------- */
.op-three-pane { display: grid; grid-template-columns: 240px minmax(0, 1fr) 320px; flex: 1; min-height: 0; }
.op-pane { display: flex; flex-direction: column; gap: var(--op-space-4); min-height: 0; padding: var(--op-space-5); overflow-y: auto; background: var(--op-surface); }
.op-pane--start { border-right: 1px solid var(--op-border); padding: var(--op-space-4); gap: 4px; }
.op-pane--end { border-left: 1px solid var(--op-border); }
.op-pane--canvas { align-items: center; padding: var(--op-space-6); background: var(--op-canvas); gap: var(--op-space-3); }
.op-pane--canvas > * { width: 100%; max-width: 640px; }
.op-outline-item { display: flex; align-items: center; gap: var(--op-space-2); height: var(--op-control-h); padding: 0 var(--op-space-2); border-radius: var(--op-radius-4); font: var(--op-text-small); color: var(--op-text); text-decoration: none; }
.op-outline-item[aria-current="true"] { background: var(--op-tint); color: var(--op-on-tint); font-weight: 700; }
.op-num { display: inline-grid; place-items: center; flex: none; width: 20px; height: 20px; border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-full); background: var(--op-surface); font: 700 11px/1 var(--op-font); }
.op-question { display: flex; gap: var(--op-space-3); padding: var(--op-space-4); border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-question[aria-selected="true"] { box-shadow: 0 0 0 2px var(--op-accent), var(--op-elev-card-hover); }
.op-question__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: var(--op-space-2); }
.op-answer { display: flex; align-items: center; gap: var(--op-space-2); height: var(--op-control-h); padding: 0 var(--op-space-3); border: 1px solid var(--op-border); border-radius: var(--op-radius-4); background: var(--op-sunken); color: var(--op-text-2); }
.op-dropzone { display: flex; align-items: center; justify-content: center; gap: var(--op-space-2); min-height: 64px; border: 1px dashed var(--op-border-strong); border-radius: var(--op-radius-8); background: var(--op-sunken); color: var(--op-text-2); font: var(--op-text-small); }
.op-add-question { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; border: 1.5px dashed var(--op-accent); border-radius: var(--op-radius-12); background: var(--op-tint); color: var(--op-on-tint); }
.op-form-head { display: flex; flex-direction: column; gap: 4px; padding: var(--op-space-5); border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: inset 0 4px 0 var(--op-accent), var(--op-elev-card); }

/* 17. MESSAGE TEMPLATES --------------------------------------------------------- */
.op-editor { display: flex; flex-direction: column; gap: 8px; padding: var(--op-space-4); border: 2px solid var(--op-accent); border-radius: var(--op-radius-8); background: var(--op-surface); line-height: 2; }
.op-var { display: inline-flex; align-items: center; height: 24px; padding: 0 8px; border-radius: var(--op-radius-4); background: var(--op-tint); color: var(--op-on-tint); font: 700 12px/1 var(--op-font-mono); vertical-align: middle; }
.op-var-row { display: flex; align-items: center; gap: var(--op-space-3); padding: var(--op-space-2) var(--op-space-3); border-radius: var(--op-radius-8); background: var(--op-sunken); }
.op-chat-preview { display: flex; flex-direction: column; gap: 4px; padding: 12px; border-radius: var(--op-radius-12); background: #E9E3DA; }   /* WhatsApp surface: intentional third-party colour */
.op-chat-preview__time { text-align: right; color: #6A6D75; }   /* WhatsApp timestamp */
.op-chat-preview__bubble { max-width: 288px; padding: 12px var(--op-space-3); border-radius: var(--op-radius-4) var(--op-radius-12) var(--op-radius-12) var(--op-radius-12); background: #FFFFFF; color: #15171C; box-shadow: 0 1px 1px #0000001A; white-space: pre-line; }

/* 18. CHAT ---------------------------------------------------------------------- */
.op-chat { display: grid; grid-template-columns: 300px minmax(0, 1fr) 280px; flex: 1; min-height: 0; }
.op-chat[data-details="closed"] { grid-template-columns: 300px minmax(0, 1fr); }
.op-chat[data-details="closed"] .op-chat__details { display: none; }
.op-chat__list { display: flex; flex-direction: column; min-height: 0; overflow-y: auto; background: var(--op-surface); border-right: 1px solid var(--op-border); }
.op-chat__filters { display: flex; flex-direction: column; gap: 8px; padding: var(--op-space-3); border-bottom: 1px solid var(--op-border); }
.op-conv { display: flex; gap: 8px; padding: var(--op-space-3); border-bottom: 1px solid var(--op-border); color: inherit; text-decoration: none; }
.op-conv:hover { background: var(--op-sunken); text-decoration: none; }
.op-conv[aria-current="true"] { background: var(--op-tint); }
.op-conv[data-unread] .op-conv__subject { color: var(--op-text); font-weight: 700; }
.op-conv__subject { flex: 1; min-width: 0; font: var(--op-text-small); color: var(--op-text-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.op-chat__thread { display: flex; flex-direction: column; min-width: 0; min-height: 0; }
.op-chat__head { display: flex; align-items: center; gap: var(--op-space-3); padding: var(--op-space-3) var(--op-space-4); background: var(--op-surface); border-bottom: 1px solid var(--op-border); }
.op-chat__head > .op-grow { min-width: 0; }
.op-chat__head :is(h2, .op-small) { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media (max-width: 1279px) {
  .op-chat { grid-template-columns: 280px minmax(0, 1fr); }
  .op-chat:not([data-details="force-open"]) .op-chat__details { display: none; }
}
.op-chat__messages { flex: 1; display: flex; flex-direction: column; gap: 12px; padding: var(--op-space-4) var(--op-space-5); overflow-y: auto; }
.op-day { display: flex; align-items: center; gap: var(--op-space-3); font: 700 11px/1.5 var(--op-font); color: var(--op-text-2); }
.op-day::before, .op-day::after { content: ""; flex: 1; height: 1px; background: var(--op-border); }
.op-bubble { display: flex; flex-direction: column; gap: 8px; max-width: 440px; padding: 12px; border-radius: var(--op-radius-4) var(--op-radius-12) var(--op-radius-12) var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-bubble--out { align-self: flex-end; border-radius: var(--op-radius-12) var(--op-radius-4) var(--op-radius-12) var(--op-radius-12); background: var(--op-tint); box-shadow: none; }
.op-bubble--note { align-self: flex-end; border-radius: var(--op-radius-12) var(--op-radius-4) var(--op-radius-12) var(--op-radius-12); background: var(--op-warning-tint); box-shadow: none; }
.op-bubble__head { display: flex; align-items: center; gap: var(--op-space-2); }
.op-event { display: flex; align-items: center; justify-content: center; gap: 4px; font: var(--op-text-caption); color: var(--op-text-2); }
.op-file { display: flex; align-items: center; gap: 8px; padding: var(--op-space-2) 12px; border: 1px solid var(--op-border); border-radius: var(--op-radius-8); background: var(--op-surface); }
.op-chat__composer { margin: var(--op-space-3) var(--op-space-4) var(--op-space-4); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-12); background: var(--op-surface); }
.op-chat__composer:focus-within { border-color: var(--op-accent); }
.op-chat__composer .op-tabs { padding: 0 var(--op-space-3); }
.op-chat__composer textarea { display: block; width: 100%; min-height: 56px; padding: var(--op-space-3) 12px; border: 0; outline: 0; resize: none; background: transparent; }
.op-chat__controls { display: flex; align-items: center; gap: var(--op-space-1); padding: var(--op-space-2) 12px; }
.op-chat__details { display: flex; flex-direction: column; gap: var(--op-space-4); min-height: 0; padding: var(--op-space-5); overflow-y: auto; background: var(--op-surface); border-left: 1px solid var(--op-border); }

/* 19. SETTINGS PAGES (full page, no aside) -------------------------------------
   Header first button = back arrow. Section nav icons align with it (x 26),
   labels with the page title (x 64): 16 page padding + 36 icon slot + 12 gap. */
.op-settings { display: flex; gap: var(--op-space-6); padding: var(--op-space-6) var(--op-space-4) var(--op-space-10); }
.op-settings__nav { position: sticky; top: var(--op-space-6); align-self: flex-start; display: flex; flex-direction: column; gap: 2px; width: 240px; flex: none; }
.op-settings__heading { padding: 12px 0 12px 48px; }
.op-settings__item { display: flex; align-items: center; gap: var(--op-space-3); height: var(--op-control-h); border-radius: var(--op-radius-4); color: var(--op-text); font-weight: 400; text-decoration: none; }
.op-settings__item:hover { background: var(--op-sunken); text-decoration: none; }
.op-settings__item[aria-current="true"] { background: var(--op-tint); color: var(--op-on-tint); font-weight: 700; }
.op-settings__item > .op-icon-slot { display: grid; place-items: center; width: 36px; height: 36px; flex: none; color: var(--op-text-2); }
.op-settings__item[aria-current="true"] .op-icon-slot { color: var(--op-accent-text); }
.op-settings__main { flex: 1; min-width: 0; display: flex; justify-content: center; }
.op-settings__column { width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: var(--op-space-6); }

.op-swatch { width: 40px; height: 40px; border-radius: var(--op-radius-8); box-shadow: inset 0 0 0 1px var(--op-image-outline); flex: none; }
.op-swatch--sm { width: 12px; height: 12px; border-radius: 3px; }
.op-qr { display: grid; place-items: center; width: 180px; height: 180px; border: 1px solid var(--op-border); border-radius: var(--op-radius-8); background: #FFFFFF; color: #15171C; }   /* QR must stay black on white */
.op-strength { display: flex; gap: var(--op-space-1); }
.op-strength > span { flex: 1; height: 4px; border-radius: var(--op-radius-full); background: var(--op-tint-2); }
.op-strength > span[data-on] { background: var(--op-dot); }

/* Settings nav count (e.g. "Updates 1") */
.op-settings__item > .op-badge { margin-left: auto; margin-right: var(--op-space-2); }

/* App updates — status card, change log, terminal guide (settings-app-updates.html) */
.op-update { display: flex; flex-direction: column; border: 1px solid var(--op-tint-2); border-radius: var(--op-radius-8); background: var(--op-tint); }
.op-update__main { display: flex; align-items: center; gap: var(--op-space-3); padding: var(--op-space-4); }
.op-update__icon { display: grid; place-items: center; width: 36px; height: 36px; flex: none; border-radius: var(--op-radius-4); background: var(--op-surface); color: var(--op-accent-text); }
.op-update__text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.op-update__alt { display: flex; align-items: center; flex-wrap: wrap; gap: var(--op-space-2); padding: var(--op-space-3) var(--op-space-4); border-top: 1px solid var(--op-tint-2); font: var(--op-text-small); color: var(--op-text-2); }
.op-update__guide { display: inline-flex; align-items: center; gap: var(--op-space-1); padding: 0; border: 0; background: none; font: 700 12px/1.5 var(--op-font); color: var(--op-accent-text); cursor: pointer; }
.op-update__guide:hover { text-decoration: underline; }
.op-update--current { border-color: transparent; background: var(--op-sunken); }
.op-update--current .op-update__icon { color: var(--op-dot); }

.op-section__body.op-changelog { gap: 0; padding-top: var(--op-space-2); padding-bottom: var(--op-space-2); }
.op-release { display: flex; gap: var(--op-space-6); padding: var(--op-space-5) 0; }
.op-release + .op-release { border-top: 1px solid var(--op-border); }
.op-release__meta { width: 136px; flex: none; display: flex; flex-direction: column; align-items: flex-start; gap: var(--op-space-1); }
.op-release__version { font: var(--op-text-title); }
.op-release__changes { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: var(--op-space-2); margin: 0; padding: 0; list-style: none; }
.op-change { display: flex; align-items: flex-start; gap: var(--op-space-3); }
.op-change__kind { display: inline-grid; place-items: center; flex: none; width: 72px; height: 20px; border-radius: var(--op-radius-4); background: var(--op-sunken); color: var(--op-text-2); font: 700 11px/1 var(--op-font); }
.op-change__kind--new { background: var(--op-tint); color: var(--op-on-tint); }
.op-change__kind--fixed { background: var(--op-surface); box-shadow: inset 0 0 0 1px var(--op-border-strong); }

.op-guide { display: flex; flex-direction: column; gap: var(--op-space-4); margin: 0; padding: 0; list-style: none; counter-reset: op-guide; }
.op-guide > li { display: flex; gap: var(--op-space-3); counter-increment: op-guide; }
.op-guide > li::before { content: counter(op-guide); display: grid; place-items: center; flex: none; width: 24px; height: 24px; border-radius: var(--op-radius-full); background: var(--op-tint); color: var(--op-on-tint); font: 700 11px/1 var(--op-font); }
.op-guide__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: var(--op-space-2); }

/* Terminal command: <div class="op-command"><code>…</code><button class="op-icon-btn op-icon-btn--compact" data-copy="…">…</button></div> */
.op-command { display: flex; align-items: center; gap: var(--op-space-2); min-height: 40px; padding: 4px 4px 4px var(--op-space-3); border-radius: var(--op-radius-8); background: var(--op-nav); color: var(--op-nav-text); font: 400 12px/1.5 var(--op-font-mono); }
.op-command::before { content: "$"; color: var(--op-nav-text-2); }
.op-command > code { flex: 1; min-width: 0; overflow-x: auto; white-space: pre; font: inherit; }
.op-command .op-icon-btn { color: var(--op-nav-text-2); }
.op-command .op-icon-btn:hover { background: var(--op-nav-active); color: var(--op-nav-text); }
.op-code { padding: 2px 4px; border-radius: var(--op-radius-4); background: var(--op-sunken); font: 400 11px/1.5 var(--op-font-mono); color: var(--op-text); }

/* Copy → check icon swap: <button data-copy="text"><span class="op-swap"><svg …copy/><svg …check/></span></button> */
.op-swap { display: inline-grid; flex: none; }
.op-swap > .op-icon { grid-area: 1 / 1; transition-property: scale, opacity, filter; transition-duration: 300ms; transition-timing-function: var(--op-ease); }
.op-swap > .op-icon:last-child, [data-copied] .op-swap > .op-icon:first-child { scale: 0.25; opacity: 0; filter: blur(4px); }
[data-copied] .op-swap > .op-icon:last-child { scale: 1; opacity: 1; filter: blur(0); }

.op-dialog.op-dialog--wide { width: min(600px, calc(100vw - 32px)); }
.op-dialog__close { position: absolute; top: var(--op-space-4); right: var(--op-space-4); }
.op-dialog:has(.op-dialog__close) .op-dialog__head { padding-right: 56px; }
.op-dialog__foot--bar { padding: var(--op-space-3) var(--op-space-6); background: var(--op-toolbar); border-top: 1px solid var(--op-border); }
@media (max-width: 767px) {
  .op-update__main { flex-wrap: wrap; }
  .op-update__main > .op-btn { width: 100%; }
  .op-release { flex-direction: column; gap: var(--op-space-3); }
  .op-release__meta { width: auto; flex-direction: row; align-items: center; gap: var(--op-space-2); }
}

/* 20. AUTH PAGES --------------------------------------------------------------------
   One page set for every app, themed by family. Display 28/700 only here. */
.op-auth { display: flex; flex-direction: column; min-height: 100dvh; background: var(--op-canvas); }
.op-auth__top { display: flex; align-items: center; gap: var(--op-space-3); height: 80px; padding: 0 var(--op-space-8); }
.op-auth__main { flex: 1; display: grid; place-items: center; padding: var(--op-space-6) var(--op-space-5); }
.op-auth__column { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: var(--op-space-6); }
.op-auth__head { display: flex; flex-direction: column; gap: var(--op-space-2); }
.op-auth__back { display: inline-flex; align-items: center; gap: 4px; padding-bottom: var(--op-space-2); color: var(--op-text-2); font: 700 12px/1.5 var(--op-font); }
.op-auth__foot { padding: var(--op-space-5); text-align: center; font: var(--op-text-small); color: var(--op-text-2); }
.op-method { display: flex; align-items: center; gap: 12px; width: 100%; padding: var(--op-space-4) var(--op-space-5); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-8); background: var(--op-surface); color: var(--op-text); text-align: left; text-decoration: none; transition: border-color var(--op-dur-fast), box-shadow var(--op-dur-fast), scale var(--op-dur); }
.op-method:hover { border-color: var(--op-accent); box-shadow: var(--op-elev-card); text-decoration: none; }
.op-method > .op-icon:last-child { color: var(--op-accent-text); }
.op-links { display: flex; align-items: center; justify-content: space-between; gap: 4px; font: var(--op-text-body); }
.op-links--center { justify-content: center; }

~~~~
<!-- officepress-source:end -->
