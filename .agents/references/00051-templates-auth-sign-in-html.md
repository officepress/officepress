# sign-in.html — sign-in

Source: `kit/templates/auth/sign-in.html`, original lines 1–36. Captured 2026-10-01; SHA-256 is in the coverage manifest.

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
  <title>Sign in · Resourcing</title>
  <link rel="icon" href="../../logos/products/operate/resourcing.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../../css/officepress.css">
  <link rel="stylesheet" href="../../css/families/operate.css" id="op-family"><!-- family: operate -->
  <script src="../../js/icons.js" defer></script>
  <script src="../../js/officepress.js" defer></script>
</head>
<body data-app="resourcing">
<div class="op-auth">
  <header class="op-auth__top">
    <span class="op-brand__logo"><img src="../../logos/products/operate/resourcing.svg" alt=""></span>
    <span class="op-title op-grow">Resourcing</span>
    <button class="op-icon-btn op-icon-btn--circle op-theme-btn" type="button" aria-label="Switch to dark mode" data-action="toggle-mode"><svg class="op-icon op-icon--sun" aria-hidden="true"><use href="#i-sun"/></svg><svg class="op-icon op-icon--moon" aria-hidden="true"><use href="#i-moon"/></svg></button>
  </header>
  <main class="op-auth__main"><div class="op-auth__column">
    <div class="op-auth__head"><h1 class="op-display">Welcome back</h1><p class="op-muted">Choose how you'd like to sign in to Resourcing.</p></div>
    <div class="op-stack" style="gap:var(--op-space-2)">
      <a class="op-method" href="username.html"><span class="op-icon-tile op-icon-tile--40"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-at-sign"/></svg></span><span class="op-grow"><span class="op-strong">Continue with username</span><br><span class="op-small op-muted">Your workspace username and password</span></span><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
      <a class="op-method" href="email.html"><span class="op-icon-tile op-icon-tile--40"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-mail"/></svg></span><span class="op-grow"><span class="op-strong">Continue with email</span><br><span class="op-small op-muted">Password, one-time code, or magic link</span></span><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
    </div>
    <div class="op-links op-links--center"><span class="op-muted">New to the workspace?</span><a href="#">Ask an admin for an invite</a></div>
  </div></main>
  <footer class="op-auth__foot">Resourcing · Workspace access</footer>
</div>
</body>
</html>
~~~~
<!-- officepress-source:end -->
