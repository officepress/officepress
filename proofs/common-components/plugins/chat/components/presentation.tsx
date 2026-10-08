import Icon from "../../app/components/Icon.js";
import type { Conversation, Message } from "../types.js";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

/** Compact list dates retain the exact timestamp in the time element. */
export function shortDate(value: string) {
  const date = new Date(value);
  return date.toDateString() === new Date().toDateString()
    ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
    : date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function preview(
  conversation: Conversation,
  fallback = conversation.subject,
) {
  const message = [...conversation.messages]
    .reverse()
    .find((item) => item.kind !== "event");
  if (!message) return fallback;
  const prefix =
    message.kind === "note"
      ? "Note: "
      : message.kind === "reply"
        ? "You: "
        : "";
  return prefix + (message.body || "Attachment");
}

export function ChatMessage({
  message: m,
  conversationId,
}: {
  message: Message;
  conversationId: string;
}) {
  const outgoing = m.kind !== "incoming";
  return (
    <article className={`chat-message ${outgoing ? "chat-message--out" : ""}`}>
      {!outgoing && (
        <span
          className="op-avatar op-avatar--24 op-avatar--soft chat-message-avatar"
          aria-hidden="true"
        >
          {initials(m.author)}
        </span>
      )}
      <div className="chat-message-content">
        <div className="chat-message-author op-caption op-muted">
          {m.kind === "note" ? (
            <>
              <Icon name="lock" /> Internal note · {m.author}
            </>
          ) : (
            m.author
          )}
        </div>
        <div
          className={`op-bubble ${m.kind === "reply" ? "op-bubble--out" : m.kind === "note" ? "op-bubble--note" : ""}`}
        >
          <p className="chat-message-text">{m.body}</p>
          {m.attachments?.map((file) => (
            <a
              key={file.id}
              className="chat-file"
              href={`/api/chat/attachment?id=${encodeURIComponent(conversationId)}&file=${encodeURIComponent(file.id)}`}
            >
              <span className="chat-file-icon">
                <Icon name="file-text" />
              </span>
              <span className="op-small">{file.name}</span>
              <Icon name="download" />
            </a>
          ))}
        </div>
        <div className="chat-message-meta op-caption op-muted">
          <time dateTime={m.at} title={new Date(m.at).toLocaleString()}>
            {new Date(m.at).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
            })}
          </time>
          {m.kind === "note" && <span>Only your team</span>}
          {m.state && (
            <span>
              {m.state === "accepted"
                ? "Accepted by mail service"
                : m.state === "sending"
                  ? "Send started"
                  : m.error || "Send failed"}
            </span>
          )}
          {m.template && (
            <span>
              Template version {m.template.versionId.split(":").at(-1)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/** Details are rendered inside the shell-owned dock or mobile overlay. */
export function ConversationDetails({
  conversation: v,
}: {
  conversation: Conversation;
}) {
  const files = v.messages.flatMap((message) => message.attachments || []);
  return (
    <div className="chat-details">
      <section>
        <h3 className="op-overline">People</h3>
        <div className="chat-detail-person">
          <span className="op-avatar op-avatar--40 op-avatar--soft">
            {initials(v.contact)}
          </span>
          <div>
            <strong>{v.contact}</strong>
            <p className="op-small op-muted">{v.company}</p>
          </div>
        </div>
        {v.assignee && (
          <div className="chat-detail-person">
            <span className="op-avatar op-avatar--32 op-avatar--neutral">
              {initials(v.assignee)}
            </span>
            <div>
              <strong>{v.assignee}</strong>
              <p className="op-small op-muted">Assignee</p>
            </div>
          </div>
        )}
      </section>
      <section>
        <h3 className="op-overline">Subject</h3>
        <p className="op-small">{v.subject}</p>
      </section>
      <section>
        <h3 className="op-overline">
          Attachments <span className="op-muted">{files.length}</span>
        </h3>
        {files.length ? (
          files.map((file) => (
            <a
              key={file.id}
              className="chat-file"
              href={`/api/chat/attachment?id=${encodeURIComponent(v.id)}&file=${encodeURIComponent(file.id)}`}
            >
              <Icon name="file-text" />
              <span className="op-small">{file.name}</span>
              <Icon name="download" />
            </a>
          ))
        ) : (
          <p className="op-small op-muted">No attachments.</p>
        )}
      </section>
      <section>
        <h3 className="op-overline">Conversation</h3>
        <dl className="op-kv">
          <dt>Status</dt>
          <dd>{v.status}</dd>
          <dt>Priority</dt>
          <dd>{v.priority}</dd>
          <dt>Department</dt>
          <dd>{v.department}</dd>
          <dt>Channel</dt>
          <dd className="chat-capitalize">{v.channel}</dd>
        </dl>
      </section>
    </div>
  );
}
