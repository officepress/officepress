//modules
import { useEffect, useState } from 'react';

//client
import type { FormSummary } from '../../forms/types.js';
import type { Stage, Workflow } from '../types.js';
import { requestJson } from '../../app/client.js';
import Icon from '../../app/components/Icon.js';
import AssigneesField from './AssigneesField.js';

//--------------------------------------------------------------------//
// Types

//the workflow draft and callbacks for editing stages, tasks and assignments
type DesignerProps = {
  workflow: Workflow,
  draft: Workflow,
  setDraft: (draft: Workflow) => void,
  selected: string,
  setSelected: (stageId: string) => void,
  save: (value: Workflow) => void,
  cancel: () => void,
  busy: boolean,
  automations?: (stageId: string) => void
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the editable workflow definition and its ordered stages.
 */
export default function Designer({
  workflow,
  draft,
  setDraft,
  selected,
  setSelected,
  save,
  cancel,
  busy: isBusy,
  automations
}: DesignerProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ forms, setForms ] = useState<FormSummary[]>([]);

  //--------------------------------------------------------------------//
  // Derived presentation

  const stage = draft.stages.find(
    (candidateStage) => candidateStage.id === selected
  )!;
  const isDirty = JSON.stringify(draft) !== JSON.stringify(workflow);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //merge only the selected stage edit into the local workflow draft
  function handleUpdate(value: Partial<Stage>) {
    setDraft({
      ...draft,
      stages: draft.stages.map((candidateStage) =>
        candidateStage.id === selected
          ? { ...candidateStage, ...value }
          : candidateStage
      )
    });
  }
  //reorder one item without mutating the previous editor snapshot
  function handleReorder(sourceIndex: number, targetIndex: number) {
    if (targetIndex < 0 || targetIndex >= draft.stages.length) return;
    const stages = [ ...draft.stages ];
    stages.splice(targetIndex, 0, stages.splice(sourceIndex, 1)[0]);
    setDraft({ ...draft, stages });
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  useEffect(() => {
    void requestJson<{ forms: FormSummary[] }>('/api/workflows/forms')
      .then((value) => setForms(value.forms))
      .catch(() => {});
  }, []);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div className="op-page wf-designer">
      {/* START: Page heading and actions */}
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">{draft.name}</h2>
        </div>
        <button className="op-btn op-btn--secondary" onClick={cancel}>
          {workflow.revision ? 'Back to board' : 'Back to workflows'}
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={isBusy || (!isDirty && workflow.revision > 0)}
          onClick={() => save(draft)}
        >
          <Icon name="save" />
          Save workflow
        </button>
      </div>
      {/* END: Page heading and actions */}
      <section className="op-section">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title">Workflow details</h2>
            <p className="op-section__desc">Name, purpose and status.</p>
          </div>
        </div>
        <div className="op-section__body">
          <div className="op-fields op-fields--2">
            <label className="op-field">
              <span className="op-field__label">Workflow name</span>
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
                    status: event.target.value as Workflow['status']
                  })
                }
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
          </div>
          <label className="op-field">
            <span className="op-field__label">Description</span>
            <textarea
              className="op-textarea"
              value={draft.description}
              onChange={(event) =>
                setDraft({ ...draft, description: event.target.value })
              }
            />
          </label>
        </div>
      </section>
      <div className="wf-designer-grid">
        <section className="op-section">
          <div className="op-section__head">
            <h2 className="op-section__title">Stages</h2>
            <button
              className="op-btn op-btn--secondary op-btn--compact"
              onClick={() => {
                const id = crypto.randomUUID();
                setDraft({
                  ...draft,
                  stages: [
                    ...draft.stages,
                    {
                      id,
                      name: 'New stage',
                      description: '',
                      assignees: [],
                      outcome: 'continue',
                      hours: 24,
                      tasks: [],
                      formIds: []
                    }
                  ]
                });
                setSelected(id);
              }}
            >
              <Icon name="plus" />
              Add
            </button>
          </div>
          <div className="op-section__body wf-stage-list">
            {draft.stages.map((stageItem, stageIndex) => (
              <div
                key={stageItem.id}
                className="op-stage-item"
                aria-selected={stageItem.id === selected}
                draggable
                onDragStart={(event) =>
                  event.dataTransfer.setData('stage', String(stageIndex))
                }
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const sourceIndex = Number(
                    event.dataTransfer.getData('stage')
                  );
                  if (Number.isInteger(sourceIndex))
                    handleReorder(sourceIndex, stageIndex);
                }}
              >
                <Icon name="grip-vertical" />
                <button
                  className="wf-stage-select op-grow"
                  onClick={() => setSelected(stageItem.id)}
                >
                  <strong>{stageItem.name}</strong>
                  <span className="op-caption op-muted">
                    Stage {stageIndex + 1}
                    {stageIndex === 0
                      ? ' · source'
                      : stageItem.outcome === 'complete'
                        ? ' · final'
                        : ''}
                  </span>
                </button>
                <button
                  className="op-icon-btn op-icon-btn--small"
                  aria-label={`Move ${stageItem.name} up`}
                  disabled={stageIndex === 0}
                  onClick={() => handleReorder(stageIndex, stageIndex - 1)}
                >
                  <Icon name="chevron-up" />
                </button>
                <button
                  className="op-icon-btn op-icon-btn--small"
                  aria-label={`Move ${stageItem.name} down`}
                  disabled={stageIndex === draft.stages.length - 1}
                  onClick={() => handleReorder(stageIndex, stageIndex + 1)}
                >
                  <Icon name="chevron-down" />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="op-section">
          <div className="op-section__head wf-stage-head">
            <h2 className="op-section__title">{stage.name}</h2>
            {automations && (
              <button
                className="op-btn op-btn--secondary"
                onClick={() => automations(stage.id)}
              >
                <Icon name="zap" /> Automations
              </button>
            )}
          </div>
          <div className="op-section__body">
            <div className="op-fields">
              <label className="op-field">
                <span className="op-field__label">Stage name</span>
                <input
                  className="op-input"
                  value={stage.name}
                  onChange={(event) =>
                    handleUpdate({ name: event.target.value })
                  }
                />
              </label>
              <label className="op-field">
                <span className="op-field__label">Description</span>
                <input
                  className="op-input"
                  value={stage.description}
                  onChange={(event) =>
                    handleUpdate({ description: event.target.value })
                  }
                />
              </label>
            </div>
            <hr />
            <div className="op-fields op-fields--2">
              <label className="op-field">
                <span className="op-field__label">Time target (hours)</span>
                <input
                  className="op-input"
                  type="number"
                  min="0"
                  max="8760"
                  value={stage.hours}
                  onChange={(event) =>
                    handleUpdate({ hours: Number(event.target.value) })
                  }
                />
              </label>
              <label className="op-field">
                <span className="op-field__label">Outcome</span>
                <select
                  className="op-select"
                  value={stage.outcome}
                  onChange={(event) =>
                    handleUpdate({
                      outcome: event.target.value as Stage['outcome']
                    })
                  }
                >
                  <option value="continue">Continue workflow</option>
                  <option value="complete">Complete workflow</option>
                </select>
              </label>
            </div>
            <hr />
            <AssigneesField
              value={stage.assignees}
              onChange={(assignees) => handleUpdate({ assignees })}
              retain
            />
            <hr />
            <div className="op-row">
              <h3 className="op-strong op-grow">Tasks</h3>
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                onClick={() =>
                  handleUpdate({
                    tasks: [
                      ...stage.tasks,
                      { id: crypto.randomUUID(), title: 'New task' }
                    ]
                  })
                }
              >
                <Icon name="plus" />
                Add task
              </button>
            </div>
            {stage.tasks.map((task, taskIndex) => (
              <div className="op-row" key={task.id}>
                <Icon name="grip-vertical" />
                <input
                  aria-label={`Task ${taskIndex + 1}`}
                  className="op-input"
                  value={task.title}
                  onChange={(event) =>
                    handleUpdate({
                      tasks: stage.tasks.map((candidateTask, candidateIndex) =>
                        taskIndex === candidateIndex
                          ? { ...candidateTask, title: event.target.value }
                          : candidateTask
                      )
                    })
                  }
                />
                <button
                  className="op-icon-btn"
                  aria-label={`Remove task ${taskIndex + 1}`}
                  onClick={() =>
                    handleUpdate({
                      tasks: stage.tasks.filter(
                        (_, candidateIndex) => taskIndex !== candidateIndex
                      )
                    })
                  }
                >
                  <Icon name="trash-2" />
                </button>
              </div>
            ))}
            {forms.length > 0 && (
              <>
                <hr />
                <fieldset className="op-field wf-stage-forms">
                  <legend className="op-strong">Forms</legend>
                  <p className="op-caption op-muted">
                    Choose published forms from Form Builder.
                  </p>
                  {forms.map((form) => (
                    <label className="op-row" key={form.id}>
                      <input
                        type="checkbox"
                        checked={stage.formIds.includes(form.id)}
                        onChange={(event) =>
                          handleUpdate({
                            formIds: event.target.checked
                              ? [ ...stage.formIds, form.id ]
                              : stage.formIds.filter((id) => id !== form.id)
                          })
                        }
                      />
                      <span>{form.title}</span>
                    </label>
                  ))}
                </fieldset>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
