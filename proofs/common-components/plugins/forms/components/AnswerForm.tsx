//modules
import { useState } from 'react';

//client
import type { FormDefinition, FillData } from '../types.js';
import { validateAnswers } from '../client.js';

//--------------------------------------------------------------------//
// Types

//published fields, answer values and submit callbacks for respondent input
type AnswerFormProps = {
  definition: FormDefinition,
  fill?: FillData,
  csrf: string,
  token?: string,
  preview?: boolean,
  onSubmit?: (
    answers: Record<string, string | string[]>,
    requestId: string
  ) => Promise<void>
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render and submit answers for a frozen form publication.
 */
export default function AnswerForm({
  definition,
  fill,
  csrf,
  token = '',
  preview: isPreview = false,
  onSubmit
}: AnswerFormProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ answers, setAnswers ] = useState<Record<string, string | string[]>>({});
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const [ message, setMessage ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ isDone, setIsDone ] = useState(false);
  const [ requestId ] = useState(() =>
    typeof crypto !== 'undefined' ? crypto.randomUUID() : ''
  );

  //--------------------------------------------------------------------//
  // Interaction handlers

  //update the local answer value while keeping display validation in sync
  const change = (name: string, value: string | string[]) =>
    setAnswers((old) => ({ ...old, [name]: value }));
  //send the current form answers and stable submission identifier to the
  // response endpoint
  async function handleSubmit(caughtError: React.FormEvent) {
    caughtError.preventDefault();
    setMessage('');
    const validation = validateAnswers(definition, answers);
    setErrors(validation.errors);
    if (Object.keys(validation.errors).length) return;
    if (isPreview) {
      setMessage('Your answers are valid. Preview responses are not saved.');
      return;
    }
    setIsBusy(true);
    try {
      if (onSubmit) await onSubmit(answers, requestId);
      else {
        const response = await fetch('/api/forms/respond', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: fill?.id,
            version: fill?.definition.version,
            token,
            csrf,
            answers,
            requestId
          })
        });
        const data = await response.json();
        if (!response.ok || data.error) {
          if (data.results?.fields) setErrors(data.results.fields);
          throw Error(
            typeof data.error === 'string'
              ? data.error
              : data.error?.message || 'Submission failed.'
          );
        }
      }
      setIsDone(true);
      setMessage('Thank you. Your response has been received.');
    } catch (caughtError) {
      setMessage((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <form className="forms-answer" onSubmit={handleSubmit} noValidate>
      <header className="op-form-head">
        <h1 className="op-heading">{definition.title}</h1>
        <p className="op-muted">{definition.description}</p>
        {isPreview && <span className="op-status">Preview</span>}
      </header>
      {!isDone &&
        definition.fields.map((candidateField, index) => {
          const id = `answer-${candidateField.id}`;
          const error = errors[candidateField.name];
          const common = {
            id,
            'aria-invalid': Boolean(error),
            'aria-describedby': `${id}-help ${id}-error`
          };
          return (
            <div key={candidateField.id} className="forms-answer-field">
              <label htmlFor={id} className="op-field__label">
                {index + 1}. {candidateField.label}
                {candidateField.required && (
                  <span className="op-danger-text"> *</span>
                )}
              </label>
              {candidateField.help && (
                <p id={`${id}-help`} className="op-small op-muted">
                  {candidateField.help}
                </p>
              )}
              {candidateField.type === 'long' ? (
                <textarea
                  {...common}
                  className="op-textarea"
                  rows={4}
                  value={String(answers[candidateField.name] || '')}
                  onChange={(event) =>
                    change(candidateField.name, event.target.value)
                  }
                  placeholder={candidateField.placeholder}
                />
              ) : candidateField.type === 'dropdown' ? (
                <select
                  {...common}
                  className="op-select"
                  value={String(answers[candidateField.name] || '')}
                  onChange={(event) =>
                    change(candidateField.name, event.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  {candidateField.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : [ 'choice', 'checkboxes' ].includes(candidateField.type) ? (
                <div
                  role="group"
                  aria-label={candidateField.label}
                  aria-describedby={`${id}-error`}
                >
                  {candidateField.options.map((option) => (
                    <label key={option} className="op-check">
                      <input
                        type={
                          candidateField.type === 'choice'
                            ? 'radio'
                            : 'checkbox'
                        }
                        name={candidateField.name}
                        value={option}
                        checked={
                          candidateField.type === 'choice'
                            ? answers[candidateField.name] === option
                            : Array.isArray(answers[candidateField.name]) &&
                              (
                                answers[candidateField.name] as string[]
                              ).includes(option)
                        }
                        onChange={(event) =>
                          change(
                            candidateField.name,
                            candidateField.type === 'choice'
                              ? option
                              : event.target.checked
                                ? [
                                    ...(Array.isArray(
                                      answers[candidateField.name]
                                    )
                                      ? (answers[
                                          candidateField.name
                                        ] as string[])
                                      : []),
                                    option
                                  ]
                                : (
                                    answers[candidateField.name] as string[]
                                  ).filter(
                                    (selectedOption) =>
                                      selectedOption !== option
                                  )
                          )
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  {...common}
                  className="op-input"
                  type={
                    candidateField.type === 'date'
                      ? 'date'
                      : candidateField.type === 'number'
                        ? 'number'
                        : 'text'
                  }
                  value={String(answers[candidateField.name] || '')}
                  onChange={(event) =>
                    change(candidateField.name, event.target.value)
                  }
                  placeholder={candidateField.placeholder}
                />
              )}
              <span className="op-small op-danger-text" id={`${id}-error`}>
                {error}
              </span>
            </div>
          );
        })}
      {errors._form && <p role="alert">{errors._form}</p>}
      {message && (
        <p role="status" className="forms-notice">
          {message}
        </p>
      )}
      {!isDone && (
        <button className="op-btn op-btn--primary" disabled={isBusy}>
          {isBusy
            ? 'Submitting…'
            : isPreview
              ? 'Check answers'
              : 'Submit response'}
        </button>
      )}
    </form>
  );
};
