//client
import type { Conversation, Message } from '../types.js';
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Constants

/**
 * Build a compact avatar label from the first two name parts.
 */
export const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

//--------------------------------------------------------------------//
// Helpers

/**
 * Compact list dates retain the exact timestamp in the time element.
 */
export function formatShortDate(value: string) {
  const date = new Date(value);
  return date.toDateString() === new Date().toDateString()
    ? date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    : date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

/**
 * Produce the compact message preview used by the conversation list.
 */
export function getMessagePreview(
  conversation: Conversation,
  fallback = conversation.subject
) {
  const message = [ ...conversation.messages ]
    .reverse()
    .find((item) => item.kind !== 'event');
  if (!message) return fallback;
  const prefix =
    message.kind === 'note'
      ? 'Note: '
      : message.kind === 'reply'
        ? 'You: '
        : '';
  return prefix + (message.body || 'Attachment');
};

//--------------------------------------------------------------------//
// Components

/**
 * Render one message, event or attachment in the conversation timeline.
 */
export function ChatMessage({
  message: message,
  conversationId
}: {
  message: Message,
  conversationId: string
}) {
  const isOutgoing = message.kind !== 'incoming';
  return (
    <article
      className={`chat-message ${isOutgoing ? 'chat-message--out' : ''}`}
    >
      {!isOutgoing && (
        <span
          className="op-avatar op-avatar--24 op-avatar--soft chat-message-avatar"
          aria-hidden="true"
        >
          {getInitials(message.author)}
        </span>
      )}
      <div className="chat-message-content">
        <div className="chat-message-author op-caption op-muted">
          {message.kind === 'note' ? (
            <>
              <Icon name="lock" /> Internal note · {message.author}
            </>
          ) : (
            message.author
          )}
        </div>
        <div
          className={`op-bubble ${message.kind === 'reply' ? 'op-bubble--out' : message.kind === 'note' ? 'op-bubble--note' : ''}`}
        >
          <p className="chat-message-text">{message.body}</p>
          {message.attachments?.map((file) => (
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
          <time
            dateTime={message.at}
            title={new Date(message.at).toLocaleString()}
          >
            {new Date(message.at).toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: '2-digit'
            })}
          </time>
          {message.kind === 'note' && <span>Only your team</span>}
          {message.state && (
            <span>
              {message.state === 'accepted'
                ? 'Accepted by mail service'
                : message.state === 'sending'
                  ? 'Send started'
                  : message.error || 'Send failed'}
            </span>
          )}
          {message.template && (
            <span>
              Template version {message.template.versionId.split(':').at(-1)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

/**
 * Details are rendered inside the shell-owned dock or mobile overlay.
 */
export function ConversationDetails({
  conversation: conversation
}: {
  conversation: Conversation
}) {
  const files = conversation.messages.flatMap(
    (message) => message.attachments || []
  );
  return (
    <div className="chat-details">
      <section>
        <h3 className="op-overline">People</h3>
        <div className="chat-detail-person">
          <span className="op-avatar op-avatar--40 op-avatar--soft">
            {getInitials(conversation.contact)}
          </span>
          <div>
            <strong>{conversation.contact}</strong>
            <p className="op-small op-muted">{conversation.company}</p>
          </div>
        </div>
        {conversation.assignee && (
          <div className="chat-detail-person">
            <span className="op-avatar op-avatar--32 op-avatar--neutral">
              {getInitials(conversation.assignee)}
            </span>
            <div>
              <strong>{conversation.assignee}</strong>
              <p className="op-small op-muted">Assignee</p>
            </div>
          </div>
        )}
      </section>
      <section>
        <h3 className="op-overline">Subject</h3>
        <p className="op-small">{conversation.subject}</p>
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
              href={`/api/chat/attachment?id=${encodeURIComponent(conversation.id)}&file=${encodeURIComponent(file.id)}`}
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
          <dd>{conversation.status}</dd>
          <dt>Priority</dt>
          <dd>{conversation.priority}</dd>
          <dt>Department</dt>
          <dd>{conversation.department}</dd>
          <dt>Channel</dt>
          <dd className="chat-capitalize">{conversation.channel}</dd>
        </dl>
      </section>
    </div>
  );
};
