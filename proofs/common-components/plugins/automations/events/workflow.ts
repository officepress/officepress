//modules
import { action } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Transition } from '../../workflows/types.js';
import type { AutomationService } from '../types.js';

/**
 * Observe committed workflow transitions after core handlers; caller comes
 * from the owner.
 */
export default action(async function workflowTransition({
  req,
  ctx
}: HttpProps) {
  const transition = req.data<Transition>('transition');
  await ctx
    .plugin<AutomationService>('automations')
    .trigger(transition, transition.caller);
});
