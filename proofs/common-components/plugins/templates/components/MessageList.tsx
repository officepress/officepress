//client
import type { TemplateRecord } from '../types.js';
import { channelLabels } from '../client.js';
import Icon from '../../settings/shell/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//saved message records and permitted creation/deletion controls for the
// list
type MessageListProps = {
  records: TemplateRecord[],
  busy: boolean,
  writable: boolean,
  create: () => Promise<void>,
  error: string
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Messages opens on a list; each row opens its update form.
 */
export default function MessageList({
  records,
  busy: isBusy,
  writable: canWrite,
  create,
  error
}: MessageListProps) {
  return (
    <div className="op-page templates-page">
      <div className="op-page-head">
        <div className="op-page-head__text">
          <h2 className="op-heading">Messages</h2>
          <p className="op-muted">Choose a message to update.</p>
        </div>
        {canWrite && (
          <button
            className="op-btn op-btn--primary"
            disabled={isBusy}
            onClick={() => void create()}
          >
            <Icon name="plus" />
            New message
          </button>
        )}
      </div>
      {error && <p role="alert">{error}</p>}
      {records.length ? (
        <div className="op-table-wrap">
          <table className="op-table message-list">
            <thead>
              <tr>
                <th>Message</th>
                <th>Channel</th>
                <th>Publication</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => {
                const href = '/message/update/' + encodeURIComponent(record.id);
                return (
                  <tr
                    key={record.id}
                    onClick={(event) => {
                      if (!(event.target as HTMLElement).closest('a'))
                        location.assign(href);
                    }}
                  >
                    <td>
                      <a className="message-list-title" href={href}>
                        {record.draft.name}
                      </a>
                    </td>
                    <td>{channelLabels[record.draft.channel]}</td>
                    <td>
                      {record.publishedId
                        ? 'Version ' + record.publishedNumber
                        : 'Draft'}
                    </td>
                    <td>
                      <a
                        href={
                          '/message/detail/' + encodeURIComponent(record.id)
                        }
                        aria-label={'View ' + record.draft.name}
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="op-muted" role="status">
          No messages yet.
        </p>
      )}
    </div>
  );
};
