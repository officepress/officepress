import { useEffect, useRef, useState } from "react";
import { api } from "../../app/client.js";
import Icon from "../../app/components/Icon.js";
import type { Caller } from "../../auth/types.js";
import type {
  TemplateVersion,
  RenderedTemplate,
} from "../../templates/types.js";
import type {
  Conversation,
  ConversationView,
  ConversationState,
  RequestAction,
} from "../types.js";
import { RequestPreview } from "./requests.js";
import { usePanels } from "../../settings/shell/panels.js";
import {
  ConversationDetails,
  ChatMessage,
  preview,
  shortDate,
} from "./presentation.js";
const initials = (name: string) =>
  name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
export default function Chat({
  csrf,
  user,
}: {
  csrf: string;
  user: Caller;
  path: string;
}) {
  const [rows, setRows] = useState<Array<Conversation & { unread: number }>>(
      [],
    ),
    [view, setView] = useState<ConversationView | null>(null),
    [selected, setSelected] = useState(""),
    [mode, setMode] = useState("support"),
    [search, setSearch] = useState(""),
    [inbox, setInbox] = useState<"messages" | "requests">("messages"),
    [requestUndo, setRequestUndo] = useState<Conversation | null>(null),
    [requestNotice, setRequestNotice] = useState(""),
    [draft, setDraft] = useState(""),
    [kind, setKind] = useState<"reply" | "note">("reply"),
    [state, setState] = useState<ConversationState | null>(null),
    [notice, setNotice] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [connection, setConnection] = useState("Connecting"),
    [hasTemplates, setHasTemplates] = useState(false),
    [picker, setPicker] = useState<TemplateVersion[] | null>(null),
    [template, setTemplate] = useState<TemplateVersion | null>(null),
    [values, setValues] = useState<Record<string, string>>({}),
    [inserted, setInserted] = useState<RenderedTemplate | null>(null),
    [mobileThread, setMobileThread] = useState(false);
  const { showDetails, closeDetails } = usePanels();
  const messagesRef = useRef<HTMLDivElement>(null);
  const nearLatestRef = useRef(true);
  const selectedRef = useRef("");
  selectedRef.current = selected;
  const writable =
    user.roles.includes("ADMIN") || user.roles.includes("MEMBER");
  async function load() {
    const data = await api<{ conversations: typeof rows; templates: boolean }>(
      "/api/chat",
    );
    setRows(data.conversations);
    setHasTemplates(data.templates);
    return data.conversations;
  }
  async function refresh() {
    try {
      await load();
      if (selectedRef.current) {
        const latest = await api<ConversationView>(
          `/api/chat/detail?id=${encodeURIComponent(selectedRef.current)}`,
        );
        if (latest.conversation.id === selectedRef.current) setView(latest);
      }
    } catch (e) {
      setError((e as Error).message);
    }
  }
  async function choose(id: string) {
    closeDetails();
    nearLatestRef.current = true;
    setError("");
    setNotice("");
    setSelected(id);
    selectedRef.current = id;
    setMobileThread(true);
    setInserted(null);
    setPicker(null);
    setTemplate(null);
    const next = await api<ConversationView>("/api/chat/read", { id }, csrf);
    if (selectedRef.current !== id) return;
    setView(next);
    setState(next.state);
    setDraft(next.state.draft);
    setKind(next.state.kind);
    await load();
  }
  useEffect(() => {
    let active = true;
    load()
      .then((data) => {
        if (active && data.length) {
          const messages = data.filter(
            (v) => !v.inbox || v.inbox === "messages",
          );
          const first =
            messages.find((v) => v.channel === "email") || messages[0];
          if (first) void choose(first.id);
        }
      })
      .catch((e) => setError(e.message));
    return () => {
      active = false;
      closeDetails();
    };
  }, []);
  useEffect(() => {
    if (mode === "email") {
      setConnection("Refresh every 30 seconds");
      const timer = setInterval(() => {
        if (!document.hidden) void refresh();
      }, 30000);
      return () => clearInterval(timer);
    }
    const events = new EventSource("/api/chat/events");
    events.addEventListener("ready", () => {
      setConnection("Live updates");
      void refresh();
    });
    events.addEventListener("change", () => void refresh());
    events.onerror = () => setConnection("Reconnecting…");
    // Reconcile after reconnect and when returning to a hidden tab; stable IDs replace snapshots.
    const resume = () => {
      if (!document.hidden) void refresh();
    };
    document.addEventListener("visibilitychange", resume);
    const timer = setInterval(resume, 15000);
    return () => {
      events.close();
      clearInterval(timer);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [mode]);
  function details(v: Conversation) {
    showDetails({
      title: "Conversation details",
      content: <ConversationDetails conversation={v} />,
    });
  }
  async function saveDraft() {
    if (!view || !state) return;
    setBusy(true);
    setError("");
    try {
      const next = await api<ConversationState>(
        "/api/chat/draft",
        { id: selected, draft, kind, revision: state.revision },
        csrf,
      );
      setState(next);
      setNotice("Draft saved.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function send() {
    if (!view) return;
    setBusy(true);
    setError("");
    try {
      const next = await api<Conversation>(
        "/api/chat/send",
        {
          id: selected,
          body: draft,
          kind,
          revision: view.conversation.revision,
          ...(inserted && kind === "reply"
            ? {
                templateId: inserted.templateId,
                versionId: inserted.versionId,
                values,
              }
            : {}),
        },
        csrf,
      );
      setView({ ...view, conversation: next });
      const last = next.messages.at(-1);
      setNotice(
        kind === "note"
          ? "Internal note added."
          : last?.state === "accepted"
            ? "Message accepted by the mail service."
            : "The mail service returned an error. Your draft is kept.",
      );
      if (kind === "note" || last?.state === "accepted") {
        setDraft("");
        setInserted(null);
        if (state) {
          const nextState = await api<ConversationState>(
            "/api/chat/draft",
            { id: selected, draft: "", kind, revision: state.revision },
            csrf,
          );
          setState(nextState);
        }
      }
      await load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function status(next: string) {
    if (!view) return;
    setBusy(true);
    try {
      const changed = await api<Conversation>(
        "/api/chat/status",
        { id: selected, status: next, revision: view.conversation.revision },
        csrf,
      );
      setView({ ...view, conversation: changed });
      await load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function openTemplates() {
    try {
      setPicker(
        (
          await api<{ items: TemplateVersion[] }>(
            `/api/chat/templates?id=${selected}`,
          )
        ).items,
      );
      setTemplate(null);
      setValues({});
    } catch (e) {
      setError((e as Error).message);
    }
  }
  async function insert() {
    if (!template) return;
    try {
      const result = await api<RenderedTemplate>(
        "/api/chat/template",
        { id: selected, templateId: template.templateId, values },
        csrf,
      );
      setDraft(result.text);
      setInserted(result);
      setPicker(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }
  const channelRows = rows.filter(
    (v) => mode !== "email" || v.channel === "email",
  );
  const visible = channelRows.filter(
    (v) =>
      (v.inbox || "messages") === inbox &&
      `${v.contact} ${v.subject} ${v.senderAddress || ""}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const unreadConversations = channelRows.filter(
    (v) => (!v.inbox || v.inbox === "messages") && v.unread > 0,
  ).length;
  const requestCount = channelRows.filter((v) => v.inbox === "requests").length;

  /** Switching sections opens a matching conversation while keeping mobile navigation explicit. */
  function switchInbox(nextInbox: "messages" | "requests", nextMode = mode) {
    setInbox(nextInbox);
    setMode(nextMode);
    setSearch("");
    closeDetails();
    const first = rows.find(
      (v) =>
        (v.inbox || "messages") === nextInbox &&
        (nextMode !== "email" || v.channel === "email"),
    );
    if (first)
      void choose(first.id)
        .then(() => setMobileThread(false))
        .catch((e) => setError(e.message));
    else {
      setView(null);
      setSelected("");
      selectedRef.current = "";
      setMobileThread(false);
    }
  }

  /** Every request control persists through the authenticated, revision-checked API. */
  async function resolveRequest(value: Conversation, action: RequestAction) {
    setBusy(true);
    setError("");
    try {
      const saved = await api<Conversation>(
        "/api/chat/request",
        { id: value.id, action, revision: value.revision },
        csrf,
      );
      const latest = await load();
      setRequestUndo(action === "block" || action === "delete" ? saved : null);
      setRequestNotice(
        action === "accept"
          ? `${value.contact} moved to Messages.`
          : action === "restore"
            ? "Request restored."
            : action === "block"
              ? "Request blocked."
              : "Request deleted.",
      );
      if (action === "accept" || action === "restore") {
        setInbox(action === "accept" ? "messages" : "requests");
        setSearch("");
        await choose(saved.id);
      } else if (selectedRef.current === value.id) {
        const next = latest.find(
          (v) =>
            v.inbox === "requests" &&
            (mode !== "email" || v.channel === "email"),
        );
        if (next) await choose(next.id);
        else {
          setView(null);
          setSelected("");
          selectedRef.current = "";
          setMobileThread(false);
        }
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  const conversation = view?.conversation;
  useEffect(() => {
    if (nearLatestRef.current && messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [conversation?.id, conversation?.messages.length]);
  let lastDay = "";
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
              disabled={busy}
              onClick={() => void resolveRequest(requestUndo, "restore")}
            >
              Undo
            </button>
          )}
          <button
            className="op-icon-btn"
            aria-label="Dismiss request notice"
            onClick={() => setRequestNotice("")}
          >
            <Icon name="x" />
          </button>
        </div>
      )}
      <div
        className={`op-chat common-chat ${mobileThread ? "chat-show-thread" : ""}`}
        data-details="closed"
      >
        <aside className="op-chat__list" aria-label="Conversations">
          <div className="op-chat__filters">
            <label className="op-search">
              <Icon name="search" />
              <input
                aria-label="Search conversations"
                placeholder="Search conversations"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <nav className="chat-inbox-nav" aria-label="Conversations">
              <button
                aria-current={inbox === "messages" ? "page" : undefined}
                onClick={() => switchInbox("messages")}
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
                aria-current={inbox === "requests" ? "page" : undefined}
                onClick={() => switchInbox("requests")}
              >
                <Icon name="user-plus" />
                <span>Requests</span>
                <span className="chat-inbox-count">{requestCount}</span>
              </button>
            </nav>
          </div>
          {inbox === "requests" && (
            <p className="chat-requests-hint op-small op-muted">
              These senders are new to your inbox. Accept a request to move it
              to Messages.
            </p>
          )}
          <div className="chat-conversations">
            {visible.map((v) =>
              v.inbox === "requests" ? (
                <article
                  key={v.id}
                  className="chat-request-card"
                  data-selected={selected === v.id}
                >
                  <button
                    className="chat-request-summary"
                    aria-label={`Preview request from ${v.contact}`}
                    onClick={() =>
                      void choose(v.id).catch((e) => setError(e.message))
                    }
                  >
                    <span className="op-avatar op-avatar--32 op-avatar--soft">
                      {initials(v.contact)}
                    </span>
                    <span className="op-grow">
                      <strong>{v.contact}</strong>
                      <span className="op-caption op-muted">
                        {v.senderAddress}
                      </span>
                      <span className="chat-request-snippet op-small op-muted">
                        {preview(v, "")}
                      </span>
                    </span>
                  </button>
                </article>
              ) : (
                <button
                  key={v.id}
                  className="op-conversation"
                  aria-current={selected === v.id ? "true" : undefined}
                  onClick={() =>
                    void choose(v.id).catch((e) => setError(e.message))
                  }
                >
                  <span className="op-avatar op-avatar--40 op-avatar--soft">
                    {initials(v.contact)}
                  </span>
                  <span className="op-grow">
                    <span className="chat-person">
                      <strong>{v.contact}</strong>
                      <time
                        className="op-caption op-muted"
                        dateTime={v.updated}
                      >
                        {shortDate(v.updated)}
                      </time>
                    </span>
                    <span className="chat-preview op-small op-muted">
                      <Icon
                        name={
                          v.channel === "email" ? "mail" : "messages-square"
                        }
                      />
                      <span>{preview(v)}</span>
                    </span>
                  </span>
                  {v.unread > 0 && (
                    <span
                      className="chat-unread"
                      aria-label={`${v.unread} unread messages`}
                    />
                  )}
                </button>
              ),
            )}
            {!visible.length && (
              <p className="component-empty op-muted">
                {search
                  ? "No conversations match."
                  : inbox === "requests"
                    ? "No message requests."
                    : "No messages yet."}
              </p>
            )}
          </div>
          <footer className="chat-list-footer">
            <div className="chat-channel-controls">
              <select
                className="op-select"
                aria-label="Conversation channels"
                value={mode}
                onChange={(e) => switchInbox(inbox, e.target.value)}
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
                className={`chat-connection-dot ${connection === "Live updates" ? "is-live" : ""}`}
              />
              {connection}
            </div>
          </footer>
        </aside>
        <section className="op-chat__thread" aria-label="Conversation thread">
          {conversation?.inbox === "requests" ? (
            <RequestPreview
              conversation={conversation}
              disabled={!writable || busy}
              onAction={(value, action) => void resolveRequest(value, action)}
              onBack={() => setMobileThread(false)}
            />
          ) : conversation ? (
            <>
              <header className="op-chat__head">
                <button
                  className="op-icon-btn chat-back"
                  aria-label="Back to conversations"
                  onClick={() => setMobileThread(false)}
                >
                  <Icon name="arrow-left" />
                </button>
                <span className="op-avatar op-avatar--40 op-avatar--soft">
                  {initials(conversation.contact)}
                </span>
                <div className="op-grow">
                  <h2 className="op-strong">{conversation.contact}</h2>
                  <p className="op-small op-muted chat-capitalize">
                    {conversation.channel} ·{" "}
                    {
                      conversation.messages.filter((m) => m.kind !== "event")
                        .length
                    }{" "}
                    {conversation.messages.filter((m) => m.kind !== "event")
                      .length === 1
                      ? "message"
                      : "messages"}
                  </p>
                </div>
                <select
                  aria-label="Conversation status"
                  className="op-input chat-status"
                  value={conversation.status}
                  disabled={!writable || busy}
                  onChange={(e) => void status(e.target.value)}
                >
                  {["New", "Open", "Pending", "Closed"].map((v) => (
                    <option key={v}>{v}</option>
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
              <div
                className="op-chat__messages"
                ref={messagesRef}
                onScroll={(e) => {
                  const el = e.currentTarget;
                  nearLatestRef.current =
                    el.scrollHeight - el.scrollTop - el.clientHeight < 80;
                }}
                role="log"
                aria-label="Messages"
              >
                <div className="chat-stream">
                  <p className="chat-subject op-caption op-muted">
                    {conversation.subject}
                  </p>
                  {conversation.messages.map((m) => {
                    const day = new Date(m.at).toLocaleDateString(undefined, {
                      month: "long",
                      day: "numeric",
                    });
                    const showDay = day !== lastDay;
                    lastDay = day;
                    return (
                      <div key={m.id}>
                        {showDay && (
                          <div className="op-day-separator">
                            <span>{day}</span>
                          </div>
                        )}
                        {m.kind === "event" ? (
                          <p className="op-chat-event op-caption">
                            <Icon name="repeat" />
                            {m.author} {m.body}
                          </p>
                        ) : (
                          <ChatMessage
                            message={m}
                            conversationId={conversation.id}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <form
                className="op-chat__composer"
                onSubmit={(e) => {
                  e.preventDefault();
                  void send();
                }}
              >
                <div
                  className="op-tabs"
                  role="tablist"
                  aria-label="Message type"
                >
                  {(["reply", "note"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      role="tab"
                      className="op-tab"
                      aria-selected={kind === v}
                      onClick={() => setKind(v)}
                    >
                      <Icon name={v === "reply" ? "reply" : "lock"} />
                      {v === "reply" ? "Reply" : "Internal note"}
                    </button>
                  ))}
                </div>
                <div className="chat-compose-line">
                  <textarea
                    rows={1}
                    aria-label={kind === "reply" ? "Reply" : "Internal note"}
                    placeholder={
                      kind === "reply"
                        ? "Write a reply…"
                        : "Write an internal note…"
                    }
                    value={draft}
                    maxLength={10000}
                    disabled={!writable || busy}
                    onChange={(e) => {
                      setDraft(e.target.value);
                      setInserted(null);
                      setNotice("");
                    }}
                  />
                  <button
                    className="op-btn op-btn--primary chat-send"
                    aria-label={
                      busy ? "Saving…" : kind === "reply" ? "Send" : "Add note"
                    }
                    title={kind === "reply" ? "Send" : "Add note"}
                    disabled={
                      !writable ||
                      busy ||
                      !draft.trim() ||
                      (kind === "reply" && !view.canSend)
                    }
                  >
                    <Icon name={kind === "reply" ? "send" : "plus"} />
                  </button>
                </div>
                <div className="op-chat__controls">
                  {hasTemplates && kind === "reply" && (
                    <button
                      type="button"
                      className="op-btn op-btn--secondary op-btn--compact"
                      onClick={() => void openTemplates()}
                      disabled={!writable || busy}
                    >
                      <Icon name="file-text" />
                      Insert template
                    </button>
                  )}
                  <button
                    type="button"
                    className="op-btn op-btn--tertiary op-btn--compact"
                    onClick={() => void saveDraft()}
                    disabled={!writable || busy}
                  >
                    <Icon name="save" /> Save draft
                  </button>
                </div>
                {!view.canSend && kind === "reply" && (
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
                    value={template?.id || ""}
                    onChange={(e) => {
                      setTemplate(
                        picker.find((t) => t.id === e.target.value) || null,
                      );
                      setValues({});
                    }}
                  >
                    <option value="">Choose a template</option>
                    {picker.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.draft.name} · version {t.number}
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
                        value={values[key] || ""}
                        onChange={(e) =>
                          setValues({ ...values, [key]: e.target.value })
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
              {inbox === "requests"
                ? "Select a request to preview it."
                : "Select a conversation."}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
