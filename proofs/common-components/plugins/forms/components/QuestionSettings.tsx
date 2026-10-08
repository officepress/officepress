import Icon from "../../app/components/Icon.js";
import { catalogue, typeLabels } from "../client.js";
import type { Field, FieldType, FormDefinition } from "../types.js";
export default function QuestionSettings({
  field,
  draft,
  publishedNames,
  fieldUpdate,
  update,
  setSelected,
  duplicate,
}: {
  field: Field | undefined;
  draft: FormDefinition;
  publishedNames: Set<string>;
  fieldUpdate: (patch: Partial<Field>) => void;
  update: (patch: Partial<FormDefinition>) => void;
  setSelected: (id: string) => void;
  duplicate: (id: string) => void;
}) {
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
              onChange={(e) => fieldUpdate({ label: e.target.value })}
            />
          </label>
          <label className="op-field">
            <span className="op-field__label">Field name</span>
            <input
              className="op-input"
              value={field.name}
              disabled={publishedNames.has(field.id)}
              onChange={(e) => fieldUpdate({ name: e.target.value })}
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
              onChange={(e) =>
                fieldUpdate({
                  type: e.target.value as FieldType,
                  options: field.options.length
                    ? field.options
                    : ["Option 1", "Option 2"],
                })
              }
            >
              {catalogue.map((c) => (
                <option key={c.type} value={c.type}>
                  {typeLabels[c.type]}
                </option>
              ))}
            </select>
          </label>
          <label className="op-field">
            <span className="op-field__label">Help text</span>
            <input
              className="op-input"
              value={field.help}
              onChange={(e) => fieldUpdate({ help: e.target.value })}
              placeholder="Optional guidance under the question"
            />
          </label>
          <label className="op-field">
            <span className="op-field__label">Placeholder</span>
            <input
              className="op-input"
              value={field.placeholder}
              onChange={(e) => fieldUpdate({ placeholder: e.target.value })}
            />
          </label>
          {["choice", "checkboxes", "dropdown"].includes(field.type) && (
            <label className="op-field">
              <span className="op-field__label">Options · one per line</span>
              <textarea
                className="op-textarea"
                rows={5}
                value={field.options.join("\n")}
                onChange={(e) =>
                  fieldUpdate({ options: e.target.value.split("\n") })
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
                  fields: draft.fields.filter((f) => f.id !== field.id),
                });
                setSelected(
                  draft.fields.find((f) => f.id !== field.id)?.id || "",
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
}
