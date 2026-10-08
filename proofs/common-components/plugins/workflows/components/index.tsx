import { useEffect, useMemo, useRef, useState } from "react";
import { useNotifier } from "frui/Notifier";
import { usePanels } from "../../settings/shell/panels.js";
import Automations from "../../automations/components/index.js";
import { useCardDrag } from "./useCardDrag.js";
import { routeRecordId } from "../../app/routing.js";
import { api } from "../../app/client.js";
import Icon from "../../app/components/Icon.js";
import type { Card, Workflow, ComponentProps } from "../types.js";
import { destinationError } from "../validation.js";
import SlaProgress from "./SlaProgress.js";
import Designer from "./Designer.js";
import WorkflowList from "./WorkflowList.js";
import CardDetails from "./CardDetails.js";
type Data = { workflows: Workflow[]; cards: Card[] };
export default function Workflows({
  csrf,
  user,
  path,
  automations,
}: ComponentProps) {
  const [data, setData] = useState<Data>({ workflows: [], cards: [] }),
    [loadFailed, setLoadFailed] = useState(false),
    [loaded, setLoaded] = useState(false),
    [newWorkflow, setNewWorkflow] = useState<Workflow | null>(null),
    [automationStage, setAutomationStage] = useState(""),
    [busy, setBusy] = useState(false),
    [designerDraft, setDesignerDraft] = useState<Workflow | null>(null),
    [designerStage, setDesignerStage] = useState(""),
    [selected, setSelected] = useState(""),
    [search, setSearch] = useState(""),
    [adding, setAdding] = useState(false),
    [newTitle, setNewTitle] = useState("");
  const flowId = routeRecordId(path);
  const creating = path === "/workflow/create";
  const designer = creating || path.startsWith("/workflow/update/");
  const { notify } = useNotifier();
  const { showDetails, closeDetails } = usePanels();
  useEffect(() => {
    if (creating) {
      const created: Workflow = {
        id: crypto.randomUUID(),
        name: "New workflow",
        description: "",
        status: "draft",
        revision: 0,
        stages: [
          {
            id: crypto.randomUUID(),
            name: "Received",
            description: "",
            assignees: [],
            outcome: "continue",
            hours: 24,
            tasks: [],
            formIds: [],
          },
          {
            id: crypto.randomUUID(),
            name: "Completed",
            description: "",
            assignees: [],
            outcome: "complete",
            hours: 0,
            tasks: [],
            formIds: [],
          },
        ],
      };
      setNewWorkflow(created);
      setDesignerDraft(created);
      setDesignerStage(created.stages[0].id);
    } else {
      try {
        setDesignerStage(decodeURIComponent(location.hash.slice(1)));
      } catch {
        setDesignerStage("");
      }
    }
  }, [creating]);
  async function load() {
    const value = await api<Data>("/api/workflows");
    setData(value);
    setLoaded(true);
    setLoadFailed(false);
  }
  useEffect(() => {
    void load().catch((e) => {
      setLoadFailed(true);
      notify("error", e.message);
    });
  }, []);
  const workflow = newWorkflow || data.workflows.find((w) => w.id === flowId),
    cards = useMemo(
      () => data.cards.filter((c) => c.workflowId === flowId),
      [data.cards, flowId],
    ),
    card = data.cards.find((c) => c.id === selected),
    canEdit = user.roles.some((r) => ["ADMIN", "MEMBER"].includes(r)),
    admin = user.roles.includes("ADMIN");
  const unsaved = useRef(false);
  unsaved.current =
    !!designerDraft &&
    JSON.stringify(designerDraft) !== JSON.stringify(workflow);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (!unsaved.current) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);
  async function command(body: object, message = "Saved.") {
    setBusy(true);
    try {
      const result = await api("/api/workflows", body, csrf);
      await load();
      notify("success", message);
      return result;
    } catch (e) {
      notify("error", e instanceof Error ? e.message : "Action failed.");
      await load().catch(() => {});
    } finally {
      setBusy(false);
    }
  }
  function move(item: Card, stageId: string) {
    if (item.stageId === stageId || busy || !canEdit) return;
    const reason = destinationError(item, stageId);
    if (reason) {
      notify("error", reason);
      return;
    }
    void command(
      { action: "move", id: item.id, revision: item.revision, stageId },
      "Card moved.",
    );
  }
  const drag = useCardDrag({ enabled: canEdit && !busy, move });
  useEffect(() => {
    if (!card) return;
    showDetails({
      id: card.id,
      title: card.title,
      onClose: () => setSelected(""),
      content: (
        <CardDetails
          key={card.id}
          card={card}
          csrf={csrf}
          submitForm={async (formId, version, answers, requestId) => {
            const result = await command(
              {
                action: "submit-form",
                id: card.id,
                revision: card.revision,
                formId,
                version,
                answers,
                requestId,
              },
              "Form submitted.",
            );
            if (!result)
              throw new Error(
                "Form submission failed. Check the notification and try again.",
              );
          }}
          canEdit={canEdit}
          busy={busy}
          move={(stage) => move(card, stage)}
          change={(change) =>
            void command({
              action: "update-card",
              id: card.id,
              revision: card.revision,
              change,
            })
          }
        />
      ),
    });
  }, [card, cards, busy, canEdit, showDetails]);
  useEffect(() => () => closeDetails(), [closeDetails]);
  function openAutomations(stageId: string) {
    closeDetails();
    setAutomationStage(stageId);
  }
  function openDesigner(stageId = "") {
    if (!workflow) return;
    closeDetails();
    location.assign(
      `/workflow/update/${encodeURIComponent(workflow.id)}${stageId ? "#" + encodeURIComponent(stageId) : ""}`,
    );
  }
  async function saveWorkflow(draft: Workflow) {
    const result = await command(
      { action: "save", draft, revision: workflow!.revision },
      "Workflow saved.",
    );
    if (result) {
      unsaved.current = false;
      if (creating) {
        setNewWorkflow(result);
        setDesignerDraft(result);
        location.replace(`/workflow/update/${encodeURIComponent(result.id)}`);
      } else {
        setDesignerDraft(result);
      }
    }
    return result;
  }
  if (!loaded)
    return (
      <div className="op-page">
        <p className="op-muted">
          {loadFailed ? "Workflows could not be loaded." : "Loading workflows…"}
        </p>
      </div>
    );
  if (path === "/workflow/search")
    return (
      <WorkflowList
        workflows={data.workflows}
        admin={admin}
        open={(id) =>
          location.assign(`/workflow/detail/${encodeURIComponent(id)}`)
        }
        create={() => location.assign("/workflow/create")}
      />
    );
  if (designer && !admin)
    return (
      <div className="op-page" role="status">
        Workflow editing is available to administrators.
      </div>
    );
  if (!workflow)
    return (
      <div className="op-page" role="status">
        {creating ? "Loading workflow…" : "Workflow not found."}
        <a href="/workflow/search">Back to workflows</a>
      </div>
    );
  if (automationStage && automations) {
    const persisted =
      workflow?.revision &&
      workflow.stages.some((stage) => stage.id === automationStage);
    if (!persisted)
      return (
        <div className="op-page">
          <h2 className="op-heading">Stage automations</h2>
          <p>
            Save this new stage before adding automations. Your workflow edits
            are still here.
          </p>
          <div className="op-row">
            <button
              className="op-btn op-btn--secondary"
              onClick={() => setAutomationStage("")}
            >
              Back to workflow
            </button>
            <button
              className="op-btn op-btn--primary"
              disabled={busy}
              onClick={() => void saveWorkflow(designerDraft || workflow!)}
            >
              Save workflow and continue
            </button>
          </div>
        </div>
      );
    return (
      <Automations
        csrf={csrf}
        user={user}
        path={path}
        workflowId={workflow!.id}
        stageId={automationStage}
        onBack={() => setAutomationStage("")}
      />
    );
  }
  if (designer)
    return (
      <Designer
        key={`${workflow.id}:${workflow.revision}`}
        workflow={workflow}
        draft={designerDraft || workflow}
        setDraft={setDesignerDraft}
        selected={
          (designerDraft || workflow).stages.some(
            (stage) => stage.id === designerStage,
          )
            ? designerStage
            : (designerDraft || workflow).stages[0].id
        }
        setSelected={setDesignerStage}
        busy={busy}
        automations={automations ? openAutomations : undefined}
        cancel={() => {
          location.assign(
            creating
              ? "/workflow/search"
              : `/workflow/detail/${encodeURIComponent(workflow.id)}`,
          );
        }}
        save={(draft) => void saveWorkflow(draft)}
      />
    );
  const stages = workflow.stages;
  return (
    <div className="wf-root">
      <div className="op-toolbar wf-toolbar">
        <button
          className="op-btn op-btn--secondary wf-back"
          aria-label="Back to workflows"
          title="Back to workflows"
          onClick={() => {
            closeDetails();
            location.assign("/workflow/search");
          }}
        >
          <Icon name="arrow-left" />
        </button>
        <div className="op-row wf-toolbar-search">
          <label className="op-search wf-board-search">
            <Icon name="search" />
            <span className="op-sr-only">Search cards</span>
            <input
              placeholder="Search cards"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        {admin && (
          <button
            className="op-btn op-btn--secondary"
            onClick={() => openDesigner()}
          >
            <Icon name="pencil" />
            Edit
          </button>
        )}
        {canEdit && workflow.status === "published" && (
          <button
            className="op-btn op-btn--primary"
            onClick={() => setAdding(!adding)}
          >
            <Icon name="plus" />
            New card
          </button>
        )}
      </div>
      <div className="wf-board-heading">
        <h2 className="op-heading">{workflow.name}</h2>
        {workflow.status === "draft" && (
          <span className="op-pill op-pill--neutral">Draft</span>
        )}
      </div>
      {adding && (
        <form
          className="wf-add-card"
          onSubmit={(e) => {
            e.preventDefault();
            void command(
              {
                action: "create-card",
                id: workflow.id,
                title: newTitle,
              },
              "Card created.",
            ).then((result) => {
              if (result) {
                setNewTitle("");
                setAdding(false);
                setSelected(result.id);
              }
            });
          }}
        >
          <label className="op-field op-grow">
            <span className="op-field__label">Card title</span>
            <input
              className="op-input"
              value={newTitle}
              autoFocus
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <button
            className="op-btn op-btn--primary"
            disabled={busy || !newTitle.trim()}
          >
            Create card
          </button>
          <button
            type="button"
            className="op-btn op-btn--secondary"
            onClick={() => setAdding(false)}
          >
            Cancel
          </button>
        </form>
      )}
      <div className="wf-board-layout">
        <div className="op-board wf-board">
          {stages.map((stage) => (
            <section
              className={`op-column op-column--fluid ${drag.target === stage.id ? "wf-column--drop" : ""}`}
              key={stage.id}
              aria-label={stage.name}
              data-workflow-stage={stage.id}
            >
              <header className="op-column__header">
                <span className="op-strong">{stage.name}</span>
                <span className="op-badge">
                  {cards.filter((c) => c.stageId === stage.id).length}
                </span>
                {admin && (
                  <button
                    className="op-icon-btn op-icon-btn--compact"
                    aria-label={`Settings for ${stage.name}`}
                    title="Stage settings"
                    onClick={() => openDesigner(stage.id)}
                  >
                    <Icon name="settings" />
                  </button>
                )}
                {automations &&
                  admin &&
                  workflow.stages.some((s) => s.id === stage.id) && (
                    <button
                      className="op-icon-btn op-icon-btn--compact"
                      aria-label={`Automations for ${stage.name}`}
                      title="Stage automations"
                      onClick={() => openAutomations(stage.id)}
                    >
                      <Icon name="zap" />
                    </button>
                  )}
              </header>
              <div className="op-column__cards">
                {cards
                  .filter(
                    (c) =>
                      c.stageId === stage.id &&
                      c.title.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((c) => {
                    const rule = c.workflow.stages.find(
                      (s) => s.id === c.stageId,
                    )!;
                    return (
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={c.id === selected}
                        key={c.id}
                        className={`op-card wf-card ${c.id === selected ? "wf-card--selected" : ""} ${drag.dragging === c.id ? "wf-card--dragging" : ""}`}
                        {...drag.bind(c)}
                        onClick={() => {
                          if (drag.ignoreClick()) return;
                          if (selected === c.id) closeDetails();
                          else setSelected(c.id);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            if (selected === c.id) closeDetails();
                            else setSelected(c.id);
                          }
                        }}
                      >
                        <span className="wf-card-heading">
                          {canEdit && (
                            <span
                              className="wf-card-grip"
                              data-card-drag-handle
                              aria-label={`Drag ${c.title}`}
                            >
                              <Icon name="grip-vertical" />
                            </span>
                          )}
                          <span className="op-strong wf-card-title">
                            {c.title}
                          </span>
                        </span>
                        <span
                          className="wf-card-assignees"
                          aria-label="Assignees"
                        >
                          {c.assignees.map((name) => (
                            <span
                              key={name}
                              className="op-avatar op-avatar--24"
                              title={name}
                              aria-label={name}
                            >
                              {name
                                .split(/\s+/)
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)}
                            </span>
                          ))}
                        </span>
                        <span className="wf-card-meta">
                          {c.tasks.length > 0 && (
                            <span aria-label="Todo progress">
                              <Icon name="list-checks" />
                              {c.tasks.filter((t) => t.done).length}/
                              {c.tasks.length}
                            </span>
                          )}
                          <span>
                            <Icon name="message-square" />
                            {c.comments.length}
                          </span>
                          <span>
                            <Icon name="paperclip" />
                            {c.attachments.length}
                          </span>
                        </span>
                        <SlaProgress
                          enteredAt={c.enteredAt}
                          hours={rule.hours}
                        />
                      </div>
                    );
                  })}
                {!cards.some((c) => c.stageId === stage.id) && (
                  <p className="wf-empty-stage op-small op-muted">No cards</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
