import { actionText } from "./actionText.js";
import { useEffect, useState } from "react";
import { useNotifier } from "frui/Notifier";
import { api } from "../../app/client.js";
import Icon from "../../app/components/Icon.js";
import type { ComponentProps, Workflow, Card } from "../../workflows/types.js";
import {
  summarize,
  type Automation,
  type AutomationRun,
  type DryRun,
} from "../types.js";
import { eventLabels } from "../../workflows/types.js";
import type { TemplateVersion } from "../../templates/types.js";
import Builder from "./Builder.js";
type Data = {
  automations: Automation[];
  runs: AutomationRun[];
  templates?: TemplateVersion[];
};
export default function Automations({
  csrf,
  user,
  workflowId,
  stageId,
  onBack,
}: ComponentProps & {
  workflowId: string;
  stageId: string;
  onBack: () => void;
}) {
  const [data, setData] = useState<Data>({ automations: [], runs: [] }),
    [flows, setFlows] = useState<{ workflows: Workflow[]; cards: Card[] }>({
      workflows: [],
      cards: [],
    }),
    [editing, setEditing] = useState<Automation | null>(null),
    [showRuns, setShowRuns] = useState(false),
    [busy, setBusy] = useState(false),
    [filter, setFilter] = useState("all"),
    [result, setResult] = useState<DryRun | null>(null);
  const { notify } = useNotifier();
  const scope = (value: Data): Data => ({
    templates: value.templates,
    automations: value.automations.filter(
      (a) => a.workflowId === workflowId && a.stageId === stageId,
    ),
    runs: value.runs.filter(
      (r) =>
        r.definition.workflowId === workflowId &&
        r.definition.stageId === stageId,
    ),
  });
  const admin = user.roles.includes("ADMIN");
  async function load() {
    const [value, workflow] = await Promise.all([
      api<Data>("/api/automations"),
      api<typeof flows>("/api/workflows"),
    ]);
    setData(scope(value));
    setFlows({
      workflows: workflow.workflows.filter((w) => w.id === workflowId),
      cards: workflow.cards.filter((c) => c.workflowId === workflowId),
    });
    return value;
  }
  useEffect(() => {
    void load().catch((e) => notify("error", e.message));
    const interval = setInterval(
      () =>
        void api<Data>("/api/automations")
          .then((value) => setData(scope(value)))
          .catch(() => {}),
      3000,
    );
    return () => clearInterval(interval);
  }, [workflowId, stageId]);
  async function command(body: object, message: string) {
    setBusy(true);
    try {
      const value = await api("/api/automations", body, csrf);
      await load();
      notify("success", message);
      return value;
    } catch (e) {
      notify("error", e instanceof Error ? e.message : "Action failed.");
    } finally {
      setBusy(false);
    }
  }
  if (editing)
    return (
      <>
        <Builder
          key={`${editing.id}:${editing.revision}`}
          automation={editing}
          templates={data.templates || []}
          workflows={flows.workflows}
          cards={flows.cards}
          busy={busy}
          result={result}
          cancel={() => {
            setEditing(null);
            setResult(null);
          }}
          save={(draft) =>
            void command(
              { action: "save", draft, revision: editing.revision },
              "Automation saved.",
            ).then((value) => {
              if (value) {
                setEditing(value);
                setResult(null);
              }
            })
          }
          test={(draft, cardId) =>
            void command(
              { action: "dry-run", draft, cardId },
              "Test complete. No card data changed.",
            ).then((value) => {
              if (value) setResult(value);
            })
          }
        />
      </>
    );
  return (
    <div className="op-page auto-root">
      <div className="op-page-head">
        <button className="op-btn op-btn--secondary" onClick={onBack}>
          <Icon name="arrow-left" /> Back to workflow
        </button>
        <span className="op-grow" />
        <button
          className="op-btn op-btn--secondary"
          onClick={() => setShowRuns(!showRuns)}
        >
          <Icon name={showRuns ? "zap" : "history"} />
          {showRuns ? "View rules" : "View runs"}
        </button>
        {admin && !showRuns && (
          <button
            className="op-btn op-btn--primary"
            disabled={!flows.workflows.length}
            onClick={() => {
              const flow = flows.workflows[0];
              setEditing({
                id: crypto.randomUUID(),
                name: "New automation",
                workflowId: flow.id,
                stageId,
                match: "all",
                conditions: [],
                timing: { kind: "now", minutes: 0, date: "" },
                actions: [
                  { type: "comment", value: "Ready for the next step." },
                ],
                revision: 0,
                status: "draft",
                trigger: "stage-enter",
                oncePerVisit: true,
                stopOnFailure: true,
              });
            }}
          >
            <Icon name="plus" />
            New automation
          </button>
        )}
      </div>
      <div className="auto-heading">
        <div className="op-crumbs">
          {flows.workflows[0]?.name} ›{" "}
          {flows.workflows[0]?.stages.find((s) => s.id === stageId)?.name}
        </div>
        <h2 className="op-heading">
          {showRuns ? "Stage automation runs" : "Stage automations"}
        </h2>
        <p className="op-muted">
          {showRuns
            ? "Follow each run and its completed actions."
            : "Run consistent actions when a card event and optional conditions match."}
        </p>
      </div>
      {showRuns ? (
        <div className="auto-runs">
          {data.runs.map((run) => (
            <section key={run.id} className="op-section">
              <div className="op-section__head">
                <div>
                  <h3 className="op-section__title">{run.definition.name}</h3>
                  <p className="op-section__desc">{run.cardTitle}</p>
                </div>
                <span className="op-pill op-pill--neutral">{run.state}</span>
              </div>
              <div className="op-section__body">
                <p className="op-small op-muted">
                  Scheduled {new Date(run.dueAt).toLocaleString()} ·{" "}
                  {run.checkpoints.length}/{run.definition.actions.length}{" "}
                  actions completed
                </p>
                <ol className="auto-plan">
                  {run.definition.actions.map((action, i) => (
                    <li key={i}>
                      {run.checkpoints.some(
                        (checkpoint) => checkpoint.index === i,
                      )
                        ? "✓ "
                        : ""}
                      {actionText(
                        action,
                        run.eventCard?.workflow.stages.find(
                          (stage) => stage.id === run.definition.stageId,
                        ),
                        run.messages?.[i]?.name,
                      )}
                    </li>
                  ))}
                </ol>
                {run.error && (
                  <p className="op-danger-text" role="alert">
                    {run.error}
                  </p>
                )}
                {admin &&
                  run.state === "failed" &&
                  !run.failures?.some((failure) => !failure.retryable) &&
                  run.sending === undefined && (
                    <button
                      className="op-btn op-btn--secondary"
                      disabled={busy}
                      onClick={() =>
                        void command(
                          { action: "resume", id: run.id },
                          "Run resumed from its last completed action.",
                        )
                      }
                    >
                      Resume remaining actions
                    </button>
                  )}
              </div>
            </section>
          ))}
          {!data.runs.length && (
            <div className="op-section op-section__body">
              <h3 className="op-strong">No runs yet</h3>
              <p className="op-muted">
                Perform the selected card event in this stage to start a run.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="op-table-wrap">
          <div className="op-table-wrap__filters">
            <select
              className="op-select auto-filter"
              aria-label="Rule status"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <table className="op-table">
            <thead>
              <tr>
                <th>Rule</th>
                <th>Trigger</th>
                <th>Actions</th>
                <th>Last run</th>
                <th>Status</th>
                <th>
                  <span className="op-sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.automations
                .filter((a) => filter === "all" || a.status === filter)
                .map((a) => {
                  const run = data.runs.find((r) => r.definitionId === a.id);
                  return (
                    <tr key={a.id}>
                      <td>
                        <button
                          className="auto-rule-link"
                          disabled={!admin}
                          onClick={() => setEditing(a)}
                        >
                          {a.name}
                        </button>
                        <div className="op-small op-muted auto-rule-summary">
                          {summarize(a)}
                        </div>
                      </td>
                      <td>
                        <strong>{eventLabels[a.trigger]}</strong>
                        <div className="op-small op-muted">
                          {flows.workflows
                            .find((w) => w.id === a.workflowId)
                            ?.stages.find((s) => s.id === a.stageId)?.name ||
                            a.stageId}
                        </div>
                      </td>
                      <td>{a.actions.length}</td>
                      <td>
                        {run ? (
                          <>
                            <div className="op-small">
                              {new Date(run.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                            <span
                              className={`op-caption ${run.state === "failed" ? "op-danger-text" : "op-muted"}`}
                            >
                              {run.state}
                            </span>
                          </>
                        ) : (
                          "Not run yet"
                        )}
                      </td>
                      <td>
                        <span className="op-pill op-pill--neutral">
                          {a.status === "active"
                            ? "Active"
                            : a.status === "paused"
                              ? "Paused"
                              : "Draft"}
                        </span>
                      </td>
                      <td>
                        {admin && (
                          <button
                            className="op-btn op-btn--secondary op-btn--compact"
                            onClick={() => setEditing(a)}
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {!data.automations.length && (
            <p className="op-muted auto-empty">
              No automations yet. Create a rule to get started.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
