//client
import type { Caller } from '../auth/types.js';

//--------------------------------------------------------------------//
// Types

//conversation attachment snapshot returned through authorized file routes
export type Attachment = {
  id: string,
  name: string,
  content: string,
  type: string
};

//supported message transports; availability still depends on registered
// providers
export type Channel = 'email' | 'messenger' | 'whatsapp' | 'viber';

//app-scoped conversation access, per-caller state and provider handoff
// boundary
export type ChatService = {
  list(caller: Caller): Promise<Array<Conversation & { unread: number }>>,
  read(caller: Caller, id: string): Promise<ConversationView>,
  draft(
    caller: Caller,
    id: string,
    input: { draft: string, kind: 'reply' | 'note', revision: number }
  ): Promise<ConversationState>,
  markRead(caller: Caller, id: string): Promise<void>,
  send(
    caller: Caller,
    id: string,
    input: {
      body: string,
      kind: 'reply' | 'note',
      revision: number,
      template?: { versionId: string, templateId: string, subject: string }
    }
  ): Promise<Conversation>,
  status(
    caller: Caller,
    id: string,
    status: Conversation['status'],
    revision: number
  ): Promise<Conversation>,
  resolveRequest(
    caller: Caller,
    id: string,
    action: RequestAction,
    revision: number
  ): Promise<Conversation>,
  create(caller: Caller, value: Conversation): Promise<void>,
  arrive(caller: Caller, id: string, body: string): Promise<Conversation>,
  subscribe(listener: () => void): () => void
};

//shared conversation snapshot; access and revision are enforced by the chat
// service
export type Conversation = {
  //missing inbox on older records means an established conversation
  inbox?: ConversationInbox,
  senderAddress?: string,
  id: string,
  revision: number,
  contact: string,
  company: string,
  subject: string,
  channel: Channel,
  status: 'New' | 'Open' | 'Pending' | 'Closed',
  priority: string,
  department: string,
  assignee: string,
  access: string[],
  messages: Message[],
  updated: string
};

//request lifecycle separate from the conversation support status
export type ConversationInbox = 'messages' | 'requests' | 'blocked' | 'deleted';

//per-caller draft/read position with an independent concurrency revision
export type ConversationState = {
  draft: string,
  kind: 'reply' | 'note',
  readCount: number,
  revision: number
};

//authorized conversation, caller state and current sending availability
export type ConversationView = {
  conversation: Conversation,
  state: ConversationState,
  canSend: boolean
};

//incoming, reply, note or audit entry with an optional handoff/attachment
// snapshot
export type Message = {
  id: string,
  author: string,
  body: string,
  at: string,
  kind: 'incoming' | 'reply' | 'note' | 'event',
  state?: 'sending' | 'accepted' | 'failed',
  error?: string,
  attachments?: Attachment[],
  template?: { versionId: string, templateId: string, subject: string }
};

//allowed request inbox transitions enforced by the chat service
export type RequestAction = 'accept' | 'block' | 'delete' | 'restore';
