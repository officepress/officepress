//modules
import { useNotifier } from 'frui/Notifier';
import { useEffect, useMemo, useRef, useState } from 'react';

//client
import type { Card, Workflow, ComponentProps } from '../types.js';
import { requestJson } from '../../app/client.js';
import { routeRecordId } from '../../app/routing.js';
import { usePanels } from '../../settings/shell/panels.js';
import { destinationError } from '../validation.js';
import { useCardDrag } from './useCardDrag.js';
import Icon from '../../app/components/Icon.js';
import Automations from '../../automations/components/index.js';
import CardDetails from './CardDetails.js';
import Designer from './Designer.js';
import SlaProgress from './SlaProgress.js';
import WorkflowList from './WorkflowList.js';

//--------------------------------------------------------------------//
// Types

type Data = { workflows: Workflow[], cards: Card[] };

//--------------------------------------------------------------------//
// Entry point

/**
 * Compose workflow lists, stage/card editing and optional automation
 * controls.
 */
export default function Workflows({
  csrf,
  user,
  path,
  automations: hasAutomations
}: ComponentProps) {
  //--------------------------------------------------------------------//
  // Route and permission inputs

  //memo and gesture hooks need these props-derived inputs at initialization
  // permission flags control presentation; server events still authorize
  // writes
  const flowId = routeRecordId(path);
  const canEdit = user.roles.some((role) => [ 'ADMIN', 'MEMBER' ].includes(role));

  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ hasLoadFailed, setHasLoadFailed ] = useState(false);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ newWorkflow, setNewWorkflow ] = useState<Workflow | null>(null);
  const [ automationStage, setAutomationStage ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ designerDraft, setDesignerDraft ] = useState<Workflow | null>(null);
  const [ designerStage, setDesignerStage ] = useState('');
  const [ selected, setSelected ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ isAdding, setIsAdding ] = useState(false);
  const [ newTitle, setNewTitle ] = useState('');
  const { notify } = useNotifier();
  const { showDetails, closeDetails } = usePanels();
  const unsaved = useRef(false);
  const [ data, setData ] = useState<Data>({ workflows: [], cards: [] });
  const cards = useMemo(
    () =>
      data.cards.filter((candidateCard) => candidateCard.workflowId === flowId),
    [ data.cards, flowId ]
  );
  const drag = useCardDrag({ enabled: canEdit && !isBusy, move: handleMove });

  //--------------------------------------------------------------------//
  // Derived presentation

  const isCreating = path === '/workflow/create';
  const isDesigner = isCreating || path.startsWith('/workflow/update/');
  const isAdmin = user.roles.includes('ADMIN');
  const workflow =
    newWorkflow ||
    data.workflows.find((candidateWorkflow) => candidateWorkflow.id === flowId);
  const card = data.cards.find(
    (candidateCard) => candidateCard.id === selected
  );
  unsaved.current =
    !!designerDraft &&
    JSON.stringify(designerDraft) !== JSON.stringify(workflow);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //load current workflow definitions and cards for the route-selected board
  async function handleLoad() {
    const value = await requestJson<Data>('/api/workflows');
    setData(value);
    setIsLoaded(true);
    setHasLoadFailed(false);
  }
  //send an authenticated feature command and refresh the visible server
  // snapshot
  async function handleCommand<T = unknown>(body: object, message = 'Saved.') {
    setIsBusy(true);
    try {
      const result = await requestJson<T>('/api/workflows', body, csrf);
      await handleLoad();
      notify('success', message);
      return result;
    } catch (caughtError) {
      notify(
        'error',
        caughtError instanceof Error ? caughtError.message : 'Action failed.'
      );
      await handleLoad().catch(() => {});
    } finally {
      setIsBusy(false);
    }
  }
  //apply the requested move while preserving the feature’s ordering and
  // revision rules
  function handleMove(item: Card, stageId: string) {
    if (item.stageId === stageId || isBusy || !canEdit) return;
    const reason = destinationError(item, stageId);
    if (reason) {
      notify('error', reason);
      return;
    }
    void handleCommand(
      { action: 'move', id: item.id, revision: item.revision, stageId },
      'Card moved.'
    );
  }
  //open the automation workspace scoped to the selected stage
  function handleOpenAutomations(stageId: string) {
    closeDetails();
    setAutomationStage(stageId);
  }
  //navigate to the selected workflow definition, optionally targeting a
  // stage
  function handleOpenDesigner(stageId = '') {
    if (!workflow) return;
    closeDetails();
    location.assign(
      `/workflow/update/${encodeURIComponent(workflow.id)}${stageId ? '#' + encodeURIComponent(stageId) : ''}`
    );
  }
  //save the edited definition and navigate a newly created workflow to its
  // stable route
  async function handleSaveWorkflow(draft: Workflow) {
    const result = await handleCommand<Workflow>(
      { action: 'save', draft, revision: workflow!.revision },
      'Workflow saved.'
    );
    if (result) {
      unsaved.current = false;
      if (isCreating) {
        setNewWorkflow(result);
        setDesignerDraft(result);
        location.replace(`/workflow/update/${encodeURIComponent(result.id)}`);
      } else {
        setDesignerDraft(result);
      }
    }
    return result;
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  useEffect(() => {
    if (isCreating) {
      const created: Workflow = {
        id: crypto.randomUUID(),
        name: 'New workflow',
        description: '',
        status: 'draft',
        revision: 0,
        stages: [
          {
            id: crypto.randomUUID(),
            name: 'Received',
            description: '',
            assignees: [],
            outcome: 'continue',
            hours: 24,
            tasks: [],
            formIds: []
          },
          {
            id: crypto.randomUUID(),
            name: 'Completed',
            description: '',
            assignees: [],
            outcome: 'complete',
            hours: 0,
            tasks: [],
            formIds: []
          }
        ]
      };
      setNewWorkflow(created);
      setDesignerDraft(created);
      setDesignerStage(created.stages[0].id);
    } else {
      try {
        setDesignerStage(decodeURIComponent(location.hash.slice(1)));
      } catch {
        setDesignerStage('');
      }
    }
  }, [ isCreating ]);
  useEffect(() => {
    void handleLoad().catch((caughtError) => {
      setHasLoadFailed(true);
      notify('error', caughtError.message);
    });
  }, []);
  useEffect(() => {
    //prevent silent loss of an edited draft during browser navigation
    const warn = (event: BeforeUnloadEvent) => {
      if (!unsaved.current) return;
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, []);
  useEffect(() => {
    if (!card) return;
    showDetails({
      id: card.id,
      title: card.title,
      onClose: () => setSelected(''),
      content: (
        <CardDetails
          key={card.id}
          card={card}
          csrf={csrf}
          submitForm={async (formId, version, answers, requestId) => {
            const result = await handleCommand(
              {
                action: 'submit-form',
                id: card.id,
                revision: card.revision,
                formId,
                version,
                answers,
                requestId
              },
              'Form submitted.'
            );
            if (!result)
              throw new Error(
                'Form submission failed. Check the notification and try again.'
              );
          }}
          canEdit={canEdit}
          busy={isBusy}
          move={(stage) => handleMove(card, stage)}
          change={(change) =>
            void handleCommand({
              action: 'update-card',
              id: card.id,
              revision: card.revision,
              change
            })
          }
        />
      )
    });
  }, [ card, cards, isBusy, canEdit, showDetails ]);
  useEffect(() => () => closeDetails(), [ closeDetails ]);

  //--------------------------------------------------------------------//
  // Render

  if (!isLoaded)
    return (
      <div className="op-page">
        <p className="op-muted">
          {hasLoadFailed
            ? 'Workflows could not be loaded.'
            : 'Loading workflows…'}
        </p>
      </div>
    );
  if (path === '/workflow/search')
    return (
      <WorkflowList
        workflows={data.workflows}
        admin={isAdmin}
        open={(id) =>
          location.assign(`/workflow/detail/${encodeURIComponent(id)}`)
        }
        create={() => location.assign('/workflow/create')}
      />
    );
  if (isDesigner && !isAdmin)
    return (
      <div className="op-page" role="status">
        Workflow editing is available to administrators.
      </div>
    );
  if (!workflow)
    return (
      <div className="op-page" role="status">
        {isCreating ? 'Loading workflow…' : 'Workflow not found.'}
        <a href="/workflow/search">Back to workflows</a>
      </div>
    );
  if (automationStage && hasAutomations) {
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
              onClick={() => setAutomationStage('')}
            >
              Back to workflow
            </button>
            <button
              className="op-btn op-btn--primary"
              disabled={isBusy}
              onClick={() =>
                void handleSaveWorkflow(designerDraft || workflow!)
              }
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
        onBack={() => setAutomationStage('')}
      />
    );
  }
  if (isDesigner)
    return (
      <Designer
        key={`${workflow.id}:${workflow.revision}`}
        workflow={workflow}
        draft={designerDraft || workflow}
        setDraft={setDesignerDraft}
        selected={
          (designerDraft || workflow).stages.some(
            (stage) => stage.id === designerStage
          )
            ? designerStage
            : (designerDraft || workflow).stages[0].id
        }
        setSelected={setDesignerStage}
        busy={isBusy}
        automations={hasAutomations ? handleOpenAutomations : undefined}
        cancel={() => {
          location.assign(
            isCreating
              ? '/workflow/search'
              : `/workflow/detail/${encodeURIComponent(workflow.id)}`
          );
        }}
        save={(draft) => void handleSaveWorkflow(draft)}
      />
    );
  const stages = workflow.stages;
  return (
    <div className="wf-root">
      {/* START: Workflow controls */}
      <div className="op-toolbar wf-toolbar">
        <button
          className="op-btn op-btn--secondary wf-back"
          aria-label="Back to workflows"
          title="Back to workflows"
          onClick={() => {
            closeDetails();
            location.assign('/workflow/search');
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
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
        {isAdmin && (
          <button
            className="op-btn op-btn--secondary"
            onClick={() => handleOpenDesigner()}
          >
            <Icon name="pencil" />
            Edit
          </button>
        )}
        {canEdit && workflow.status === 'published' && (
          <button
            className="op-btn op-btn--primary"
            onClick={() => setIsAdding(!isAdding)}
          >
            <Icon name="plus" />
            New card
          </button>
        )}
      </div>
      {/* END: Workflow controls */}
      <div className="wf-board-heading">
        <h2 className="op-heading">{workflow.name}</h2>
        {workflow.status === 'draft' && (
          <span className="op-pill op-pill--neutral">Draft</span>
        )}
      </div>
      {isAdding && (
        <form
          className="wf-add-card"
          onSubmit={(event) => {
            event.preventDefault();
            void handleCommand<Card>(
              {
                action: 'create-card',
                id: workflow.id,
                title: newTitle
              },
              'Card created.'
            ).then((result) => {
              if (result) {
                setNewTitle('');
                setIsAdding(false);
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
              onChange={(event) => setNewTitle(event.target.value)}
            />
          </label>
          <button
            className="op-btn op-btn--primary"
            disabled={isBusy || !newTitle.trim()}
          >
            Create card
          </button>
          <button
            type="button"
            className="op-btn op-btn--secondary"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </button>
        </form>
      )}
      <div className="wf-board-layout">
        {/* START: Workflow board */}
        <div className="op-board wf-board">
          {stages.map((stage) => (
            <section
              className={`op-column op-column--fluid ${drag.target === stage.id ? 'wf-column--drop' : ''}`}
              key={stage.id}
              aria-label={stage.name}
              data-workflow-stage={stage.id}
            >
              <header className="op-column__header">
                <span className="op-strong">{stage.name}</span>
                <span className="op-badge">
                  {
                    cards.filter(
                      (candidateCard) => candidateCard.stageId === stage.id
                    ).length
                  }
                </span>
                {isAdmin && (
                  <button
                    className="op-icon-btn op-icon-btn--compact"
                    aria-label={`Settings for ${stage.name}`}
                    title="Stage settings"
                    onClick={() => handleOpenDesigner(stage.id)}
                  >
                    <Icon name="settings" />
                  </button>
                )}
                {hasAutomations &&
                  isAdmin &&
                  workflow.stages.some(
                    (candidateStage) => candidateStage.id === stage.id
                  ) && (
                    <button
                      className="op-icon-btn op-icon-btn--compact"
                      aria-label={`Automations for ${stage.name}`}
                      title="Stage automations"
                      onClick={() => handleOpenAutomations(stage.id)}
                    >
                      <Icon name="zap" />
                    </button>
                  )}
              </header>
              <div className="op-column__cards">
                {cards
                  .filter(
                    (candidateCard) =>
                      candidateCard.stageId === stage.id &&
                      candidateCard.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  )
                  .map((cardItem) => {
                    const rule = cardItem.workflow.stages.find(
                      (candidateStage) => candidateStage.id === cardItem.stageId
                    )!;
                    return (
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={cardItem.id === selected}
                        key={cardItem.id}
                        className={`op-card wf-card ${cardItem.id === selected ? 'wf-card--selected' : ''} ${drag.dragging === cardItem.id ? 'wf-card--dragging' : ''}`}
                        {...drag.bind(cardItem)}
                        onClick={() => {
                          if (drag.ignoreClick()) return;
                          if (selected === cardItem.id) closeDetails();
                          else setSelected(cardItem.id);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            if (selected === cardItem.id) closeDetails();
                            else setSelected(cardItem.id);
                          }
                        }}
                      >
                        <span className="wf-card-heading">
                          {canEdit && (
                            <span
                              className="wf-card-grip"
                              data-card-drag-handle
                              aria-label={`Drag ${cardItem.title}`}
                            >
                              <Icon name="grip-vertical" />
                            </span>
                          )}
                          <span className="op-strong wf-card-title">
                            {cardItem.title}
                          </span>
                        </span>
                        <span
                          className="wf-card-assignees"
                          aria-label="Assignees"
                        >
                          {cardItem.assignees.map((name) => (
                            <span
                              key={name}
                              className="op-avatar op-avatar--24"
                              title={name}
                              aria-label={name}
                            >
                              {name
                                .split(/\s+/)
                                .map((word) => word[0])
                                .join('')
                                .slice(0, 2)}
                            </span>
                          ))}
                        </span>
                        <span className="wf-card-meta">
                          {cardItem.tasks.length > 0 && (
                            <span aria-label="Todo progress">
                              <Icon name="list-checks" />
                              {
                                cardItem.tasks.filter(
                                  (candidateTask) => candidateTask.done
                                ).length
                              }
                              /{cardItem.tasks.length}
                            </span>
                          )}
                          <span>
                            <Icon name="message-square" />
                            {cardItem.comments.length}
                          </span>
                          <span>
                            <Icon name="paperclip" />
                            {cardItem.attachments.length}
                          </span>
                        </span>
                        <SlaProgress
                          enteredAt={cardItem.enteredAt}
                          hours={rule.hours}
                        />
                      </div>
                    );
                  })}
                {!cards.some(
                  (candidateCard) => candidateCard.stageId === stage.id
                ) && (
                  <p className="wf-empty-stage op-small op-muted">No cards</p>
                )}
              </div>
            </section>
          ))}
        </div>
        {/* END: Workflow board */}
      </div>
    </div>
  );
};
