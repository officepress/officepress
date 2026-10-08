import { useEffect, useState } from "react";
import { api } from "../../app/client.js";
import type { FormSummary } from "../../forms/types.js";
import AssigneesField from "./AssigneesField.js";
import Icon from "../../app/components/Icon.js";
import type { Stage, Workflow } from "../types.js";
export default function Designer({
  workflow,
  draft,
  setDraft,
  selected,
  setSelected,
  save,
  cancel,
  busy,
  automations,
}: {
  workflow: Workflow;
  draft: Workflow;
  setDraft: (draft: Workflow) => void;
  selected: string;
  setSelected: (stageId: string) => void;
  save: (value: Workflow) => void;
  cancel: () => void;
  busy: boolean;
  automations?: (stageId: string) => void;
}) {
  const [forms, setForms] = useState<FormSummary[]>([]);
  useEffect(() => {
    void api<{ forms: FormSummary[] }>("/api/workflows/forms")
      .then((value) => setForms(value.forms))
      .catch(() => {});
  }, []);
  const stage = draft.stages.find((s) => s.id === selected)!;
  const dirty = JSON.stringify(draft) !== JSON.stringify(workflow);
  function update(value: Partial<Stage>) {
    setDraft({
      ...draft,
      stages: draft.stages.map((s) =>
        s.id === selected ? { ...s, ...value } : s,
      ),
    });
  }
  function reorder(from: number, to: number) {
    if (to < 0 || to >= draft.stages.length) return;
    const stages = [...draft.stages];
    stages.splice(to, 0, stages.splice(from, 1)[0]);
    setDraft({ ...draft, stages });
  }
  return (
    <div className="op-page wf-designer">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">{draft.name}</h2>
        </div>
        <button className="op-btn op-btn--secondary" onClick={cancel}>
          {workflow.revision ? "Back to board" : "Back to workflows"}
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={busy || (!dirty && workflow.revision > 0)}
          onClick={() => save(draft)}
        >
          <Icon name="save" />
          Save workflow
        </button>
      </div>
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
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            </label>
            <label className="op-field">
              <span className="op-field__label">Status</span>
              <select
                className="op-select"
                value={draft.status}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    status: e.target.value as Workflow["status"],
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
              onChange={(e) =>
                setDraft({ ...draft, description: e.target.value })
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
                      name: "New stage",
                      description: "",
                      assignees: [],
                      outcome: "continue",
                      hours: 24,
                      tasks: [],
                      formIds: [],
                    },
                  ],
                });
                setSelected(id);
              }}
            >
              <Icon name="plus" />
              Add
            </button>
          </div>
          <div className="op-section__body wf-stage-list">
            {draft.stages.map((s, i) => (
              <div
                key={s.id}
                className="op-stage-item"
                aria-selected={s.id === selected}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("stage", String(i))}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const from = Number(e.dataTransfer.getData("stage"));
                  if (Number.isInteger(from)) reorder(from, i);
                }}
              >
                <Icon name="grip-vertical" />
                <button
                  className="wf-stage-select op-grow"
                  onClick={() => setSelected(s.id)}
                >
                  <strong>{s.name}</strong>
                  <span className="op-caption op-muted">
                    Stage {i + 1}
                    {i === 0
                      ? " · source"
                      : s.outcome === "complete"
                        ? " · final"
                        : ""}
                  </span>
                </button>
                <button
                  className="op-icon-btn op-icon-btn--small"
                  aria-label={`Move ${s.name} up`}
                  disabled={i === 0}
                  onClick={() => reorder(i, i - 1)}
                >
                  <Icon name="chevron-up" />
                </button>
                <button
                  className="op-icon-btn op-icon-btn--small"
                  aria-label={`Move ${s.name} down`}
                  disabled={i === draft.stages.length - 1}
                  onClick={() => reorder(i, i + 1)}
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
                  onChange={(e) => update({ name: e.target.value })}
                />
              </label>
              <label className="op-field">
                <span className="op-field__label">Description</span>
                <input
                  className="op-input"
                  value={stage.description}
                  onChange={(e) => update({ description: e.target.value })}
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
                  onChange={(e) => update({ hours: Number(e.target.value) })}
                />
              </label>
              <label className="op-field">
                <span className="op-field__label">Outcome</span>
                <select
                  className="op-select"
                  value={stage.outcome}
                  onChange={(e) =>
                    update({ outcome: e.target.value as Stage["outcome"] })
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
              onChange={(assignees) => update({ assignees })}
              retain
            />
            <hr />
            <div className="op-row">
              <h3 className="op-strong op-grow">Tasks</h3>
              <button
                className="op-btn op-btn--secondary op-btn--compact"
                onClick={() =>
                  update({
                    tasks: [
                      ...stage.tasks,
                      { id: crypto.randomUUID(), title: "New task" },
                    ],
                  })
                }
              >
                <Icon name="plus" />
                Add task
              </button>
            </div>
            {stage.tasks.map((task, i) => (
              <div className="op-row" key={task.id}>
                <Icon name="grip-vertical" />
                <input
                  aria-label={`Task ${i + 1}`}
                  className="op-input"
                  value={task.title}
                  onChange={(e) =>
                    update({
                      tasks: stage.tasks.map((t, j) =>
                        i === j ? { ...t, title: e.target.value } : t,
                      ),
                    })
                  }
                />
                <button
                  className="op-icon-btn"
                  aria-label={`Remove task ${i + 1}`}
                  onClick={() =>
                    update({ tasks: stage.tasks.filter((_, j) => i !== j) })
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
                          update({
                            formIds: event.target.checked
                              ? [...stage.formIds, form.id]
                              : stage.formIds.filter((id) => id !== form.id),
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
}
