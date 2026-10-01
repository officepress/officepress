# message-template.html — message-template

Source: `kit/templates/message-template.html`, original lines 1–209. Captured 2026-10-01; SHA-256 is in the coverage manifest.

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
  <title>Dispatch update · Order Processing</title>
  <link rel="icon" href="../logos/products/commerce/orders.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../css/officepress.css">
  <link rel="stylesheet" href="../css/families/commerce.css" id="op-family"><!-- family: commerce -->
  <script src="../js/icons.js" defer></script>
  <script src="../js/officepress.js" defer></script>
</head>
<body data-app="orders">

<div class="op-app" data-aside="expanded" data-agent="closed">
  <!-- ===== ASIDE · 260 px, collapses to 64 px rail (desktop) / overlay (mobile) ===== -->
  <aside class="op-aside" aria-label="Order Processing navigation">
    <div class="op-brand">
      <span class="op-brand__logo"><img src="../logos/products/commerce/orders.svg" alt=""></span>
      <span class="op-brand__name">Order Processing</span>
      <button class="op-icon-btn op-icon-btn--compact op-desktop-only" type="button" data-action="toggle-aside" data-aside-hide aria-label="Collapse sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left-close"/></svg></button>
      <button class="op-icon-btn op-icon-btn--compact op-mobile-only" type="button" data-action="close-aside" aria-label="Close menu"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    </div>
    <label class="op-aside__search"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg><span class="op-sr-only">Search</span><input type="search" placeholder="Search orders"></label>
    <nav class="op-nav" aria-labelledby="nav-0">
      <h2 class="op-nav__heading" id="nav-0">Operations</h2>
      <a class="op-nav__item" href="#" title="Orders"><svg class="op-icon" aria-hidden="true"><use href="#i-package"/></svg><span class="op-nav__label">Orders</span></a>
      <a class="op-nav__item" href="#" title="Workflows"><svg class="op-icon" aria-hidden="true"><use href="#i-kanban"/></svg><span class="op-nav__label">Workflows</span></a>
      <a class="op-nav__item" href="#" title="Customers"><svg class="op-icon" aria-hidden="true"><use href="#i-contact"/></svg><span class="op-nav__label">Customers</span></a>
      <a class="op-nav__item" href="#" title="Users"><svg class="op-icon" aria-hidden="true"><use href="#i-users"/></svg><span class="op-nav__label">Users</span></a>
    </nav>
    <nav class="op-nav" aria-labelledby="nav-1">
      <h2 class="op-nav__heading" id="nav-1">Templates</h2>
      <a class="op-nav__item" href="#" title="Dispositions"><svg class="op-icon" aria-hidden="true"><use href="#i-list-checks"/></svg><span class="op-nav__label">Dispositions</span></a>
      <a class="op-nav__item" href="#" aria-current="page" title="Messages"><svg class="op-icon" aria-hidden="true"><use href="#i-message-square"/></svg><span class="op-nav__label">Messages</span></a>
      <a class="op-nav__item" href="#" title="Channels"><svg class="op-icon" aria-hidden="true"><use href="#i-plug"/></svg><span class="op-nav__label">Channels</span></a>
      <a class="op-nav__item" href="#" title="Providers"><svg class="op-icon" aria-hidden="true"><use href="#i-truck"/></svg><span class="op-nav__label">Providers</span></a>
    </nav>
    <div class="op-aside__footer"><a class="op-nav__item" href="#" title="Help &amp; feedback"><svg class="op-icon" aria-hidden="true"><use href="#i-life-buoy"/></svg><span class="op-nav__label">Help &amp; feedback</span></a></div>
  </aside>
  <div class="op-main">
    <!-- ===== HEADER · 64 px ===== -->
    <header class="op-header">
      <button class="op-icon-btn op-desktop-only" type="button" data-action="toggle-aside" aria-label="Toggle sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left"/></svg></button>
      <button class="op-icon-btn op-mobile-only" type="button" data-action="open-aside" aria-label="Open menu"><svg class="op-icon" aria-hidden="true"><use href="#i-menu"/></svg></button>
      <h1 class="op-header__title">Dispatch update</h1>

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
          <a class="op-menu__item" role="menuitem" href="settings-app-theme.html"><svg class="op-icon" aria-hidden="true"><use href="#i-settings"/></svg><span>App Settings</span><span class="op-caption op-muted">Order Processing</span></a>
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
          <div class="op-page-head"><div class="op-page-head__text"><nav class="op-crumbs"><a href="#">Messages</a> › Dispatch update</nav><h2 class="op-heading">Dispatch update</h2><p class="op-muted">Create reusable content, enter sample values, and check the resolved message before sending.</p></div><button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-send"/></svg>Send test</button><button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-save"/></svg>Save message</button></div>
          <div class="op-builder" style="grid-template-columns:minmax(0,1fr) 380px">
            <div class="op-stack" style="gap:var(--op-space-5)">
              <section class="op-section"><div class="op-section__body">
                <div class="op-fields" style="grid-template-columns:minmax(0,1fr) 200px"><div class="op-field"><label class="op-field__label" for="f-messagename">Message name</label><input class="op-input" id="f-messagename" value="Dispatch update"></div><div class="op-field"><label class="op-field__label" for="f-status">Status</label><select class="op-select" id="f-status"><option>Active</option></select></div></div>
                <div class="op-field"><span class="op-field__label">Channel</span><div class="op-segmented op-segmented--block op-segmented--square" role="group" aria-label="Channel">
                  <button type="button" aria-selected="false"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-mail"/></svg>Email</button><button type="button" aria-selected="false"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-message-square-text"/></svg>SMS</button><button type="button" aria-selected="true"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-message-circle"/></svg>WhatsApp</button><button type="button" aria-selected="false"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-messages-square"/></svg>Messenger</button><button type="button" aria-selected="false"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-phone"/></svg>Viber</button>
                </div></div>
              </div></section>
              <section class="op-section">
                <div class="op-section__head"><div><span class="op-overline">Message content</span><h2 class="op-section__title">WhatsApp</h2></div><span class="op-pill op-pill--tint op-pill--lg"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-badge-check"/></svg>Approved by Meta</span></div>
                <div class="op-section__body" style="gap:var(--op-space-3)">
                  <div class="op-row" style="gap:var(--op-space-1)"><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Bold"><svg class="op-icon" aria-hidden="true"><use href="#i-bold"/></svg></button><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Italic"><svg class="op-icon" aria-hidden="true"><use href="#i-italic"/></svg></button><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Strikethrough"><svg class="op-icon" aria-hidden="true"><use href="#i-strikethrough"/></svg></button><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Emoji"><svg class="op-icon" aria-hidden="true"><use href="#i-smile"/></svg></button><span class="op-spacer"></span><button class="op-btn op-btn--secondary op-btn--compact" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-braces"/></svg>Insert variable</button></div>
                  <div class="op-editor" contenteditable="true" aria-label="Message body">
                    <div>Hi <span class="op-var">{{customer.firstName}}</span>, your order <span class="op-var">{{order.number}}</span> is on its way!</div>
                    <div>🚚 Carrier: <span class="op-var">{{shipment.carrier}}</span></div>
                    <div>📦 Tracking: <span class="op-var">{{shipment.trackingNumber}}</span></div>
                    <div>Expected delivery: <span class="op-var">{{delivery_window}}</span></div>
                    <div>Reply STOP to opt out.</div>
                  </div>
                  <div class="op-row op-caption op-muted"><span class="op-grow">Plain text · emoji allowed · no attachments</span><span>182 / 1024 characters</span></div>
                </div>
              </section>
              <section class="op-section">
                <div class="op-section__head"><div><span class="op-overline">Mustache variables</span><h2 class="op-section__title">Variables · 5 detected</h2></div></div>
                <div class="op-section__body" style="gap:var(--op-space-2)">
                  <div class="op-row"><input class="op-input op-mono" placeholder="custom_variable" aria-label="New variable"><button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-plus"/></svg>Add variable</button></div>
                  <div class="op-var-row"><div class="op-grow"><div class="op-mono op-small op-strong">{{customer.firstName}}</div><div class="op-caption op-muted">From the customer record</div></div><span class="op-pill op-pill--tint" >Automatic</span></div>
                  <div class="op-var-row"><div class="op-grow"><div class="op-mono op-small op-strong">{{order.number}}</div><div class="op-caption op-muted">From the order</div></div><span class="op-pill op-pill--tint" >Automatic</span></div>
                  <div class="op-var-row"><div class="op-grow"><div class="op-mono op-small op-strong">{{shipment.carrier}}</div><div class="op-caption op-muted">From the shipment</div></div><span class="op-pill op-pill--tint" >Automatic</span></div>
                  <div class="op-var-row"><div class="op-grow"><div class="op-mono op-small op-strong">{{shipment.trackingNumber}}</div><div class="op-caption op-muted">From the shipment</div></div><span class="op-pill op-pill--tint" >Automatic</span></div>
                  <div class="op-var-row"><div class="op-grow"><div class="op-mono op-small op-strong">{{delivery_window}}</div><div class="op-caption op-muted">Asked for at send time</div></div><span class="op-pill " style="border-color:var(--op-accent);color:var(--op-accent-text)">Custom</span></div>

                </div>
              </section>
            </div>
            <aside class="op-preview-panel" aria-label="Preview">
              <div><div class="op-overline">Input values</div><h2 class="op-title">Sample values</h2></div>
              <div class="op-field"><label class="op-field__label op-mono" for="f-customerfirstname">customer.firstName</label><input class="op-input" id="f-customerfirstname" value="Lina"></div>
              <div class="op-field"><label class="op-field__label op-mono" for="f-ordernumber">order.number</label><input class="op-input" id="f-ordernumber" value="ORD-24088"></div>
              <div class="op-field"><label class="op-field__label op-mono" for="f-shipmentcarrier">shipment.carrier</label><input class="op-input" id="f-shipmentcarrier" value="LBC Express"></div>
              <div class="op-field"><label class="op-field__label op-mono" for="f-shipmenttrackingnumber">shipment.trackingNumber</label><input class="op-input" id="f-shipmenttrackingnumber" value="LBC 7781 2290"></div>
              <div class="op-field"><label class="op-field__label op-mono" for="f-deliverywindow">delivery_window</label><input class="op-input" id="f-deliverywindow" value="Thu, 1–5 PM"></div>

              <hr>
              <div><div class="op-overline">Preview</div><h2 class="op-title">Resolved message · WhatsApp</h2></div>
              <div class="op-chat-preview"><div class="op-chat-preview__bubble">Hi Lina, your order ORD-24088 is on its way!
        🚚 Carrier: LBC Express
        📦 Tracking: LBC 7781 2290
        Expected delivery: Thu, 1–5 PM
        Reply STOP to opt out.<div class="op-caption op-chat-preview__time">10:42</div></div></div>
              <div class="op-row"><svg class="op-icon" aria-hidden="true"><use href="#i-circle-check"/></svg><span class="op-small op-strong">All 5 variables resolved</span></div>
            </aside>
          </div>
        </div>
      </main>
      <!-- ===== AGENT PANEL · 400 px docked · sheet on mobile ===== -->
      <aside class="op-agent" aria-label="Agent">
        <div class="op-agent__head">
          <span class="op-agent__mark"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-grow"><div class="op-strong">Order Processing Agent</div><div class="op-caption op-muted">Can read and act on this page</div></div>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="New chat"><svg class="op-icon" aria-hidden="true"><use href="#i-square-pen"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="History"><svg class="op-icon" aria-hidden="true"><use href="#i-history"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Close agent" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
        </div>
        <div class="op-agent__context"><span class="op-overline">Context</span><span class="op-pill"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layout-grid"/></svg>Order Processing · this page</span></div>
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
          <textarea id="agent-input" rows="2" placeholder="Ask the agent to do anything in Order Processing…"></textarea>
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
