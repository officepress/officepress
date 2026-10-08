import { useRef, useState, type PointerEvent } from "react";
import type { Field } from "../types.js";

/** Reorder questions with pointer capture, independent of native HTML dragging. */
export function useQuestionDrag(
  fields: Field[],
  move: (id: string, to: number) => void,
  enabled: boolean,
) {
  const active = useRef<{
    id: string;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const [dragging, setDragging] = useState("");
  const [target, setTarget] = useState<{ id: string; after: boolean } | null>(
    null,
  );

  /** Use each question's midpoint to show an exact insertion boundary. */
  function targetAt(event: PointerEvent<HTMLElement>) {
    const canvas = event.currentTarget.closest(".op-pane--canvas");
    const bounds = canvas?.getBoundingClientRect();
    if (
      !canvas ||
      !bounds ||
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      return null;
    const cards = [
      ...canvas.querySelectorAll<HTMLElement>("[data-form-question]"),
    ];
    const card =
      cards.find(
        (item) => event.clientY <= item.getBoundingClientRect().bottom,
      ) || cards.at(-1);
    if (!card) return null;
    const rect = card.getBoundingClientRect();
    return {
      id: card.dataset.formQuestion!,
      after: event.clientY > rect.top + rect.height / 2,
    };
  }

  /** Release visual state on a drop, cancellation or lost pointer. */
  function clear() {
    active.current = null;
    setDragging("");
    setTarget(null);
  }

  return {
    dragging,
    target,
    bind(id: string) {
      return {
        onPointerDown(event: PointerEvent<HTMLElement>) {
          const element = event.target as HTMLElement;
          const handle = element.closest("[data-question-drag-handle]");
          if (
            !enabled ||
            event.button !== 0 ||
            (!handle &&
              (event.pointerType === "touch" ||
                element.closest("button,input,textarea,select,a")))
          )
            return;
          active.current = {
            id,
            x: event.clientX,
            y: event.clientY,
            moved: false,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          if (handle) event.preventDefault();
        },
        onPointerMove(event: PointerEvent<HTMLElement>) {
          const state = active.current;
          if (
            !state ||
            (!state.moved &&
              Math.hypot(event.clientX - state.x, event.clientY - state.y) < 6)
          )
            return;
          state.moved = true;
          setDragging(state.id);
          setTarget(targetAt(event));
          // Scroll the canvas or its responsive outer scroller near an edge.
          const canvas =
            event.currentTarget.closest<HTMLElement>(".op-pane--canvas");
          const scroller =
            canvas &&
            canvas.scrollHeight > canvas.clientHeight &&
            getComputedStyle(canvas).overflowY !== "visible"
              ? canvas
              : event.currentTarget.closest<HTMLElement>(".forms-component");
          const rect = scroller?.getBoundingClientRect();
          if (scroller && rect) {
            if (event.clientY > Math.min(rect.bottom, innerHeight) - 48)
              scroller.scrollTop += 18;
            else if (event.clientY < rect.top + 48) scroller.scrollTop -= 18;
          }
        },
        onPointerUp(event: PointerEvent<HTMLElement>) {
          const state = active.current;
          const destination = targetAt(event);
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
          clear();
          if (!state?.moved || !destination) return;
          const from = fields.findIndex((field) => field.id === state.id);
          const to = fields.findIndex((field) => field.id === destination.id);
          if (from < 0 || to < 0) return;
          const boundary = to + Number(destination.after);
          move(state.id, boundary - Number(from < boundary));
        },
        onPointerCancel: clear,
        onLostPointerCapture: clear,
      };
    },
  };
}
