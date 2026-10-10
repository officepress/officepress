//node
import { randomUUID } from 'node:crypto';

//modules
import Engine from '@stackpress/inquire/Engine';

//client
import type { Caller } from '../auth/types.js';
import type {
  ChatService,
  Conversation,
  ConversationState,
  Message
} from './types.js';

//--------------------------------------------------------------------//
// Types

type Mail = {
  ready(): boolean,
  send(input: {
    subject: string,
    text: string
  }): Promise<{ accepted: boolean, error?: string }>
};

//--------------------------------------------------------------------//
// Constants

/**
 * Check whether the caller has a conversation write role.
 */
const canWrite = (caller: Caller) =>
  caller.roles.includes('ADMIN') || caller.roles.includes('MEMBER');

/**
 * Build a new per-caller draft state with no read or persistence revision.
 */
const createDraftState = (): ConversationState => ({
  draft: '',
  kind: 'reply',
  readCount: 0,
  revision: 0
});

//--------------------------------------------------------------------//
// Functions

/**
 * Create the app-scoped conversation service and optional mail handoff
 * boundary.
 */
export function createChat(
  database: Engine,
  appId: string,
  mail?: Mail
): ChatService {
  //listeners receive change hints; clients must refetch through authorized
  // endpoints
  const listeners = new Set<() => void>();
  //notify the registered listeners after a conversation snapshot changes
  const notifyListeners = () => listeners.forEach((listener) => listener());
  //enforce the resource’s availability and caller access before returning
  // its data
  function checkConversationAccess(caller: Caller, conversation: Conversation) {
    if (
      !caller.id ||
      !caller.roles.some((role) =>
        [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role)
      ) ||
      !(
        caller.roles.includes('ADMIN') ||
        conversation.access.includes('*') ||
        conversation.access.includes(caller.id)
      )
    )
      throw new ChatError('Conversation is unavailable.', 404);
  }
  //require a conversation write role before allowing a mutation
  function requireWriteAccess(caller: Caller) {
    if (!canWrite(caller))
      throw new ChatError('You have read-only access.', 403);
  }
  //read an app-scoped conversation and enforce the caller’s access policy
  async function readConversation(
    caller: Caller,
    id: string,
    executor = database
  ) {
    const rows = await executor.query<{
      payload: Conversation,
      revision: number
    }>(
      'SELECT payload,revision FROM component_conversation WHERE id=? AND app_id=?',
      [ id, appId ]
    );
    if (!rows.length) throw new ChatError('Conversation is unavailable.', 404);
    const conversation = {
      ...rows[0].payload,
      revision: rows[0].revision
    } as Conversation;
    //hide inaccessible conversations with the same response as a missing
    // record
    checkConversationAccess(caller, conversation);
    return conversation;
  }
  //build the app, caller and conversation scoped state key
  const makeStateKey = (caller: Caller, id: string) =>
    `${appId}:${caller.id}:${id}`;
  //read the caller’s saved conversation state or return a new draft state
  async function readCallerState(caller: Caller, id: string) {
    const rows = await database.query<{
      payload: ConversationState,
      revision: number
    }>(
      'SELECT payload,revision FROM component_conversation_state WHERE id=? AND app_id=? AND owner_id=?',
      [ makeStateKey(caller, id), appId, caller.id ]
    );
    return rows.length
      ? ({
          ...rows[0].payload,
          revision: rows[0].revision
        } as ConversationState)
      : createDraftState();
  }
  //validate and persist the chat change using its expected revision
  async function saveConversation(
    conversation: Conversation,
    revision: number,
    executor = database
  ) {
    if (!Number.isInteger(revision) || revision < 0)
      throw new ChatError('Invalid conversation revision.');
    //optimistic concurrency protects the shared conversation independently
    // from each caller’s draft/read-state revision
    const updated = new Date().toISOString();
    const rows = await executor.query<{ revision: number }>(
      'UPDATE component_conversation SET payload=?,revision=revision+1 WHERE id=? AND app_id=? AND revision=? RETURNING revision',
      [
        JSON.stringify({ ...conversation, updated }),
        conversation.id,
        appId,
        revision
      ]
    );
    if (!rows.length)
      throw new ChatError(
        'This conversation changed. Refresh before applying your change.',
        409
      );
    notifyListeners();
    return {
      ...conversation,
      updated,
      revision: rows[0].revision
    } as Conversation;
  }
  //persist per-caller draft/read state using its expected revision
  async function saveCallerState(
    caller: Caller,
    id: string,
    value: ConversationState,
    expected: number
  ) {
    if (!Number.isInteger(expected) || expected < 0)
      throw new ChatError('Invalid draft revision.');
    //create the caller’s state row once, then compare-and-update its
    // revision
    await database.query<{ revision: number }>(
      'INSERT INTO component_conversation_state(id,app_id,owner_id,payload,revision) VALUES(?,?,?,?,0) ON CONFLICT(id) DO NOTHING',
      [
        makeStateKey(caller, id),
        appId,
        caller.id,
        JSON.stringify(createDraftState())
      ]
    );
    const rows = await database.query<{ revision: number }>(
      'UPDATE component_conversation_state SET payload=?,revision=revision+1 WHERE id=? AND app_id=? AND owner_id=? AND revision=? RETURNING revision',
      [
        JSON.stringify(value),
        makeStateKey(caller, id),
        appId,
        caller.id,
        expected
      ]
    );
    if (!rows.length)
      throw new ChatError(
        'Your draft changed in another window. Reload it before saving.',
        409
      );
    return { ...value, revision: rows[0].revision } as ConversationState;
  }
  const service: ChatService = {
    //read the app-scoped chat collection for the caller
    async list(caller) {
      const rows = await database.query<{
        payload: Conversation,
        revision: number
      }>('SELECT payload,revision FROM component_conversation WHERE app_id=?', [
        appId
      ]);
      const values = [];
      for (const row of rows) {
        const conversation = {
          ...row.payload,
          revision: row.revision
        } as Conversation;
        try {
          checkConversationAccess(caller, conversation);
        } catch {
          //inaccessible rows are omitted without revealing their existence
          continue;
        }
        //blocked/deleted requests stay out of ordinary inbox listings
        if (
          conversation.inbox === 'blocked' ||
          conversation.inbox === 'deleted'
        )
          continue;
        const callerState = await readCallerState(caller, conversation.id);
        values.push({
          ...conversation,
          unread: Math.max(
            0,
            conversation.messages.filter(
              (message) => message.kind === 'incoming'
            ).length - callerState.readCount
          )
        });
      }
      return values.sort((leftConversation, rightConversation) =>
        rightConversation.updated.localeCompare(leftConversation.updated)
      );
    },
    //read the accessible chat snapshot for the caller
    async read(caller, id) {
      const conversation = await readConversation(caller, id);
      return {
        conversation: conversation,
        state: await readCallerState(caller, id),
        canSend:
          (!conversation.inbox || conversation.inbox === 'messages') &&
          conversation.channel === 'email' &&
          !!mail?.ready()
      };
    },
    //validate and persist the caller’s conversation draft with its expected
    // revision
    async draft(caller, id, input) {
      requireWriteAccess(caller);
      await readConversation(caller, id);
      if (
        typeof input.draft !== 'string' ||
        input.draft.length > 10000 ||
        ![ 'reply', 'note' ].includes(input.kind)
      )
        throw new ChatError('Use a message of at most 10,000 characters.');
      const callerState = await readCallerState(caller, id);
      return saveCallerState(
        caller,
        id,
        { ...callerState, draft: input.draft, kind: input.kind },
        input.revision
      );
    },
    //persist the current incoming-message count for this caller’s read
    // state
    async markRead(caller, id) {
      const conversation = await readConversation(caller, id);
      const callerState = await readCallerState(caller, id);
      await saveCallerState(
        caller,
        id,
        {
          ...callerState,
          readCount: conversation.messages.filter(
            (message) => message.kind === 'incoming'
          ).length
        },
        callerState.revision
      );
    },
    //create the authorized chat record with its initial state
    async create(caller, conversation) {
      if (!caller.roles.includes('ADMIN'))
        throw new ChatError('Administrator access required.', 403);
      await database.query<{ revision: number }>(
        'INSERT INTO component_conversation(id,app_id,payload,revision) VALUES(?,?,?,0)',
        [ conversation.id, appId, JSON.stringify(conversation) ]
      );
      notifyListeners();
    },
    //validate the request transition, append its audit message and save
    // with a revision check
    async resolveRequest(caller, id, action, revision) {
      requireWriteAccess(caller);
      if (![ 'accept', 'block', 'delete', 'restore' ].includes(action))
        throw new ChatError('Choose a valid request action.');
      const conversation = await readConversation(caller, id);
      //requests have their own inbox state, independent of support status
      const isRestoring = action === 'restore';
      if (
        isRestoring
          ? ![ 'blocked', 'deleted' ].includes(conversation.inbox || '')
          : conversation.inbox !== 'requests'
      )
        throw new ChatError(
          'This request has already changed. Refresh before trying again.',
          409
        );
      //each accepted command owns one destination and one audit message
      const transitions = {
        accept: { inbox: 'messages', message: 'Accepted the request' },
        block: { inbox: 'blocked', message: 'Blocked the request' },
        delete: { inbox: 'deleted', message: 'Deleted the request' },
        restore: { inbox: 'requests', message: 'Restored the request' }
      } as const;
      const transition = transitions[action];
      conversation.messages.push({
        id: randomUUID(),
        author: caller.name,
        body: transition.message,
        at: new Date().toISOString(),
        kind: 'event'
      });
      return saveConversation(
        { ...conversation, inbox: transition.inbox },
        revision
      );
    },
    //persist the requested support status and append its audit message
    async status(caller, id, next, revision) {
      requireWriteAccess(caller);
      if (![ 'New', 'Open', 'Pending', 'Closed' ].includes(next))
        throw new ChatError('Choose a valid status.');
      const conversation = await readConversation(caller, id);
      conversation.messages.push({
        id: randomUUID(),
        kind: 'event',
        author: caller.name,
        body: `Changed status from ${conversation.status} to ${next}`,
        at: new Date().toISOString()
      });
      return saveConversation({ ...conversation, status: next }, revision);
    },
    //validate the outbound change, persist its intent and record the
    // provider handoff result
    async send(caller, id, input) {
      requireWriteAccess(caller);
      if (
        typeof input.body !== 'string' ||
        !input.body.trim() ||
        input.body.length > 10000 ||
        ![ 'reply', 'note' ].includes(input.kind)
      )
        throw new ChatError('Enter a message of at most 10,000 characters.');
      const conversation = await readConversation(caller, id);
      //internal notes need no mail provider; replies require an email
      // channel
      if (
        input.kind === 'reply' &&
        (conversation.channel !== 'email' || !mail?.ready())
      )
        throw new ChatError(
          'This channel is not connected. You can save a draft or add an internal note.',
          503
        );
      if (conversation.inbox && conversation.inbox !== 'messages')
        throw new ChatError(
          'Accept this request before replying or adding notes.',
          409
        );
      const message: Message = {
        id: randomUUID(),
        author: caller.name,
        body: input.body.trim(),
        at: new Date().toISOString(),
        kind: input.kind,
        ...(input.kind === 'reply' ? { state: 'sending' as const } : {}),
        ...(input.template ? { template: input.template } : {})
      };
      conversation.messages.push(message);
      //persist the sending intent once before calling the external provider
      let saved = await saveConversation(conversation, input.revision);
      if (input.kind === 'reply') {
        let result;
        try {
          result = await mail!.send({
            subject: input.template?.subject || `Re: ${conversation.subject}`,
            text: message.body
          });
        } catch {
          //turn a failed external handoff into stored message state,
          // preserving the single-attempt rule instead of automatically
          // sending again
          result = { accepted: false, error: 'The mail send call failed.' };
        }
        //One handoff only. Persist result into the current version without
        // overwriting other edits.
        await database.transaction(async (connection) => {
          //keep this merge on the callback connection and retain serialized
          // transaction ownership
          const executor = new Engine(connection);
          executor.before = database.before;
          //merge only this message’s provider result into the latest record
          // so edits made during the provider call are retained
          const latest = await readConversation(caller, id, executor);
          const item = latest.messages.find(
            (candidateMessage) => candidateMessage.id === message.id
          )!;
          item.state = result.accepted ? 'accepted' : 'failed';
          item.error = result.error;
          saved = await saveConversation(latest, latest.revision, executor);
        });
      }
      return saved;
    },
    //append a trusted incoming message to an accessible, receiving
    // conversation
    async arrive(caller, id, body) {
      if (!caller.roles.includes('ADMIN'))
        throw new ChatError('Administrator access required.', 403);
      if (typeof body !== 'string' || !body.trim() || body.length > 10000)
        throw new ChatError('Enter an incoming message.');
      const conversation = await readConversation(caller, id);
      if (conversation.inbox === 'blocked' || conversation.inbox === 'deleted')
        throw new ChatError(
          'This conversation is no longer receiving messages.',
          409
        );
      conversation.messages.push({
        id: randomUUID(),
        kind: 'incoming',
        author: conversation.contact,
        body,
        at: new Date().toISOString()
      });
      return saveConversation(conversation, conversation.revision);
    },
    //register a local observer and return the callback that removes it
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
  return service;
};

//--------------------------------------------------------------------//
// Classes

/**
 * Carry a conversation failure and its HTTP status for event response
 * formatting.
 */
export class ChatError extends Error {
  //retain the domain status beside the message for the event error adapter
  public constructor(
    message: string,
    //response status forwarded by the chat event error adapter
    public code = 400
  ) {
    super(message);
  }
};
