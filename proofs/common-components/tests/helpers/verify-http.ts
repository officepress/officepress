import assert from "node:assert/strict";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../plugins/auth/types.js";
import { fixturePassword } from "../../plugins/auth/fixtures.js";
import type { ChatService } from "../../plugins/chat/types.js";
import type { FormsService } from "../../plugins/forms/types.js";
import { fixture } from "../../plugins/forms/fixtures.js";
import type { TemplateService } from "../../plugins/templates/types.js";
import { sampleValues } from "../../plugins/templates/client.js";
import { sampleAutomation } from "../../plugins/automations/fixtures.js";
import { sampleWorkflow } from "../../plugins/workflows/fixtures.js";
class HttpSession {
  cookies = new Map<string, string>();
  constructor(readonly origin: string) {}
  cookie() {
    return [...this.cookies].map(([k, v]) => `${k}=${v}`).join("; ");
  }
  csrf() {
    return decodeURIComponent(this.cookies.get("csrf") || "");
  }
  async request(url: string, body?: object, form = false) {
    const response = await fetch(this.origin + url, {
      method: body ? "POST" : "GET",
      redirect: "manual",
      headers: {
        cookie: this.cookie(),
        ...(body
          ? {
              "content-type": form
                ? "application/x-www-form-urlencoded"
                : "application/json",
            }
          : {}),
      },
      body: body
        ? form
          ? new URLSearchParams(body as Record<string, string>)
          : JSON.stringify(body)
        : undefined,
    });
    for (const c of response.headers.getSetCookie()) {
      const pair = c.split(";")[0],
        index = pair.indexOf("=");
      this.cookies.set(pair.slice(0, index), pair.slice(index + 1));
    }
    const text = await response.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {}
    return { response, text, data: data?.results ?? data };
  }
  async login(name: string) {
    await this.request("/auth/signin/email");
    const result = await this.request(
      "/auth/signin/email",
      {
        email: `${name}@officepress.test`,
        secret: fixturePassword,
        csrf: this.csrf(),
        auth: "pass",
      },
      true,
    );
    assert.equal(result.response.status, 302, "Fixture sign-in should succeed");
    await this.request("/auth/account");
  }
}
export async function httpContracts(
  origin: string,
  server: HttpServer<any>,
  callers: Record<string, Caller>,
  smtp: boolean,
) {
  const checks: string[] = [],
    admin = new HttpSession(origin),
    readonly = new HttpSession(origin),
    guest = new HttpSession(origin);
  const routes = [
    "/api/workflows",
    "/api/automations",
    "/api/templates",
    "/api/forms",
    "/api/chat",
  ];
  for (const route of routes)
    assert.equal((await guest.request(route)).response.status, 401);
  await admin.login("admin");
  await readonly.login("readonly");
  for (const route of routes)
    assert.equal((await admin.request(route)).response.status, 200, route);
  checks.push(
    "HTTP: anonymous access denied and real Stackpress admin sign-in reaches every component",
  );
  const noticeDb = server.plugin<Engine>("database");
  const appId = server.config.path<string>("officepress.appId", "");
  for (const [id, app, owner] of [
    ["notice-admin", appId, callers.admin.id],
    ["notice-other", appId, callers.other.id],
    ["notice-other-app", "other-notification-app", callers.admin.id],
  ])
    await noticeDb.query(
      'INSERT INTO "shell_notice" ("id","app_id","owner_id","category","title","href","read","created") VALUES (?, ?, ?, ?, ?, ?, false, NOW())',
      [id, app, owner, "mentions", "Notification ownership proof", "/"],
    );
  assert.equal(
    (await guest.request("/api/notifications")).response.status,
    401,
  );
  assert.equal(
    (await guest.request("/api/notifications/read", {})).response.status,
    401,
  );
  const feed = (await admin.request("/api/notifications")).data.notices;
  assert.ok(feed.some((notice: any) => notice.id === "notice-admin"));
  assert.ok(
    !feed.some((notice: any) =>
      ["notice-other", "notice-other-app"].includes(notice.id),
    ),
  );
  assert.equal(
    (
      await admin.request("/api/notifications/read", {
        id: "notice-admin",
        csrf: "invalid",
      })
    ).response.status,
    419,
  );
  await admin.request("/api/notifications/read", {
    id: "notice-other",
    csrf: admin.csrf(),
  });
  assert.equal(
    (
      await noticeDb.query<{ read: boolean }>(
        'SELECT "read" FROM "shell_notice" WHERE "id" = ?',
        ["notice-other"],
      )
    )[0].read,
    false,
  );
  assert.equal(
    (
      await admin.request("/api/notifications/read", {
        id: "notice-admin",
        csrf: admin.csrf(),
      })
    ).response.status,
    200,
  );
  assert.equal(
    (await admin.request("/api/notifications")).data.notices.find(
      (notice: any) => notice.id === "notice-admin",
    ).read,
    true,
  );
  await admin.request("/api/notifications/read", { csrf: admin.csrf() });
  assert.ok(
    (await admin.request("/api/notifications")).data.notices.every(
      (notice: any) => notice.read,
    ),
  );
  const untouched = await noticeDb.query<{ read: boolean }>(
    'SELECT "read" FROM "shell_notice" WHERE "id" IN (?, ?)',
    ["notice-other", "notice-other-app"],
  );
  assert.ok(untouched.every((notice) => !notice.read));
  checks.push(
    "HTTP: app-owned notifications preserve authentication, CSRF, app/owner isolation and single/all read state",
  );
  const savedMessages = (await admin.request("/api/templates")).data.records;
  const savedForms = (await admin.request("/api/forms")).data.items;
  const savedWorkflows = (await admin.request("/api/workflows")).data.workflows;
  const messageId = encodeURIComponent(savedMessages[0].id);
  const formId = encodeURIComponent(savedForms[0].id);
  const workflowId = encodeURIComponent(savedWorkflows[0].id);
  for (const [route, title] of [
    ["/form/search", "Forms"],
    [`/form/update/${formId}`, "Update Form"],
    ["/message/search", "Messages"],
    [`/message/detail/${messageId}`, "Message Details"],
    [`/message/update/${messageId}`, "Update Message"],
    ["/workflow/search", "Workflows"],
    ["/workflow/create", "Create Workflow"],
    [`/workflow/detail/${workflowId}`, "Workflow Details"],
    [`/workflow/update/${workflowId}`, "Update Workflow"],
  ]) {
    const page = await admin.request(route);
    assert.equal(page.response.status, 200, route);
    assert.ok(page.text.includes(`>${title}</h1>`), `Page heading: ${route}`);
    const denied = await guest.request(route);
    assert.equal(denied.response.status, 302, `Guest access: ${route}`);
    assert.ok(
      denied.response.headers.get("location")?.startsWith("/auth/signin"),
    );
  }
  assert.equal(
    (await admin.request("/api/workflows")).data.workflows.length,
    savedWorkflows.length,
    "Opening Create must not persist a workflow",
  );
  for (const [old, canonical] of [
    ["/forms", "/form/search"],
    [`/forms?form=${formId}`, `/form/update/${formId}`],
    ["/message-templates", "/message/search"],
    ["/workflows", "/workflow/search"],
  ]) {
    const page = await admin.request(old);
    assert.equal(page.response.status, 302);
    assert.equal(page.response.headers.get("location"), canonical);
  }
  checks.push(
    "HTTP: all nine clean page paths render the correct headings, require sign-in, preserve GET safety and redirect legacy links",
  );
  for (const route of [
    "/api/workflows",
    "/api/automations",
    "/api/templates/save",
    "/api/forms/save",
    "/api/chat/send",
    "/api/chat/request",
  ]) {
    assert.equal(
      (await admin.request(route, { action: "save", csrf: "invalid" })).response
        .status,
      419,
      route,
    );
    assert.equal(
      (await readonly.request(route, { action: "save", csrf: readonly.csrf() }))
        .response.status,
      403,
      route,
    );
  }
  checks.push(
    "HTTP: every feature mutation rejects invalid CSRF and read-only callers",
  );
  const workflowData = (await admin.request("/api/workflows")).data;
  assert.ok(
    workflowData.workflows.every(
      (workflow: any) =>
        ["draft", "published"].includes(workflow.status) &&
        !("published" in workflow),
    ),
  );
  assert.ok(
    workflowData.cards.every((card: any) => !("workflowVersion" in card)),
  );
  const retiredPublish = await admin.request("/api/workflows", {
    action: "publish",
    id: workflowData.workflows[0].id,
    revision: workflowData.workflows[0].revision,
    csrf: admin.csrf(),
  });
  assert.equal(retiredPublish.response.status, 400);
  assert.match(retiredPublish.text, /Unknown workflow action/);
  checks.push(
    "HTTP: workflows expose Draft/Published without version fields; retired publish action is rejected",
  );
  const automationData = (await admin.request("/api/automations")).data;
  assert.ok(
    automationData.automations.every(
      (rule: any) =>
        ["draft", "active", "paused"].includes(rule.status) &&
        !("published" in rule),
    ),
  );
  for (const action of ["publish", "enable"])
    assert.equal(
      (await admin.request("/api/automations", { action, csrf: admin.csrf() }))
        .response.status,
      400,
    );
  const savedRule = await admin.request("/api/automations", {
    action: "save",
    draft: {
      ...sampleAutomation("http-card-events"),
      status: "paused",
      trigger: "task-unchecked",
      oncePerVisit: false,
      stopOnFailure: false,
    },
    revision: 0,
    csrf: admin.csrf(),
  });
  assert.equal(savedRule.response.status, 200, savedRule.text);
  assert.equal(savedRule.data.status, "paused");
  assert.equal(savedRule.data.oncePerVisit, false);
  checks.push(
    "HTTP: automation status and run settings persist; retired Publish and enable actions are rejected",
  );
  const taskFlow = (
    await admin.request("/api/workflows", {
      action: "save",
      draft: sampleWorkflow("http-dynamic-tasks"),
      revision: 0,
      csrf: admin.csrf(),
    })
  ).data;
  const taskCard = (
    await admin.request("/api/workflows", {
      action: "create-card",
      id: taskFlow.id,
      title: "HTTP checklist",
      csrf: admin.csrf(),
    })
  ).data;
  assert.equal(taskCard.tasks.length, 1);
  const cleared = await admin.request("/api/workflows", {
    action: "save",
    revision: taskFlow.revision,
    csrf: admin.csrf(),
    draft: {
      ...taskFlow,
      stages: taskFlow.stages.map((stage: any) => ({ ...stage, tasks: [] })),
    },
  });
  assert.equal(cleared.response.status, 200);
  const currentTaskCard = (
    await admin.request("/api/workflows")
  ).data.cards.find((card: any) => card.id === taskCard.id);
  assert.deepEqual(currentTaskCard.tasks, []);
  const staleTask = await admin.request("/api/workflows", {
    action: "update-card",
    id: taskCard.id,
    revision: currentTaskCard.revision,
    change: { taskId: taskCard.tasks[0].id, done: true },
    csrf: admin.csrf(),
  });
  assert.equal(staleTask.response.status, 404);
  checks.push(
    "HTTP: saving empty stage tasks immediately clears existing card checklists; removed checkbox IDs are rejected",
  );
  const forms = server.plugin<FormsService>("forms");
  const statusForm = await forms.create(callers.admin, fixture);
  const savedForm = await admin.request("/api/forms/save", {
    id: statusForm.id,
    revision: statusForm.revision,
    draft: { ...fixture, title: "Saved and activated over HTTP" },
    status: "active",
    csrf: admin.csrf(),
  });
  assert.equal(savedForm.response.status, 200);
  assert.equal(savedForm.data.payload.active, true);
  assert.equal(
    savedForm.data.payload.publications[0].title,
    "Saved and activated over HTTP",
  );
  const draftForm = await admin.request("/api/forms/save", {
    id: statusForm.id,
    revision: savedForm.data.revision,
    draft: savedForm.data.payload.draft,
    status: "draft",
    csrf: admin.csrf(),
  });
  assert.equal(draftForm.response.status, 200);
  assert.equal(draftForm.data.payload.active, false);
  assert.equal(
    (await admin.request(`/api/forms/fill?form=${statusForm.id}`)).response
      .status,
    410,
  );
  const badStatus = await admin.request("/api/forms/save", {
    id: statusForm.id,
    revision: draftForm.data.revision,
    draft: draftForm.data.payload.draft,
    status: "invalid",
    csrf: admin.csrf(),
  });
  assert.equal(badStatus.response.status, 422);
  checks.push(
    "HTTP: one form Save persists name and Draft/Active status; invalid status is rejected and Draft blocks respondents",
  );
  let form = await forms.create(callers.admin, { ...fixture, mode: "public" });
  form = await forms.publish(callers.admin, form.id, form.revision);
  const shared = await forms.share(callers.admin, form.id, form.revision);
  const endpoint = `/api/forms/fill?form=${form.id}&token=${shared.token}`;
  assert.equal((await guest.request(endpoint)).response.status, 200);
  assert.equal(
    (await guest.request(`/api/forms?id=${form.id}`)).response.status,
    401,
  );
  await guest.request("/auth/signin/email");
  const answer = {
    preferredName: "Public visitor",
    workArrangement: "Hybrid",
    startDate: "2026-11-01",
  };
  let result = await guest.request("/api/forms/respond", {
    id: form.id,
    token: shared.token,
    version: 1,
    answers: answer,
    requestId: "public-http-1",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 200, result.text);
  form = await forms.read(callers.admin, form.id);
  await forms.revoke(callers.admin, form.id, form.revision);
  result = await guest.request("/api/forms/respond", {
    id: form.id,
    token: shared.token,
    version: 1,
    answers: answer,
    requestId: "public-http-2",
    csrf: guest.csrf(),
  });
  assert.equal(result.response.status, 403, result.text);
  assert.equal(
    (await forms.read(callers.admin, form.id)).payload.responses.length,
    1,
  );
  checks.push(
    "HTTP: public submission succeeds without editor access; revoked already-open link is rejected",
  );
  const chat = server.plugin<ChatService>("chat"),
    abort = new AbortController();
  const requestFixture = (await chat.read(callers.admin, "request-stock"))
    .conversation;
  await chat.create(callers.admin, {
    ...requestFixture,
    id: "http-chat-request",
  });
  assert.equal(
    (
      await guest.request("/api/chat/request", {
        id: "http-chat-request",
        action: "accept",
        revision: 0,
      })
    ).response.status,
    401,
  );
  const acceptedRequest = await admin.request("/api/chat/request", {
    id: "http-chat-request",
    action: "accept",
    revision: 0,
    csrf: admin.csrf(),
  });
  assert.equal(acceptedRequest.response.status, 200);
  assert.equal(acceptedRequest.data.inbox, "messages");
  assert.equal(
    (
      await admin.request("/api/chat/request", {
        id: "http-chat-request",
        action: "accept",
        revision: 0,
        csrf: admin.csrf(),
      })
    ).response.status,
    409,
  );
  checks.push(
    "HTTP: request acceptance requires authentication/CSRF and persists with stale-action rejection",
  );
  const stream = await fetch(origin + "/api/chat/events", {
    headers: { cookie: admin.cookie() },
    signal: abort.signal,
  });
  assert.equal(stream.status, 200);
  const reader = stream.body!.getReader();
  assert.match(
    new TextDecoder().decode((await reader.read()).value),
    /event: ready/,
  );
  await chat.arrive(
    callers.admin,
    "2043",
    "The updated return details are ready.",
  );
  const hint = await Promise.race([
    reader.read(),
    new Promise<never>((_, reject) => {
      const timeout = setTimeout(
        () => reject(Error("Live hint timed out")),
        3000,
      );
      timeout.unref();
    }),
  ]);
  assert.match(new TextDecoder().decode(hint.value), /event: change/);
  abort.abort();
  await reader.cancel().catch(() => {});
  checks.push(
    "HTTP: authorized SSE delivers incoming-change hints; refetch uses authorized endpoints",
  );
  const download = await admin.request(
    "/api/chat/attachment?id=2042&file=purchase-order",
  );
  assert.equal(download.response.status, 200);
  assert.match(
    download.response.headers.get("content-disposition") || "",
    /attachment/,
  );
  assert.match(download.text, /Shipping carton/);
  checks.push(
    "HTTP: attachment bytes download through the conversation access boundary",
  );
  if (smtp) {
    const templates = server.plugin<TemplateService>("templates"),
      t = (await templates.list(callers.admin)).find(
        (t) => t.draft.name === "Support reply",
      )!;
    const send = await admin.request("/api/templates/send", {
      id: t.id,
      context: sampleValues,
      values: {},
      csrf: admin.csrf(),
    });
    assert.equal(send.response.status, 200);
    assert.equal(
      send.data.result.accepted,
      true,
      "Template SMTP handoff must be accepted; no delivery claim",
    );
    checks.push(
      "SMTP: one template example accepted by the configured mail server, immutable dispatch stored",
    );
    const current = (await chat.read(callers.admin, "2042")).conversation;
    const reply = await admin.request("/api/chat/send", {
      id: "2042",
      body: "OfficePress common-components verification: this is the designated chat example message.",
      kind: "reply",
      revision: current.revision,
      csrf: admin.csrf(),
    });
    assert.equal(reply.response.status, 200);
    assert.equal(
      reply.data.messages.at(-1).state,
      "accepted",
      "Chat SMTP handoff must be accepted",
    );
    checks.push(
      "SMTP: one Chat reply accepted by the configured mail server, persisted without retry",
    );
  }
  return checks;
}
