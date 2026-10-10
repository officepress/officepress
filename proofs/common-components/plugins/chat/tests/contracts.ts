//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../../auth/types.js';
import type { ChatService, Conversation } from '../types.js';
import { createChat } from '../service.js';

/**
 * Prove scoped conversations and private drafts, one mail handoff, durable
 * failure state and revision-checked request dispositions.
 */
export async function contracts(
  server: HttpServer<import('../../app/types.js').Config>,
  callers: Record<string, Caller>
) {
  //use the registered service and its database for durable conversation
  // checks
  const database = server.plugin<Engine>('database');
  const appId = server.config.path<string>('officepress.appId');
  const service = server.plugin<ChatService>('chat');
  const { admin, member, readonly, other } = callers;

  //create an access-scoped conversation shared with a member and read-only
  // user
  const conversationFixture: Conversation = {
    id: 'chat-contract',
    revision: 0,
    contact: 'Alex Contact',
    company: 'OfficePress',
    subject: 'Contract conversation',
    channel: 'email',
    status: 'New',
    priority: 'Normal',
    department: 'Support',
    assignee: member.name,
    access: [ member.id, readonly.id ],
    updated: new Date().toISOString(),
    messages: []
  };

  //foreign callers, read-only writers and unknown statuses must be rejected
  await service.create(admin, conversationFixture);
  await assert.rejects(service.read(other, conversationFixture.id));
  await assert.rejects(
    service.status(readonly, conversationFixture.id, 'Open', 0)
  );
  await assert.rejects(
    service.status(
      member,
      conversationFixture.id,
      'Invalid' as Parameters<typeof service.status>[2],
      0
    )
  );
  let next = await service.status(member, conversationFixture.id, 'Open', 0);

  //one status edit advances the revision; replaying the old revision fails
  await assert.rejects(
    service.status(member, conversationFixture.id, 'Closed', 0)
  );
  assert.equal(
    (await service.read(member, conversationFixture.id)).conversation.status,
    'Open'
  );
  const state = await service.draft(member, conversationFixture.id, {
    draft: 'Keep this draft',
    kind: 'note',
    revision: 0
  });

  //drafts are private to their author and use a separate revision boundary
  await assert.rejects(
    service.draft(member, conversationFixture.id, {
      draft: 'Overwrite',
      kind: 'note',
      revision: 0
    })
  );
  assert.equal(state.draft, 'Keep this draft');
  assert.equal(
    (await service.read(readonly, conversationFixture.id)).state.draft,
    ''
  );
  let changes = 0;

  //one incoming message emits one hint and changes only the recipient
  // unread count
  const unsubscribe = service.subscribe(() => changes++);
  await service.arrive(admin, conversationFixture.id, 'An incoming update');
  assert.equal(changes, 1);
  assert.equal(
    (await service.list(member)).find(
      (candidateConversation) =>
        candidateConversation.id === conversationFixture.id
    )?.unread,
    1
  );
  await service.markRead(member, conversationFixture.id);
  assert.equal(
    (await service.list(member)).find(
      (candidateConversation) =>
        candidateConversation.id === conversationFixture.id
    )?.unread,
    0
  );
  unsubscribe();
  const noMail = createChat(database, appId);
  next = (await noMail.read(member, conversationFixture.id)).conversation;

  //without a mail adapter, replies fail while private notes still persist
  await assert.rejects(
    noMail.send(member, conversationFixture.id, {
      body: 'Unavailable',
      kind: 'reply',
      revision: next.revision
    })
  );
  next = await noMail.send(member, conversationFixture.id, {
    body: 'Private team note',
    kind: 'note',
    revision: next.revision
  });
  assert.equal(next.messages.at(-1)?.kind, 'note');
  //Adapter stand-ins exercise the handoff boundary. Real SMTP is a separate
  // opt-in test.
  let sends = 0;
  const withMail = createChat(database, appId, {
    ready: () => true,
    send: async () => {
      sends++;
      return { accepted: true };
    }
  });

  //an accepted handoff must be recorded once before any stale retry is
  // rejected
  next = await withMail.send(member, conversationFixture.id, {
    body: 'One handoff',
    kind: 'reply',
    revision: next.revision
  });
  assert.equal(sends, 1);
  assert.equal(next.messages.at(-1)?.state, 'accepted');
  await assert.rejects(
    withMail.send(member, conversationFixture.id, {
      body: 'Stale duplicate',
      kind: 'reply',
      revision: next.revision - 1
    })
  );
  assert.equal(sends, 1);

  //a transport failure remains visible instead of pretending delivery
  // succeeded
  const failure = createChat(database, appId, {
    ready: () => true,
    send: async () => {
      sends++;
      throw Error('transport');
    }
  });
  next = await failure.send(member, conversationFixture.id, {
    body: 'Failed send',
    kind: 'reply',
    revision: next.revision
  });
  assert.equal(sends, 2);
  assert.equal(next.messages.at(-1)?.state, 'failed');
  const restarted = createChat(database, appId);

  //reconstruct the service to prove draft and failed-message history are
  // durable
  assert.equal(
    (await restarted.read(member, conversationFixture.id)).state.draft,
    'Keep this draft'
  );
  assert.equal(
    (
      await restarted.read(member, conversationFixture.id)
    ).conversation.messages.at(-1)?.state,
    'failed'
  );
  //request disposition persists separately from the support status and is
  // revision checked
  const request = {
    ...conversationFixture,
    id: 'request-contract',
    inbox: 'requests' as const,
    messages: []
  };
  await service.create(admin, request);
  assert.equal((await service.read(member, request.id)).canSend, false);
  await assert.rejects(service.resolveRequest(other, request.id, 'accept', 0));
  await assert.rejects(
    service.resolveRequest(readonly, request.id, 'accept', 0)
  );

  //an incoming request cannot send before an authorized acceptance
  await assert.rejects(
    service.resolveRequest(
      member,
      request.id,
      'invalid' as Parameters<typeof service.resolveRequest>[2],
      0
    )
  );
  await assert.rejects(
    withMail.send(member, request.id, {
      body: 'Premature reply',
      kind: 'reply',
      revision: 0
    })
  );
  assert.equal(sends, 2);
  const accepted = await service.resolveRequest(
    member,
    request.id,
    'accept',
    0
  );
  assert.equal(accepted.inbox, 'messages');
  assert.equal(
    accepted.status,
    'New',
    'Inbox acceptance is not a support-status change'
  );

  //acceptance changes inbox disposition while retaining the support status
  assert.equal(
    (await restarted.read(member, request.id)).conversation.inbox,
    'messages'
  );
  await assert.rejects(service.resolveRequest(member, request.id, 'block', 0));
  await service.create(admin, { ...request, id: 'blocked-request-contract' });
  const blocked = await service.resolveRequest(
    member,
    'blocked-request-contract',
    'block',
    0
  );
  assert.equal(
    (await restarted.read(member, blocked.id)).conversation.inbox,
    'blocked'
  );

  //blocked requests disappear from the list and reject further arrivals
  assert.equal(
    (await service.list(member)).some((item) => item.id === blocked.id),
    false
  );
  await assert.rejects(service.arrive(admin, blocked.id, 'Blocked arrival'));
  let restored = await service.resolveRequest(
    member,
    blocked.id,
    'restore',
    blocked.revision
  );
  const deleted = await service.resolveRequest(
    member,
    blocked.id,
    'delete',
    restored.revision
  );

  //delete and restore retain history while enforcing the current revision
  assert.equal(
    (await restarted.read(member, deleted.id)).conversation.inbox,
    'deleted'
  );
  assert.equal(
    (await service.list(member)).some((item) => item.id === deleted.id),
    false
  );
  await assert.rejects(
    service.resolveRequest(member, deleted.id, 'restore', restored.revision)
  );
  restored = await service.resolveRequest(
    member,
    deleted.id,
    'restore',
    deleted.revision
  );
  assert.equal(restored.inbox, 'requests');
  assert.equal(restored.messages.length, 4, 'Undo retains disposition history');

  //legacy established conversations do not need an explicit inbox field
  assert.equal(
    (await service.read(member, conversationFixture.id)).conversation.inbox,
    undefined,
    'Legacy conversations remain established messages'
  );
  return [
    'Chat: request accept/block/delete/undo persist with scoped permissions, stale protection and no premature send',
    'Chat: scoped access, read-only denial and invalid status',
    'Chat: atomic stale updates and private persistent drafts',
    'Chat: live change hints, caller-scoped unread and stable snapshots',
    'Chat: notes work without mail; unavailable replies do not send',
    'Chat: one accepted/error handoff, no stale duplicate or automatic retry',
    'Chat: service restart preserves history and draft'
  ];
};
