//modules
import { useEffect, useState } from 'react';

//client
import { requestJson } from '../client.js';
import Icon from './Icon.js';

//--------------------------------------------------------------------//
// Types

//public app-owned notification row rendered in the shell feed
export type Notice = {
  id: string,
  category: string,
  title: string,
  href: string,
  read: boolean,
  created: string
};

//the page CSRF token used for authenticated feed read-state changes
type NotificationsProps = {
  csrf: string,
  appName: string,
  onClose: () => void
};

//--------------------------------------------------------------------//
// Helpers

/**
 * Allow only local absolute paths, preventing notification links from
 * escaping the app origin.
 */
export function safeHref(href: string) {
  return /^\/(?!\/)/.test(href) && !/[\\\x00-\x20]/.test(href) ? href : '/';
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render the app notification feed with category filters and read controls.
 */
export default function Notifications({
  csrf,
  appName,
  onClose
}: NotificationsProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ rows, setRows ] = useState<Notice[]>([]);
  const [ category, setCategory ] = useState('all');
  const [ isBusy, setIsBusy ] = useState(true);
  const [ error, setError ] = useState('');

  //--------------------------------------------------------------------//
  // Derived presentation

  const filtered = rows.filter(
    (notice) => category === 'all' || notice.category === category
  );
  const days = filtered.reduce<Record<string, Notice[]>>((groups, notice) => {
    (groups[new Date(notice.created).toLocaleDateString()] ||= []).push(notice);
    return groups;
  }, {});

  //--------------------------------------------------------------------//
  // Interaction handlers

  //refetch the caller-scoped notification feed without adopting an aborted
  // response
  async function handleLoad() {
    setIsBusy(true);
    setError('');
    try {
      setRows(
        (await requestJson<{ notices: Notice[] }>('/api/notifications')).notices
      );
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }
  //read the accessible app snapshot for the caller
  async function handleRead(id?: string) {
    try {
      await requestJson('/api/notifications/read', { id }, csrf);
      await handleLoad();
    } catch (caughtError) {
      setError((caughtError as Error).message);
    }
  }

  //--------------------------------------------------------------------//
  // Browser effects

  //fetch the app feed when the notification panel mounts

  useEffect(() => {
    void handleLoad();
  }, []);

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <div
      className="notifications op-notifs app-popover"
      role="dialog"
      aria-label="Notifications"
    >
      {/* START: Notification heading */}
      <div className="op-notifs__head">
        <h2 className="op-title">Notifications</h2>
        <span className="op-badge">
          {rows.filter((notice) => !notice.read).length}
        </span>
        <span className="op-spacer" />
        <button
          className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
          aria-label="Close notifications"
          onClick={onClose}
        >
          <Icon name="x" />
        </button>
      </div>
      {/* END: Notification heading */}
      <div
        className="op-tabs"
        role="tablist"
        aria-label="Notification categories"
      >
        {[ 'all', 'mentions', 'agent' ].map((categoryOption) => (
          <button
            className="op-tab"
            role="tab"
            aria-selected={category === categoryOption}
            key={categoryOption}
            onClick={() => setCategory(categoryOption)}
          >
            {categoryOption[0].toUpperCase() + categoryOption.slice(1)}
          </button>
        ))}
      </div>
      {/* START: Notification feed */}
      <div className="op-notifs__list">
        {isBusy ? (
          <p className="app-empty" role="status">
            Loading…
          </p>
        ) : error ? (
          <div className="app-empty">
            <p role="alert">{error}</p>
            <button className="op-btn op-btn--link" onClick={handleLoad}>
              Try again
            </button>
          </div>
        ) : !filtered.length ? (
          <p className="app-empty">You're all caught up.</p>
        ) : (
          Object.entries(days).map(([ day, notices ]) => (
            <section key={day}>
              <h3 className="op-notifs__group op-overline">
                {day === new Date().toLocaleDateString() ? 'Today' : day}
              </h3>
              {notices.map((notice) => (
                <article
                  key={notice.id}
                  className={
                    'notice op-notif ' + (!notice.read ? 'unread' : '')
                  }
                  data-unread={!notice.read || undefined}
                >
                  <span className="op-icon-tile op-icon-tile--32">
                    <Icon
                      name={
                        notice.category === 'agent'
                          ? 'bot'
                          : notice.category === 'mentions'
                            ? 'at-sign'
                            : 'bell'
                      }
                    />
                  </span>
                  <div className="op-notif__body">
                    <a
                      href={safeHref(notice.href)}
                      onClick={async (event) => {
                        event.preventDefault();
                        try {
                          await requestJson(
                            '/api/notifications/read',
                            { id: notice.id },
                            csrf
                          );
                          window.location.assign(safeHref(notice.href));
                        } catch (caughtError) {
                          setError((caughtError as Error).message);
                        }
                      }}
                    >
                      {notice.title}
                    </a>
                    <div className="op-notif__meta">
                      <span className="op-app-tag">{appName}</span>
                    </div>
                    <button
                      className="op-btn op-btn--link op-btn--small app-notice-action"
                      disabled={notice.read}
                      onClick={() => handleRead(notice.id)}
                    >
                      {notice.read ? 'Read' : 'Mark read'}
                    </button>
                  </div>
                  {!notice.read && (
                    <span className="op-dot" aria-label="Unread" />
                  )}
                </article>
              ))}
            </section>
          ))
        )}
      </div>
      {/* END: Notification feed */}
      <div className="op-notifs__foot">
        <button
          className="op-btn op-btn--link op-btn--small"
          onClick={() => handleRead()}
        >
          <Icon name="check-check" />
          Mark all as read
        </button>
      </div>
    </div>
  );
};
