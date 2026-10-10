//modules
import type { HttpServer } from '@stackpress/ingest';

//client
import type { Caller } from '../auth/types.js';
import type { Stage, WorkflowDraft, WorkflowService } from './types.js';
import { readStageTasks } from './tasks.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Build the repeatable workflow fixture used by population and domain
 * contracts.
 */
export function sampleWorkflow(id = 'standard-work'): WorkflowDraft {
  //build the stage fixture with the requested repeatable identity and
  // checklist
  const stage = (
    id: string,
    name: string,
    extra: Partial<Omit<Stage, 'tasks'>> & { tasks?: string[] } = {}
  ): Stage => ({
    id,
    name,
    description: '',
    assignees: [],
    outcome: 'continue',
    hours: 24,
    formIds: [],
    ...extra,
    tasks: readStageTasks(id, extra.tasks || [])
  });
  return {
    id,
    name: 'Team requests',
    status: 'published',
    description: 'Take each request from intake to a completed outcome.',
    stages: [
      stage('new', 'Received', {
        hours: 48,
        tasks: [ 'Confirm request details' ]
      }),
      stage('review', 'In review', {
        hours: 8,
        tasks: [ 'Check requirements', 'Confirm next steps' ]
      }),
      stage('progress', 'In progress', {
        hours: 24,
        tasks: [ 'Complete the agreed work', 'Review the result' ]
      }),
      stage('complete', 'Completed', {
        hours: 0,
        outcome: 'complete'
      })
    ]
  };
};

/**
 * Populate repeatable workflows data for this disposable proof app.
 */
export async function seed(
  server: HttpServer<import('../app/types.js').Config>,
  owner: Caller
) {
  const service = server.plugin<WorkflowService>('workflows');
  if (!service) return;
  const draft = sampleWorkflow();
  await service.save(owner, draft, 0);
  const one = await service.createCard(
    owner,
    draft.id,
    'Prepare the new starter checklist',
    [ owner.name ]
  );
  const two = await service.createCard(
    owner,
    draft.id,
    'Review supplier information',
    [ 'Sam Rivera' ]
  );
  const three = await service.createCard(
    owner,
    draft.id,
    'Update the team handbook',
    [ owner.name ]
  );
  const done = await service.update(owner, two.id, two.revision, {
    taskId: two.tasks[0].id,
    done: true
  });
  await service.move(owner, done.id, done.revision, 'review');
  await service.update(owner, one.id, one.revision, {
    comment: 'Include equipment, account access and the first-week schedule.'
  });
  await service.update(owner, three.id, three.revision, {
    comment: 'The current handbook is ready for a review.'
  });
};
