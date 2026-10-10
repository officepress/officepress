//modules
import { useEffect, useRef, useState } from 'react';

//client
import type { Caller } from '../../auth/types.js';
import type {
  TemplateVersion,
  RenderedTemplate
} from '../../templates/types.js';
import type {
  Conversation,
  ConversationView,
  ConversationState,
  RequestAction
} from '../types.js';
import { requestJson } from '../../app/client.js';
import { usePanels } from '../../settings/shell/panels.js';
import {
  ConversationDetails,
  ChatMessage,
  getMessagePreview,
  getInitials,
  formatShortDate
} from './presentation.js';
import { RequestPreview } from './requests.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Hooks

/**
 * Keep chat request state, revision checks and subscriptions together.
 */
function useChat({ csrf, user }: { csrf: string, user: Caller }) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  //own list, selected thread, draft and template state together in this
  // local hook
  const [ rows, setRows ] = useState<Array<Conversation & { unread: number }>>(
    []
  );
  const [ view, setView ] = useState<ConversationView | null>(null);
  const [ selected, setSelected ] = useState('');
  const [ mode, setMode ] = useState('support');
  const [ search, setSearch ] = useState('');
  const [ inbox, setInbox ] = useState<'messages' | 'requests'>('messages');
  const [ requestUndo, setRequestUndo ] = useState<Conversation | null>(null);
  const [ requestNotice, setRequestNotice ] = useState('');
  const [ draft, setDraft ] = useState('');
  const [ kind, setKind ] = useState<'reply' | 'note'>('reply');
  const [ state, setState ] = useState<ConversationState | null>(null);
  const [ notice, setNotice ] = useState('');
  const [ error, setError ] = useState('');
  const [ isBusy, setIsBusy ] = useState(false);
  const [ connection, setConnection ] = useState('Connecting');
  const [ hasTemplates, setHasTemplates ] = useState(false);
  const [ picker, setPicker ] = useState<TemplateVersion[] | null>(null);
  const [ template, setTemplate ] = useState<TemplateVersion | null>(null);
  const [ values, setValues ] = useState<Record<string, string>>({});
  const [ inserted, setInserted ] = useState<RenderedTemplate | null>(null);
  const [ isMobileThread, setIsMobileThread ] = useState(false);
  const { showDetails, closeDetails } = usePanels();
  const messagesRef = useRef<HTMLDivElement>(null);
  const nearLatestRef = useRef(true);
  const selectedRef = useRef('');

  //--------------------------------------------------------------------//
  // Derived presentation

  //async refreshes compare against the latest selection rather than a
  // closed-over earlier thread
  selectedRef.current = selected;
  const canWrite =
    user.roles.includes('ADMIN') || user.roles.includes('MEMBER');
  const channelRows = rows.filter(
    (candidateConversation) =>
      mode !== 'email' || candidateConversation.channel === 'email'
  );
  const visible = channelRows.filter(
    (candidateConversation) =>
      (candidateConversation.inbox || 'messages') === inbox &&
      `${candidateConversation.contact} ${candidateConversation.subject} ${candidateConversation.senderAddress || ''}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  const unreadConversations = channelRows.filter(
    (candidateConversation) =>
      (!candidateConversation.inbox ||
        candidateConversation.inbox === 'messages') &&
      candidateConversation.unread > 0
  ).length;
  const requestCount = channelRows.filter(
    (candidateConversation) => candidateConversation.inbox === 'requests'
  ).length;
  //derive the rendered conversation from the current server snapshot
  const conversation = view?.conversation;

  //--------------------------------------------------------------------//
  // Interaction handlers

  //load the authorized conversation snapshot and its caller-private draft
  async function handleLoad() {
    const data = await requestJson<{
      conversations: typeof rows,
      templates: boolean
    }>('/api/chat');
    setRows(data.conversations);
    setHasTemplates(data.templates);
    return data.conversations;
  }
  //refresh the inbox without replacing an unrelated local selection
  async function handleRefresh() {
    try {
      await handleLoad();
      if (selectedRef.current) {
        const latest = await requestJson<ConversationView>(
          `/api/chat/detail?id=${encodeURIComponent(selectedRef.current)}`
        );
        if (latest.conversation.id === selectedRef.current) setView(latest);
      }
    } catch (caughtError) {
      setError((caughtError as Error).message);
    }
  }
  //load the selected conversation and ignore a response superseded by
  // another selection
  async function handleChoose(id: string) {
    closeDetails();
    nearLatestRef.current = true;
    setError('');
    setNotice('');
    setSelected(id);
    selectedRef.current = id;
    setIsMobileThread(true);
    setInserted(null);
    setPicker(null);
    setTemplate(null);
    const next = await requestJson<ConversationView>(
      '/api/chat/read',
      { id },
      csrf
    );
    //ignore a late response after the user chose another conversation
    if (selectedRef.current !== id) return;
    setView(next);
    setState(next.state);
    setDraft(next.state.draft);
    setKind(next.state.kind);
    await handleLoad();
  }
  //open the shell detail panel for the selected conversation
  function handleDetails(conversation: Conversation) {
    showDetails({
      title: 'Conversation details',
      content: <ConversationDetails conversation={conversation} />
    });
  }
  //persist the current caller’s draft using the saved state revision
  async function handleSaveDraft() {
    if (!view || !state) return;
    setIsBusy(true);
    setError('');
    try {
      const next = await requestJson<ConversationState>(
        '/api/chat/draft',
        { id: selected, draft, kind, revision: state.revision },
        csrf
      );
      setState(next);
      setNotice('Draft saved.');
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //forward a send/note command; the server owns validation and provider
  // handoff
  async function handleSend() {
    if (!view) return;
    setIsBusy(true);
    setError('');
    try {
      const next = await requestJson<Conversation>(
        '/api/chat/send',
        {
          id: selected,
          body: draft,
          kind,
          revision: view.conversation.revision,
          ...(inserted && kind === 'reply'
            ? {
                templateId: inserted.templateId,
                versionId: inserted.versionId,
                values
              }
            : {})
        },
        csrf
      );
      setView({ ...view, conversation: next });
      const last = next.messages.at(-1);
      setNotice(
        kind === 'note'
          ? 'Internal note added.'
          : last?.state === 'accepted'
            ? 'Message accepted by the mail service.'
            : 'The mail service returned an error. Your draft is kept.'
      );
      if (kind === 'note' || last?.state === 'accepted') {
        setDraft('');
        setInserted(null);
        if (state) {
          const nextState = await requestJson<ConversationState>(
            '/api/chat/draft',
            { id: selected, draft: '', kind, revision: state.revision },
            csrf
          );
          setState(nextState);
        }
      }
      await handleLoad();
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //submit a revision-checked status command and adopt the server snapshot
  async function handleStatus(next: string) {
    if (!view) return;
    setIsBusy(true);
    try {
      const changed = await requestJson<Conversation>(
        '/api/chat/status',
        { id: selected, status: next, revision: view.conversation.revision },
        csrf
      );
      setView({ ...view, conversation: changed });
      await handleLoad();
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //load published templates available for the current conversation channel
  async function handleOpenTemplates() {
    try {
      setPicker(
        (
          await requestJson<{ items: TemplateVersion[] }>(
            `/api/chat/templates?id=${selected}`
          )
        ).items
      );
      setTemplate(null);
      setValues({});
    } catch (caughtError) {
      setError((caughtError as Error).message);
    }
  }
  //resolve the selected published template and insert its text into the
  // draft
  async function handleInsert() {
    if (!template) return;
    try {
      const result = await requestJson<RenderedTemplate>(
        '/api/chat/template',
        { id: selected, templateId: template.templateId, values },
        csrf
      );
      setDraft(result.text);
      setInserted(result);
      setPicker(null);
    } catch (caughtError) {
      setError((caughtError as Error).message);
    }
  }
  //switching sections opens a matching conversation while keeping mobile
  // navigation explicit
  function handleSwitchInbox(
    nextInbox: 'messages' | 'requests',
    nextMode = mode
  ) {
    setInbox(nextInbox);
    setMode(nextMode);
    setSearch('');
    closeDetails();
    const first = rows.find(
      (candidateConversation) =>
        (candidateConversation.inbox || 'messages') === nextInbox &&
        (nextMode !== 'email' || candidateConversation.channel === 'email')
    );
    if (first)
      void handleChoose(first.id)
        .then(() => setIsMobileThread(false))
        .catch((caughtError) => setError(caughtError.message));
    else {
      setView(null);
      setSelected('');
      selectedRef.current = '';
      setIsMobileThread(false);
    }
  }
  //every request control persists through the authenticated,
  // revision-checked API
  async function handleResolveRequest(
    value: Conversation,
    action: RequestAction
  ) {
    setIsBusy(true);
    setError('');
    try {
      const saved = await requestJson<Conversation>(
        '/api/chat/request',
        { id: value.id, action, revision: value.revision },
        csrf
      );
      const latest = await handleLoad();
      setRequestUndo(action === 'block' || action === 'delete' ? saved : null);
      setRequestNotice(
        action === 'accept'
          ? `${value.contact} moved to Messages.`
          : action === 'restore'
            ? 'Request restored.'
            : action === 'block'
              ? 'Request blocked.'
              : 'Request deleted.'
      );
      if (action === 'accept' || action === 'restore') {
        setInbox(action === 'accept' ? 'messages' : 'requests');
        setSearch('');
        await handleChoose(saved.id);
      } else if (selectedRef.current === value.id) {
        const next = latest.find(
          (candidateConversation) =>
            candidateConversation.inbox === 'requests' &&
            (mode !== 'email' || candidateConversation.channel === 'email')
        );
        if (next) await handleChoose(next.id);
        else {
          setView(null);
          setSelected('');
          selectedRef.current = '';
          setIsMobileThread(false);
        }
      }
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Browser effects

  useEffect(() => {
    let isActive = true;
    handleLoad()
      .then((data) => {
        if (isActive && data.length) {
          const messages = data.filter(
            (candidateConversation) =>
              !candidateConversation.inbox ||
              candidateConversation.inbox === 'messages'
          );
          const first =
            messages.find(
              (candidateConversation) =>
                candidateConversation.channel === 'email'
            ) || messages[0];
          if (first) void handleChoose(first.id);
        }
      })
      .catch((caughtError) => setError(caughtError.message));
    return () => {
      isActive = false;
      closeDetails();
    };
  }, []);
  useEffect(() => {
    if (mode === 'email') {
      setConnection('Refresh every 30 seconds');
      const timer = setInterval(() => {
        if (!document.hidden) void handleRefresh();
      }, 30000);
      return () => clearInterval(timer);
    }
    const events = new EventSource('/api/chat/events');
    events.addEventListener('ready', () => {
      setConnection('Live updates');
      void handleRefresh();
    });
    events.addEventListener('change', () => void handleRefresh());
    events.onerror = () => setConnection('Reconnecting…');
    //refresh when the document becomes visible after background throttling
    const resume = () => {
      if (!document.hidden) void handleRefresh();
    };
    document.addEventListener('visibilitychange', resume);
    const timer = setInterval(resume, 15000);
    return () => {
      events.close();
      clearInterval(timer);
      document.removeEventListener('visibilitychange', resume);
    };
  }, [ mode ]);
  useEffect(() => {
    if (nearLatestRef.current && messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [ conversation?.id, conversation?.messages.length ]);

  //--------------------------------------------------------------------//
  // Render or public hook result

  //expose only state and handlers read by the presentation below
  return {
    rows,
    view,
    selected,
    mode,
    search,
    setSearch,
    inbox,
    requestUndo,
    requestNotice,
    setRequestNotice,
    draft,
    setDraft,
    kind,
    setKind,
    notice,
    setNotice,
    error,
    setError,
    busy: isBusy,
    connection,
    hasTemplates,
    picker,
    setPicker,
    template,
    setTemplate,
    values,
    setValues,
    setInserted,
    mobileThread: isMobileThread,
    setMobileThread: setIsMobileThread,
    messagesRef,
    nearLatestRef,
    writable: canWrite,
    refresh: handleRefresh,
    choose: handleChoose,
    details: handleDetails,
    saveDraft: handleSaveDraft,
    send: handleSend,
    status: handleStatus,
    openTemplates: handleOpenTemplates,
    insert: handleInsert,
    visible,
    unreadConversations,
    requestCount,
    switchInbox: handleSwitchInbox,
    resolveRequest: handleResolveRequest,
    conversation
  };
}

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the chat workspace from its local interaction hook.
 */
export default function Chat({ csrf, user }: { csrf: string, user: Caller }) {
  const {
    view,
    selected,
    mode,
    search,
    setSearch,
    inbox,
    requestUndo,
    requestNotice,
    setRequestNotice,
    draft,
    setDraft,
    kind,
    setKind,
    notice,
    setNotice,
    error,
    setError,
    busy: isBusy,
    connection,
    hasTemplates,
    picker,
    setPicker,
    template,
    setTemplate,
    values,
    setValues,
    setInserted,
    mobileThread: isMobileThread,
    setMobileThread,
    messagesRef,
    nearLatestRef,
    writable: canWrite,
    refresh,
    choose,
    details,
    saveDraft,
    send,
    status,
    openTemplates,
    insert,
    visible,
    unreadConversations,
    requestCount,
    switchInbox,
    resolveRequest,
    conversation
  } = useChat({ csrf, user });
  //the day-divider cursor belongs to this render pass, not persistent
  // component state
  let lastDay = '';
  return (
    <div className="chat-component">
      {error && (
        <p role="alert" className="component-alert">
          {error}
        </p>
      )}
      {requestNotice && (
        <div className="chat-request-notice" role="status">
          <span>{requestNotice}</span>
          {requestUndo && (
            <button
              className="op-btn op-btn--compact op-btn--secondary"
              disabled={isBusy}
              onClick={() => void resolveRequest(requestUndo, 'restore')}
            >
              Undo
            </button>
          )}
          <button
            className="op-icon-btn"
            aria-label="Dismiss request notice"
            onClick={() => setRequestNotice('')}
          >
            <Icon name="x" />
          </button>
        </div>
      )}
      <div
        className={`op-chat common-chat ${isMobileThread ? 'chat-show-thread' : ''}`}
        data-details="closed"
      >
        {/* START: Conversation list */}
        <aside className="op-chat__list" aria-label="Conversations">
          <div className="op-chat__filters">
            <label className="op-search">
              <Icon name="search" />
              <input
                aria-label="Search conversations"
                placeholder="Search conversations"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <nav className="chat-inbox-nav" aria-label="Conversations">
              <button
                aria-current={inbox === 'messages' ? 'page' : undefined}
                onClick={() => switchInbox('messages')}
              >
                <Icon name="messages-square" />
                <span>Messages</span>
                <span
                  className="chat-inbox-count"
                  aria-label={`${unreadConversations} unread conversations`}
                >
                  {unreadConversations}
                </span>
              </button>
              <button
                aria-current={inbox === 'requests' ? 'page' : undefined}
                onClick={() => switchInbox('requests')}
              >
                <Icon name="user-plus" />
                <span>Requests</span>
                <span className="chat-inbox-count">{requestCount}</span>
              </button>
            </nav>
          </div>
          {inbox === 'requests' && (
            <p className="chat-requests-hint op-small op-muted">
              These senders are new to your inbox. Accept a request to move it
              to Messages.
            </p>
          )}
          <div className="chat-conversations">
            {visible.map((conversation) =>
              conversation.inbox === 'requests' ? (
                <article
                  key={conversation.id}
                  className="chat-request-card"
                  data-selected={selected === conversation.id}
                >
                  <button
                    className="chat-request-summary"
                    aria-label={`Preview request from ${conversation.contact}`}
                    onClick={() =>
                      void choose(conversation.id).catch((caughtError) =>
                        setError(caughtError.message)
                      )
                    }
                  >
                    <span className="op-avatar op-avatar--32 op-avatar--soft">
                      {getInitials(conversation.contact)}
                    </span>
                    <span className="op-grow">
                      <strong>{conversation.contact}</strong>
                      <span className="op-caption op-muted">
                        {conversation.senderAddress}
                      </span>
                      <span className="chat-request-snippet op-small op-muted">
                        {getMessagePreview(conversation, '')}
                      </span>
                    </span>
                  </button>
                </article>
              ) : (
                <button
                  key={conversation.id}
                  className="op-conversation"
                  aria-current={
                    selected === conversation.id ? 'true' : undefined
                  }
                  onClick={() =>
                    void choose(conversation.id).catch((caughtError) =>
                      setError(caughtError.message)
                    )
                  }
                >
                  <span className="op-avatar op-avatar--40 op-avatar--soft">
                    {getInitials(conversation.contact)}
                  </span>
                  <span className="op-grow">
                    <span className="chat-person">
                      <strong>{conversation.contact}</strong>
                      <time
                        className="op-caption op-muted"
                        dateTime={conversation.updated}
                      >
                        {formatShortDate(conversation.updated)}
                      </time>
                    </span>
                    <span className="chat-preview op-small op-muted">
                      <Icon
                        name={
                          conversation.channel === 'email'
                            ? 'mail'
                            : 'messages-square'
                        }
                      />
                      <span>{getMessagePreview(conversation)}</span>
                    </span>
                  </span>
                  {conversation.unread > 0 && (
                    <span
                      className="chat-unread"
                      aria-label={`${conversation.unread} unread messages`}
                    />
                  )}
                </button>
              )
            )}
            {!visible.length && (
              <p className="component-empty op-muted">
                {search
                  ? 'No conversations match.'
                  : inbox === 'requests'
                    ? 'No message requests.'
                    : 'No messages yet.'}
              </p>
            )}
          </div>
          <footer className="chat-list-footer">
            <div className="chat-channel-controls">
              <select
                className="op-select"
                aria-label="Conversation channels"
                value={mode}
                onChange={(event) => switchInbox(inbox, event.target.value)}
              >
                <option value="support">All channels</option>
                <option value="email">Email only</option>
              </select>
              <button
                className="op-icon-btn"
                aria-label="Refresh conversations"
                onClick={() => void refresh()}
              >
                <Icon name="refresh-cw" />
              </button>
            </div>
            <div className="chat-connection op-caption op-muted" role="status">
              <span
                className={`chat-connection-dot ${connection === 'Live updates' ? 'is-live' : ''}`}
              />
              {connection}
            </div>
          </footer>
        </aside>
        {/* END: Conversation list */}
        <section className="op-chat__thread" aria-label="Conversation thread">
          {conversation?.inbox === 'requests' ? (
            <RequestPreview
              conversation={conversation}
              disabled={!canWrite || isBusy}
              onAction={(value, action) => void resolveRequest(value, action)}
              onBack={() => setMobileThread(false)}
            />
          ) : conversation ? (
            <>
              {/* START: Conversation header */}
              <header className="op-chat__head">
                <button
                  className="op-icon-btn chat-back"
                  aria-label="Back to conversations"
                  onClick={() => setMobileThread(false)}
                >
                  <Icon name="arrow-left" />
                </button>
                <span className="op-avatar op-avatar--40 op-avatar--soft">
                  {getInitials(conversation.contact)}
                </span>
                <div className="op-grow">
                  <h2 className="op-strong">{conversation.contact}</h2>
                  <p className="op-small op-muted chat-capitalize">
                    {conversation.channel} ·{' '}
                    {
                      conversation.messages.filter(
                        (message) => message.kind !== 'event'
                      ).length
                    }{' '}
                    {conversation.messages.filter(
                      (message) => message.kind !== 'event'
                    ).length === 1
                      ? 'message'
                      : 'messages'}
                  </p>
                </div>
                <select
                  aria-label="Conversation status"
                  className="op-input chat-status"
                  value={conversation.status}
                  disabled={!canWrite || isBusy}
                  onChange={(event) => void status(event.target.value)}
                >
                  {[ 'New', 'Open', 'Pending', 'Closed' ].map((statusOption) => (
                    <option key={statusOption}>{statusOption}</option>
                  ))}
                </select>
                <button
                  className="op-icon-btn"
                  aria-label="Open conversation details"
                  onClick={() => details(conversation)}
                >
                  <Icon name="panel-right" />
                </button>
              </header>
              {/* END: Conversation header */}
              {/* START: Message timeline */}
              <div
                className="op-chat__messages"
                ref={messagesRef}
                onScroll={(event) => {
                  const element = event.currentTarget;
                  nearLatestRef.current =
                    element.scrollHeight -
                      element.scrollTop -
                      element.clientHeight <
                    80;
                }}
                role="log"
                aria-label="Messages"
              >
                <div className="chat-stream">
                  <p className="chat-subject op-caption op-muted">
                    {conversation.subject}
                  </p>
                  {conversation.messages.map((message) => {
                    const day = new Date(message.at).toLocaleDateString(
                      undefined,
                      {
                        month: 'long',
                        day: 'numeric'
                      }
                    );
                    const shouldShowDay = day !== lastDay;
                    lastDay = day;
                    return (
                      <div key={message.id}>
                        {shouldShowDay && (
                          <div className="op-day-separator">
                            <span>{day}</span>
                          </div>
                        )}
                        {message.kind === 'event' ? (
                          <p className="op-chat-event op-caption">
                            <Icon name="repeat" />
                            {message.author} {message.body}
                          </p>
                        ) : (
                          <ChatMessage
                            message={message}
                            conversationId={conversation.id}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* END: Message timeline */}
              {/* START: Message composer */}
              <form
                className="op-chat__composer"
                onSubmit={(event) => {
                  event.preventDefault();
                  void send();
                }}
              >
                <div
                  className="op-tabs"
                  role="tablist"
                  aria-label="Message type"
                >
                  {([ 'reply', 'note' ] as const).map((messageKind) => (
                    <button
                      key={messageKind}
                      type="button"
                      role="tab"
                      className="op-tab"
                      aria-selected={kind === messageKind}
                      onClick={() => setKind(messageKind)}
                    >
                      <Icon name={messageKind === 'reply' ? 'reply' : 'lock'} />
                      {messageKind === 'reply' ? 'Reply' : 'Internal note'}
                    </button>
                  ))}
                </div>
                <div className="chat-compose-line">
                  <textarea
                    rows={1}
                    aria-label={kind === 'reply' ? 'Reply' : 'Internal note'}
                    placeholder={
                      kind === 'reply'
                        ? 'Write a reply…'
                        : 'Write an internal note…'
                    }
                    value={draft}
                    maxLength={10000}
                    disabled={!canWrite || isBusy}
                    onChange={(event) => {
                      setDraft(event.target.value);
                      setInserted(null);
                      setNotice('');
                    }}
                  />
                  <button
                    className="op-btn op-btn--primary chat-send"
                    aria-label={
                      isBusy
                        ? 'Saving…'
                        : kind === 'reply'
                          ? 'Send'
                          : 'Add note'
                    }
                    title={kind === 'reply' ? 'Send' : 'Add note'}
                    disabled={
                      !canWrite ||
                      isBusy ||
                      !draft.trim() ||
                      (kind === 'reply' && !view?.canSend)
                    }
                  >
                    <Icon name={kind === 'reply' ? 'send' : 'plus'} />
                  </button>
                </div>
                <div className="op-chat__controls">
                  {hasTemplates && kind === 'reply' && (
                    <button
                      type="button"
                      className="op-btn op-btn--secondary op-btn--compact"
                      onClick={() => void openTemplates()}
                      disabled={!canWrite || isBusy}
                    >
                      <Icon name="file-text" />
                      Insert template
                    </button>
                  )}
                  <button
                    type="button"
                    className="op-btn op-btn--tertiary op-btn--compact"
                    onClick={() => void saveDraft()}
                    disabled={!canWrite || isBusy}
                  >
                    <Icon name="save" /> Save draft
                  </button>
                </div>
                {!view?.canSend && kind === 'reply' && (
                  <p className="chat-composer-hint op-caption op-muted">
                    This channel is not connected. Save a draft or add an
                    internal note.
                  </p>
                )}
                {notice && (
                  <p className="chat-composer-hint op-caption" role="status">
                    {notice}
                  </p>
                )}
              </form>
              {/* END: Message composer */}
              {picker && (
                <div className="chat-template-picker">
                  <div className="op-row">
                    <h3 className="op-strong op-grow">
                      Insert a message template
                    </h3>
                    <button
                      className="op-icon-btn"
                      aria-label="Close templates"
                      onClick={() => setPicker(null)}
                    >
                      <Icon name="x" />
                    </button>
                  </div>
                  <select
                    className="op-input"
                    aria-label="Published template"
                    value={template?.id || ''}
                    onChange={(event) => {
                      setTemplate(
                        picker.find(
                          (candidateTemplate) =>
                            candidateTemplate.id === event.target.value
                        ) || null
                      );
                      setValues({});
                    }}
                  >
                    <option value="">Choose a template</option>
                    {picker.map((candidateTemplate) => (
                      <option
                        key={candidateTemplate.id}
                        value={candidateTemplate.id}
                      >
                        {candidateTemplate.draft.name} · version{' '}
                        {candidateTemplate.number}
                      </option>
                    ))}
                  </select>
                  {!picker.length && (
                    <p className="op-muted">
                      No published templates match this channel.
                    </p>
                  )}
                  {template?.draft.custom.map((key) => (
                    <label key={key} className="op-field">
                      <span className="op-label">{key}</span>
                      <input
                        className="op-input"
                        value={values[key] || ''}
                        onChange={(event) =>
                          setValues({ ...values, [key]: event.target.value })
                        }
                      />
                    </label>
                  ))}
                  <button
                    className="op-btn"
                    disabled={!template}
                    onClick={() => void insert()}
                  >
                    Insert template
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="component-empty op-muted">
              {inbox === 'requests'
                ? 'Select a request to preview it.'
                : 'Select a conversation.'}
            </p>
          )}
        </section>
      </div>
    </div>
  );
};
