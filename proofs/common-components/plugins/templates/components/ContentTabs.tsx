import type { KeyboardEvent } from "react";

export type ContentMode = "html" | "text";

/** Keep editor and saved-content tabs consistent, including keyboard navigation. */
export default function ContentTabs({
  mode,
  onChange,
}: {
  mode: ContentMode;
  onChange: (mode: ContentMode) => void;
}) {
  /** Move focus with selection so arrow keys work like a native tab group. */
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? "html"
        : event.key === "End"
          ? "text"
          : mode === "html"
            ? "text"
            : "html";
    onChange(next);
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`#message-${next}-tab`)
      ?.focus();
  }

  return (
    <div
      className="template-content-tabs"
      role="tablist"
      aria-label="Email content mode"
    >
      {(["html", "text"] as const).map((value) => (
        <button
          type="button"
          role="tab"
          id={`message-${value}-tab`}
          key={value}
          aria-selected={mode === value}
          aria-controls="message-content-panel"
          tabIndex={mode === value ? 0 : -1}
          onClick={() => onChange(value)}
          onKeyDown={navigate}
        >
          {value === "html" ? "HTML" : "Plain text"}
        </button>
      ))}
    </div>
  );
}
