//modules
import { useNotifier } from 'frui/Notifier';
import { useEffect, useState } from 'react';

//client
import type { TemplateVersion } from '../../templates/types.js';
import type { ComponentProps, Workflow, Card } from '../../workflows/types.js';
import type { Automation, AutomationRun, DryRun } from '../types.js';
import { requestJson } from '../../app/client.js';
import { eventLabels } from '../../workflows/types.js';
import { summarize } from '../conditions.js';
import { actionText } from './actionText.js';
import Icon from '../../app/components/Icon.js';
import Builder from './Builder.js';

//--------------------------------------------------------------------//
// Types

type Data = {
  automations: Automation[],
  runs: AutomationRun[],
  templates?: TemplateVersion[]
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the automation list and delegate selected definitions to the
 * builder.
 */
export default function Automations({
  csrf,
  user,
  workflowId,
  stageId,
  onBack
}: ComponentProps & {
  workflowId: string,
  stageId: string,
  onBack: () => void
}) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ data, setData ] = useState<Data>({ automations: [], runs: [] });
  const [ flows, setFlows ] = useState<{ workflows: Workflow[], cards: Card[] }>({
    workflows: [],
    cards: []
  });
  const [ editing, setEditing ] = useState<Automation | null>(null);
  const [ isRunHistoryOpen, setIsRunHistoryOpen ] = useState(false);
  const [ isBusy, setIsBusy ] = useState(false);
  const [ filter, setFilter ] = useState('all');
  const [ result, setResult ] = useState<DryRun | null>(null);
  const { notify } = useNotifier();

  //--------------------------------------------------------------------//
  // Derived presentation

  const isAdmin = user.roles.includes('ADMIN');

  //--------------------------------------------------------------------//
  // Interaction handlers

  //derive the automation route’s workflow and stage selection
  const scope = (value: Data): Data => ({
    templates: value.templates,
    automations: value.automations.filter(
      (candidateAutomation) =>
        candidateAutomation.workflowId === workflowId &&
        candidateAutomation.stageId === stageId
    ),
    runs: value.runs.filter(
      (candidateRun) =>
        candidateRun.definition.workflowId === workflowId &&
        candidateRun.definition.stageId === stageId
    )
  });
  //load rules and durable runs before deriving the selected stage view
  async function handleLoad() {
    const [ value, workflow ] = await Promise.all([
      requestJson<Data>('/api/automations'),
      requestJson<typeof flows>('/api/workflows')
    ]);
    setData(scope(value));
    setFlows({
      workflows: workflow.workflows.filter(
        (candidateWorkflow) => candidateWorkflow.id === workflowId
      ),
      cards: workflow.cards.filter(
        (candidateCard) => candidateCard.workflowId === workflowId
      )
    });
    return value;
  }
  //send an authenticated feature command and refresh the visible server
  // snapshot
  async function handleCommand<T = unknown>(body: object, message: string) {
    setIsBusy(true);
    try {
      const value = await requestJson<T>('/api/automations', body, csrf);
      await handleLoad();
      notify('success', message);
      return value;
    } catch (caughtError) {
      notify(
        'error',
        caughtError instanceof Error ? caughtError.message : 'Action failed.'
      );
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //synchronize browser resources after state, derived values and handlers
  // are ready

  useEffect(() => {
    void handleLoad().catch((caughtError) =>
      notify('error', caughtError.message)
    );
    const interval = setInterval(
      () =>
        void requestJson<Data>('/api/automations')
          .then((value) => setData(scope(value)))
          .catch(() => {}),
      3000
    );
    return () => clearInterval(interval);
  }, [ workflowId, stageId ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  if (editing)
    return (
      <>
        <Builder
          key={`${editing.id}:${editing.revision}`}
          automation={editing}
          templates={data.templates || []}
          workflows={flows.workflows}
          cards={flows.cards}
          busy={isBusy}
          result={result}
          cancel={() => {
            setEditing(null);
            setResult(null);
          }}
          save={(draft) =>
            void handleCommand<Automation>(
              { action: 'save', draft, revision: editing.revision },
              'Automation saved.'
            ).then((value) => {
              if (value) {
                setEditing(value);
                setResult(null);
              }
            })
          }
          test={(draft, cardId) =>
            void handleCommand<DryRun>(
              { action: 'dry-run', draft, cardId },
              'Test complete. No card data changed.'
            ).then((value) => {
              if (value) setResult(value);
            })
          }
        />
      </>
    );
  return (
    <div className="op-page auto-root">
      {/* START: Page heading and actions */}
      <div className="op-page-head">
        <button className="op-btn op-btn--secondary" onClick={onBack}>
          <Icon name="arrow-left" /> Back to workflow
        </button>
        <span className="op-grow" />
        <button
          className="op-btn op-btn--secondary"
          onClick={() => setIsRunHistoryOpen(!isRunHistoryOpen)}
        >
          <Icon name={isRunHistoryOpen ? 'zap' : 'history'} />
          {isRunHistoryOpen ? 'View rules' : 'View runs'}
        </button>
        {isAdmin && !isRunHistoryOpen && (
          <button
            className="op-btn op-btn--primary"
            disabled={!flows.workflows.length}
            onClick={() => {
              const flow = flows.workflows[0];
              setEditing({
                id: crypto.randomUUID(),
                name: 'New automation',
                workflowId: flow.id,
                stageId,
                match: 'all',
                conditions: [],
                timing: { kind: 'now', minutes: 0, date: '' },
                actions: [
                  { type: 'comment', value: 'Ready for the next step.' }
                ],
                revision: 0,
                status: 'draft',
                trigger: 'stage-enter',
                oncePerVisit: true,
                stopOnFailure: true
              });
            }}
          >
            <Icon name="plus" />
            New automation
          </button>
        )}
      </div>
      {/* END: Page heading and actions */}
      <div className="auto-heading">
        <div className="op-crumbs">
          {flows.workflows[0]?.name} ›{' '}
          {
            flows.workflows[0]?.stages.find(
              (candidateStage) => candidateStage.id === stageId
            )?.name
          }
        </div>
        <h2 className="op-heading">
          {isRunHistoryOpen ? 'Stage automation runs' : 'Stage automations'}
        </h2>
        <p className="op-muted">
          {isRunHistoryOpen
            ? 'Follow each run and its completed actions.'
            : 'Run consistent actions when a card event and optional conditions match.'}
        </p>
      </div>
      {isRunHistoryOpen ? (
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
                  Scheduled {new Date(run.dueAt).toLocaleString()} ·{' '}
                  {run.checkpoints.length}/{run.definition.actions.length}{' '}
                  actions completed
                </p>
                <ol className="auto-plan">
                  {run.definition.actions.map((action, actionIndex) => (
                    <li key={actionIndex}>
                      {run.checkpoints.some(
                        (checkpoint) => checkpoint.index === actionIndex
                      )
                        ? '✓ '
                        : ''}
                      {actionText(
                        action,
                        run.eventCard?.workflow.stages.find(
                          (stage) => stage.id === run.definition.stageId
                        ),
                        run.messages?.[actionIndex]?.name
                      )}
                    </li>
                  ))}
                </ol>
                {run.error && (
                  <p className="op-danger-text" role="alert">
                    {run.error}
                  </p>
                )}
                {isAdmin &&
                  run.state === 'failed' &&
                  !run.failures?.some((failure) => !failure.retryable) &&
                  run.sending === undefined && (
                    <button
                      className="op-btn op-btn--secondary"
                      disabled={isBusy}
                      onClick={() =>
                        void handleCommand(
                          { action: 'resume', id: run.id },
                          'Run resumed from its last completed action.'
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
              onChange={(event) => setFilter(event.target.value)}
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
                .filter(
                  (candidateAutomation) =>
                    filter === 'all' || candidateAutomation.status === filter
                )
                .map((candidateAutomation) => {
                  const run = data.runs.find(
                    (candidateRun) =>
                      candidateRun.definitionId === candidateAutomation.id
                  );
                  return (
                    <tr key={candidateAutomation.id}>
                      <td>
                        <button
                          className="auto-rule-link"
                          disabled={!isAdmin}
                          onClick={() => setEditing(candidateAutomation)}
                        >
                          {candidateAutomation.name}
                        </button>
                        <div className="op-small op-muted auto-rule-summary">
                          {summarize(candidateAutomation)}
                        </div>
                      </td>
                      <td>
                        <strong>
                          {eventLabels[candidateAutomation.trigger]}
                        </strong>
                        <div className="op-small op-muted">
                          {flows.workflows
                            .find(
                              (candidateWorkflow) =>
                                candidateWorkflow.id ===
                                candidateAutomation.workflowId
                            )
                            ?.stages.find(
                              (candidateStage) =>
                                candidateStage.id ===
                                candidateAutomation.stageId
                            )?.name || candidateAutomation.stageId}
                        </div>
                      </td>
                      <td>{candidateAutomation.actions.length}</td>
                      <td>
                        {run ? (
                          <>
                            <div className="op-small">
                              {new Date(run.createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                            <span
                              className={`op-caption ${run.state === 'failed' ? 'op-danger-text' : 'op-muted'}`}
                            >
                              {run.state}
                            </span>
                          </>
                        ) : (
                          'Not run yet'
                        )}
                      </td>
                      <td>
                        <span className="op-pill op-pill--neutral">
                          {candidateAutomation.status === 'active'
                            ? 'Active'
                            : candidateAutomation.status === 'paused'
                              ? 'Paused'
                              : 'Draft'}
                        </span>
                      </td>
                      <td>
                        {isAdmin && (
                          <button
                            className="op-btn op-btn--secondary op-btn--compact"
                            onClick={() => setEditing(candidateAutomation)}
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
};
