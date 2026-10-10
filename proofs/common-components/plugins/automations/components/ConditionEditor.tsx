//client
import type { Condition, ConditionField } from '../types.js';
import { getConditionOperators } from '../conditions.js';
import { conditionLabels } from '../types.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//one typed matching condition and the selected workflow/card field options
type ConditionEditorProps = {
  condition: Condition,
  index: number,
  hasForms: boolean,
  change: (value: Condition) => void,
  remove: () => void
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render field-specific automation predicates and accepted operator choices.
 */
export default function ConditionEditor({
  condition,
  index,
  hasForms,
  change,
  remove
}: ConditionEditorProps) {
  const isCountField =
    Object.hasOwn(conditionLabels, condition.field) &&
    condition.field !== 'title' &&
    condition.field !== 'assigned-to';
  return (
    <div className="auto-condition">
      <label className="op-field">
        <span className="op-field__label">Field</span>
        <select
          className="op-select"
          aria-label={`Condition ${index + 1} field`}
          value={condition.field}
          onChange={(event) => {
            const field = event.target.value as ConditionField;
            change({
              field,
              operator: getConditionOperators(field)[0],
              value: field === 'assigned-to' ? [ '' ] : field === 'title' ? '' : 0
            });
          }}
        >
          {!Object.hasOwn(conditionLabels, condition.field) && (
            <option value={condition.field}>Choose a supported field</option>
          )}
          {Object.entries(conditionLabels)
            .filter(([ key ]) => hasForms || !key.startsWith('forms-'))
            .map(([ key, label ]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
        </select>
      </label>
      <label className="op-field">
        <span className="op-field__label">Operator</span>
        <select
          className="op-select"
          aria-label={`Condition ${index + 1} operator`}
          value={condition.operator}
          onChange={(event) =>
            change({
              ...condition,
              operator: event.target.value as Condition['operator']
            })
          }
        >
          {!getConditionOperators(condition.field).includes(
            condition.operator
          ) && (
            <option value={condition.operator}>
              Choose a supported operator
            </option>
          )}
          {getConditionOperators(condition.field).map((operator) => (
            <option key={operator} value={operator}>
              {operator.replace('-', ' ')}
            </option>
          ))}
        </select>
      </label>
      {condition.field === 'assigned-to' ? (
        <fieldset className="op-field auto-name-list">
          <legend className="op-field__label">Assignees</legend>
          {(condition.value as string[]).map((name, row) => (
            <div className="op-row" key={row}>
              <input
                className="op-input"
                aria-label={`Condition ${index + 1} assignee ${row + 1}`}
                value={name}
                onChange={(event) =>
                  change({
                    ...condition,
                    value: (condition.value as string[]).map(
                      (value, itemIndex) =>
                        itemIndex === row ? event.target.value : value
                    )
                  })
                }
              />
              <button
                className="op-icon-btn"
                aria-label={`Remove condition assignee ${row + 1}`}
                onClick={() =>
                  change({
                    ...condition,
                    value: (condition.value as string[]).filter(
                      (_, itemIndex) => itemIndex !== row
                    )
                  })
                }
              >
                <Icon name="x" />
              </button>
            </div>
          ))}
          <button
            className="op-btn op-btn--secondary op-btn--compact"
            onClick={() =>
              change({
                ...condition,
                value: [ ...(condition.value as string[]), '' ]
              })
            }
          >
            Add assignee
          </button>
        </fieldset>
      ) : (
        <label className="op-field">
          <span className="op-field__label">
            {isCountField ? 'Count' : 'Text'}
          </span>
          <input
            className="op-input"
            aria-label={`Condition ${index + 1} value`}
            type={isCountField ? 'number' : 'text'}
            min={isCountField ? 0 : undefined}
            step={isCountField ? 1 : undefined}
            value={condition.value as string | number}
            onChange={(event) =>
              change({
                ...condition,
                value: isCountField
                  ? Number(event.target.value)
                  : event.target.value
              })
            }
          />
        </label>
      )}
      <button
        className="op-icon-btn"
        aria-label={`Remove condition ${index + 1}`}
        onClick={remove}
      >
        <Icon name="x" />
      </button>
    </div>
  );
};
