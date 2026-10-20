//modules
import type { FormEvent, ReactNode } from 'react';
import { useState } from 'react';

//client
import type { PreferenceState } from '../types.js';
import { updatePreference } from '../client.js';
import { useLocalization } from './Provider.js';
import Icon from '../../../app/components/Icon.js';

//one independently saved field with its draft-specific preview
type CardProps = {
  section: keyof PreferenceState,
  title: string,
  description: string,
  help: string,
  badge: string,
  defaultLabel: string,
  options: { value: string, label: string }[],
  csrf: string,
  preview(value: string): ReactNode
};

/**
 * Keep each card's draft, request, errors and saved revision independent.
 */
export default function Card({
  section,
  title,
  description,
  help,
  badge,
  defaultLabel,
  options,
  csrf,
  preview
}: CardProps) {
  const { preferences, setPreferences, isReady } = useLocalization();
  const saved = preferences[section];
  const [ value, setValue ] = useState(saved.value || '');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ error, setError ] = useState('');
  const id = section === 'language' ? 'language' : 'time-zone';
  const isDirty = value !== (saved.value || '');
  const selectedLabel =
    options.find((option) => option.value === value)?.label || value;
  const formatHelp = section === 'language'
    ? 'Dates, times and numbers use this language’s formats.'
    : 'Times are displayed in your selected time zone.';
  const effectiveHelp = value
    ? `${title} is set to ${selectedLabel}. ${formatHelp}`
    : help;

  //only commit this card; a simultaneous save cannot erase its sibling draft
  async function handleSave(event: FormEvent) {
    event.preventDefault();
    setIsBusy(true);
    setError('');
    setMessage('');
    try {
      const state = await updatePreference(
        section,
        value || null,
        saved.revision,
        csrf
      );
      setPreferences((current) => ({
        ...current,
        [section]: state[section]
      }));
      setValue(state[section].value || '');
      setMessage(`${title} saved.`);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : 'Save failed.'
      );
    } finally {
      setIsBusy(false);
    }
  }

  //cancel only this draft; keep both the sibling draft and saved values intact
  function handleCancel() {
    setValue(saved.value || '');
    setError('');
    setMessage('');
  }

  return (
    <section
      className="op-section preference-card"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <form
        onSubmit={handleSave}
        aria-label={`${title} preferences`}
        aria-busy={isBusy}
      >
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title" id={`${id}-title`}>
              {title}
            </h2>
            <p className="op-section__desc">{description}</p>
          </div>
        </div>
        <div className="op-section__body">
          <div className="op-field">
            <label className="op-field__label" htmlFor={`${id}-select`}>
              {title}
            </label>
            <div className="preference-select">
              <Icon name={section === 'language' ? 'languages' : 'clock'} />
              <select
                className="op-select"
                id={`${id}-select`}
                value={value}
                aria-describedby={`${id}-help`}
                disabled={!isReady || isBusy}
                onChange={(event) => {
                  setValue(event.target.value);
                  setMessage('');
                }}
              >
                <option value="">{defaultLabel}</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {!value && (
                <span className="op-badge preference-default">{badge}</span>
              )}
            </div>
            <p className="op-field__hint" id={`${id}-help`}>
              {effectiveHelp}
            </p>
          </div>
          <div className="preference-preview" aria-label={`${title} preview`}>
            <div className="preference-preview-title">
              <Icon name="eye" />
              <strong>Preview</strong>
            </div>
            {preview(value)}
          </div>
          {error && (
            <p role="alert">
              {error}{' '}
              <button
                type="button"
                className="op-btn op-btn--secondary"
                onClick={() => location.reload()}
              >
                Reload preferences
              </button>
            </p>
          )}
          {message && <p role="status">{message}</p>}
        </div>
        <div className="op-section__foot app-settings-footer">
          <span className="op-small op-muted">
            Applies to your account in every OfficePress app.
          </span>
          <button
            className="op-btn op-btn--secondary"
            type="button"
            disabled={!isDirty || isBusy}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="op-btn op-btn--primary"
            type="submit"
            disabled={!isReady || !isDirty || isBusy}
          >
            {isBusy ? 'Saving…' : 'Save'}
          </button>
        </div>
      </form>
    </section>
  );
};
