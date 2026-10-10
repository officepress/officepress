//modules
import { useState } from 'react';

//client
import type { ThemeState, Family } from '../client.js';
import { requestJson } from '../../../app/client.js';
import { getDefaultTheme, getForeground } from '../client.js';
import { families } from '../families.js';
import Colours from './Colours.js';

//--------------------------------------------------------------------//
// Types

//saved theme revision, caller roles and CSRF used by the theme editor
type ThemeSettingsProps = {
  initial: ThemeState,
  csrf: string,
  family: string,
  onSave: (themeState: ThemeState) => void,
  admin: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Present administrator brand and palette edits with revision-checked saves,
 * local mode preferences and unsaved-change feedback.
 */
export default function ThemeSettings({
  initial,
  csrf,
  family,
  onSave,
  admin: isAdmin
}: ThemeSettingsProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ value, setValue ] = useState(initial.theme);
  const [ revision, setRevision ] = useState(initial.revision);
  const [ notice, setNotice ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);

  //--------------------------------------------------------------------//
  // Derived presentation

  const baseline = getDefaultTheme(family as Family);
  const dark = families[family as Family].dark;
  const previewLogo =
    /^\/[\w./-]+\.(svg|png|webp)$/.test(value.logo) &&
    !value.logo.includes('..') &&
    !value.logo.startsWith('//')
      ? value.logo
      : initial.theme.logo;
  const sidebar = /^#[\da-f]{6}$/i.test(value.sidebar)
    ? value.sidebar
    : baseline.sidebar;

  //--------------------------------------------------------------------//
  // Interaction handlers

  //submit only the selected card’s changes using the last saved revision
  async function handleSave(section: 'brand' | 'colours') {
    setIsBusy(true);
    setNotice('');
    //each card saves only its responsibility; the other card's draft stays
    // local
    const theme =
      section === 'brand'
        ? { ...initial.theme, brand: value.brand, logo: value.logo }
        : {
            ...initial.theme,
            accent: value.accent,
            sidebar: value.sidebar,
            canvas: value.canvas
          };
    try {
      const result = await requestJson<ThemeState>(
        '/api/theme',
        { theme, revision },
        csrf
      );
      setValue((current) =>
        section === 'brand'
          ? { ...current, brand: result.theme.brand, logo: result.theme.logo }
          : {
              ...current,
              accent: result.theme.accent,
              sidebar: result.theme.sidebar,
              canvas: result.theme.canvas
            }
      );
      setRevision(result.revision);
      onSave(result);
      setNotice(section === 'brand' ? 'Brand saved.' : 'Theme saved.');
    } catch (caughtError) {
      setNotice((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <>
      <section className="op-section" aria-labelledby="brand-title">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title" id="brand-title">
              Brand
            </h2>
            <p className="op-section__desc">
              Replaces the app’s logo and name at the top of the aside and on
              the sign-in page.
            </p>
          </div>
        </div>
        <div className="op-section__body app-brand-layout">
          <div className="op-fields">
            <div className="op-field">
              <label className="op-field__label" htmlFor="theme-logo">
                Logo
              </label>
              <div className="app-logo-editor">
                <span className="app-logo-preview">
                  <img src={previewLogo} alt="" />
                </span>
                <div className="op-field op-grow">
                  <input
                    id="theme-logo"
                    aria-label="Logo path"
                    className="op-input"
                    value={value.logo}
                    onChange={(event) =>
                      setValue({ ...value, logo: event.target.value })
                    }
                    disabled={!isAdmin || isBusy}
                  />
                  <span className="op-field__hint">
                    Local SVG, PNG or WebP. Shown on a rounded tile.
                  </span>
                </div>
              </div>
            </div>
            <label className="op-field">
              <span className="op-field__label">Brand name</span>
              <input
                className="op-input"
                value={value.brand}
                maxLength={60}
                onChange={(event) =>
                  setValue({ ...value, brand: event.target.value })
                }
                disabled={!isAdmin || isBusy}
              />
              <span className="op-field__hint">
                Up to 60 characters. Default: {baseline.brand}
              </span>
            </label>
          </div>
          <div className="op-field app-brand-previews">
            <span className="op-field__label">Preview</span>
            {([ 'Light', 'Dark' ] as const).map((mode) => (
              <div
                key={mode}
                className="app-brand-preview"
                style={{
                  background: mode === 'Light' ? sidebar : dark.nav,
                  color:
                    mode === 'Light' ? getForeground(sidebar) : dark['nav-text']
                }}
              >
                <img src={previewLogo} alt="" />
                <strong>{value.brand}</strong>
                <span className="op-caption">{mode}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="op-section__foot app-settings-footer">
          <span className="op-small">
            Default: {baseline.brand} logo and name
          </span>
          <button
            className="op-btn op-btn--secondary"
            disabled={!isAdmin || isBusy}
            onClick={() =>
              setValue({ ...value, brand: baseline.brand, logo: baseline.logo })
            }
          >
            Use defaults
          </button>
          <button
            className="op-btn op-btn--primary"
            disabled={!isAdmin || isBusy}
            onClick={() => handleSave('brand')}
          >
            Save brand
          </button>
        </div>
      </section>
      <Colours
        value={value}
        onChange={setValue}
        baseline={baseline}
        saved={initial.theme}
        family={family as Family}
        disabled={!isAdmin || isBusy}
        onSave={() => handleSave('colours')}
        logo={previewLogo}
      />
      {notice && (
        <p role="status" className="op-small op-muted">
          {notice}
        </p>
      )}
      {!isAdmin && (
        <p className="op-small op-muted">
          An administrator can change these settings.
        </p>
      )}
    </>
  );
};
