//modules
import { action } from '@stackpress/ingest';

//client
import type { Caller } from '../../agent-domain/index.js';
import type { runAgent } from '../index.js';
import { tools } from '../../agent-domain/index.js';

/**
 * Run the configured model with company-scoped action tools, forwarding
 * cancellation and routing every tool call through the domain event.
 */
export default action(async ({ req, res, ctx }) => {
  const runner = ctx.plugin<typeof runAgent>('agent-runtime');
  if (!runner || !process.env.OPENROUTER_TEST_KEY) {
    res.setError('Agent unavailable').statusCode(503);
    return;
  }
  //caller and cancellation are server-owned inputs to this internal event
  const caller = req.data<Caller>('caller');
  const result = await runner({
    apiKey: process.env.OPENROUTER_TEST_KEY,
    model: req.data<string>('model'),
    prompt: req.data<string>('prompt'),
    context: req.data('context'),
    signal: req.data<AbortSignal>('signal'),
    actions: {
      tools,
      execute: async (name, input, operationId) => {
        const outcome = await ctx.resolve('agent-action', {
          caller,
          name,
          input,
          operationId
        });
        if (outcome.code !== 200)
          throw new Error(String(outcome.error || 'Action failed'));
        return outcome.results;
      }
    }
  });
  res.results(result);
});
