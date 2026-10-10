//modules
import type { PointerEvent } from 'react';
import { useRef, useState } from 'react';

//client
import type { Card } from '../types.js';

/**
 * Pointer capture works for mouse, pen and the explicit touch drag handle.
 */
export function useCardDrag({
  enabled: isEnabled,
  move
}: {
  enabled: boolean,
  move: (card: Card, stage: string) => void
}) {
  //retain the initiating card and pointer while visual targets remain
  // render state
  const active = useRef<{
    card: Card,
    x: number,
    y: number,
    moved: boolean
  } | null>(null);
  const suppress = useRef(false);
  const [ dragging, setDragging ] = useState('');
  const [ target, setTarget ] = useState('');
  //find the drop destination beneath the current pointer
  function getDropTarget(event: PointerEvent<HTMLElement>) {
    return (
      document
        .elementFromPoint(event.clientX, event.clientY)
        ?.closest<HTMLElement>('[data-workflow-stage]')?.dataset
        .workflowStage || ''
    );
  }
  //clear the active drag gesture and its visual destination
  const clear = () => {
    active.current = null;
    setDragging('');
    setTarget('');
  };
  return {
    dragging,
    target,
    //consume the click suppression flag set by a completed drag gesture
    ignoreClick() {
      const shouldSuppressClick = suppress.current;
      suppress.current = false;
      return shouldSuppressClick;
    },
    //build pointer handlers for one item while sharing the drag gesture
    // state
    bind(card: Card) {
      return {
        //start an enabled drag gesture and capture the initiating pointer
        onPointerDown(event: PointerEvent<HTMLElement>) {
          suppress.current = false;
          if (
            !isEnabled ||
            event.button !== 0 ||
            (event.pointerType === 'touch' &&
              !(event.target as HTMLElement).closest('[data-card-drag-handle]'))
          )
            return;
          active.current = {
            card,
            x: event.clientX,
            y: event.clientY,
            moved: false
          };
          event.currentTarget.setPointerCapture(event.pointerId);
        },
        //update the drag target after the movement threshold and scroll
        // near the viewport edge
        onPointerMove(event: PointerEvent<HTMLElement>) {
          const state = active.current;
          if (!state) return;
          if (
            !state.moved &&
            Math.hypot(event.clientX - state.x, event.clientY - state.y) < 6
          )
            return;
          state.moved = true;
          //a drag must not also open the card through its subsequent click
          suppress.current = true;
          setDragging(state.card.id);
          setTarget(getDropTarget(event));
          const board = event.currentTarget.closest<HTMLElement>('.wf-board');
          const bounds = board?.getBoundingClientRect();
          if (board && bounds) {
            if (event.clientX > bounds.right - 48) board.scrollLeft += 18;
            else if (event.clientX < bounds.left + 48) board.scrollLeft -= 18;
            if (event.clientY > bounds.bottom - 48) board.scrollTop += 18;
            else if (event.clientY < bounds.top + 48) board.scrollTop -= 18;
          }
        },
        //release pointer capture, clear drag state and commit a valid
        // destination
        onPointerUp(event: PointerEvent<HTMLElement>) {
          const state = active.current;
          const destination = getDropTarget(event);
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
          clear();
          if (state?.moved && destination) move(state.card, destination);
        },
        //clear an interrupted gesture without committing a move
        onPointerCancel() {
          clear();
        },
        //clear gesture state when pointer ownership is lost
        onLostPointerCapture() {
          clear();
        }
      };
    }
  };
};
