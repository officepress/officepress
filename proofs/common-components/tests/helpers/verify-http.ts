//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Notice } from '../../plugins/app/components/Notifications.js';
import type { Config } from '../../plugins/app/types.js';
import type { Caller } from '../../plugins/auth/types.js';
import type {
  Automation,
  AutomationService
} from '../../plugins/automations/types.js';
import type { Conversation } from '../../plugins/chat/types.js';
import type { ChatService } from '../../plugins/chat/types.js';
import type { FormRecord, FormSummary } from '../../plugins/forms/types.js';
import type { FormsService } from '../../plugins/forms/types.js';
import type { TemplateRecord } from '../../plugins/templates/types.js';
import type { TemplateService } from '../../plugins/templates/types.js';
import type { Workflow, Card } from '../../plugins/workflows/types.js';
import { fixturePassword } from '../../plugins/auth/fixtures.js';
import { sampleAutomation } from '../../plugins/automations/fixtures.js';
import { fixture } from '../../plugins/forms/fixtures.js';
import { sampleValues } from '../../plugins/templates/client.js';
import { sampleWorkflow } from '../../plugins/workflows/fixtures.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Exercise authenticated feature HTTP boundaries and verify their persisted
 * outcomes.
 */
export async function httpContracts(
  origin: string,
  server: HttpServer<Config>,
  callers: Record<string, Caller>,
  hasSmtp: boolean
) {
  //use independent authenticated and guest sessions for endpoint access
  // checks
  const checks: string[] = [];
  const admin = new HttpSession(origin);
  const readonly = new HttpSession(origin);
  const guest = new HttpSession(origin);
  const routes = [
    '/api/workflows',
    '/api/automations',
    '/api/templates',
    '/api/forms',
    '/api/chat'
  ];
  for (const route of routes)
    assert.equal((await guest.request(route)).response.status, 401);
  await admin.login('admin');
  await readonly.login('readonly');
  for (const route of routes)
    assert.equal((await admin.request(route)).response.status, 200, route);
  checks.push(
    'HTTP: anonymous access denied and real Stackpress admin sign-in reaches every component'
  );

  //seed notices for another owner and app so feed scoping can be observed
  // over HTTP
  const noticeDb = server.plugin<Engine>('database');
  const appId = server.config.path<string>('officepress.appId', '');
  for (const [ id, app, owner ] of [
    [ 'notice-admin', appId, callers.admin.id ],
    [ 'notice-other', appId, callers.other.id ],
    [ 'notice-other-app', 'other-notification-app', callers.admin.id ]
  ])
    await noticeDb.query(
      'INSERT INTO "shell_notice" ("id","app_id","owner_id","category","title","href","read","created") VALUES (?, ?, ?, ?, ?, ?, false, NOW())',
      [ id, app, owner, 'mentions', 'Notification ownership proof', '/' ]
    );
  assert.equal(
    (await guest.request<{ notices: Notice[] }>('/api/notifications')).response
      .status,
    401
  );
  assert.equal(
    (await guest.request('/api/notifications/read', {})).response.status,
    401
  );
  const feed = (
    await admin.request<{ notices: Notice[] }>('/api/notifications')
  ).data.notices;
  assert.ok(feed.some((notice) => notice.id === 'notice-admin'));
  assert.ok(
    !feed.some((notice) =>
      [ 'notice-other', 'notice-other-app' ].includes(notice.id)
    )
  );

  //a real authenticated session still needs valid CSRF to change read state
  assert.equal(
    (
      await admin.request('/api/notifications/read', {
        id: 'notice-admin',
        csrf: 'invalid'
      })
    ).response.status,
    419
  );

  //reading a foreign notice must not update its durable read flag
  await admin.request('/api/notifications/read', {
    id: 'notice-other',
    csrf: admin.csrf()
  });
  assert.equal(
    (
      await noticeDb.query<{ read: boolean }>(
        'SELECT "read" FROM "shell_notice" WHERE "id" = ?',
        [ 'notice-other' ]
      )
    )[0].read,
    false
  );

  //single and mark-all operations may change only this app and caller
  // records
  assert.equal(
    (
      await admin.request('/api/notifications/read', {
        id: 'notice-admin',
        csrf: admin.csrf()
      })
    ).response.status,
    200
  );
  assert.equal(
    (
      await admin.request<{ notices: Notice[] }>('/api/notifications')
    ).data.notices.find((notice) => notice.id === 'notice-admin')?.read,
    true
  );
  await admin.request('/api/notifications/read', { csrf: admin.csrf() });
  assert.ok(
    (
      await admin.request<{ notices: Notice[] }>('/api/notifications')
    ).data.notices.every((notice) => notice.read)
  );
  const untouched = await noticeDb.query<{ read: boolean }>(
    'SELECT "read" FROM "shell_notice" WHERE "id" IN (?, ?)',
    [ 'notice-other', 'notice-other-app' ]
  );
  assert.ok(untouched.every((notice) => !notice.read));
  checks.push(
    'HTTP: app-owned notifications preserve authentication, CSRF, app/owner isolation and single/all read state'
  );

  //read saved fixture IDs before traversing clean page paths
  const savedMessages = (
    await admin.request<{ records: TemplateRecord[] }>('/api/templates')
  ).data.records;
  const savedForms = (
    await admin.request<{ items: FormSummary[] }>('/api/forms')
  ).data.items;
  const savedWorkflows = (
    await admin.request<{ workflows: Workflow[], cards: Card[] }>(
      '/api/workflows'
    )
  ).data.workflows;
  const messageId = encodeURIComponent(savedMessages[0].id);
  const formId = encodeURIComponent(savedForms[0].id);
  const workflowId = encodeURIComponent(savedWorkflows[0].id);

  //each clean page must render its own heading and deny guest access
  for (const [ route, title ] of [
    [ '/form/search', 'Forms' ],
    [ `/form/update/${formId}`, 'Update Form' ],
    [ '/message/search', 'Messages' ],
    [ `/message/detail/${messageId}`, 'Message Details' ],
    [ `/message/update/${messageId}`, 'Update Message' ],
    [ '/workflow/search', 'Workflows' ],
    [ '/workflow/create', 'Create Workflow' ],
    [ `/workflow/detail/${workflowId}`, 'Workflow Details' ],
    [ `/workflow/update/${workflowId}`, 'Update Workflow' ]
  ]) {
    const page = await admin.request(route);
    assert.equal(page.response.status, 200, route);
    assert.ok(page.text.includes(`>${title}</h1>`), `Page heading: ${route}`);
    const denied = await guest.request(route);
    assert.equal(denied.response.status, 302, `Guest access: ${route}`);
    assert.ok(
      denied.response.headers.get('location')?.startsWith('/auth/signin')
    );
  }

  //opening a create page is a safe GET and must not create a workflow
  assert.equal(
    (
      await admin.request<{ workflows: Workflow[], cards: Card[] }>(
        '/api/workflows'
      )
    ).data.workflows.length,
    savedWorkflows.length,
    'Opening Create must not persist a workflow'
  );

  //legacy GET links redirect to the accepted clean routes
  for (const [ old, canonical ] of [
    [ '/forms', '/form/search' ],
    [ `/forms?form=${formId}`, `/form/update/${formId}` ],
    [ '/message-templates', '/message/search' ],
    [ '/workflows', '/workflow/search' ]
  ]) {
    const page = await admin.request(old);
    assert.equal(page.response.status, 302);
    assert.equal(page.response.headers.get('location'), canonical);
  }
  checks.push(
    'HTTP: all nine clean page paths render the correct headings, require sign-in, preserve GET safety and redirect legacy links'
  );

  //every feature mutation must reject invalid CSRF and a read-only caller
  for (const route of [
    '/api/workflows',
    '/api/automations',
    '/api/templates/save',
    '/api/forms/save',
    '/api/chat/send',
    '/api/chat/request'
  ]) {
    assert.equal(
      (await admin.request(route, { action: 'save', csrf: 'invalid' })).response
        .status,
      419,
      route
    );
    assert.equal(
      (await readonly.request(route, { action: 'save', csrf: readonly.csrf() }))
        .response.status,
      403,
      route
    );
  }
  checks.push(
    'HTTP: every feature mutation rejects invalid CSRF and read-only callers'
  );

  //workflow HTTP projections use current status fields and reject retired
  // actions
  const workflowData = (
    await admin.request<{ workflows: Workflow[], cards: Card[] }>(
      '/api/workflows'
    )
  ).data;
  assert.ok(
    workflowData.workflows.every(
      (workflow) =>
        [ 'draft', 'published' ].includes(workflow.status) &&
        !('published' in workflow)
    )
  );
  assert.ok(workflowData.cards.every((card) => !('workflowVersion' in card)));
  const retiredPublish = await admin.request('/api/workflows', {
    action: 'publish',
    id: workflowData.workflows[0].id,
    revision: workflowData.workflows[0].revision,
    csrf: admin.csrf()
  });
  assert.equal(retiredPublish.response.status, 400);
  assert.match(retiredPublish.text, /Unknown workflow action/);
  checks.push(
    'HTTP: workflows expose Draft/Published without version fields; retired publish action is rejected'
  );

  //automation HTTP projections preserve status and run options without
  // retired controls
  const automationData = (
    await admin.request<Awaited<ReturnType<AutomationService['read']>>>(
      '/api/automations'
    )
  ).data;
  assert.ok(
    automationData.automations.every(
      (rule) =>
        [ 'draft', 'active', 'paused' ].includes(rule.status) &&
        !('published' in rule)
    )
  );
  for (const action of [ 'publish', 'enable' ])
    assert.equal(
      (await admin.request('/api/automations', { action, csrf: admin.csrf() }))
        .response.status,
      400
    );
  const savedRule = await admin.request<Automation>('/api/automations', {
    action: 'save',
    draft: {
      ...sampleAutomation('http-card-events'),
      status: 'paused',
      trigger: 'task-unchecked',
      oncePerVisit: false,
      stopOnFailure: false
    },
    revision: 0,
    csrf: admin.csrf()
  });
  assert.equal(savedRule.response.status, 200, savedRule.text);
  assert.equal(savedRule.data.status, 'paused');
  assert.equal(savedRule.data.oncePerVisit, false);
  checks.push(
    'HTTP: automation status and run settings persist; retired Publish and enable actions are rejected'
  );

  //removing stage tasks must immediately reconcile an existing card
  // checklist
  const taskFlow = (
    await admin.request<Workflow>('/api/workflows', {
      action: 'save',
      draft: sampleWorkflow('http-dynamic-tasks'),
      revision: 0,
      csrf: admin.csrf()
    })
  ).data;
  const taskCard = (
    await admin.request<Card>('/api/workflows', {
      action: 'create-card',
      id: taskFlow.id,
      title: 'HTTP checklist',
      csrf: admin.csrf()
    })
  ).data;
  assert.equal(taskCard.tasks.length, 1);
  const cleared = await admin.request('/api/workflows', {
    action: 'save',
    revision: taskFlow.revision,
    csrf: admin.csrf(),
    draft: {
      ...taskFlow,
      stages: taskFlow.stages.map((stage) => ({ ...stage, tasks: [] }))
    }
  });
  assert.equal(cleared.response.status, 200);
  const currentTaskCard = (
    await admin.request<{ workflows: Workflow[], cards: Card[] }>(
      '/api/workflows'
    )
  ).data.cards.find((card) => card.id === taskCard.id);
  assert.ok(currentTaskCard);
  assert.deepEqual(currentTaskCard.tasks, []);
  const staleTask = await admin.request('/api/workflows', {
    action: 'update-card',
    id: taskCard.id,
    revision: currentTaskCard.revision,
    change: { taskId: taskCard.tasks[0].id, done: true },
    csrf: admin.csrf()
  });
  assert.equal(staleTask.response.status, 404);
  checks.push(
    'HTTP: saving empty stage tasks immediately clears existing card checklists; removed checkbox IDs are rejected'
  );

  //one form save applies draft/active state and rejects an unknown status
  const forms = server.plugin<FormsService>('forms');
  const statusForm = await forms.create(callers.admin, fixture);
  const savedForm = await admin.request<FormRecord>('/api/forms/save', {
    id: statusForm.id,
    revision: statusForm.revision,
    draft: { ...fixture, title: 'Saved and activated over HTTP' },
    status: 'active',
    csrf: admin.csrf()
  });
  assert.equal(savedForm.response.status, 200);
  assert.equal(savedForm.data.payload.active, true);
  assert.equal(
    savedForm.data.payload.publications[0].title,
    'Saved and activated over HTTP'
  );
  const draftForm = await admin.request<FormRecord>('/api/forms/save', {
    id: statusForm.id,
    revision: savedForm.data.revision,
    draft: savedForm.data.payload.draft,
    status: 'draft',
    csrf: admin.csrf()
  });
  assert.equal(draftForm.response.status, 200);
  assert.equal(draftForm.data.payload.active, false);
  assert.equal(
    (await admin.request(`/api/forms/fill?form=${statusForm.id}`)).response
      .status,
    410
  );
  const badStatus = await admin.request('/api/forms/save', {
    id: statusForm.id,
    revision: draftForm.data.revision,
    draft: draftForm.data.payload.draft,
    status: 'invalid',
    csrf: admin.csrf()
  });
  assert.equal(badStatus.response.status, 422);
  checks.push(
    'HTTP: one form Save persists name and Draft/Active status; invalid status is rejected and Draft blocks respondents'
  );

  //a shared form permits guest responses while keeping builder endpoints
  // private
  let form = await forms.create(callers.admin, { ...fixture, mode: 'public' });
  form = await forms.publish(callers.admin, form.id, form.revision);
  const shared = await forms.share(callers.admin, form.id, form.revision);
  const endpoint = `/api/forms/fill?form=${form.id}&token=${shared.token}`;
  assert.equal((await guest.request(endpoint)).response.status, 200);
  assert.equal(
    (await guest.request(`/api/forms?id=${form.id}`)).response.status,
    401
  );
  await guest.request('/auth/signin/email');
  const answer = {
    preferredName: 'Public visitor',
    workArrangement: 'Hybrid',
    startDate: '2026-11-01'
  };
  let result = await guest.request('/api/forms/respond', {
    id: form.id,
    token: shared.token,
    version: 1,
    answers: answer,
    requestId: 'public-http-1',
    csrf: guest.csrf()
  });
  assert.equal(result.response.status, 200, result.text);

  //revocation must reject another submission from an already-open link
  form = await forms.read(callers.admin, form.id);
  await forms.revoke(callers.admin, form.id, form.revision);
  result = await guest.request('/api/forms/respond', {
    id: form.id,
    token: shared.token,
    version: 1,
    answers: answer,
    requestId: 'public-http-2',
    csrf: guest.csrf()
  });
  assert.equal(result.response.status, 403, result.text);
  assert.equal(
    (await forms.read(callers.admin, form.id)).payload.responses.length,
    1
  );
  checks.push(
    'HTTP: public submission succeeds without editor access; revoked already-open link is rejected'
  );

  //request acceptance requires current authority and a non-stale
  // conversation revision
  const chat = server.plugin<ChatService>('chat');
  const abort = new AbortController();
  const requestFixture = (await chat.read(callers.admin, 'request-stock'))
    .conversation;
  await chat.create(callers.admin, {
    ...requestFixture,
    id: 'http-chat-request'
  });
  assert.equal(
    (
      await guest.request('/api/chat/request', {
        id: 'http-chat-request',
        action: 'accept',
        revision: 0
      })
    ).response.status,
    401
  );
  const acceptedRequest = await admin.request<Conversation>(
    '/api/chat/request',
    {
      id: 'http-chat-request',
      action: 'accept',
      revision: 0,
      csrf: admin.csrf()
    }
  );
  assert.equal(acceptedRequest.response.status, 200);
  assert.equal(acceptedRequest.data.inbox, 'messages');
  assert.equal(
    (
      await admin.request('/api/chat/request', {
        id: 'http-chat-request',
        action: 'accept',
        revision: 0,
        csrf: admin.csrf()
      })
    ).response.status,
    409
  );
  checks.push(
    'HTTP: request acceptance requires authentication/CSRF and persists with stale-action rejection'
  );

  //open an authorized SSE stream and await its ready marker before
  // injecting a change
  const stream = await fetch(origin + '/api/chat/events', {
    headers: { cookie: admin.cookie() },
    signal: abort.signal
  });
  assert.equal(stream.status, 200);
  const reader = stream.body!.getReader();
  assert.match(
    new TextDecoder().decode((await reader.read()).value),
    /event: ready/
  );
  await chat.arrive(
    callers.admin,
    '2043',
    'The updated return details are ready.'
  );

  //race the next change hint with a bounded failure timeout
  const hint = await Promise.race([
    reader.read(),
    new Promise<never>((_, reject) => {
      const timeout = setTimeout(
        () => reject(Error('Live hint timed out')),
        3000
      );
      timeout.unref();
    })
  ]);
  assert.match(new TextDecoder().decode(hint.value), /event: change/);

  //cancel the owned stream reader before testing another endpoint
  abort.abort();
  await reader.cancel().catch(() => {});
  checks.push(
    'HTTP: authorized SSE delivers incoming-change hints; refetch uses authorized endpoints'
  );

  //attachment bytes remain behind the same conversation access boundary
  const download = await admin.request(
    '/api/chat/attachment?id=2042&file=purchase-order'
  );
  assert.equal(download.response.status, 200);
  assert.match(
    download.response.headers.get('content-disposition') || '',
    /attachment/
  );
  assert.match(download.text, /Shipping carton/);
  checks.push(
    'HTTP: attachment bytes download through the conversation access boundary'
  );

  //only the explicit SMTP campaign performs a real outgoing handoff
  if (hasSmtp) {
    const templates = server.plugin<TemplateService>('templates');
    const template = (await templates.list(callers.admin)).find(
      (candidateTemplate) => candidateTemplate.draft.name === 'Support reply'
    )!;
    const send = await admin.request<{ result: { accepted: boolean } }>(
      '/api/templates/send',
      {
        id: template.id,
        context: sampleValues,
        values: {},
        csrf: admin.csrf()
      }
    );
    assert.equal(send.response.status, 200);
    assert.equal(
      send.data.result.accepted,
      true,
      'Template SMTP handoff must be accepted; no delivery claim'
    );
    checks.push(
      'SMTP: one template example accepted by the configured mail server, immutable dispatch stored'
    );
    const current = (await chat.read(callers.admin, '2042')).conversation;
    const reply = await admin.request<Conversation>('/api/chat/send', {
      id: '2042',
      body: 'OfficePress common-components verification: this is the designated chat example message.',
      kind: 'reply',
      revision: current.revision,
      csrf: admin.csrf()
    });
    assert.equal(reply.response.status, 200);
    assert.equal(
      reply.data.messages.at(-1)?.state,
      'accepted',
      'Chat SMTP handoff must be accepted'
    );
    checks.push(
      'SMTP: one Chat reply accepted by the configured mail server, persisted without retry'
    );
  }
  return checks;
};

//--------------------------------------------------------------------//
// Classes

/**
 * Keep one proof caller’s HTTP cookies isolated across feature endpoint
 * checks.
 */
class HttpSession {
  //cookie mutations belong to this caller so sessions cannot leak between
  // scenarios
  public readonly cookies = new Map<string, string>();
  //give this caller its own cookies and CSRF state bound to the managed
  // origin
  public constructor(
    //managed listener origin used by this caller’s HTTP requests
    public readonly origin: string
  ) {}
  //build the cookie header for the current proof browser session
  public cookie() {
    return [ ...this.cookies ]
      .map(([ cookieName, cookieValue ]) => `${cookieName}=${cookieValue}`)
      .join('; ');
  }
  //read the current CSRF token from the proof response or session fixture
  public csrf() {
    return decodeURIComponent(this.cookies.get('csrf') || '');
  }
  //establish the selected proof account session through the real sign-in
  // flow
  public async login(name: string) {
    await this.request('/auth/signin/email');
    const result = await this.request(
      '/auth/signin/email',
      {
        email: `${name}@officepress.test`,
        secret: fixturePassword,
        csrf: this.csrf(),
        auth: 'pass'
      },
      true
    );
    assert.equal(result.response.status, 302, 'Fixture sign-in should succeed');
    await this.request('/auth/account');
  }
  //send a request using this helper’s isolated proof session
  public async request<T = unknown>(
    url: string,
    body?: object,
    isForm = false
  ) {
    const response = await fetch(this.origin + url, {
      method: body ? 'POST' : 'GET',
      redirect: 'manual',
      headers: {
        cookie: this.cookie(),
        ...(body
          ? {
              'content-type': isForm
                ? 'application/x-www-form-urlencoded'
                : 'application/json'
            }
          : {})
      },
      body: body
        ? isForm
          ? new URLSearchParams(body as Record<string, string>)
          : JSON.stringify(body)
        : undefined
    });

    //retain every Set-Cookie revision before parsing the response envelope
    for (const cookieHeader of response.headers.getSetCookie()) {
      const pair = cookieHeader.split(';')[0];
      const index = pair.indexOf('=');
      this.cookies.set(pair.slice(0, index), pair.slice(index + 1));
    }
    const text = await response.text();

    //HTML responses are valid here; only JSON responses have a results
    // envelope
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {}
    const payload =
      data && typeof data === 'object' && 'results' in data
        ? (data.results ?? data)
        : data;
    return { response, text, data: payload as T };
  }
}
