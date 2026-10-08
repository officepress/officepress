import { actionText } from "./actionText.js";
import { useState } from "react";
import ConditionEditor from "./ConditionEditor.js";
import ActionEditor from "./ActionEditor.js";
import type { TemplateVersion } from "../../templates/types.js";
import { eventLabels, type CardEvent } from "../../workflows/types.js";
import Icon from "../../app/components/Icon.js";
import type { Workflow, Card } from "../../workflows/types.js";
import {
  summarize,
  type Automation,
  type AutomationDraft,
  type DryRun,
} from "../types.js";
export default function Builder({
  automation,
  workflows,
  cards,
  save,
  test,
  cancel,
  busy,
  result,
  templates,
}: {
  automation: Automation;
  workflows: Workflow[];
  cards: Card[];
  save: (draft: AutomationDraft) => void;
  test: (draft: AutomationDraft, cardId: string) => void;
  cancel: () => void;
  busy: boolean;
  result: DryRun | null;
  templates: TemplateVersion[];
}) {
  const [draft, setDraft] = useState(automation),
    [cardId, setCardId] = useState(
      cards.find(
        (c) =>
          c.workflowId === automation.workflowId &&
          c.stageId === automation.stageId,
      )?.id ||
        cards[0]?.id ||
        "",
    );
  const workflow = workflows.find((w) => w.id === draft.workflowId);
  const stage = workflow!.stages.find((item) => item.id === draft.stageId)!;
  const dirty = JSON.stringify(draft) !== JSON.stringify(automation);
  function actionOrder(from: number, to: number) {
    if (to < 0 || to >= draft.actions.length) return;
    const actions = [...draft.actions];
    actions.splice(to, 0, actions.splice(from, 1)[0]);
    setDraft({ ...draft, actions });
  }
  return (
    <div className="op-page auto-builder">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <div className="op-crumbs">
            {workflow?.name} ›{" "}
            {workflow?.stages.find((s) => s.id === automation.stageId)?.name} ›
            Automations › {automation.revision ? "Edit rule" : "New rule"}
          </div>
          <h2 className="op-heading">{draft.name}</h2>
        </div>
        <button className="op-btn op-btn--secondary" onClick={cancel}>
          Back to automations
        </button>
        <button
          className="op-btn op-btn--primary"
          disabled={busy || (!dirty && automation.revision > 0)}
          onClick={() => save(draft)}
        >
          <Icon name="save" />
          Save automation
        </button>
      </div>
      <section className="op-section">
        <div className="op-section__body">
          <div className="op-fields auto-name">
            <label className="op-field">
              <span className="op-field__label">Rule name</span>
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
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    status: event.target.value as AutomationDraft["status"],
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
                      trigger: event.target.value as CardEvent,
                    })
                  }
                >
                  {Object.entries(eventLabels)
                    .filter(
                      ([key]) =>
                        key !== "form-submitted" || stage.formIds.length > 0,
                    )
                    .map(([key, label]) => (
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
                  {(["all", "any"] as const).map((mode) => (
                    <button
                      key={mode}
                      className={draft.match === mode ? "is-active" : ""}
                      aria-pressed={draft.match === mode}
                      onClick={() => setDraft({ ...draft, match: mode })}
                    >
                      {mode === "all" ? "All match" : "Any match"}
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
                      conditions: draft.conditions.map((item, i) =>
                        i === index ? value : item,
                      ),
                    })
                  }
                  remove={() =>
                    setDraft({
                      ...draft,
                      conditions: draft.conditions.filter(
                        (_, i) => i !== index,
                      ),
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
                      { field: "title", operator: "contains", value: "" },
                    ],
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
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        timing: {
                          ...draft.timing,
                          kind: e.target
                            .value as AutomationDraft["timing"]["kind"],
                        },
                      })
                    }
                  >
                    <option value="now">Immediately</option>
                    <option value="delay">After a delay</option>
                    <option value="date">On a date and time</option>
                    <option value="sla">Before the time target is due</option>
                  </select>
                </label>
                {draft.timing.kind === "date" ? (
                  <label className="op-field">
                    <span className="op-field__label">Date and time</span>
                    <input
                      className="op-input"
                      type="datetime-local"
                      value={draft.timing.date}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          timing: { ...draft.timing, date: e.target.value },
                        })
                      }
                    />
                  </label>
                ) : (
                  draft.timing.kind !== "now" && (
                    <label className="op-field">
                      <span className="op-field__label">
                        {draft.timing.kind === "sla"
                          ? "Minutes before target"
                          : "Delay in minutes"}
                      </span>
                      <input
                        className="op-input"
                        type="number"
                        min="0"
                        value={draft.timing.minutes}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            timing: {
                              ...draft.timing,
                              minutes: Number(e.target.value),
                            },
                          })
                        }
                      />
                    </label>
                  )
                )}
              </div>
              {draft.timing.kind === "sla" && (
                <div className="op-notice op-notice--info">
                  <Icon name="info" />
                  <span className="op-small">
                    The selected stage has a{" "}
                    {workflow?.stages.find((s) => s.id === draft.stageId)
                      ?.hours || 0}{" "}
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
              {draft.actions.map((a, i) => (
                <div
                  key={i}
                  className="op-ordered auto-action"
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("action", String(i))
                  }
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const from = Number(e.dataTransfer.getData("action"));
                    if (Number.isInteger(from)) actionOrder(from, i);
                  }}
                >
                  <Icon name="grip-vertical" />
                  <span className="op-ordered__no">{i + 1}</span>
                  <ActionEditor
                    action={a}
                    index={i}
                    stage={stage}
                    templates={templates}
                    change={(action) =>
                      setDraft({
                        ...draft,
                        actions: draft.actions.map((item, index) =>
                          i === index ? action : item,
                        ),
                      })
                    }
                  />
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Move action ${i + 1} up`}
                    disabled={i === 0}
                    onClick={() => actionOrder(i, i - 1)}
                  >
                    <Icon name="chevron-up" />
                  </button>
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Move action ${i + 1} down`}
                    disabled={i === draft.actions.length - 1}
                    onClick={() => actionOrder(i, i + 1)}
                  >
                    <Icon name="chevron-down" />
                  </button>
                  <button
                    className="op-icon-btn op-icon-btn--small"
                    aria-label={`Delete action ${i + 1}`}
                    onClick={() =>
                      setDraft({
                        ...draft,
                        actions: draft.actions.filter((_, j) => i !== j),
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
                      { type: "comment", value: "Add a comment" },
                    ],
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
              {dirty ? "Unsaved" : "Saved"}
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
              onChange={(e) => setCardId(e.target.value)}
            >
              {cards.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>
          {cards.find((c) => c.id === cardId) && (
            <div className="op-card">
              <span className="op-strong">
                {cards.find((c) => c.id === cardId)?.title}
              </span>
              <span className="op-caption op-muted">
                {
                  workflow?.stages.find(
                    (stage) =>
                      stage.id === cards.find((c) => c.id === cardId)?.stageId,
                  )?.name
                }
              </span>
            </div>
          )}
          <span className="op-overline">Planned actions</span>
          <ol className="auto-plan">
            {draft.actions.map((a, i) => (
              <li key={i}>
                {actionText(
                  a,
                  stage,
                  templates.find(
                    (template) => template.templateId === a.templateId,
                  )?.draft.name,
                )}
              </li>
            ))}
          </ol>
          <button
            className="op-btn op-btn--primary op-btn--block"
            disabled={busy || !cardId}
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
              className={`op-notice ${result.matches ? "op-notice--info" : ""}`}
            >
              {result.matches
                ? `Matches. Actions would run ${new Date(result.dueAt).toLocaleString()}.`
                : "This card does not match the trigger and conditions."}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
