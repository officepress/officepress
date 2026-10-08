import { useEffect, useState } from "react";
import Icon from "./Icon.js";
export default function ModeButton() {
  const [mode, setMode] = useState("light");
  useEffect(
    () => setMode(document.documentElement.dataset.mode || "light"),
    [],
  );
  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.mode = next;
    setMode(next);
    try {
      localStorage.setItem("op-mode", next);
    } catch {}
  }
  return (
    <button
      type="button"
      className="op-icon-btn op-icon-btn--circle op-theme-btn"
      aria-label={mode === "dark" ? "Dark mode" : "Light mode"}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
    >
      <Icon name="sun" className="op-icon--sun" />
      <Icon name="moon" className="op-icon--moon" />
    </button>
  );
}
