import { useEffect, useRef, useState } from "react";
import type { ShellData } from "../types.js";
import {
  defaults,
  themeTokens,
  type ThemeState,
  type Family,
} from "../../theme/client.js";
import ThemeSettings from "../../theme/components/Theme.js";
import About from "../../about/components/About.js";
import Agent from "../../../agent/components/Agent.js";
import Notifications from "../../../app/components/Notifications.js";
import Icon from "./Icon.js";
export default function Frame({
  data,
  path,
}: {
  data: ShellData;
  path: string;
}) {
  const [ready, setReady] = useState(false);
  const settings = path.startsWith("/settings/"),
    [mode, setMode] = useState("light"),
    [mobile, setMobile] = useState(false),
    [rail, setRail] = useState(false),
    [overlay, setOverlay] = useState<"nav" | "agent" | null>(null),
    [agentOpen, setAgentOpen] = useState(false),
    [agentExpanded, setAgentExpanded] = useState(false),
    [notices, setNotices] = useState(false),
    [menu, setMenu] = useState(false),
    [theme, setTheme] = useState<ThemeState>(
      data.theme || { theme: defaults(data.app.family as Family), revision: 0 },
    );
  const dialog = useRef<HTMLDivElement>(null),
    restore = useRef<HTMLElement | null>(null),
    content = useRef<HTMLElement>(null),
    header = useRef<HTMLElement>(null);
  const admin = !!data.user?.roles.includes("ADMIN");
  useEffect(() => {
    setReady(true);
    const m = matchMedia("(max-width:767px)");
    const changed = () => {
      setMobile(m.matches);
      setOverlay(null);
    };
    changed();
    m.addEventListener("change", changed);
    setMode(document.documentElement.dataset.mode || "light");
    try {
      setRail(localStorage.getItem(`op-aside:${data.app.id}`) === "rail");
    } catch {}
    return () => m.removeEventListener("change", changed);
  }, []);
  useEffect(() => {
    if (!mobile || !overlay) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    content.current?.setAttribute("inert", "");
    header.current?.setAttribute("inert", "");
    const el = dialog.current;
    el?.querySelector<HTMLElement>("button,a,input,textarea,select")?.focus();
    function keyboard(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOverlay(null);
        return;
      }
      if (e.key === "Tab" && el) {
        const list = [
          ...el.querySelectorAll<HTMLElement>(
            "button:not([disabled]),a[href],input:not([disabled]),textarea,select",
          ),
        ];
        const first = list[0],
          last = list.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = old;
      content.current?.removeAttribute("inert");
      header.current?.removeAttribute("inert");
      document.removeEventListener("keydown", keyboard);
      restore.current?.focus();
    };
  }, [mobile, overlay]);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu(false);
        setNotices(false);
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  function open(which: "nav" | "agent", event?: React.MouseEvent) {
    setMenu(false);
    setNotices(false);
    if (!mobile || !overlay)
      restore.current =
        (event?.currentTarget as HTMLElement) ||
        (document.activeElement as HTMLElement);
    if (mobile) setOverlay(overlay === which ? null : which);
    else if (which === "agent") {
      setAgentOpen(!agentOpen);
      if (agentOpen) setAgentExpanded(false);
    } else {
      setRail(!rail);
      try {
        localStorage.setItem(
          `op-aside:${data.app.id}`,
          rail ? "expanded" : "rail",
        );
      } catch {}
    }
  }
  function toggleMode() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem("op-mode", next);
    } catch {}
  }
  // Family dark colours remain authoritative. Custom light palette is derived as one unit.
  const themeCSS =
    theme.revision > 0
      ? "[data-mode=light] .proof-shell{" +
        Object.entries(themeTokens(theme.theme, data.app.family as Family))
          .map(([k, v]) => `${k}:${v}`)
          .join(";") +
        "}"
      : "";
  const initials = (data.user?.name || "Guest")
    .split(" ")
    .map((v) => v[0])
    .slice(0, 2)
    .join("");
  const nav = (
    <>
      <div className="op-brand">
        <a href="/" className="op-brand__logo" aria-label={theme.theme.brand}>
          <img src={theme.theme.logo} alt="" />
        </a>
        <span className="op-brand__name">{theme.theme.brand}</span>
        {mobile && (
          <button
            className="op-icon-btn op-icon-btn--compact app-nav-close"
            aria-label="Close navigation"
            onClick={() => setOverlay(null)}
          >
            <Icon name="x" />
          </button>
        )}
      </div>
      <nav className="op-nav" aria-label="App navigation">
        <h2 className="op-nav__heading">Menu</h2>
        {[
          ["layout-grid", "Menu item 1"],
          ["layers", "Menu item 2"],
          ["list-filter", "Menu item 3"],
        ].map(([icon, label]) => (
          <div
            className="op-nav__item app-nav-placeholder"
            key={label}
            aria-disabled="true"
            title={label}
          >
            <Icon name={icon} />
            <span className="op-nav__label">{label}</span>
          </div>
        ))}
      </nav>
    </>
  );
  const agent = (
    <>
      <div className="op-agent__head">
        <span className="op-agent__mark">
          <Icon name="bot" />
        </span>
        <div className="op-grow">
          <h2 className="app-agent-title">{theme.theme.brand} Agent</h2>
          <p className="op-caption op-muted">
            App information and available features
          </p>
        </div>
        {!mobile && (
          <button
            className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
            aria-label={
              agentExpanded ? "Restore agent panel" : "Expand agent panel"
            }
            title={agentExpanded ? "Restore panel" : "Expand panel"}
            aria-expanded={agentExpanded}
            onClick={() => setAgentExpanded(!agentExpanded)}
          >
            <Icon name={agentExpanded ? "minimize-2" : "maximize-2"} />
          </button>
        )}
        <button
          className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
          aria-label="Close agent"
          onClick={() => {
            setAgentOpen(false);
            setAgentExpanded(false);
            setOverlay(null);
          }}
        >
          <Icon name="x" />
        </button>
      </div>
      <Agent
        storageKey={`op-agent:app-context:${data.app.id}:${data.user?.id}`}
        csrf={data.csrf}
        route={path}
      />
    </>
  );
  return (
    <div
      className={`proof-shell ${rail ? "rail" : ""} ${settings ? "settings" : ""} ${!mobile && agentOpen && agentExpanded ? "agent-expanded" : ""}`}
      data-family={data.app.family}
      data-ready={ready}
      aria-busy={!ready}
    >
      <style>{themeCSS}</style>
      {!settings && !mobile && (
        <aside className="app-aside op-aside">{nav}</aside>
      )}
      <div className="main-frame">
        <header ref={header} className="shell-header op-header">
          {settings ? (
            <a className="op-icon-btn" href="/" aria-label="Back to App">
              <Icon name="arrow-left" />
            </a>
          ) : (
            <button
              className="op-icon-btn"
              aria-label={
                mobile
                  ? "Open navigation"
                  : rail
                    ? "Expand navigation"
                    : "Collapse navigation"
              }
              onClick={(e) => open("nav", e)}
            >
              <Icon name={mobile ? "menu" : "panel-left"} />
            </button>
          )}
          <h1 className="op-header__title">
            {settings ? "App settings" : "App"}
          </h1>
          <span className="op-header__divider" aria-hidden="true" />
          <div className="header-actions op-globals">
            {data.capabilities.notifications && (
              <button
                className="op-icon-btn op-icon-btn--circle"
                aria-label="Notifications"
                aria-haspopup="dialog"
                aria-expanded={notices}
                onClick={() => {
                  setNotices(!notices);
                  setMenu(false);
                }}
              >
                <Icon name="bell" />
              </button>
            )}
            {data.capabilities.agent && (
              <button
                className="op-icon-btn op-icon-btn--circle"
                aria-label="Open agent"
                aria-expanded={mobile ? overlay === "agent" : agentOpen}
                onClick={(e) => open("agent", e)}
              >
                <Icon name="bot" />
              </button>
            )}
            <button
              className="op-icon-btn op-icon-btn--circle op-theme-btn"
              aria-label={mode === "light" ? "Light mode" : "Dark mode"}
              title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              onClick={toggleMode}
            >
              <Icon name="sun" className="op-icon--sun" />
              <Icon name="moon" className="op-icon--moon" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--circle"
              aria-label="User menu"
              aria-haspopup="menu"
              aria-expanded={menu}
              onClick={() => {
                setMenu(!menu);
                setNotices(false);
              }}
            >
              <Icon name="user" />
            </button>
          </div>
        </header>
        {menu && (
          <nav
            className="user-menu op-menu app-popover"
            aria-label="User menu"
            role="menu"
          >
            <div className="op-menu__identity">
              <span className="op-avatar op-avatar--40">{initials}</span>
              <div className="op-grow">
                <strong>{data.user?.name || "Guest"}</strong>
                <p className="op-small op-muted">
                  {admin ? "Administrator" : "Member"}
                </p>
              </div>
            </div>
            <hr />
            <a className="op-menu__item" role="menuitem" href="/auth/account">
              <Icon name="circle-user" />
              <span>Account Settings</span>
            </a>
            {admin && (
              <>
                <hr />
                <a
                  className="op-menu__item"
                  role="menuitem"
                  href="/settings/about"
                >
                  <Icon name="settings" />
                  <span>App Settings</span>
                </a>
              </>
            )}
            <hr />
            <form action="/auth/signout" method="post">
              <input type="hidden" name="csrf" value={data.csrf} />
              <button className="op-menu__item" role="menuitem">
                <Icon name="log-out" />
                <span>Sign out</span>
              </button>
            </form>
          </nav>
        )}
        {notices && (
          <Notifications
            appName={theme.theme.brand}
            csrf={data.csrf}
            onClose={() => setNotices(false)}
          />
        )}
        <div className="app-body">
          <main
            ref={content}
            aria-label={settings ? "App settings" : "App content"}
            hidden={!mobile && agentOpen && agentExpanded}
            className={
              settings ? "settings-frame op-settings" : "app-main op-content"
            }
          >
            {settings ? (
              <>
                <nav
                  className="settings-nav op-settings__nav"
                  aria-label="App Settings"
                >
                  <a
                    className="op-settings__item"
                    aria-current={path.endsWith("about") ? "true" : undefined}
                    href="/settings/about"
                  >
                    <span className="op-icon-slot">
                      <Icon name="info" />
                    </span>
                    About
                  </a>
                  <a
                    className="op-settings__item"
                    aria-current={path.endsWith("theme") ? "true" : undefined}
                    href="/settings/theme"
                  >
                    <span className="op-icon-slot">
                      <Icon name="palette" />
                    </span>
                    Theme
                  </a>
                  <hr className="app-nav-divider" />
                  <a className="op-settings__item" href="/">
                    <span className="op-icon-slot">
                      <Icon name="arrow-left" />
                    </span>
                    Back to App
                  </a>
                </nav>
                <div className="op-settings__main">
                  <div className="settings-content op-settings__column">
                    {path.endsWith("theme") ? (
                      data.capabilities.theme ? (
                        <ThemeSettings
                          initial={theme}
                          csrf={data.csrf}
                          family={data.app.family}
                          admin={admin}
                          onSave={setTheme}
                        />
                      ) : (
                        <p>Theme settings are unavailable.</p>
                      )
                    ) : data.capabilities.about ? (
                      <About
                        brand={theme.theme.brand}
                        logo={theme.theme.logo}
                        version={data.app.version}
                        build={data.app.build}
                        csrf={data.csrf}
                        admin={admin}
                      />
                    ) : (
                      <p>About is unavailable.</p>
                    )}
                  </div>
                </div>
              </>
            ) : null}
          </main>
          {!mobile && agentOpen && data.capabilities.agent && (
            <aside className="agent-panel op-agent">{agent}</aside>
          )}
        </div>
      </div>
      {mobile && overlay && (
        <div className="overlay-layer">
          <button
            className="scrim"
            tabIndex={-1}
            aria-label="Close panel"
            onClick={() => setOverlay(null)}
          />
          <div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={overlay === "nav" ? "Navigation" : "Your agent"}
            className={"mobile-panel " + overlay}
          >
            {overlay === "nav" ? (
              <div className="op-aside app-mobile-nav">{nav}</div>
            ) : (
              agent
            )}
          </div>
        </div>
      )}
    </div>
  );
}
