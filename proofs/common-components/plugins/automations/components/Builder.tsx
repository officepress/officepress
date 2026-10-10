//modules
import { useState } from 'react';

//client
import type { TemplateVersion } from '../../templates/types.js';
import type { CardEvent } from '../../workflows/types.js';
import type { Workflow, Card } from '../../workflows/types.js';
import type { Automation, AutomationDraft, DryRun } from '../types.js';
import { eventLabels } from '../../workflows/types.js';
import { summarize } from '../conditions.js';
import { actionText } from './actionText.js';
import Icon from '../../app/components/Icon.js';
import ActionEditor from './ActionEditor.js';
import ConditionEditor from './ConditionEditor.js';

//--------------------------------------------------------------------//
// Types

//the automation draft, workflow choices and callbacks for rule editing
type BuilderProps = {
  automation: Automation,
  workflows: Workflow[],
  cards: Card[],
  save: (draft: AutomationDraft) => void,
  test: (draft: AutomationDraft, cardId: string) => void,
  cancel: () => void,
  busy: boolean,
  result: DryRun | null,
  templates: TemplateVersion[]
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the automation definition editor and its side-effect-free test
 * controls.
 */
export default function Builder({
  automation,
  workflows,
  cards,
  save,
  test,
  cancel,
  busy: isBusy,
  result,
  templates
}: BuilderProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ draft, setDraft ] = useState(automation);
  const [ cardId, setCardId ] = useState(
    cards.find(
      (candidateCard) =>
        candidateCard.workflowId === automation.workflowId &&
        candidateCard.stageId === automation.stageId
    )?.id ||
      cards[0]?.id ||
      ''
  );

  //--------------------------------------------------------------------//
  // Derived presentation

  const workflow = workflows.find(
    (candidateWorkflow) => candidateWorkflow.id === draft.workflowId
  );
  const stage = workflow!.stages.find((item) => item.id === draft.stageId)!;
  const isDirty = JSON.stringify(draft) !== JSON.stringify(automation);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //move one automation action while preserving the order of the remaining
  // actions
  function handleActionOrder(sourceIndex: number, targetIndex: number) {
    if (targetIndex < 0 || targetIndex >= draft.actions.length) return;
    const actions = [ ...draft.actions ];
    actions.splice(targetIndex, 0, actions.splice(sourceIndex, 1)[0]);
    setDraft({ ...draft, actions });
  }

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div className="op-page auto-builder">
      {/* START: Page heading and actions */}
      <div className="op-page-head">
        <div className="op-page-head__text">
          <div className="op-crumbs">
            {workflow?.name} ›{' '}
            {
              workflow?.stages.find(
                (candidateStage) => candidateStage.id === automation.stageId
              )?.name
            }{' '}
            › Automations › {automation.revision ? 'Edit rule' : 'New rule'}
          </div>
          <h2 className="op-heading">{draft.name}</h2>
        </div>
        <button className="op-btn op-btn--secondary" onClick={cancel}>
          Back to automations
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={isBusy || (!isDirty && automation.revision > 0)}
          onClick={() => save(draft)}
        >
          <Icon name="save" />
          Save automation
        </button>
      </div>
      {/* END: Page heading and actions */}
      <section className="op-section">
        <div className="op-section__body">
          <div className="op-fields auto-name">
            <label className="op-field">
              <span className="op-field__label">Rule name</span>
              <input
                className="op-input"
                value={draft.name}
                onChange={(event) =>
                  setDraft({ ...draft, name: event.target.value })
                }
              />
            </label>
            <label className="op-field">
              <span className="op-field__label">Status</span>
              <select
                className="op-select"
                value={draft.status}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    status: event.target.value as AutomationDraft['status']
                  })
                }
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
              </select>
            </label>
          </div>
        </div>
      </section>
      <div className="op-builder auto-grid">
        <div className="op-stack auto-steps">
          <section className="op-step">
            <div className="op-step__head">
              <span className="op-step__no">1</span>
              <div>
                <h2 className="op-title">Trigger</h2>
                <p className="op-small op-muted">
                  Choose the event that starts this rule.
                </p>
              </div>
            </div>
            <div className="op-step__body">
              <label className="op-field">
                <span className="op-field__label">Card event</span>
                <select
                  className="op-select"
                  value={draft.trigger}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      trigger: event.target.value as CardEvent
                    })
                  }
                >
                  {Object.entries(eventLabels)
                    .filter(
                      ([ key ]) =>
                        key !== 'form-submitted' || stage.formIds.length > 0
                    )
                    .map(([ key, label ]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </section>
          <section className="op-step">
            <div className="op-step__head">
              <span className="op-step__no">2</span>
              <div>
                <h2 className="op-title">Conditions</h2>
                <p className="op-small op-muted">
                  Only continue when the card matches these checks.
                </p>
              </div>
            </div>
            <div className="op-step__body">
              <div className="op-row">
                <span className="op-strong">Continue when</span>
                <div
                  className="op-segmented"
                  role="group"
                  aria-label="Condition matching"
                >
                  {([ 'all', 'any' ] as const).map((mode) => (
                    <button
                      key={mode}
                      className={draft.match === mode ? 'is-active' : ''}
                      aria-pressed={draft.match === mode}
                      onClick={() => setDraft({ ...draft, match: mode })}
                    >
                      {mode === 'all' ? 'All match' : 'Any match'}
                    </button>
                  ))}
                </div>
              </div>
              {draft.conditions.map((condition, index) => (
                <ConditionEditor
                  key={index}
                  condition={condition}
                  index={index}
                  hasForms={stage.formIds.length > 0}
                  change={(value) =>
                    setDraft({
                      ...draft,
                      conditions: draft.conditions.map((item, itemIndex) =>
                        itemIndex === index ? value : item
                      )
                    })
                  }
                  remove={() =>
                    setDraft({
                      ...draft,
                      conditions: draft.conditions.filter(
                        (_, itemIndex) => itemIndex !== index
                      )
                    })
                  }
                />
              ))}
              {!draft.conditions.length && (
                <p className="op-small op-muted">
                  Every matching card event in this stage can start the rule.
                </p>
              )}
              <button
                className="op-add-row"
                onClick={() =>
                  setDraft({
                    ...draft,
                    conditions: [
                      ...draft.conditions,
                      { field: 'title', operator: 'contains', value: '' }
                    ]
                  })
                }
              >
                <Icon name="plus" />
                Add condition
              </button>
            </div>
          </section>
          <section className="op-step">
            <div className="op-step__head">
              <span className="op-step__no">3</span>
              <div>
                <h2 className="op-title">Timing</h2>
                <p className="op-small op-muted">
                  Run now, after a delay, on a date, or relative to the stage’s
                  time target.
                </p>
              </div>
            </div>
            <div className="op-step__body">
              <div className="op-fields op-fields--2">
                <label className="op-field">
                  <span className="op-field__label">Run</span>
                  <select
                    className="op-select"
                    value={draft.timing.kind}
                    onChange={(event) =>
                      setDraft({
                        ...draft,
                        timing: {
                          ...draft.timing,
                          kind: event.target
                            .value as AutomationDraft['timing']['kind']
                        }
                      })
                    }
                  >
                    <option value="now">Immediately</option>
                    <option value="delay">After a delay</option>
                    <option value="date">On a date and time</option>
                    <option value="sla">Before the time target is due</option>
                  </select>
                </label>
                {draft.timing.kind === 'date' ? (
                  <label className="op-field">
                    <span className="op-field__label">Date and time</span>
                    <input
                      className="op-input"
                      type="datetime-local"
                      value={draft.timing.date}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          timing: { ...draft.timing, date: event.target.value }
                        })
                      }
                    />
                  </label>
                ) : (
                  draft.timing.kind !== 'now' && (
                    <label className="op-field">
                      <span className="op-field__label">
                        {draft.timing.kind === 'sla'
                          ? 'Minutes before target'
                          : 'Delay in minutes'}
                      </span>
                      <input
                        className="op-input"
                        type="number"
                        min="0"
                        value={draft.timing.minutes}
                        onChange={(event) =>
                          setDraft({
                            ...draft,
                            timing: {
                              ...draft.timing,
                              minutes: Number(event.target.value)
                            }
                          })
                        }
                      />
                    </label>
                  )
                )}
              </div>
              {draft.timing.kind === 'sla' && (
                <div className="op-notice op-notice--info">
                  <Icon name="info" />
                  <span className="op-small">
                    The selected stage has a{' '}
                    {workflow?.stages.find(
                      (candidateStage) => candidateStage.id === draft.stageId
                    )?.hours || 0}{' '}
                    hour elapsed time target.
                  </span>
                </div>
              )}
            </div>
          </section>
          <section className="op-step">
            <div className="op-step__head">
              <span className="op-step__no">4</span>
              <div>
                <h2 className="op-title">Actions</h2>
                <p className="op-small op-muted">
                  Actions run from top to bottom. Drag or use the arrows to
                  reorder.
                </p>
              </div>
            </div>
            <div className="op-step__body">
              {draft.actions.map((automationAction, actionIndex) => (
                <div
                  key={actionIndex}
                  className="op-ordered auto-action"
                  draggable
                  onDragStart={(event) =>
                    event.dataTransfer.setData('action', String(actionIndex))
                  }
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    const sourceIndex = Number(
                      event.dataTransfer.getData('action')
                    );
                    if (Number.isInteger(sourceIndex))
                      handleActionOrder(sourceIndex, actionIndex);
                  }}
                >
                  <Icon name="grip-vertical" />
                  <span className="op-ordered__no">{actionIndex + 1}</span>
                  <ActionEditor
                    action={automationAction}
                    index={actionIndex}
                    stage={stage}
                    templates={templates}
                    change={(action) =>
                      setDraft({
                        ...draft,
                        actions: draft.actions.map((item, index) =>
                          actionIndex === index ? action : item
                        )
                      })
                    }
                  />
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Move action ${actionIndex + 1} up`}
                    disabled={actionIndex === 0}
                    onClick={() =>
                      handleActionOrder(actionIndex, actionIndex - 1)
                    }
                  >
                    <Icon name="chevron-up" />
                  </button>
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Move action ${actionIndex + 1} down`}
                    disabled={actionIndex === draft.actions.length - 1}
                    onClick={() =>
                      handleActionOrder(actionIndex, actionIndex + 1)
                    }
                  >
                    <Icon name="chevron-down" />
                  </button>
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Delete action ${actionIndex + 1}`}
                    onClick={() =>
                      setDraft({
                        ...draft,
                        actions: draft.actions.filter(
                          (_, candidateIndex) => actionIndex !== candidateIndex
                        )
                      })
                    }
                  >
                    <Icon name="trash-2" />
                  </button>
                </div>
              ))}
              <button
                className="op-add-row"
                onClick={() =>
                  setDraft({
                    ...draft,
                    actions: [
                      ...draft.actions,
                      { type: 'comment', value: 'Add a comment' }
                    ]
                  })
                }
              >
                <Icon name="plus" />
                Add action
              </button>
            </div>
          </section>
          <section className="op-step">
            <div className="op-step__head">
              <span className="op-step__no">5</span>
              <div>
                <h2 className="op-title">Run settings</h2>
                <p className="op-small op-muted">
                  Prevent duplicate or looping runs.
                </p>
              </div>
            </div>
            <div className="op-step__body">
              <label className="op-option">
                <input
                  type="checkbox"
                  checked={draft.oncePerVisit}
                  onChange={(event) =>
                    setDraft({ ...draft, oncePerVisit: event.target.checked })
                  }
                />
                <span>
                  <strong>Run once per card per column visit</strong>
                  <span className="op-caption op-muted auto-setting-help">
                    A later visit can start a new run.
                  </span>
                </span>
              </label>
              <label className="op-option">
                <input
                  type="checkbox"
                  checked={draft.stopOnFailure}
                  onChange={(event) =>
                    setDraft({ ...draft, stopOnFailure: event.target.checked })
                  }
                />
                <span>
                  <strong>Stop later actions when one fails</strong>
                  <span className="op-caption op-muted auto-setting-help">
                    Successful actions stay completed when an administrator
                    resumes a failed run.
                  </span>
                </span>
              </label>
            </div>
          </section>
        </div>
        <aside
          className="op-preview-panel auto-preview"
          aria-label="Live preview"
        >
          <div className="op-row">
            <span className="op-overline op-grow">Live preview</span>
            <span className="op-pill op-pill--neutral">
              {isDirty ? 'Unsaved' : 'Saved'}
            </span>
          </div>
          <h2 className="op-strong">What this rule will do</h2>
          <p className="op-summary">{summarize(draft)}</p>
          <hr />
          <label className="op-field">
            <span className="op-overline">Sample card</span>
            <select
              className="op-select"
              value={cardId}
              onChange={(event) => setCardId(event.target.value)}
            >
              {cards.map((candidateCard) => (
                <option key={candidateCard.id} value={candidateCard.id}>
                  {candidateCard.title}
                </option>
              ))}
            </select>
          </label>
          {cards.find((candidateCard) => candidateCard.id === cardId) && (
            <div className="op-card">
              <span className="op-strong">
                {
                  cards.find((candidateCard) => candidateCard.id === cardId)
                    ?.title
                }
              </span>
              <span className="op-caption op-muted">
                {
                  workflow?.stages.find(
                    (stage) =>
                      stage.id ===
                      cards.find((candidateCard) => candidateCard.id === cardId)
                        ?.stageId
                  )?.name
                }
              </span>
            </div>
          )}
          <span className="op-overline">Planned actions</span>
          <ol className="auto-plan">
            {draft.actions.map((automationAction, actionIndex) => (
              <li key={actionIndex}>
                {actionText(
                  automationAction,
                  stage,
                  templates.find(
                    (template) =>
                      template.templateId === automationAction.templateId
                  )?.draft.name
                )}
              </li>
            ))}
          </ol>
          <button
            className="op-btn op-btn--primary op-btn--block"
            disabled={isBusy || !cardId}
            onClick={() => test(draft, cardId)}
          >
            <Icon name="flask-conical" />
            Test with this card
          </button>
          <p className="op-caption op-muted auto-center">
            Tests never change the real card.
          </p>
          {result && (
            <div
              role="status"
              className={`op-notice ${result.matches ? 'op-notice--info' : ''}`}
            >
              {result.matches
                ? `Matches. Actions would run ${new Date(result.dueAt).toLocaleString()}.`
                : 'This card does not match the trigger and conditions.'}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
