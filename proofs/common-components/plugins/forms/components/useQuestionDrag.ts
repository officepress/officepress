//modules
import type { PointerEvent } from 'react';
import { useRef, useState } from 'react';

//client
import type { Field } from '../types.js';

/**
 * Reorder questions with pointer capture, independent of native HTML
 * dragging.
 */
export function useQuestionDrag(
  fields: Field[],
  move: (id: string, targetIndex: number) => void,
  isEnabled: boolean
) {
  //gesture data lives in a ref while visual drag and insertion markers
  // trigger rerenders
  const active = useRef<{
    id: string,
    x: number,
    y: number,
    moved: boolean
  } | null>(null);
  const [ dragging, setDragging ] = useState('');
  const [ target, setTarget ] = useState<{ id: string, after: boolean } | null>(
    null
  );

  //use each question's midpoint to show an exact insertion boundary
  function getDropTarget(event: PointerEvent<HTMLElement>) {
    const canvas = event.currentTarget.closest('.op-pane--canvas');
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
      ...canvas.querySelectorAll<HTMLElement>('[data-form-question]')
    ];
    const card =
      cards.find(
        (item) => event.clientY <= item.getBoundingClientRect().bottom
      ) || cards.at(-1);
    if (!card) return null;
    const rect = card.getBoundingClientRect();
    return {
      id: card.dataset.formQuestion!,
      after: event.clientY > rect.top + rect.height / 2
    };
  }

  //release visual state on a drop, cancellation or lost pointer
  function clearGesture() {
    active.current = null;
    setDragging('');
    setTarget(null);
  }

  return {
    dragging,
    target,
    //build pointer handlers for one item while sharing the drag gesture
    // state
    bind(id: string) {
      return {
        //start an enabled drag gesture and capture the initiating pointer
        onPointerDown(event: PointerEvent<HTMLElement>) {
          const element = event.target as HTMLElement;
          const handle = element.closest('[data-question-drag-handle]');
          if (
            !isEnabled ||
            event.button !== 0 ||
            (!handle &&
              (event.pointerType === 'touch' ||
                element.closest('button,input,textarea,select,a')))
          )
            return;
          active.current = {
            id,
            x: event.clientX,
            y: event.clientY,
            moved: false
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          if (handle) event.preventDefault();
        },
        //update the drag target after the movement threshold and scroll
        // near the viewport edge
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
          setTarget(getDropTarget(event));
          //scroll the canvas or its responsive outer scroller near an edge
          const canvas =
            event.currentTarget.closest<HTMLElement>('.op-pane--canvas');
          const scroller =
            canvas &&
            canvas.scrollHeight > canvas.clientHeight &&
            getComputedStyle(canvas).overflowY !== 'visible'
              ? canvas
              : event.currentTarget.closest<HTMLElement>('.forms-component');
          const rect = scroller?.getBoundingClientRect();
          if (scroller && rect) {
            if (event.clientY > Math.min(rect.bottom, innerHeight) - 48)
              scroller.scrollTop += 18;
            else if (event.clientY < rect.top + 48) scroller.scrollTop -= 18;
          }
        },
        //release pointer capture, clear drag state and commit a valid
        // destination
        onPointerUp(event: PointerEvent<HTMLElement>) {
          const state = active.current;
          const destination = getDropTarget(event);
          if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
          clearGesture();
          if (!state?.moved || !destination) return;
          const sourceIndex = fields.findIndex(
            (field) => field.id === state.id
          );
          const targetIndex = fields.findIndex(
            (field) => field.id === destination.id
          );
          if (sourceIndex < 0 || targetIndex < 0) return;
          //remove the dragged item’s old position before applying the
          // insertion boundary
          const boundary = targetIndex + Number(destination.after);
          move(state.id, boundary - Number(sourceIndex < boundary));
        },
        onPointerCancel: clearGesture,
        onLostPointerCapture: clearGesture
      };
    }
  };
};
