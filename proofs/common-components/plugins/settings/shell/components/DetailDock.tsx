import { useRef, useState, type ReactNode } from "react";
/** Shell-owned full-height detail region, following the wireframe panel layout. */
export default function DetailDock({
  title,
  expanded,
  children,
}: {
  title: string;
  expanded: boolean;
  children: ReactNode;
}) {
  const [width, setWidth] = useState(360);
  const start = useRef<{ x: number; width: number } | null>(null);
  const clamp = (value: number) =>
    Math.max(280, Math.min(value, Math.min(640, window.innerWidth - 180)));
  return (
    <aside
      className={`component-details ${expanded ? "component-details--expanded" : ""}`}
      aria-label={title}
      style={expanded ? undefined : { width }}
    >
      {!expanded && (
        <div
          className="component-details-resize"
          role="separator"
          aria-label="Resize details panel"
          aria-orientation="vertical"
          aria-valuemin={280}
          aria-valuemax={640}
          aria-valuenow={width}
          tabIndex={0}
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            start.current = { x: e.clientX, width };
            e.currentTarget.setPointerCapture(e.pointerId);
            e.preventDefault();
          }}
          onPointerMove={(e) => {
            if (start.current)
              setWidth(
                clamp(start.current.width + start.current.x - e.clientX),
              );
          }}
          onPointerUp={(e) => {
            start.current = null;
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onPointerCancel={() => {
            start.current = null;
          }}
          onKeyDown={(e) => {
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
              e.preventDefault();
              setWidth(
                clamp(
                  e.key === "Home"
                    ? 280
                    : e.key === "End"
                      ? 640
                      : width + (e.key === "ArrowLeft" ? 20 : -20),
                ),
              );
            }
          }}
        />
      )}
      {children}
    </aside>
  );
}
