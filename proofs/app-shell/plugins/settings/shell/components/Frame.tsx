//modules
import { useEffect, useRef, useState } from 'react';

//client
import type { ThemeState, Family } from '../../theme/client.js';
import type { ShellData } from '../types.js';
import { getDefaultTheme, themeTokens } from '../../theme/client.js';
import Agent from '../../../agent/components/Agent.js';
import Notifications from '../../../app/components/Notifications.js';
import About from '../../about/components/About.js';
import ThemeSettings from '../../theme/components/Theme.js';
import Icon from './Icon.js';

/**
 * Compose navigation, account controls, feature pages and accessible shell
 * panels.
 */
export default function Frame({
  data,
  path
}: {
  data: ShellData,
  path: string
}) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  //keep browser-only preferences out of the server render until hydration
  // completes
  const [ isReady, setIsReady ] = useState(false);
  const [ mode, setMode ] = useState('light');
  const [ isMobile, setIsMobile ] = useState(false);
  const [ isRailCollapsed, setIsRailCollapsed ] = useState(false);
  const [ overlay, setOverlay ] = useState<'nav' | 'agent' | null>(null);
  const [ isAgentOpen, setIsAgentOpen ] = useState(false);
  const [ isAgentExpanded, setIsAgentExpanded ] = useState(false);
  const [ isNoticePanelOpen, setIsNoticePanelOpen ] = useState(false);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ theme, setTheme ] = useState<ThemeState>(
    data.theme || {
      theme: getDefaultTheme(data.app.family as Family),
      revision: 0
    }
  );
  //remember focus and content roots so a modal overlay can isolate and
  // restore them
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  //--------------------------------------------------------------------//
  // Derived presentation

  const isSettingsPage = path.startsWith('/settings/');
  const isAdmin = !!data.user?.roles.includes('ADMIN');
  //Family dark colours remain authoritative. Custom light palette is
  // derived as one unit.
  const themeCSS =
    theme.revision > 0
      ? '[data-mode=light] .proof-shell{' +
        Object.entries(themeTokens(theme.theme, data.app.family as Family))
          .map(([ tokenName, tokenValue ]) => `${tokenName}:${tokenValue}`)
          .join(';') +
        '}'
      : '';
  const initials = (data.user?.name || 'Guest')
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
  const navigation = (
    <>
      <div className="op-brand">
        <a href="/" className="op-brand__logo" aria-label={theme.theme.brand}>
          <img src={theme.theme.logo} alt="" />
        </a>
        <span className="op-brand__name">{theme.theme.brand}</span>
        {isMobile && (
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
          [ 'layout-grid', 'Menu item 1' ],
          [ 'layers', 'Menu item 2' ],
          [ 'list-filter', 'Menu item 3' ]
        ].map(([ icon, label ]) => (
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
        {!isMobile && (
          <button
            className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
            aria-label={
              isAgentExpanded ? 'Restore agent panel' : 'Expand agent panel'
            }
            title={isAgentExpanded ? 'Restore panel' : 'Expand panel'}
            aria-expanded={isAgentExpanded}
            onClick={() => setIsAgentExpanded(!isAgentExpanded)}
          >
            <Icon name={isAgentExpanded ? 'minimize-2' : 'maximize-2'} />
          </button>
        )}
        <button
          className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
          aria-label="Close agent"
          onClick={() => {
            setIsAgentOpen(false);
            setIsAgentExpanded(false);
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

  //--------------------------------------------------------------------//
  // Interaction handlers

  //preserve initiating focus before toggling a mobile overlay or desktop
  // rail
  function handleOpen(which: 'nav' | 'agent', event?: React.MouseEvent) {
    setIsMenuOpen(false);
    setIsNoticePanelOpen(false);
    if (!isMobile || !overlay)
      restoreFocus.current =
        (event?.currentTarget as HTMLElement) ||
        (document.activeElement as HTMLElement);
    if (isMobile) setOverlay(overlay === which ? null : which);
    else if (which === 'agent') {
      setIsAgentOpen(!isAgentOpen);
      if (isAgentOpen) setIsAgentExpanded(false);
    } else {
      setIsRailCollapsed(!isRailCollapsed);
      try {
        localStorage.setItem(
          `op-aside:${data.app.id}`,
          isRailCollapsed ? 'expanded' : 'rail'
        );
      } catch {}
    }
  }
  //switch the shell’s visible color mode and persist the preference
  function handleToggleMode() {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem('op-mode', next);
    } catch {}
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //attach browser preferences, responsive state and overlay focus
  // lifecycles

  //read storage and media state after mount; denied storage keeps the
  // default layout
  useEffect(() => {
    setIsReady(true);
    const mobileQuery = matchMedia('(max-width:767px)');
    //reconcile persisted mode or navigation state after a browser change
    // event
    const changed = () => {
      setIsMobile(mobileQuery.matches);
      setOverlay(null);
    };
    changed();
    mobileQuery.addEventListener('change', changed);
    setMode(document.documentElement.dataset.mode || 'light');
    try {
      setIsRailCollapsed(
        localStorage.getItem(`op-aside:${data.app.id}`) === 'rail'
      );
    } catch {}
    //render the shell after all layout state, handlers and accessibility
    // effects are prepared
    return () => mobileQuery.removeEventListener('change', changed);
  }, []);
  //trap focus only for the mobile overlay and restore scroll, inert state
  // and focus on cleanup
  useEffect(() => {
    if (!isMobile || !overlay) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    contentRef.current?.setAttribute('inert', '');
    headerRef.current?.setAttribute('inert', '');
    const element = dialogRef.current;
    element
      ?.querySelector<HTMLElement>('button,a,input,textarea,select')
      ?.focus();
    //apply the shell keyboard controls while respecting focused input
    // elements
    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOverlay(null);
        return;
      }
      if (event.key === 'Tab' && element) {
        const list = [
          ...element.querySelectorAll<HTMLElement>(
            'button:not([disabled]),a[href],input:not([disabled]),textarea,select'
          )
        ];
        const first = list[0];
        const last = list.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.body.style.overflow = old;
      contentRef.current?.removeAttribute('inert');
      headerRef.current?.removeAttribute('inert');
      document.removeEventListener('keydown', handleKeyboard);
      restoreFocus.current?.focus();
    };
  }, [ isMobile, overlay ]);
  useEffect(() => {
    //dismiss transient shell menus when Escape is pressed
    function handleClose(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsNoticePanelOpen(false);
      }
    }
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, []);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div
      className={`proof-shell ${isRailCollapsed ? 'rail' : ''} ${isSettingsPage ? 'settings' : ''} ${!isMobile && isAgentOpen && isAgentExpanded ? 'agent-expanded' : ''}`}
      data-family={data.app.family}
      data-ready={isReady}
      aria-busy={!isReady}
    >
      <style>{themeCSS}</style>
      {!isSettingsPage && !isMobile && (
        <aside className="app-aside op-aside">{navigation}</aside>
      )}
      <div className="main-frame">
        {/* START: Shell header */}
        <header ref={headerRef} className="shell-header op-header">
          {isSettingsPage ? (
            <a className="op-icon-btn" href="/" aria-label="Back to App">
              <Icon name="arrow-left" />
            </a>
          ) : (
            <button
              className="op-icon-btn"
              aria-label={
                isMobile
                  ? 'Open navigation'
                  : isRailCollapsed
                    ? 'Expand navigation'
                    : 'Collapse navigation'
              }
              onClick={(event) => handleOpen('nav', event)}
            >
              <Icon name={isMobile ? 'menu' : 'panel-left'} />
            </button>
          )}
          <h1 className="op-header__title">
            {isSettingsPage ? 'App settings' : 'App'}
          </h1>
          <span className="op-header__divider" aria-hidden="true" />
          <div className="header-actions op-globals">
            {data.capabilities.notifications && (
              <button
                className="op-icon-btn op-icon-btn--circle"
                aria-label="Notifications"
                aria-haspopup="dialog"
                aria-expanded={isNoticePanelOpen}
                onClick={() => {
                  setIsNoticePanelOpen(!isNoticePanelOpen);
                  setIsMenuOpen(false);
                }}
              >
                <Icon name="bell" />
              </button>
            )}
            {data.capabilities.agent && (
              <button
                className="op-icon-btn op-icon-btn--circle"
                aria-label="Open agent"
                aria-expanded={isMobile ? overlay === 'agent' : isAgentOpen}
                onClick={(event) => handleOpen('agent', event)}
              >
                <Icon name="bot" />
              </button>
            )}
            <button
              className="op-icon-btn op-icon-btn--circle op-theme-btn"
              aria-label={mode === 'light' ? 'Light mode' : 'Dark mode'}
              title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              onClick={handleToggleMode}
            >
              <Icon name="sun" className="op-icon--sun" />
              <Icon name="moon" className="op-icon--moon" />
            </button>
            <button
              className="op-icon-btn op-icon-btn--circle"
              aria-label="User menu"
              aria-haspopup="menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsNoticePanelOpen(false);
              }}
            >
              <Icon name="user" />
            </button>
          </div>
        </header>
        {/* END: Shell header */}
        {isMenuOpen && (
          <nav
            className="user-menu op-menu app-popover"
            aria-label="User menu"
            role="menu"
          >
            <div className="op-menu__identity">
              <span className="op-avatar op-avatar--40">{initials}</span>
              <div className="op-grow">
                <strong>{data.user?.name || 'Guest'}</strong>
                <p className="op-small op-muted">
                  {isAdmin ? 'Administrator' : 'Member'}
                </p>
              </div>
            </div>
            <hr />
            <a className="op-menu__item" role="menuitem" href="/auth/account">
              <Icon name="circle-user" />
              <span>Account Settings</span>
            </a>
            {isAdmin && (
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
        {isNoticePanelOpen && (
          <Notifications
            appName={theme.theme.brand}
            csrf={data.csrf}
            onClose={() => setIsNoticePanelOpen(false)}
          />
        )}
        <div className="app-body">
          <main
            ref={contentRef}
            aria-label={isSettingsPage ? 'App settings' : 'App content'}
            hidden={!isMobile && isAgentOpen && isAgentExpanded}
            className={
              isSettingsPage
                ? 'settings-frame op-settings'
                : 'app-main op-content'
            }
          >
            {isSettingsPage ? (
              <>
                {/* START: Settings navigation */}
                <nav
                  className="settings-nav op-settings__nav"
                  aria-label="App Settings"
                >
                  <a
                    className="op-settings__item"
                    aria-current={path.endsWith('about') ? 'true' : undefined}
                    href="/settings/about"
                  >
                    <span className="op-icon-slot">
                      <Icon name="info" />
                    </span>
                    About
                  </a>
                  <a
                    className="op-settings__item"
                    aria-current={path.endsWith('theme') ? 'true' : undefined}
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
                {/* END: Settings navigation */}
                <div className="op-settings__main">
                  <div className="settings-content op-settings__column">
                    {path.endsWith('theme') ? (
                      data.capabilities.theme ? (
                        <ThemeSettings
                          initial={theme}
                          csrf={data.csrf}
                          family={data.app.family}
                          admin={isAdmin}
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
                        admin={isAdmin}
                      />
                    ) : (
                      <p>About is unavailable.</p>
                    )}
                  </div>
                </div>
              </>
            ) : null}
          </main>
          {!isMobile && isAgentOpen && data.capabilities.agent && (
            <aside className="agent-panel op-agent">{agent}</aside>
          )}
        </div>
      </div>
      {isMobile && overlay && (
        <div className="overlay-layer">
          <button
            className="scrim"
            tabIndex={-1}
            aria-label="Close panel"
            onClick={() => setOverlay(null)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={overlay === 'nav' ? 'Navigation' : 'Your agent'}
            className={'mobile-panel ' + overlay}
          >
            {overlay === 'nav' ? (
              <div className="op-aside app-mobile-nav">{navigation}</div>
            ) : (
              agent
            )}
          </div>
        </div>
      )}
    </div>
  );
};
