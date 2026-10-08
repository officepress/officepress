import { useEffect, useState } from "react";
import Icon from "./Icon.js";
import { api } from "../client.js";
export function safeHref(href: string) {
  return /^\/(?!\/)/.test(href) && !/[\\\x00-\x20]/.test(href) ? href : "/";
}
export type Notice = {
  id: string;
  category: string;
  title: string;
  href: string;
  read: boolean;
  created: string;
};
export default function Notifications({
  csrf,
  appName,
  onClose,
}: {
  csrf: string;
  appName: string;
  onClose: () => void;
}) {
  const [rows, setRows] = useState<Notice[]>([]),
    [category, setCategory] = useState("all"),
    [busy, setBusy] = useState(true),
    [error, setError] = useState("");
  async function load() {
    setBusy(true);
    setError("");
    try {
      setRows((await api("/api/notifications")).notices);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  useEffect(() => {
    void load();
  }, []);
  async function read(id?: string) {
    try {
      await api("/api/notifications/read", { id }, csrf);
      await load();
    } catch (e) {
      setError((e as Error).message);
    }
  }
  const filtered = rows.filter(
    (n) => category === "all" || n.category === category,
  );
  const days = filtered.reduce<Record<string, Notice[]>>((groups, n) => {
    (groups[new Date(n.created).toLocaleDateString()] ||= []).push(n);
    return groups;
  }, {});
  return (
    <div
      className="notifications op-notifs app-popover"
      role="dialog"
      aria-label="Notifications"
    >
      <div className="op-notifs__head">
        <h2 className="op-title">Notifications</h2>
        <span className="op-badge">{rows.filter((n) => !n.read).length}</span>
        <span className="op-spacer" />
        <button
          className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
          aria-label="Close notifications"
          onClick={onClose}
        >
          <Icon name="x" />
        </button>
      </div>
      <div
        className="op-tabs"
        role="tablist"
        aria-label="Notification categories"
      >
        {["all", "mentions", "agent"].map((c) => (
          <button
            className="op-tab"
            role="tab"
            aria-selected={category === c}
            key={c}
            onClick={() => setCategory(c)}
          >
            {c[0].toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>
      <div className="op-notifs__list">
        {busy ? (
          <p className="app-empty" role="status">
            Loading…
          </p>
        ) : error ? (
          <div className="app-empty">
            <p role="alert">{error}</p>
            <button className="op-btn op-btn--link" onClick={load}>
              Try again
            </button>
          </div>
        ) : !filtered.length ? (
          <p className="app-empty">You're all caught up.</p>
        ) : (
          Object.entries(days).map(([day, notices]) => (
            <section key={day}>
              <h3 className="op-notifs__group op-overline">
                {day === new Date().toLocaleDateString() ? "Today" : day}
              </h3>
              {notices.map((n) => (
                <article
                  key={n.id}
                  className={"notice op-notif " + (!n.read ? "unread" : "")}
                  data-unread={!n.read || undefined}
                >
                  <span className="op-icon-tile op-icon-tile--32">
                    <Icon
                      name={
                        n.category === "agent"
                          ? "bot"
                          : n.category === "mentions"
                            ? "at-sign"
                            : "bell"
                      }
                    />
                  </span>
                  <div className="op-notif__body">
                    <a
                      href={safeHref(n.href)}
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          await api(
                            "/api/notifications/read",
                            { id: n.id },
                            csrf,
                          );
                          window.location.assign(safeHref(n.href));
                        } catch (err) {
                          setError((err as Error).message);
                        }
                      }}
                    >
                      {n.title}
                    </a>
                    <div className="op-notif__meta">
                      <span className="op-app-tag">{appName}</span>
                    </div>
                    <button
                      className="op-btn op-btn--link op-btn--small app-notice-action"
                      disabled={n.read}
                      onClick={() => read(n.id)}
                    >
                      {n.read ? "Read" : "Mark read"}
                    </button>
                  </div>
                  {!n.read && <span className="op-dot" aria-label="Unread" />}
                </article>
              ))}
            </section>
          ))
        )}
      </div>
      <div className="op-notifs__foot">
        <button
          className="op-btn op-btn--link op-btn--small"
          onClick={() => read()}
        >
          <Icon name="check-check" />
          Mark all as read
        </button>
      </div>
    </div>
  );
}
