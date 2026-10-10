//modules
import { useState } from 'react';

//client
import type { Theme, Family } from '../client.js';
import { getContrastRatio, getForeground } from '../client.js';
import { families } from '../families.js';
import Icon from '../../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//current palette plus the enclosing editor callbacks for local colour edits
type ColoursProps = {
  value: Theme,
  onChange: (value: Theme) => void,
  baseline: Theme,
  saved: Theme,
  family: Family,
  disabled: boolean,
  onSave: () => void,
  logo: string
};

//--------------------------------------------------------------------//
// Constants

const descriptions = {
  accent: 'App tile, buttons, links, progress',
  sidebar: 'The aside background',
  canvas: 'App background; surrounding surfaces derive from it'
};

const keys = [ 'accent', 'sidebar', 'canvas' ] as const;

//--------------------------------------------------------------------//
// Entry point

/**
 * Edit the theme palette with browser previews and contrast feedback;
 * persistence remains with the enclosing theme settings component.
 */
export default function Colours({
  value,
  onChange,
  baseline,
  saved,
  family,
  disabled: isDisabled,
  onSave,
  logo
}: ColoursProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ mode, setMode ] = useState<'light' | 'dark'>('light');

  //--------------------------------------------------------------------//
  // Derived presentation

  const dark = families[family].dark;
  const colours = Object.fromEntries(
    keys.map((key) => [
      key,
      mode === 'dark'
        ? dark[key === 'sidebar' ? 'nav' : key]
        : /^#[\da-f]{6}$/i.test(value[key])
          ? value[key]
          : baseline[key]
    ])
  ) as Pick<Theme, (typeof keys)[number]>;
  const changes = keys.filter(
    (key) => value[key].toUpperCase() !== baseline[key].toUpperCase()
  ).length;
  const isReadOnly = isDisabled || mode === 'dark';

  //--------------------------------------------------------------------//
  // Interaction handlers

  //restore the selected visual family’s default color values in the editor
  const reset = (source: Theme) =>
    onChange({
      ...value,
      accent: source.accent,
      sidebar: source.sidebar,
      canvas: source.canvas
    });

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <section className="op-section" aria-labelledby="colours-title">
      <div className="op-section__head">
        <div>
          <h2 className="op-section__title" id="colours-title">
            Colours
          </h2>
          <p className="op-section__desc">
            Starts from the {family[0].toUpperCase() + family.slice(1)} family.
            Change a colour to customise your app’s palette.
          </p>
        </div>
      </div>
      <div className="op-section__body">
        <div className="app-colour-toolbar">
          <div
            className="op-segmented"
            role="group"
            aria-label="Colour preview mode"
          >
            {([ 'light', 'dark' ] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={mode === option}
                onClick={() => setMode(option)}
              >
                <Icon name={option === 'light' ? 'sun' : 'moon'} />
                {option === 'light' ? 'Light' : 'Dark'}
              </button>
            ))}
          </div>
          <span className="op-pill op-pill--tint">
            <Icon name="paintbrush" />
            {mode === 'dark'
              ? 'Family palette'
              : changes
                ? `Customised · ${changes} ${changes === 1 ? 'change' : 'changes'}`
                : 'Family defaults'}
          </span>
        </div>
        {mode === 'dark' && (
          <p className="op-small op-muted">
            Dark mode uses the family palette. Custom colours apply in light
            mode.
          </p>
        )}
        <div className="app-colour-list">
          {keys.map((key) => {
            const label = key[0].toUpperCase() + key.slice(1);
            const hex = colours[key];
            const ratio = getContrastRatio(getForeground(hex), hex).toFixed(1);
            const defaultHex = mode === 'dark' ? hex : baseline[key];
            return (
              <div className="app-colour-row" key={key}>
                <span
                  className="op-swatch"
                  style={{ background: hex }}
                  aria-hidden="true"
                />
                <div className="op-item-row__text">
                  <label className="op-strong" htmlFor={`colour-${key}`}>
                    {label}
                  </label>
                  <span className="op-small op-muted">{descriptions[key]}</span>
                  <span className="app-contrast op-caption op-muted">
                    <Icon name="circle-check" />
                    Preview text {ratio}:1
                  </span>
                </div>
                <input
                  id={`colour-${key}`}
                  className="op-input op-mono"
                  aria-label={`${key} colour`}
                  value={mode === 'dark' ? hex : value[key]}
                  onChange={(event) =>
                    onChange({ ...value, [key]: event.target.value })
                  }
                  disabled={isReadOnly}
                />
                <div className="app-colour-default op-caption op-muted">
                  <span>Default</span>
                  <span className="op-row op-mono">
                    <span
                      className="op-swatch op-swatch--sm"
                      style={{ background: defaultHex }}
                    />
                    {defaultHex}
                  </span>
                </div>
                <button
                  className="op-icon-btn op-icon-btn--compact"
                  aria-label={`Reset ${label}`}
                  disabled={isReadOnly}
                  onClick={() => onChange({ ...value, [key]: baseline[key] })}
                >
                  <Icon name="rotate-ccw" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="op-field">
          <span className="op-field__label">Quick picks for accent</span>
          <div className="app-quick-picks">
            {[
              baseline.accent,
              '#0E7490',
              '#1D4ED8',
              '#4338CA',
              '#0F766E',
              '#9D174D',
              '#374151'
            ].map((hex) => (
              <button
                key={hex}
                className="app-quick-pick"
                type="button"
                aria-label={`Use ${hex}`}
                aria-pressed={value.accent.toUpperCase() === hex.toUpperCase()}
                disabled={isReadOnly}
                onClick={() => onChange({ ...value, accent: hex })}
              >
                <span style={{ background: hex }} />
              </button>
            ))}
          </div>
        </div>
        <div
          className="app-theme-preview"
          aria-label="Theme preview"
          style={{
            background: colours.canvas,
            color: getForeground(colours.canvas)
          }}
        >
          <div
            className="app-theme-preview__aside"
            style={{
              background: colours.sidebar,
              color: getForeground(colours.sidebar)
            }}
          >
            <div>
              <img src={logo} alt="" />
              <strong>{value.brand}</strong>
            </div>
            <span className="app-preview-line" />
            <span className="app-preview-line" />
            <span className="app-preview-line" />
          </div>
          <div className="app-theme-preview__main">
            <strong>App</strong>
            <span
              className="app-preview-button"
              style={{
                background: colours.accent,
                color: getForeground(colours.accent)
              }}
            >
              Primary action
            </span>
            <div className="app-preview-surface">
              <span>Preview</span>
              <span
                className="app-preview-progress"
                style={{ background: colours.accent }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="op-section__foot app-settings-footer">
        <button
          className="op-btn op-btn--secondary"
          disabled={isReadOnly}
          onClick={() => reset(baseline)}
        >
          <Icon name="rotate-ccw" />
          Reset to default
        </button>
        <span className="op-spacer" />
        <button
          className="op-btn op-btn--secondary"
          disabled={isReadOnly}
          onClick={() => reset(saved)}
        >
          Cancel
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={isReadOnly}
          onClick={onSave}
        >
          Save theme
        </button>
      </div>
    </section>
  );
};
