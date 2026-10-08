import Icon from "../../../app/components/Icon.js";
import { useState } from "react";
import { marked } from "marked";
import type { Token, Tokens } from "marked";
import { api } from "../../../app/client.js";
import type { ReleaseResult } from "../releases.js";
// React escapes raw text/HTML. Only safe links are interactive; authored code remains text.
export function Markdown({ text }: { text: string }) {
  function render(tokens: Token[]): any {
    return tokens.map((t: any, i: number) => {
      switch (t.type) {
        case "heading":
          return <h3 key={i}>{render(t.tokens || [])}</h3>;
        case "paragraph":
          return <p key={i}>{render(t.tokens || [])}</p>;
        case "text":
          return <span key={i}>{t.tokens ? render(t.tokens) : t.text}</span>;
        case "strong":
          return <strong key={i}>{render(t.tokens || [])}</strong>;
        case "em":
          return <em key={i}>{render(t.tokens || [])}</em>;
        case "code":
          return (
            <pre key={i}>
              <code>{t.text}</code>
            </pre>
          );
        case "codespan":
          return <code key={i}>{t.text}</code>;
        case "link":
          return /^https?:\/\//.test(t.href) ? (
            <a key={i} href={t.href} target="_blank" rel="noopener noreferrer">
              {render(t.tokens)}
            </a>
          ) : (
            <span key={i}>{render(t.tokens)}</span>
          );
        case "list":
          return t.ordered ? (
            <ol key={i} start={t.start}>
              {t.items.map((v: Tokens.ListItem, j: number) => (
                <li key={j}>{render(v.tokens)}</li>
              ))}
            </ol>
          ) : (
            <ul key={i}>
              {t.items.map((v: Tokens.ListItem, j: number) => (
                <li key={j}>{render(v.tokens)}</li>
              ))}
            </ul>
          );
        case "blockquote":
          return <blockquote key={i}>{render(t.tokens)}</blockquote>;
        case "space":
          return null;
        default:
          return <span key={i}>{t.raw}</span>;
      }
    });
  }
  return <div className="markdown">{render(marked.lexer(text))}</div>;
}
export default function About({
  brand,
  logo,
  version,
  build,
  csrf,
  admin,
}: {
  brand: string;
  logo: string;
  version: string;
  build: string;
  csrf: string;
  admin: boolean;
}) {
  const [result, setResult] = useState<ReleaseResult>(),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [copied, setCopied] = useState(false);
  async function check() {
    setBusy(true);
    setError("");
    try {
      setResult(await api("/api/about/check", {}, csrf));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <section className="op-section">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title">Version and updates</h2>
            <p className="op-section__desc">
              Keep {brand} current with fixes and new features. Check for a
              release and follow the publisher’s upgrade instructions on your
              server.
            </p>
          </div>
        </div>
        <div className="op-section__body">
          <div className="op-item-row app-version">
            <span className="app-version-logo">
              <img src={logo} alt="" />
            </span>
            <div className="op-item-row__text">
              <strong>
                {brand} {version}
              </strong>
              <span className="op-small op-muted">Build {build}</span>
            </div>
            <span className="op-pill op-pill--neutral">
              <Icon name="check" />
              Installed
            </span>
          </div>
          <div
            className={`op-update ${result?.state === "available" ? "" : "op-update--current"}`}
            role="status"
          >
            <div className="op-update__main">
              <span className="op-update__icon">
                <Icon
                  name={
                    result?.state === "available"
                      ? "circle-arrow-up"
                      : result?.state === "current"
                        ? "circle-check"
                        : "info"
                  }
                />
              </span>
              <div className="op-update__text">
                <strong>
                  {error
                    ? "Unable to check for updates"
                    : !result
                      ? "Check for the latest release"
                      : result.state === "current"
                        ? "You are up to date."
                        : result.state === "available"
                          ? `Version ${result.tag} is available.`
                          : "Release information unavailable"}
                </strong>
                <span className="op-small op-muted">
                  {error ||
                    (!result
                      ? "Check for updates to see published changes and upgrade instructions."
                      : result.state === "available"
                        ? "Review the release notes and instructions below before upgrading."
                        : result.state === "current"
                          ? "You are running the latest published version."
                          : result.message)}
                </span>
              </div>
            </div>
            {result?.url && (
              <div className="op-update__alt">
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  View release on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="op-section__foot app-settings-footer">
          <span className="op-small">
            {result
              ? `${result.cached ? "Cached check" : "Last checked"} · ${new Date(result.checkedAt).toLocaleString()}`
              : admin
                ? "No update check yet"
                : "An administrator can check for updates."}
          </span>
          <button
            disabled={!admin || busy}
            className="op-btn op-btn--secondary"
            onClick={check}
          >
            <Icon name="refresh-cw" />
            {busy ? "Checking…" : "Check for updates"}
          </button>
        </div>
      </section>
      {result?.state === "available" && admin && (
        <section className="op-section">
          <div className="op-section__head">
            <div>
              <h2 className="op-section__title">Upgrade Instructions</h2>
              <p className="op-section__desc">
                Installed {version} → {result.tag} ·{" "}
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  Release source
                </a>
              </p>
            </div>
          </div>
          <div className="op-section__body">
            {result.instructions ? (
              <Markdown text={result.instructions} />
            ) : (
              <p>{result.message}</p>
            )}
          </div>
          {result.instructions && (
            <div className="op-section__foot">
              <span className="op-small">Published instructions</span>
              <button
                className="op-btn op-btn--secondary"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(result.instructions!);
                    setCopied(true);
                  } catch {
                    setError(
                      "Clipboard unavailable. Select and copy the instructions.",
                    );
                  }
                }}
              >
                <Icon name="copy" />
                {copied ? "Copied" : "Copy instructions"}
              </button>
            </div>
          )}
        </section>
      )}
      <section className="op-section">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title">Change log</h2>
            <p className="op-section__desc">
              Release notes from the app publisher.
            </p>
          </div>
        </div>
        <div className="op-section__body">
          {result?.body ? (
            <div className="app-release-row">
              <div className="app-release-meta">
                <h3>{result.tag}</h3>
                <span className="op-pill op-pill--neutral">
                  {result.state === "available"
                    ? "Available"
                    : "Latest release"}
                </span>
              </div>
              <Markdown text={result.body} />
            </div>
          ) : (
            <p className="op-small op-muted">
              Check for updates to see published changes.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
