//client
import type { Field, FieldType, FormDefinition } from '../types.js';
import { catalogue, typeLabels } from '../client.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//selected field and available conditions for the question settings editor
type QuestionSettingsProps = {
  field: Field | undefined,
  draft: FormDefinition,
  publishedNames: Set<string>,
  fieldUpdate: (patch: Partial<Field>) => void,
  update: (patch: Partial<FormDefinition>) => void,
  setSelected: (id: string) => void,
  duplicate: (id: string) => void
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the selected question’s type-specific configuration controls.
 */
export default function QuestionSettings({
  field,
  draft,
  publishedNames,
  fieldUpdate,
  update,
  setSelected,
  duplicate
}: QuestionSettingsProps) {
  return (
    <aside className="op-pane op-pane--end" aria-label="Question settings">
      {field ? (
        <>
          <div>
            <div className="op-overline">Selected question</div>
            <h2 className="op-title">Question settings</h2>
          </div>
          <label className="op-field">
            <span className="op-field__label">Question</span>
            <input
              className="op-input"
              value={field.label}
              onChange={(event) => fieldUpdate({ label: event.target.value })}
            />
          </label>
          <label className="op-field">
            <span className="op-field__label">Field name</span>
            <input
              className="op-input"
              value={field.name}
              disabled={publishedNames.has(field.id)}
              onChange={(event) => fieldUpdate({ name: event.target.value })}
            />
            <span className="op-field__hint">
              Stable name stored with responses.
            </span>
          </label>
          <label className="op-field">
            <span className="op-field__label">Answer type</span>
            <select
              className="op-select"
              value={field.type}
              onChange={(event) =>
                fieldUpdate({
                  type: event.target.value as FieldType,
                  options: field.options.length
                    ? field.options
                    : [ 'Option 1', 'Option 2' ]
                })
              }
            >
              {catalogue.map((fieldKind) => (
                <option key={fieldKind.type} value={fieldKind.type}>
                  {typeLabels[fieldKind.type]}
                </option>
              ))}
            </select>
          </label>
          <label className="op-field">
            <span className="op-field__label">Help text</span>
            <input
              className="op-input"
              value={field.help}
              onChange={(event) => fieldUpdate({ help: event.target.value })}
              placeholder="Optional guidance under the question"
            />
          </label>
          <label className="op-field">
            <span className="op-field__label">Placeholder</span>
            <input
              className="op-input"
              value={field.placeholder}
              onChange={(event) =>
                fieldUpdate({ placeholder: event.target.value })
              }
            />
          </label>
          {[ 'choice', 'checkboxes', 'dropdown' ].includes(field.type) && (
            <label className="op-field">
              <span className="op-field__label">Options · one per line</span>
              <textarea
                className="op-textarea"
                rows={5}
                value={field.options.join('\n')}
                onChange={(event) =>
                  fieldUpdate({ options: event.target.value.split('\n') })
                }
              />
            </label>
          )}
          <div className="op-item-row">
            <div className="op-item-row__text">
              <span className="op-strong">Required</span>
              <span className="op-small op-muted">
                Respondents must answer before submitting.
              </span>
            </div>
            <button
              className="op-switch"
              role="switch"
              aria-checked={field.required}
              aria-label="Required"
              onClick={() => fieldUpdate({ required: !field.required })}
            />
          </div>
          <hr />
          <div className="op-row">
            <button
              className="op-btn op-btn--secondary op-grow"
              onClick={() => duplicate(field.id)}
            >
              <Icon name="copy" />
              Duplicate
            </button>
            <button
              className="op-btn op-btn--danger op-grow"
              disabled={draft.fields.length === 1}
              onClick={() => {
                update({
                  fields: draft.fields.filter(
                    (candidateField) => candidateField.id !== field.id
                  )
                });
                setSelected(
                  draft.fields.find(
                    (candidateField) => candidateField.id !== field.id
                  )?.id || ''
                );
              }}
            >
              <Icon name="trash-2" />
              Delete
            </button>
          </div>
        </>
      ) : (
        <p>Select a question.</p>
      )}
    </aside>
  );
};
