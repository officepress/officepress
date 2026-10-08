import { useRef, useState, type PointerEvent } from "react";
import type { Card } from "../types.js";
/** Pointer capture works for mouse, pen and the explicit touch drag handle. */
export function useCardDrag({
  enabled,
  move,
}: {
  enabled: boolean;
  move: (card: Card, stage: string) => void;
}) {
  const active = useRef<{
    card: Card;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const suppress = useRef(false);
  const [dragging, setDragging] = useState("");
  const [target, setTarget] = useState("");
  function targetAt(e: PointerEvent<HTMLElement>) {
    return (
      document
        .elementFromPoint(e.clientX, e.clientY)
        ?.closest<HTMLElement>("[data-workflow-stage]")?.dataset
        .workflowStage || ""
    );
  }
  const clear = () => {
    active.current = null;
    setDragging("");
    setTarget("");
  };
  return {
    dragging,
    target,
    ignoreClick() {
      const value = suppress.current;
      suppress.current = false;
      return value;
    },
    bind(card: Card) {
      return {
        onPointerDown(e: PointerEvent<HTMLElement>) {
          suppress.current = false;
          if (
            !enabled ||
            e.button !== 0 ||
            (e.pointerType === "touch" &&
              !(e.target as HTMLElement).closest("[data-card-drag-handle]"))
          )
            return;
          active.current = { card, x: e.clientX, y: e.clientY, moved: false };
          e.currentTarget.setPointerCapture(e.pointerId);
        },
        onPointerMove(e: PointerEvent<HTMLElement>) {
          const state = active.current;
          if (!state) return;
          if (
            !state.moved &&
            Math.hypot(e.clientX - state.x, e.clientY - state.y) < 6
          )
            return;
          state.moved = true;
          suppress.current = true;
          setDragging(state.card.id);
          setTarget(targetAt(e));
          const board = e.currentTarget.closest<HTMLElement>(".wf-board"),
            bounds = board?.getBoundingClientRect();
          if (board && bounds) {
            if (e.clientX > bounds.right - 48) board.scrollLeft += 18;
            else if (e.clientX < bounds.left + 48) board.scrollLeft -= 18;
            if (e.clientY > bounds.bottom - 48) board.scrollTop += 18;
            else if (e.clientY < bounds.top + 48) board.scrollTop -= 18;
          }
        },
        onPointerUp(e: PointerEvent<HTMLElement>) {
          const state = active.current,
            destination = targetAt(e);
          if (e.currentTarget.hasPointerCapture(e.pointerId))
            e.currentTarget.releasePointerCapture(e.pointerId);
          clear();
          if (state?.moved && destination) move(state.card, destination);
        },
        onPointerCancel() {
          clear();
        },
        onLostPointerCapture() {
          clear();
        },
      };
    },
  };
}
