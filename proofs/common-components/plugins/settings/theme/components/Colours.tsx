import { useState } from "react";
import Icon from "../../../app/components/Icon.js";
import { contrast, foreground, type Theme, type Family } from "../client.js";
import { families } from "../families.js";
const keys = ["accent", "sidebar", "canvas"] as const;
const descriptions = {
  accent: "App tile, buttons, links, progress",
  sidebar: "The aside background",
  canvas: "App background; surrounding surfaces derive from it",
};
export default function Colours({
  value,
  onChange,
  baseline,
  saved,
  family,
  disabled,
  onSave,
  logo,
}: {
  value: Theme;
  onChange: (value: Theme) => void;
  baseline: Theme;
  saved: Theme;
  family: Family;
  disabled: boolean;
  onSave: () => void;
  logo: string;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const dark = families[family].dark;
  const colours = Object.fromEntries(
    keys.map((key) => [
      key,
      mode === "dark"
        ? dark[key === "sidebar" ? "nav" : key]
        : /^#[\da-f]{6}$/i.test(value[key])
          ? value[key]
          : baseline[key],
    ]),
  ) as Pick<Theme, (typeof keys)[number]>;
  const changes = keys.filter(
    (key) => value[key].toUpperCase() !== baseline[key].toUpperCase(),
  ).length;
  const readOnly = disabled || mode === "dark";
  const reset = (source: Theme) =>
    onChange({
      ...value,
      accent: source.accent,
      sidebar: source.sidebar,
      canvas: source.canvas,
    });
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
            {(["light", "dark"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={mode === option}
                onClick={() => setMode(option)}
              >
                <Icon name={option === "light" ? "sun" : "moon"} />
                {option === "light" ? "Light" : "Dark"}
              </button>
            ))}
          </div>
          <span className="op-pill op-pill--tint">
            <Icon name="paintbrush" />
            {mode === "dark"
              ? "Family palette"
              : changes
                ? `Customised · ${changes} ${changes === 1 ? "change" : "changes"}`
                : "Family defaults"}
          </span>
        </div>
        {mode === "dark" && (
          <p className="op-small op-muted">
            Dark mode uses the family palette. Custom colours apply in light
            mode.
          </p>
        )}
        <div className="app-colour-list">
          {keys.map((key) => {
            const label = key[0].toUpperCase() + key.slice(1);
            const hex = colours[key];
            const ratio = contrast(foreground(hex), hex).toFixed(1);
            const defaultHex = mode === "dark" ? hex : baseline[key];
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
                  value={mode === "dark" ? hex : value[key]}
                  onChange={(e) =>
                    onChange({ ...value, [key]: e.target.value })
                  }
                  disabled={readOnly}
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
                  disabled={readOnly}
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
              "#0E7490",
              "#1D4ED8",
              "#4338CA",
              "#0F766E",
              "#9D174D",
              "#374151",
            ].map((hex) => (
              <button
                key={hex}
                className="app-quick-pick"
                type="button"
                aria-label={`Use ${hex}`}
                aria-pressed={value.accent.toUpperCase() === hex.toUpperCase()}
                disabled={readOnly}
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
            color: foreground(colours.canvas),
          }}
        >
          <div
            className="app-theme-preview__aside"
            style={{
              background: colours.sidebar,
              color: foreground(colours.sidebar),
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
                color: foreground(colours.accent),
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
          disabled={readOnly}
          onClick={() => reset(baseline)}
        >
          <Icon name="rotate-ccw" />
          Reset to default
        </button>
        <span className="op-spacer" />
        <button
          className="op-btn op-btn--secondary"
          disabled={readOnly}
          onClick={() => reset(saved)}
        >
          Cancel
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={readOnly}
          onClick={onSave}
        >
          Save theme
        </button>
      </div>
    </section>
  );
}
