//modules
import type Engine from '@stackpress/inquire/Engine';
import { action as defineAction } from '@stackpress/ingest/Server';

//client
import type { HttpProps } from '../../app/types.js';
import type { Identity } from '../../auth/types.js';
import type { AgentResult, AgentRuntime } from '../types.js';
import { runAgent } from '../openrouter.js';
import { tools } from '../tools.js';

/**
 * Validate an authorized model run, persist its progress and execute allowed
 * tools.
 */
export default defineAction(async function runEvent({
  req,
  res,
  ctx
}: HttpProps) {
  const identity = ctx.plugin<Identity>('identity');
  const database = ctx.plugin<Engine>('database');
  const officepressConfig = ctx.config('officepress');
  const running = ctx.plugin<AgentRuntime>('agent').running;

  //refresh the trusted session before claiming or replaying a run
  const user = await identity.requireUser(req, res);
  if (!user) return;
  const id = String(req.data('runId') || '');
  const model = String(req.data('model') || '');
  const prompt = String(req.data('prompt') || '');
  if (
    !/^[-\w]{8,80}$/.test(id) ||
    !officepressConfig.agent.models.includes(model) ||
    !prompt.trim() ||
    prompt.length > 2000
  ) {
    res.setError('Invalid agent request.').statusCode(400);
    return;
  }
  //bind replay to the normalized request so a reused ID cannot change its
  // meaning
  const signature = JSON.stringify({
    model,
    prompt,
    route: [ '/', '/settings/about', '/settings/theme' ].includes(
      String(req.data('route'))
    )
      ? String(req.data('route'))
      : '/',
    context: 'app'
  });
  const start = new Date().toISOString();
  //claim once in the database; another request may already own this run
  const claimed = await database.query(
    'INSERT INTO "shell_agent_run" ("id","owner_id","app_id","payload") VALUES (?,?,?,?) ON CONFLICT ("id") DO NOTHING RETURNING "id"',
    [
      id,
      user.id,
      officepressConfig.appId,
      { state: 'running', requestedModel: model, start, signature }
    ]
  );
  //replay only the same caller, app and request signature
  if (!claimed.length) {
    const existing = await database.query<{ payload: AgentResult }>(
      'SELECT "payload" FROM "shell_agent_run" WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ?',
      [ id, user.id, officepressConfig.appId ]
    );
    if (!existing[0] || existing[0].payload.signature !== signature) {
      res
        .setError('Run ID already used for a different request.')
        .statusCode(409);
      return;
    }
    res.results(existing[0].payload);
    return;
  }
  //keep cancellation server-owned and remove the handle when the run
  // finishes
  const controller = new AbortController();
  running.set(id, controller);
  try {
    //refresh authorization before reading the app metadata exposed to the
    // model
    const readContext = async () => {
      //reload roles before every model-requested context read; a long run
      // can outlive authorization
      identity.invalidate(req);
      const currentCaller = await identity.caller(req);
      if (!currentCaller) throw new Error('Session expired.');
      const theme = ctx.plugin<{
        read(): Promise<{ theme: { brand: string } }>
      }>('theme');
      return {
        name: theme ? (await theme.read()).theme.brand : officepressConfig.name,
        version: officepressConfig.version,
        features: {
          agent: true,
          notifications: !!ctx.plugin('notifications'),
          about: !!ctx.plugin('about'),
          theme: !!theme
        },
        settings: {
          account: ctx.config.path('auth.base', '/auth') + '/account',
          ...(currentCaller.roles.includes('ADMIN')
            ? { about: '/settings/about', theme: '/settings/theme' }
            : {})
        },
        permissions:
          'App information only. Domain actions are supplied by the adopting app.'
      };
    };
    const result = await runAgent({
      apiKey: officepressConfig.agent.apiKey,
      model,
      prompt,
      operationId: id,
      signal: AbortSignal.any([
        controller.signal,
        AbortSignal.timeout(officepressConfig.agent.timeoutMs)
      ]),
      context: { route: JSON.parse(signature).route, scope: 'app' },
      actions: {
        tools,
        execute: async (name) => {
          if (controller.signal.aborted)
            throw new Error('Stopped before action.');
          if (name !== 'read_app') throw new Error('Action is not available');
          return readContext();
        }
      }
    });
    const payload = {
      ...result,
      signature,
      state: result.cancelled ? 'cancelled' : result.error ? 'error' : 'done',
      requestedModel: model,
      start,
      finished: new Date().toISOString()
    };
    //persist the final snapshot before returning it to the browser
    await database.query(
      'UPDATE "shell_agent_run" SET "payload" = ? WHERE "id" = ? AND "owner_id" = ?',
      [ JSON.stringify(payload), id, user.id ]
    );
    res.results(payload);
  } catch (caughtError) {
    const message = (caughtError as Error).message;
    await database.query(
      'UPDATE "shell_agent_run" SET "payload" = ? WHERE "id" = ? AND "owner_id" = ?',
      [ { state: 'error', error: message, start, signature }, id, user.id ]
    );
    res.setError(message).statusCode(409);
  } finally {
    running.delete(id);
  }
});
