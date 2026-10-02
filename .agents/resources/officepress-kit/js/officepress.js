/* ==========================================================================
   OfficePress UI Kit — behaviour (vanilla, no dependencies)
   Load after js/icons.js, with `defer`. Everything is driven by data-* and ARIA
   attributes, so markup stays declarative:

   Frame
     [data-action="toggle-aside"]     desktop: expanded ↔ 64 px rail (saved per app)
     [data-action="open-aside"]       mobile: open overlay
     [data-action="close-aside"]      mobile: close overlay
     [data-action="toggle-agent"]     open/close the agent panel
     [data-action="toggle-mode"]      light ↔ dark (saved per user)
     [data-action="close-overlays"]   scrim click
     [data-action="toggle-details"]   chat: show/hide the details panel
   Components
     [data-popover="<id>"]            toggles .op-popover#id (one open at a time)
     [role="tablist"]                 tabs: aria-selected + optional aria-controls panels
     .op-segmented                    single-choice group (aria-selected / aria-pressed)
     [role="switch"]                  toggles aria-checked
     .op-chip[aria-pressed]           toggles aria-pressed
     .op-otp                          auto-advance code inputs, paste fills all
     [data-dialog-open="<id>"]        opens <dialog id> · [data-dialog-close] closes
     [data-confirm-text="WORD"]       on an input inside a dialog: enables [data-confirm] when typed exactly
     [data-copy="text"]               copies text; sets [data-copied] for 1.5 s (.op-swap icons cross-fade)
   Dev review params (?family=operate&mode=dark&aside=collapsed&agent=open&open=pop-user)
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var app = document.querySelector(".op-app");
  var mobile = window.matchMedia("(max-width: 767px)");
  var appKey = "op-aside:" + (document.body.getAttribute("data-app") || "app");

  /* ---- Mode ------------------------------------------------------------ */
  function updateThemeLabels(mode) {
    document.querySelectorAll('[data-action="toggle-mode"]').forEach(function (b) {
      b.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }
  function setMode(mode, persist) {
    root.setAttribute("data-mode", mode);
    if (persist) localStorage.setItem("op-mode", mode);
    updateThemeLabels(mode);
  }
  setMode(root.getAttribute("data-mode") || "light", false);
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove("op-no-motion"); }); });

  /* ---- Aside ----------------------------------------------------------- */
  if (app && app.hasAttribute("data-aside") && localStorage.getItem(appKey) === "collapsed") app.setAttribute("data-aside", "collapsed");
  function toggleAside() {
    if (!app) return;
    var next = app.getAttribute("data-aside") === "collapsed" ? "expanded" : "collapsed";
    app.setAttribute("data-aside", next);
    localStorage.setItem(appKey, next);
  }
  function openMobileAside() { if (!app) return; app.setAttribute("data-aside-open", ""); focusFirst(document.querySelector(".op-aside")); }
  function closeMobileAside() { if (app) app.removeAttribute("data-aside-open"); }
  mobile.addEventListener("change", closeMobileAside);

  /* ---- Agent ----------------------------------------------------------- */
  function setAgent(open) {
    if (!app) return;
    app.setAttribute("data-agent", open ? "open" : "closed");
    document.querySelectorAll('.op-globals [data-action="toggle-agent"]').forEach(function (b) { b.setAttribute("aria-pressed", String(open)); });
    if (open) { closePopovers(); var input = document.querySelector(".op-agent textarea"); if (input) setTimeout(function () { input.focus(); }, 200); }
  }

  /* ---- Popovers -------------------------------------------------------- */
  function triggerFor(pop) { return document.querySelector('[data-popover="' + pop.id + '"]'); }
  function closePopovers(except) {
    document.querySelectorAll(".op-popover[data-open]").forEach(function (p) {
      if (p === except) return;
      p.removeAttribute("data-open");
      var t = triggerFor(p); if (t) t.setAttribute("aria-expanded", "false");
    });
  }
  function togglePopover(trigger) {
    var pop = document.getElementById(trigger.getAttribute("data-popover"));
    if (!pop) return;
    var open = !pop.hasAttribute("data-open");
    closePopovers(pop);
    if (open) { pop.setAttribute("data-open", ""); focusFirst(pop); } else pop.removeAttribute("data-open");
    trigger.setAttribute("aria-expanded", String(open));
  }
  function focusFirst(container) {
    if (!container) return;
    var el = container.querySelector('a[href], button:not([disabled]), input:not([type="hidden"]), textarea, select, [tabindex]:not([tabindex="-1"])');
    if (el) setTimeout(function () { el.focus({ preventScroll: true }); }, 50);
  }

  /* ---- Copy to clipboard ------------------------------------------------ */
  function copyFallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (err) { /* nothing else to try */ }
    document.body.removeChild(ta);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { copyFallback(text); });
    }
    copyFallback(text);
    return Promise.resolve();
  }
  function copyFrom(btn) {
    copyText(btn.getAttribute("data-copy")).then(function () {
      if (btn._opLabel === undefined) btn._opLabel = btn.getAttribute("aria-label");
      var label = btn._opLabel;
      btn.setAttribute("data-copied", "");
      if (label) btn.setAttribute("aria-label", "Copied");
      clearTimeout(btn._opCopy);
      btn._opCopy = setTimeout(function () { btn.removeAttribute("data-copied"); if (label) btn.setAttribute("aria-label", label); }, 1500);
    });
  }

  /* ---- Clicks ---------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var cp = e.target.closest("[data-copy]");
    if (cp) { copyFrom(cp); return; }
    var t = e.target.closest("[data-action], [data-popover], [data-dialog-open], [data-dialog-close]");
    if (t) {
      if (t.hasAttribute("data-popover")) { togglePopover(t); return; }
      if (t.hasAttribute("data-dialog-open")) { var d = document.getElementById(t.getAttribute("data-dialog-open")); if (d && d.showModal) d.showModal(); return; }
      if (t.hasAttribute("data-dialog-close")) { var dlg = t.closest("dialog"); if (dlg) dlg.close(); return; }
      switch (t.getAttribute("data-action")) {
        case "toggle-mode":    setMode(root.getAttribute("data-mode") === "dark" ? "light" : "dark", true); break;
        case "toggle-aside":   toggleAside(); break;
        case "open-aside":     openMobileAside(); break;
        case "close-aside":    closeMobileAside(); break;
        case "toggle-agent":   setAgent(!app || app.getAttribute("data-agent") !== "open"); break;
        case "close-overlays": closeMobileAside(); setAgent(false); break;
        case "toggle-details":
          var chat = t.closest(".op-app") && document.querySelector(".op-chat");
          if (chat) { var closed = chat.getAttribute("data-details") === "closed"; chat.setAttribute("data-details", closed ? "open" : "closed"); t.setAttribute("aria-pressed", String(closed)); }
          break;
      }
      return;
    }

    // Tabs
    var tab = e.target.closest('[role="tab"]');
    if (tab) {
      var list = tab.closest('[role="tablist"]');
      list.querySelectorAll('[role="tab"]').forEach(function (x) {
        var on = x === tab;
        x.setAttribute("aria-selected", String(on));
        var panelId = x.getAttribute("aria-controls");
        if (panelId) { var panel = document.getElementById(panelId); if (panel) panel.hidden = !on; }
      });
      return;
    }

    // Segmented control (not inside a tablist)
    var seg = e.target.closest(".op-segmented > button");
    if (seg && !seg.hasAttribute("role")) {
      var attr = seg.hasAttribute("aria-pressed") ? "aria-pressed" : "aria-selected";
      seg.parentElement.querySelectorAll(":scope > button").forEach(function (b) { b.setAttribute(attr, String(b === seg)); });
      return;
    }

    // Switch
    var sw = e.target.closest('[role="switch"]');
    if (sw) { sw.setAttribute("aria-checked", String(sw.getAttribute("aria-checked") !== "true")); return; }

    // Toggle chip
    var chip = e.target.closest(".op-chip[aria-pressed]");
    if (chip) { chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true")); return; }

    if (!e.target.closest(".op-popover")) closePopovers();
  });

  /* ---- Keyboard -------------------------------------------------------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var openPop = document.querySelector(".op-popover[data-open]");
      if (openPop) { var t = triggerFor(openPop); closePopovers(); if (t) t.focus(); return; }
      if (app && app.hasAttribute("data-aside-open")) { closeMobileAside(); return; }
      if (app && app.getAttribute("data-agent") === "open") { setAgent(false); var b = document.querySelector('.op-globals [data-action="toggle-agent"]'); if (b) b.focus(); }
    }
    // Arrow keys within a tablist
    var tab = e.target.closest && e.target.closest('[role="tab"]');
    if (tab && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      var tabs = Array.prototype.slice.call(tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
      var i = tabs.indexOf(tab) + (e.key === "ArrowRight" ? 1 : -1);
      var next = tabs[(i + tabs.length) % tabs.length]; next.focus(); next.click();
    }
  });

  /* ---- OTP inputs ------------------------------------------------------ */
  document.querySelectorAll(".op-otp").forEach(function (group) {
    var inputs = Array.prototype.slice.call(group.querySelectorAll("input"));
    inputs.forEach(function (input, i) {
      input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "").slice(-1);
        if (input.value && inputs[i + 1]) inputs[i + 1].focus();
        if (inputs.every(function (x) { return x.value; })) group.dispatchEvent(new CustomEvent("op:complete", { bubbles: true, detail: inputs.map(function (x) { return x.value; }).join("") }));
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Backspace" && !input.value && inputs[i - 1]) inputs[i - 1].focus(); });
      input.addEventListener("paste", function (e) {
        var digits = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, inputs.length);
        if (!digits) return;
        e.preventDefault();
        inputs.forEach(function (x, j) { x.value = digits[j] || ""; });
        (inputs[digits.length] || inputs[inputs.length - 1]).focus();
      });
    });
  });

  /* ---- Type-to-confirm (destructive dialogs) ---------------------------- */
  document.querySelectorAll("[data-confirm-text]").forEach(function (input) {
    var dialog = input.closest("dialog") || document;
    var btn = dialog.querySelector("[data-confirm]");
    function check() { if (btn) btn.disabled = input.value !== input.getAttribute("data-confirm-text"); }
    input.addEventListener("input", check); check();
  });

  /* ---- Dev review params ------------------------------------------------ */
  var q = new URLSearchParams(location.search);
  var fam = q.get("family");
  var famLink = document.getElementById("op-family");
  if (fam && famLink && /^(communicate|create|operate|commerce)$/.test(fam)) famLink.href = famLink.href.replace(/(communicate|create|operate|commerce)\.css/, fam + ".css");
  if (q.get("mode")) setMode(q.get("mode"), false);
  if (app && q.get("aside")) app.setAttribute("data-aside", q.get("aside"));
  if (q.get("agent") === "open") setAgent(true);
  if (q.get("open")) { var tr = document.querySelector('[data-popover="' + q.get("open") + '"]'); if (tr) togglePopover(tr); }
})();
