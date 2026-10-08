import assert from "node:assert/strict";
import type { HttpServer } from "@stackpress/ingest";
import type Engine from "@stackpress/inquire/Engine";
import type { Caller } from "../../auth/types.js";
import type { ChatService, Conversation } from "../types.js";
import { createChat } from "../service.js";
export async function contracts(
  server: HttpServer<any>,
  callers: Record<string, Caller>,
) {
  const db = server.plugin<Engine>("database"),
    appId = server.config.path<string>("officepress.appId"),
    service = server.plugin<ChatService>("chat"),
    { admin, member, readonly, other } = callers;
  const v: Conversation = {
    id: "chat-contract",
    revision: 0,
    contact: "Alex Contact",
    company: "OfficePress",
    subject: "Contract conversation",
    channel: "email",
    status: "New",
    priority: "Normal",
    department: "Support",
    assignee: member.name,
    access: [member.id, readonly.id],
    updated: new Date().toISOString(),
    messages: [],
  };
  await service.create(admin, v);
  await assert.rejects(service.read(other, v.id));
  await assert.rejects(service.status(readonly, v.id, "Open", 0));
  await assert.rejects(service.status(member, v.id, "Invalid" as any, 0));
  let next = await service.status(member, v.id, "Open", 0);
  await assert.rejects(service.status(member, v.id, "Closed", 0));
  assert.equal((await service.read(member, v.id)).conversation.status, "Open");
  const state = await service.draft(member, v.id, {
    draft: "Keep this draft",
    kind: "note",
    revision: 0,
  });
  await assert.rejects(
    service.draft(member, v.id, {
      draft: "Overwrite",
      kind: "note",
      revision: 0,
    }),
  );
  assert.equal(state.draft, "Keep this draft");
  assert.equal((await service.read(readonly, v.id)).state.draft, "");
  let changes = 0;
  const unsubscribe = service.subscribe(() => changes++);
  await service.arrive(admin, v.id, "An incoming update");
  assert.equal(changes, 1);
  assert.equal(
    (await service.list(member)).find((t) => t.id === v.id)?.unread,
    1,
  );
  await service.markRead(member, v.id);
  assert.equal(
    (await service.list(member)).find((t) => t.id === v.id)?.unread,
    0,
  );
  unsubscribe();
  const noMail = createChat(db, appId);
  next = (await noMail.read(member, v.id)).conversation;
  await assert.rejects(
    noMail.send(member, v.id, {
      body: "Unavailable",
      kind: "reply",
      revision: next.revision,
    }),
  );
  next = await noMail.send(member, v.id, {
    body: "Private team note",
    kind: "note",
    revision: next.revision,
  });
  assert.equal(next.messages.at(-1)?.kind, "note");
  // Adapter stand-ins exercise the handoff boundary. Real SMTP is a separate opt-in test.
  let sends = 0;
  const withMail = createChat(db, appId, {
    ready: () => true,
    send: async () => {
      sends++;
      return { accepted: true };
    },
  });
  next = await withMail.send(member, v.id, {
    body: "One handoff",
    kind: "reply",
    revision: next.revision,
  });
  assert.equal(sends, 1);
  assert.equal(next.messages.at(-1)?.state, "accepted");
  await assert.rejects(
    withMail.send(member, v.id, {
      body: "Stale duplicate",
      kind: "reply",
      revision: next.revision - 1,
    }),
  );
  assert.equal(sends, 1);
  const failure = createChat(db, appId, {
    ready: () => true,
    send: async () => {
      sends++;
      throw Error("transport");
    },
  });
  next = await failure.send(member, v.id, {
    body: "Failed send",
    kind: "reply",
    revision: next.revision,
  });
  assert.equal(sends, 2);
  assert.equal(next.messages.at(-1)?.state, "failed");
  const restarted = createChat(db, appId);
  assert.equal(
    (await restarted.read(member, v.id)).state.draft,
    "Keep this draft",
  );
  assert.equal(
    (await restarted.read(member, v.id)).conversation.messages.at(-1)?.state,
    "failed",
  );
  // Request disposition persists separately from the support status and is revision checked.
  const request = {
    ...v,
    id: "request-contract",
    inbox: "requests" as const,
    messages: [],
  };
  await service.create(admin, request);
  assert.equal((await service.read(member, request.id)).canSend, false);
  await assert.rejects(service.resolveRequest(other, request.id, "accept", 0));
  await assert.rejects(
    service.resolveRequest(readonly, request.id, "accept", 0),
  );
  await assert.rejects(
    service.resolveRequest(member, request.id, "invalid" as any, 0),
  );
  await assert.rejects(
    withMail.send(member, request.id, {
      body: "Premature reply",
      kind: "reply",
      revision: 0,
    }),
  );
  assert.equal(sends, 2);
  const accepted = await service.resolveRequest(
    member,
    request.id,
    "accept",
    0,
  );
  assert.equal(accepted.inbox, "messages");
  assert.equal(
    accepted.status,
    "New",
    "Inbox acceptance is not a support-status change",
  );
  assert.equal(
    (await restarted.read(member, request.id)).conversation.inbox,
    "messages",
  );
  await assert.rejects(service.resolveRequest(member, request.id, "block", 0));
  await service.create(admin, { ...request, id: "blocked-request-contract" });
  const blocked = await service.resolveRequest(
    member,
    "blocked-request-contract",
    "block",
    0,
  );
  assert.equal(
    (await restarted.read(member, blocked.id)).conversation.inbox,
    "blocked",
  );
  assert.equal(
    (await service.list(member)).some((item) => item.id === blocked.id),
    false,
  );
  await assert.rejects(service.arrive(admin, blocked.id, "Blocked arrival"));
  let restored = await service.resolveRequest(
    member,
    blocked.id,
    "restore",
    blocked.revision,
  );
  const deleted = await service.resolveRequest(
    member,
    blocked.id,
    "delete",
    restored.revision,
  );
  assert.equal(
    (await restarted.read(member, deleted.id)).conversation.inbox,
    "deleted",
  );
  assert.equal(
    (await service.list(member)).some((item) => item.id === deleted.id),
    false,
  );
  await assert.rejects(
    service.resolveRequest(member, deleted.id, "restore", restored.revision),
  );
  restored = await service.resolveRequest(
    member,
    deleted.id,
    "restore",
    deleted.revision,
  );
  assert.equal(restored.inbox, "requests");
  assert.equal(restored.messages.length, 4, "Undo retains disposition history");
  assert.equal(
    (await service.read(member, v.id)).conversation.inbox,
    undefined,
    "Legacy conversations remain established messages",
  );
  return [
    "Chat: request accept/block/delete/undo persist with scoped permissions, stale protection and no premature send",
    "Chat: scoped access, read-only denial and invalid status",
    "Chat: atomic stale updates and private persistent drafts",
    "Chat: live change hints, caller-scoped unread and stable snapshots",
    "Chat: notes work without mail; unavailable replies do not send",
    "Chat: one accepted/error handoff, no stale duplicate or automatic retry",
    "Chat: service restart preserves history and draft",
  ];
}
