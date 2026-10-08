import Icon from "../../app/components/Icon.js";
import type { Conversation, RequestAction } from "../types.js";

type RequestActionsProps = {
  conversation: Conversation;
  disabled: boolean;
  onAction: (conversation: Conversation, action: RequestAction) => void;
};

/** Shared actions keep list and preview controls tied to the same saved request. */
export function RequestActions({
  conversation,
  disabled,
  onAction,
}: RequestActionsProps) {
  return (
    <div className="chat-request-actions">
      <button
        type="button"
        className="op-btn op-btn--primary op-btn--compact"
        disabled={disabled}
        aria-label={`Accept request from ${conversation.contact}`}
        onClick={() => onAction(conversation, "accept")}
      >
        <Icon name="check" />
        Accept
      </button>
      <button
        type="button"
        className="op-btn op-btn--secondary op-btn--compact"
        disabled={disabled}
        aria-label={`Block request from ${conversation.contact}`}
        onClick={() => onAction(conversation, "block")}
      >
        <Icon name="user-x" />
        Block
      </button>
      <button
        type="button"
        className="op-btn op-btn--secondary op-btn--compact"
        disabled={disabled}
        aria-label={`Delete request from ${conversation.contact}`}
        onClick={() => onAction(conversation, "delete")}
      >
        <Icon name="trash-2" />
        Delete
      </button>
    </div>
  );
}

/** Unaccepted requests show the incoming message without a reply composer. */
export function RequestPreview(
  props: RequestActionsProps & { onBack: () => void },
) {
  const { conversation: v } = props;
  const incoming = v.messages.filter((message) => message.kind === "incoming");
  return (
    <>
      <header className="op-chat__head">
        <button
          className="op-icon-btn chat-back"
          aria-label="Back to requests"
          onClick={props.onBack}
        >
          <Icon name="arrow-left" />
        </button>
        <span
          className="op-avatar op-avatar--40 op-avatar--soft"
          aria-hidden="true"
        >
          {v.contact
            .split(" ")
            .map((name) => name[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className="op-grow">
          <h2 className="op-strong">{v.contact}</h2>
          <p className="op-small op-muted">
            {[v.senderAddress, v.company].filter(Boolean).join(" · ")}
          </p>
        </div>
      </header>
      <div className="chat-request-preview">
        <h3 className="op-overline">{v.subject}</h3>
        {incoming.map((message) => (
          <article key={message.id}>
            <time className="op-caption op-muted" dateTime={message.at}>
              {new Date(message.at).toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </time>
            <p className="chat-message-text">{message.body}</p>
            {message.attachments?.map((file) => (
              <a
                className="chat-file"
                key={file.id}
                href={`/api/chat/attachment?id=${encodeURIComponent(v.id)}&file=${encodeURIComponent(file.id)}`}
              >
                <Icon name="file-text" />
                <span>{file.name}</span>
                <Icon name="download" />
              </a>
            ))}
          </article>
        ))}
        <RequestActions {...props} />
      </div>
    </>
  );
}
