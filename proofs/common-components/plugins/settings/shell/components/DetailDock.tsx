//modules
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

//--------------------------------------------------------------------//
// Types

//active panel payload and shell-owned controls for the detail dock
type DetailDockProps = {
  title: string,
  expanded: boolean,
  children: ReactNode
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Shell-owned full-height detail region, following the wireframe panel
 * layout.
 */
export default function DetailDock({
  title,
  expanded: isExpanded,
  children
}: DetailDockProps) {
  const [ width, setWidth ] = useState(360);
  const start = useRef<{ x: number, width: number } | null>(null);
  //keep the detail-panel dimension within its permitted bounds
  const clamp = (value: number) =>
    Math.max(280, Math.min(value, Math.min(640, window.innerWidth - 180)));
  return (
    <aside
      className={`component-details ${isExpanded ? 'component-details--expanded' : ''}`}
      aria-label={title}
      style={isExpanded ? undefined : { width }}
    >
      {!isExpanded && (
        <div
          className="component-details-resize"
          role="separator"
          aria-label="Resize details panel"
          aria-orientation="vertical"
          aria-valuemin={280}
          aria-valuemax={640}
          aria-valuenow={width}
          tabIndex={0}
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            start.current = { x: event.clientX, width };
            event.currentTarget.setPointerCapture(event.pointerId);
            event.preventDefault();
          }}
          onPointerMove={(event) => {
            if (start.current)
              setWidth(
                clamp(start.current.width + start.current.x - event.clientX)
              );
          }}
          onPointerUp={(event) => {
            start.current = null;
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => {
            start.current = null;
          }}
          onKeyDown={(event) => {
            if (
              [ 'ArrowLeft', 'ArrowRight', 'Home', 'End' ].includes(event.key)
            ) {
              event.preventDefault();
              setWidth(
                clamp(
                  event.key === 'Home'
                    ? 280
                    : event.key === 'End'
                      ? 640
                      : width + (event.key === 'ArrowLeft' ? 20 : -20)
                )
              );
            }
          }}
        />
      )}
      {children}
    </aside>
  );
};
