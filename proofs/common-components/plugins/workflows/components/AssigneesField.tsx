//client
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//the ordered assignee list and change callback used by stage/card editors
type AssigneesFieldProps = {
  value: string[],
  onChange: (value: string[]) => void,
  disabled?: boolean,
  retain?: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the controlled assignee selector for a workflow or card.
 */
export default function AssigneesField({
  value,
  onChange,
  disabled: isDisabled = false,
  retain: shouldRetain = false
}: AssigneesFieldProps) {
  return (
    <fieldset className="op-field wf-assignees-field" disabled={isDisabled}>
      <legend className="op-field__label">Assignees</legend>
      {value.map((name, index) => (
        <div className="op-row" key={index}>
          <input
            className="op-input op-grow"
            aria-label={`Assignee ${index + 1}`}
            placeholder="Name"
            maxLength={100}
            value={name}
            onChange={(event) =>
              onChange(
                value.map((item, itemIndex) =>
                  itemIndex === index ? event.target.value : item
                )
              )
            }
          />
          <button
            type="button"
            className="op-icon-btn op-icon-btn--small"
            aria-label={`Remove assignee ${index + 1}`}
            onClick={() =>
              onChange(value.filter((_, itemIndex) => itemIndex !== index))
            }
          >
            <Icon name="x" />
          </button>
        </div>
      ))}
      {value.length === 0 && !shouldRetain && (
        <span className="op-caption op-muted">No assignees.</span>
      )}
      <button
        type="button"
        className="op-btn op-btn--secondary op-btn--compact wf-add-assignee"
        disabled={isDisabled || value.length >= 50}
        onClick={() => onChange([ ...value, '' ])}
      >
        <Icon name="plus" /> Add assignee
      </button>
    </fieldset>
  );
};
