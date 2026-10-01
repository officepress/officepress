# automation-builder.html — automation-builder

Source: `kit/templates/automation-builder.html`, original lines 1–196. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~html
<!doctype html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New automation · Inbox</title>
  <link rel="icon" href="../logos/products/communicate/inbox.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../css/officepress.css">
  <link rel="stylesheet" href="../css/families/communicate.css" id="op-family"><!-- family: communicate -->
  <script src="../js/icons.js" defer></script>
  <script src="../js/officepress.js" defer></script>
</head>
<body data-app="inbox">

<div class="op-app" data-aside="expanded" data-agent="closed">
  <!-- ===== ASIDE · 260 px, collapses to 64 px rail (desktop) / overlay (mobile) ===== -->
  <aside class="op-aside" aria-label="Inbox navigation">
    <div class="op-brand">
      <span class="op-brand__logo"><img src="../logos/products/communicate/inbox.svg" alt=""></span>
      <span class="op-brand__name">Inbox</span>
      <button class="op-icon-btn op-icon-btn--compact op-desktop-only" type="button" data-action="toggle-aside" data-aside-hide aria-label="Collapse sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left-close"/></svg></button>
      <button class="op-icon-btn op-icon-btn--compact op-mobile-only" type="button" data-action="close-aside" aria-label="Close menu"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    </div>
    <label class="op-aside__search"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg><span class="op-sr-only">Search</span><input type="search" placeholder="Search mail"></label>
    <nav class="op-nav" aria-labelledby="nav-0">
      <h2 class="op-nav__heading" id="nav-0">On this device</h2>
      <a class="op-nav__item" href="#" aria-current="page" title="Inbox"><svg class="op-icon" aria-hidden="true"><use href="#i-inbox"/></svg><span class="op-nav__label">Inbox</span><span class="op-nav__dot" aria-label="Unread"></span></a>
      <a class="op-nav__item" href="#" title="Starred"><svg class="op-icon" aria-hidden="true"><use href="#i-star"/></svg><span class="op-nav__label">Starred</span><span class="op-nav__dot" aria-label="Unread"></span></a>
      <a class="op-nav__item" href="#" title="Sent"><svg class="op-icon" aria-hidden="true"><use href="#i-send"/></svg><span class="op-nav__label">Sent</span></a>
      <a class="op-nav__item" href="#" title="Drafts"><svg class="op-icon" aria-hidden="true"><use href="#i-file"/></svg><span class="op-nav__label">Drafts</span><span class="op-nav__count">2</span></a>
      <a class="op-nav__item" href="#" title="Archive"><svg class="op-icon" aria-hidden="true"><use href="#i-archive"/></svg><span class="op-nav__label">Archive</span></a>
      <a class="op-nav__item" href="#" title="Spam"><svg class="op-icon" aria-hidden="true"><use href="#i-octagon-alert"/></svg><span class="op-nav__label">Spam</span></a>
      <a class="op-nav__item" href="#" title="All Mail"><svg class="op-icon" aria-hidden="true"><use href="#i-mails"/></svg><span class="op-nav__label">All Mail</span></a>
    </nav>
    <nav class="op-nav" aria-labelledby="nav-1">
      <h2 class="op-nav__heading" id="nav-1">Filters</h2>
      <a class="op-nav__item" href="#" title="Suppliers"><svg class="op-icon" aria-hidden="true"><use href="#i-tag"/></svg><span class="op-nav__label">Suppliers</span><span class="op-nav__dot" aria-label="Unread"></span></a>
      <a class="op-nav__item" href="#" title="Invoices"><svg class="op-icon" aria-hidden="true"><use href="#i-tag"/></svg><span class="op-nav__label">Invoices</span><span class="op-nav__dot" aria-label="Unread"></span></a>
      <a class="op-nav__item" href="#" title="Warehouse move"><svg class="op-icon" aria-hidden="true"><use href="#i-tag"/></svg><span class="op-nav__label">Warehouse move</span></a>
      <a class="op-nav__item" href="#" title="Press schedule"><svg class="op-icon" aria-hidden="true"><use href="#i-tag"/></svg><span class="op-nav__label">Press schedule</span></a>
    </nav>
    <div class="op-aside__footer"><a class="op-nav__item" href="#" title="Help &amp; feedback"><svg class="op-icon" aria-hidden="true"><use href="#i-life-buoy"/></svg><span class="op-nav__label">Help &amp; feedback</span></a></div>
  </aside>
  <div class="op-main">
    <!-- ===== HEADER · 64 px ===== -->
    <header class="op-header">
      <button class="op-icon-btn op-desktop-only" type="button" data-action="toggle-aside" aria-label="Toggle sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left"/></svg></button>
      <button class="op-icon-btn op-mobile-only" type="button" data-action="open-aside" aria-label="Open menu"><svg class="op-icon" aria-hidden="true"><use href="#i-menu"/></svg></button>
      <h1 class="op-header__title">New automation</h1>

      <!-- Global actions: identical in every app, always in this order -->
      <div class="op-globals">
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Notifications, 3 unread" aria-haspopup="dialog" aria-expanded="false" data-popover="pop-notifs"><svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg><span class="op-icon-btn__dot" aria-hidden="true"></span></button>
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Agent" aria-pressed="false" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></button>
        <button class="op-icon-btn op-icon-btn--circle op-theme-btn" type="button" aria-label="Switch to dark mode" data-action="toggle-mode"><svg class="op-icon op-icon--sun" aria-hidden="true"><use href="#i-sun"/></svg><svg class="op-icon op-icon--moon" aria-hidden="true"><use href="#i-moon"/></svg></button>
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" data-popover="pop-user"><svg class="op-icon" aria-hidden="true"><use href="#i-user"/></svg></button>
        <!-- Notifications · 380 px · account-wide -->
        <section class="op-popover op-notifs" id="pop-notifs" role="dialog" aria-label="Notifications">
          <div class="op-notifs__head">
            <h2 class="op-title">Notifications</h2><span class="op-badge">3</span><span class="op-spacer"></span>
            <button class="op-btn op-btn--link op-btn--compact" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-check-check"/></svg>Mark all read</button>
            <button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Notification settings"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-settings"/></svg></button>
          </div>
          <div class="op-tabs" role="tablist"><button class="op-tab" role="tab" aria-selected="true">All</button><button class="op-tab" role="tab" aria-selected="false">Mentions <span class="op-badge op-badge--neutral">1</span></button><button class="op-tab" role="tab" aria-selected="false">Agent <span class="op-badge op-badge--neutral">1</span></button></div>
          <div class="op-notifs__list">
            <div class="op-notifs__group op-overline">Today</div>
            <article class="op-notif" data-unread>
              <span class="op-avatar op-avatar--32 op-avatar--soft">AC</span>
              <div class="op-notif__body"><div>Ana Cruz mentioned you in <strong>Warehouse move — dock schedule</strong></div><div class="op-notif__quote">@Mila can you confirm we print the labels at A3?</div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>12 min ago</div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <article class="op-notif" data-unread>
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--accent"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
              <div class="op-notif__body"><div>Inbox Agent finished drafting your reply to Ana Cruz</div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>18 min ago</div><div><button class="op-btn op-btn--primary op-btn--small" type="button">Review draft</button></div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <article class="op-notif" data-unread>
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--family" data-family="operate"><svg class="op-icon" aria-hidden="true"><use href="#i-calculator"/></svg></span>
              <div class="op-notif__body"><div>Invoice NW-4471 (₱48,200) is waiting for your approval</div><div class="op-notif__meta"><span class="op-app-tag" data-family="operate">Accounting</span>1 hr ago</div><div class="op-row"><button class="op-btn op-btn--primary op-btn--small" type="button">Approve</button><button class="op-btn op-btn--secondary op-btn--small" type="button">View</button></div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <div class="op-notifs__group op-overline">Earlier</div>
            <article class="op-notif">
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--neutral"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg></span>
              <div class="op-notif__body"><div>New sign-in to your account from Chrome on macOS · Manila</div><div class="op-notif__meta"><span class="op-app-tag" style="--op-app-tag:var(--op-text-2)">Account</span>Yesterday, 18:42</div><a class="op-small" href="#">Not you? Secure your account</a></div>
            </article>
            <article class="op-notif">
              <span class="op-avatar op-avatar--32 op-avatar--soft">RD</span>
              <div class="op-notif__body"><div>Rina Delgado assigned you <strong>Supplier onboarding documents</strong></div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>Mon</div></div>
            </article>
          </div>
          <div class="op-notifs__foot"><a href="#">View all activity <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-arrow-right"/></svg></a></div>
        </section>
        <!-- User menu · 280 px -->
        <div class="op-popover op-menu" id="pop-user" role="menu" aria-label="Account">
          <div class="op-menu__identity"><span class="op-avatar op-avatar--40">MR</span><div class="op-grow"><div class="op-strong">Mila Reyes</div><div class="op-small op-muted">mila.reyes@officepress.ph</div></div></div>
          <hr>
          <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon" aria-hidden="true"><use href="#i-sliders-horizontal"/></svg><span>User Preferences</span></a>
          <a class="op-menu__item" role="menuitem" href="settings-account.html"><svg class="op-icon" aria-hidden="true"><use href="#i-circle-user"/></svg><span>Account Settings</span></a>
          <hr>
          <!-- App-level items: render only when the user has access -->
          <a class="op-menu__item" role="menuitem" href="settings-app-theme.html"><svg class="op-icon" aria-hidden="true"><use href="#i-settings"/></svg><span>App Settings</span><span class="op-caption op-muted">Inbox</span></a>
          <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg><span>Admin Dashboard</span><span class="op-pill op-pill--tint">Admin</span></a>
          <hr>
          <button class="op-menu__item" role="menuitem" type="button"><svg class="op-icon" aria-hidden="true"><use href="#i-log-out"/></svg><span>Sign out</span></button>
        </div>
      </div>
    </header>
    <div class="op-body">
      <!-- ===== CONTENT: replace with your screen ===== -->
      <main class="op-content" id="content">
        <div class="op-page">
          <div class="op-page-head"><div class="op-page-head__text"><nav class="op-crumbs"><a href="app-board.html">Board</a> › Follow up › Automations</nav><h2 class="op-heading">New automation</h2></div><button class="op-btn op-btn--secondary" type="button">Cancel</button><button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-save"/></svg>Save automation</button></div>
          <section class="op-section"><div class="op-section__body"><div class="op-fields" style="grid-template-columns:minmax(0,1fr) 200px"><div class="op-field"><label class="op-field__label" for="f-rulename">Rule name</label><input class="op-input" id="f-rulename" value="Tidy unread follow-ups"></div><div class="op-field"><label class="op-field__label" for="f-status">Status</label><select class="op-select" id="f-status"><option>Draft</option></select></div></div></div></section>
          <div class="op-builder">
            <div class="op-stack" style="gap:var(--op-space-4)">
              <section class="op-step"><div class="op-step__head"><span class="op-step__no">1</span><div><h2 class="op-title" style="font-size:16px">Trigger</h2><p class="op-small op-muted">Choose the event that starts this rule.</p></div></div><div class="op-step__body">
                <div class="op-field"><label class="op-field__label" for="f-when">When</label><select class="op-select" id="f-when"><option>A card enters this column</option></select></div>
              </div></section>
              <section class="op-step"><div class="op-step__head"><span class="op-step__no">2</span><div><h2 class="op-title" style="font-size:16px">Conditions</h2><p class="op-small op-muted">Only continue when the card matches these checks.</p></div></div><div class="op-step__body">
                <div class="op-row"><span class="op-small op-strong">Continue when</span><div class="op-segmented"><button type="button" aria-selected="true">All match</button><button type="button" aria-selected="false">Any match</button></div></div><div class="op-condition"><div class="op-field"><label class="op-field__label" for="f-field">Field</label><select class="op-select" id="f-field"><option>Read state</option></select></div><div class="op-field" style="width:160px"><label class="op-field__label">Operator</label><select class="op-select"><option>is</option></select></div><div class="op-field"><label class="op-field__label" for="f-value">Value</label><input class="op-input" id="f-value" value="Unread"></div><button class="op-icon-btn op-icon-btn--muted" style="height:var(--op-input-h);width:var(--op-input-h)" type="button" aria-label="Remove condition"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button></div><div class="op-condition"><div class="op-field"><label class="op-field__label" for="f-field">Field</label><select class="op-select" id="f-field"><option>From</option></select></div><div class="op-field" style="width:160px"><label class="op-field__label">Operator</label><select class="op-select"><option>contains</option></select></div><div class="op-field"><label class="op-field__label" for="f-value">Value</label><input class="op-input" id="f-value" value="@northwind.ph"></div><button class="op-icon-btn op-icon-btn--muted" style="height:var(--op-input-h);width:var(--op-input-h)" type="button" aria-label="Remove condition"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button></div><button class="op-add-row" type="button"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-plus"/></svg>Add condition</button>
              </div></section>
              <section class="op-step"><div class="op-step__head"><span class="op-step__no">3</span><div><h2 class="op-title" style="font-size:16px">Timing</h2><p class="op-small op-muted">Run now, after a delay, on a date field, or relative to this column's SLA.</p></div></div><div class="op-step__body">
                <div class="op-fields" style="grid-template-columns:minmax(0,1fr) 180px"><div class="op-field"><label class="op-field__label" for="f-run">Run</label><select class="op-select" id="f-run"><option>Before the SLA is due</option></select></div><div class="op-field"><label class="op-field__label" for="f-offset">Offset</label><select class="op-select" id="f-offset"><option>2 hours</option></select></div></div><div class="op-notice op-notice--info"><svg class="op-icon" aria-hidden="true"><use href="#i-info"/></svg><span class="op-small">Follow up’s SLA is 12 hours, so this runs 10 hours after a card arrives.</span></div>
              </div></section>
              <section class="op-step"><div class="op-step__head"><span class="op-step__no">4</span><div><h2 class="op-title" style="font-size:16px">Actions</h2><p class="op-small op-muted">Actions run from top to bottom. Drag to reorder.</p></div></div><div class="op-step__body">
                <div class="op-ordered"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-ordered__no">1</span><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-mail-open"/></svg></span><div class="op-grow"><div class="op-strong">Mark the email as read</div><div class="op-small op-muted">No additional setup</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Edit"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-pencil"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Delete"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-trash-2"/></svg></button></div>
                <div class="op-ordered"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-ordered__no">2</span><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg></span><div class="op-grow"><div class="op-strong">Send notification</div><div class="op-small op-muted">Me · In-app and email</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Edit"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-pencil"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Delete"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-trash-2"/></svg></button></div>
                <div class="op-ordered"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-ordered__no">3</span><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-right-left"/></svg></span><div class="op-grow"><div class="op-strong">Move card to column</div><div class="op-small op-muted">Done · automatic, no confirmation</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Edit"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-pencil"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Delete"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-trash-2"/></svg></button></div>
                <button class="op-add-row" type="button"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-plus"/></svg>Add action</button>
              </div></section>
              <section class="op-step"><div class="op-step__head"><span class="op-step__no">5</span><div><h2 class="op-title" style="font-size:16px">Run settings</h2><p class="op-small op-muted">Prevent duplicate or looping runs.</p></div></div><div class="op-step__body">
                <label class="op-option"><span class="op-check"><input type="checkbox" checked></span><span class="op-check__text"><span class="op-strong">Run once per card per column visit</span><span class="op-caption op-muted">It can run again if the card leaves and comes back.</span></span></label><label class="op-option"><span class="op-check"><input type="checkbox" checked></span><span class="op-check__text"><span class="op-strong">Stop later actions when one fails</span><span class="op-caption op-muted">The run is marked failed; later actions stay pending.</span></span></label>
              </div></section>
            </div>
            <aside class="op-preview-panel" aria-label="Live preview">
              <div class="op-row"><span class="op-overline op-grow">Live preview</span><span class="op-pill op-pill--neutral">Draft</span></div>
              <h2 class="op-strong">What this rule will do</h2>
              <p class="op-summary">When a card enters Follow up, if it is unread and from @northwind.ph, 2 hours before the SLA is due: mark it read, notify me, then move it to Done.</p>
              <hr>
              <span class="op-overline">Sample card</span>
              <div class="op-card"><span class="op-small op-strong">Northwind Billing</span><span class="op-strong">Invoice NW-4471 is ready</span><span class="op-caption op-muted">Follow up · 4h left · unread</span></div>
              <div class="op-row"><svg class="op-icon" aria-hidden="true"><use href="#i-circle-check"/></svg><span class="op-small op-strong">Trigger and both conditions match</span></div>
              <hr>
              <span class="op-overline">Planned actions</span>
              <ol class="op-stack op-small" style="margin:0;padding-left:20px"><li>Mark the email as read</li><li>Notify me · in-app and email</li><li>Move to Done</li></ol>
              <button class="op-btn op-btn--primary op-btn--block" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-flask-conical"/></svg>Test with this card</button>
              <p class="op-caption op-muted" style="text-align:center">Tests never change the real card.</p>
            </aside>
          </div>
        </div>
      </main>
      <!-- ===== AGENT PANEL · 400 px docked · sheet on mobile ===== -->
      <aside class="op-agent" aria-label="Agent">
        <div class="op-agent__head">
          <span class="op-agent__mark"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-grow"><div class="op-strong">Inbox Agent</div><div class="op-caption op-muted">Can read and act on this page</div></div>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="New chat"><svg class="op-icon" aria-hidden="true"><use href="#i-square-pen"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="History"><svg class="op-icon" aria-hidden="true"><use href="#i-history"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Close agent" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
        </div>
        <div class="op-agent__context"><span class="op-overline">Context</span><span class="op-pill"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layout-grid"/></svg>Inbox · this page</span></div>
        <div class="op-agent__thread">
          <span class="op-agent__mark" style="width:40px;height:40px;border-radius:var(--op-radius-12)"><svg class="op-icon op-icon--20" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-stack"><h2 class="op-heading">What should we get done?</h2><p class="op-muted">I can read, sort, draft and schedule anything here. You'll see every change I make.</p></div>
          <div class="op-stack">
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-list-checks"/></svg></span><span><span class="op-strong">Triage what's new</span><br><span class="op-small op-muted">Sort new items into the right column</span></span></button>
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-timer"/></svg></span><span><span class="op-strong">What's due today?</span><br><span class="op-small op-muted">Summarise SLAs under 24h</span></span></button>
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-pen-line"/></svg></span><span><span class="op-strong">Draft replies</span><br><span class="op-small op-muted">For everything waiting on me</span></span></button>
          </div>
        </div>
        <form class="op-agent__composer" onsubmit="return false">
          <label class="op-sr-only" for="agent-input">Message the agent</label>
          <textarea id="agent-input" rows="2" placeholder="Ask the agent to do anything in Inbox…"></textarea>
          <div class="op-agent__controls">
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Attach"><svg class="op-icon" aria-hidden="true"><use href="#i-paperclip"/></svg></button>
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Add context"><svg class="op-icon" aria-hidden="true"><use href="#i-at-sign"/></svg></button>
            <span class="op-pill op-pill--neutral op-pill--lg"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-sparkles"/></svg>Auto</span>
            <span class="op-spacer"></span>
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Voice input"><svg class="op-icon" aria-hidden="true"><use href="#i-mic"/></svg></button>
            <button class="op-icon-btn op-send" type="submit" aria-label="Send"><svg class="op-icon op-icon--bold" aria-hidden="true"><use href="#i-arrow-up"/></svg></button>
          </div>
        </form>
        <p class="op-agent__disclaimer">The agent can take actions in this app. Every action is logged and can be undone.</p>
      </aside>
    </div>
  </div>
  <div class="op-scrim" data-action="close-overlays" aria-hidden="true"></div>
</div>
</body>
</html>
~~~~
<!-- officepress-source:end -->
