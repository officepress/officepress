//client
import type { Conversation, RequestAction } from '../types.js';
import { getInitials } from './presentation.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

type RequestActionsProps = {
  conversation: Conversation,
  disabled: boolean,
  onAction: (conversation: Conversation, action: RequestAction) => void
};

//--------------------------------------------------------------------//
// Components

/**
 * Shared actions keep list and preview controls tied to the same saved
 * request.
 */
export function RequestActions({
  conversation,
  disabled: isDisabled,
  onAction
}: RequestActionsProps) {
  return (
    <div className="chat-request-actions">
      <button
        type="button"
        className="op-btn op-btn--primary op-btn--compact"
        disabled={isDisabled}
        aria-label={`Accept request from ${conversation.contact}`}
        onClick={() => onAction(conversation, 'accept')}
      >
        <Icon name="check" />
        Accept
      </button>
      <button
        type="button"
        className="op-btn op-btn--secondary op-btn--compact"
        disabled={isDisabled}
        aria-label={`Block request from ${conversation.contact}`}
        onClick={() => onAction(conversation, 'block')}
      >
        <Icon name="user-x" />
        Block
      </button>
      <button
        type="button"
        className="op-btn op-btn--secondary op-btn--compact"
        disabled={isDisabled}
        aria-label={`Delete request from ${conversation.contact}`}
        onClick={() => onAction(conversation, 'delete')}
      >
        <Icon name="trash-2" />
        Delete
      </button>
    </div>
  );
};

/**
 * Unaccepted requests show the incoming message without a reply composer.
 */
export function RequestPreview(
  props: RequestActionsProps & { onBack: () => void }
) {
  const { conversation: conversation } = props;
  const incoming = conversation.messages.filter(
    (message) => message.kind === 'incoming'
  );
  return (
    <>
      {/* START: Conversation header */}
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
          {getInitials(conversation.contact)}
        </span>
        <div className="op-grow">
          <h2 className="op-strong">{conversation.contact}</h2>
          <p className="op-small op-muted">
            {[ conversation.senderAddress, conversation.company ]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>
      </header>
      {/* END: Conversation header */}
      {/* START: Incoming request preview */}
      <div className="chat-request-preview">
        <h3 className="op-overline">{conversation.subject}</h3>
        {incoming.map((message) => (
          <article key={message.id}>
            <time className="op-caption op-muted" dateTime={message.at}>
              {new Date(message.at).toLocaleString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
            </time>
            <p className="chat-message-text">{message.body}</p>
            {message.attachments?.map((file) => (
              <a
                className="chat-file"
                key={file.id}
                href={`/api/chat/attachment?id=${encodeURIComponent(conversation.id)}&file=${encodeURIComponent(file.id)}`}
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
      {/* END: Incoming request preview */}
    </>
  );
};
