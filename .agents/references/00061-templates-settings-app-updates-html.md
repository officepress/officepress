# settings-app-updates.html — settings-app-updates

Source: `kit/templates/settings-app-updates.html`, original lines 1–215. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

**Demo versions and commands below are examples only. Actual upgrade steps must match the installed/target versions and installation method.**

<!-- officepress-source:start -->
~~~~html
<!doctype html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Updates · Inbox</title>
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

<div class="op-app op-app--no-aside" data-agent="closed">
  <div class="op-main">
    <!-- ===== HEADER · 64 px ===== -->
    <header class="op-header">
      <a class="op-icon-btn" href="app-board.html" aria-label="Back to app"><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-left"/></svg></a>
      <h1 class="op-header__title">App settings</h1>

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
        <div class="op-settings">
          <nav class="op-settings__nav" aria-label="Inbox settings">
            <span class="op-settings__heading op-overline">Inbox settings</span>
            <a class="op-settings__item" href="#general"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-settings"/></svg></span>General</a>
            <a class="op-settings__item" href="settings-app-theme.html"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-palette"/></svg></span>Theme</a>
            <a class="op-settings__item" href="#members"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-users"/></svg></span>Members</a>
            <a class="op-settings__item" href="#agent"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>Agent</a>
            <a class="op-settings__item" href="#integrations"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-plug"/></svg></span>Integrations</a>
            <a class="op-settings__item" href="#notifications"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg></span>Notifications</a>
            <a class="op-settings__item" href="#updates" aria-current="true"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-circle-arrow-up"/></svg></span>Updates<span class="op-badge op-badge--accent" aria-label="1 update available">1</span></a>
            <div style="padding:var(--op-space-2) 0"><hr></div>
            <a class="op-settings__item" href="app-board.html"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-left"/></svg></span>Back to App</a>
          </nav>
          <div class="op-settings__main"><div class="op-settings__column">
            <section class="op-section" id="updates" aria-labelledby="sec-updates">
              <div class="op-section__head"><div><h2 class="op-section__title" id="sec-updates">Updates</h2><p class="op-section__desc">Keep Inbox current with fixes and new features. Updates install on your server and apply to everyone in this workspace.</p></div></div>
              <div class="op-section__body">
                <div class="op-row" style="gap:var(--op-space-3)">
                  <span class="op-icon-tile op-icon-tile--40 op-icon-tile--accent"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-inbox"/></svg></span>
                  <div class="op-grow"><div class="op-strong">Inbox 2.3.1</div><div class="op-small op-muted">Installed Aug 28, 2026 · Communicate</div></div>
                  <span class="op-pill op-pill--neutral op-pill--lg"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-check"/></svg>Current version</span>
                </div>
                <!-- Update available. Render only when a newer version exists. -->
                <div class="op-update" role="status">
                  <div class="op-update__main">
                    <span class="op-update__icon"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-circle-arrow-up"/></svg></span>
                    <div class="op-update__text"><span class="op-strong">Inbox 2.4.0 is available</span><span class="op-small op-muted">Released Sep 29, 2026 · 3 new features, 2 improvements, 4 fixes. Inbox restarts during the update (about a minute).</span></div>
                    <button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-download"/></svg>Update to 2.4.0</button>
                  </div>
                  <div class="op-update__alt">
                    <button class="op-update__guide" type="button" data-dialog-open="dlg-terminal"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-square-terminal"/></svg>Update from the terminal<svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>
                    <span>Step-by-step guide for admins with shell access to the server.</span>
                  </div>
                </div>
                <!-- Up to date. Shown instead of the card above when there is nothing newer (remove `hidden`). -->
                <div class="op-update op-update--current" role="status" hidden>
                  <div class="op-update__main">
                    <span class="op-update__icon"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-circle-check"/></svg></span>
                    <div class="op-update__text"><span class="op-strong">You’re up to date</span><span class="op-small op-muted">Inbox 2.4.0 is the latest version. We’ll let app admins know when a new one is out.</span></div>
                  </div>
                </div>
                <hr>
                <label class="op-check"><input type="checkbox" checked><span class="op-check__text"><span class="op-strong">Automatically check for updates</span><span class="op-small op-muted">Checks once a day and notifies app admins when a new version is out. Updates are never installed without an admin.</span></span></label>
              </div>
              <div class="op-section__foot"><span class="op-small">Last checked today at 09:12</span><button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-refresh-cw"/></svg>Check for updates</button></div>
            </section>
            <section class="op-section" aria-labelledby="sec-changelog">
              <div class="op-section__head"><div><h2 class="op-section__title" id="sec-changelog">Change log</h2><p class="op-section__desc">What changed in each version of Inbox, newest first.</p></div></div>
              <div class="op-section__body op-changelog">
                <article class="op-release" aria-labelledby="v-2-4-0">
                  <div class="op-release__meta"><h3 class="op-release__version" id="v-2-4-0">2.4.0</h3><time class="op-small op-muted" datetime="2026-09-29">Sep 29, 2026</time><span class="op-pill op-pill--accent"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-circle-arrow-up"/></svg>Available</span></div>
                  <ul class="op-release__changes"><li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>Snooze a card until a date and time — it returns to its column when due.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>Select several cards and move them between columns in one go.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>The agent can draft replies in the tone of your past messages.</span></li><li class="op-change"><span class="op-change__kind">Improved</span><span>Search matches sender names with accents, like José and Peña.</span></li><li class="op-change"><span class="op-change__kind">Improved</span><span>SLA timers can pause outside business hours.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>Unread dots stayed on cards already read on another device.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>Attachments over 20 MB failed without an error message.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>The collapsed sidebar reopened after signing out and back in.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>Low contrast on the filters menu in dark mode.</span></li></ul>
                </article>
                <article class="op-release" aria-labelledby="v-2-3-1">
                  <div class="op-release__meta"><h3 class="op-release__version" id="v-2-3-1">2.3.1</h3><time class="op-small op-muted" datetime="2026-08-28">Aug 28, 2026</time><span class="op-pill op-pill--neutral"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-check"/></svg>Installed</span></div>
                  <ul class="op-release__changes"><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>Column counts didn’t update after archiving a card.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>Times showed UTC instead of the workspace time zone.</span></li></ul>
                </article>
                <article class="op-release" aria-labelledby="v-2-3-0">
                  <div class="op-release__meta"><h3 class="op-release__version" id="v-2-3-0">2.3.0</h3><time class="op-small op-muted" datetime="2026-08-12">Aug 12, 2026</time></div>
                  <ul class="op-release__changes"><li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>Pin filters to the sidebar.</span></li><li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>Automation rules can wait for an SLA threshold.</span></li><li class="op-change"><span class="op-change__kind">Improved</span><span>Boards with more than 10,000 messages load faster.</span></li></ul>
                </article>
              </div>
              <div class="op-section__foot"><span class="op-small">Showing 3 of 14 versions</span><button class="op-btn op-btn--secondary" type="button">Show older versions</button></div>
            </section>
          </div></div>
        </div>
        <!-- Terminal guide · only offered when an update is available. Commands are placeholders until the install method is final. -->
        <dialog class="op-dialog op-dialog--wide" id="dlg-terminal" aria-labelledby="dlg-terminal-t">
          <form method="dialog">
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted op-dialog__close" type="button" data-dialog-close aria-label="Close"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
            <div class="op-dialog__head"><h2 class="op-heading" id="dlg-terminal-t">Update Inbox from the terminal</h2><p class="op-muted">For admins with shell access to the server that runs Inbox. Updates 2.3.1 → 2.4.0 in about five minutes.</p></div>
            <div class="op-dialog__body">
              <div class="op-notice"><svg class="op-icon" aria-hidden="true"><use href="#i-triangle-alert"/></svg><div><div class="op-notice__title">Before you start</div><p class="op-small">Inbox is unavailable for about a minute while it restarts. Pick a quiet time and let your team know.</p></div></div>
              <ol class="op-guide">
                <li><div class="op-guide__body"><div><div class="op-strong">Connect to the server</div><div class="op-small op-muted">Sign in to the machine that runs Inbox.</div></div><div class="op-command"><code>ssh admin@inbox.yourcompany.local</code><button class="op-icon-btn op-icon-btn--compact" type="button" data-copy="ssh admin@inbox.yourcompany.local" aria-label="Copy command"><span class="op-swap"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-check"/></svg></span></button></div></div></li>
                <li><div class="op-guide__body"><div><div class="op-strong">Back up your data</div><div class="op-small op-muted">Saves the database and uploaded files to the backups folder.</div></div><div class="op-command"><code>officepress backup inbox</code><button class="op-icon-btn op-icon-btn--compact" type="button" data-copy="officepress backup inbox" aria-label="Copy command"><span class="op-swap"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-check"/></svg></span></button></div></div></li>
                <li><div class="op-guide__body"><div><div class="op-strong">Install 2.4.0</div><div class="op-small op-muted">Downloads the release, applies database changes and restarts Inbox.</div></div><div class="op-command"><code>officepress update inbox --version 2.4.0</code><button class="op-icon-btn op-icon-btn--compact" type="button" data-copy="officepress update inbox --version 2.4.0" aria-label="Copy command"><span class="op-swap"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-check"/></svg></span></button></div></div></li>
                <li><div class="op-guide__body"><div><div class="op-strong">Check it worked</div><div class="op-small op-muted">You should see “inbox 2.4.0”. Then refresh this page.</div></div><div class="op-command"><code>officepress version inbox</code><button class="op-icon-btn op-icon-btn--compact" type="button" data-copy="officepress version inbox" aria-label="Copy command"><span class="op-swap"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-check"/></svg></span></button></div></div></li>
              </ol>
              <hr>
              <p class="op-row op-small op-muted" style="gap:var(--op-space-2);flex-wrap:wrap"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-history"/></svg>Something went wrong? Run <code class="op-code">officepress rollback inbox</code> to return to 2.3.1.</p>
            </div>
            <div class="op-dialog__foot op-dialog__foot--bar">
              <button class="op-btn op-btn--secondary" type="button" data-copy="ssh admin@inbox.yourcompany.local&#10;officepress backup inbox&#10;officepress update inbox --version 2.4.0&#10;officepress version inbox"><span class="op-swap"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-copy"/></svg><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-check"/></svg></span>Copy all commands</button>
              <button class="op-btn op-btn--primary" type="submit">Done</button>
            </div>
          </form>
        </dialog>
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
