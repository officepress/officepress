//node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

//client
import type { AgentOptions } from '../openrouter.js';
import { config } from '../../../config/common.js';
import { bootstrap } from '../../../tests/bootstrap.js';
import { runAgent, models } from '../openrouter.js';

//--------------------------------------------------------------------//
// Constants

const options: AgentOptions = {
  apiKey: 'synthetic-test-only',
  model: models[0],
  prompt: 'Read item',
  context: {},
  actions: {
    tools: [
      {
        name: 'read_item',
        description: 'Read',
        parameters: { type: 'object', properties: {} }
      }
    ],
    execute: async () => ({ title: 'Planning notes' })
  }
};
//--------------------------------------------------------------------//
// Functions

/**
 * Create a deterministic completion response for the mocked provider
 * boundary.
 */
function reply(message: unknown) {
  return new Response(
    JSON.stringify({
      id: 'controlled',
      model: models[0],
      choices: [ { message } ]
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

test('controlled provider tool loop records successful actions and native results', async () => {
  //stub only provider transport; the real model loop must execute and
  // retain the read tool
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () =>
    ++calls === 1
      ? reply({
          role: 'assistant',
          tool_calls: [
            { id: 'read', function: { name: 'read_item', arguments: '{}' } }
          ]
        })
      : reply({ role: 'assistant', content: 'Read completed' });
  try {
    const result = await runAgent(options);
    assert.equal(result.cards[0].state, 'done');
    assert.equal(result.calls.length, 2);
    assert.equal(result.text, 'Read completed');
  } finally {
    globalThis.fetch = original;
  }
});

test('controlled provider failures retain committed cards for explicit Undo', async () => {
  //fail the second provider round after a committed tool result to preserve
  // partial work
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () =>
    ++calls === 1
      ? reply({
          role: 'assistant',
          tool_calls: [
            { id: 'read', function: { name: 'read_item', arguments: '{}' } }
          ]
        })
      : new Response('unavailable', { status: 503 });
  try {
    const result = await runAgent(options);
    assert.equal(result.cards.length, 1);
    assert.equal(result.cards[0].state, 'done');
    assert.match(result.error || '', /503/);
  } finally {
    globalThis.fetch = original;
  }
});

test('controlled cancellation after execution retains completed card', async () => {
  //cancel after the local action commits, keeping its completed result
  // visible
  const original = globalThis.fetch;
  const abort = new AbortController();
  globalThis.fetch = async () =>
    reply({
      role: 'assistant',
      tool_calls: [
        { id: 'read', function: { name: 'read_item', arguments: '{}' } }
      ]
    });
  try {
    const result = await runAgent({
      ...options,
      signal: abort.signal,
      actions: {
        ...options.actions,
        execute: async () => {
          abort.abort();
          return { committed: true };
        }
      }
    });
    assert.equal(result.cancelled, true);
    assert.equal(result.cards[0].state, 'done');
  } finally {
    globalThis.fetch = original;
  }
});

test('unknown tools cannot execute and unconfigured models/credentials fail closed', async () => {
  //invalid configuration must fail before any provider or domain work is
  // attempted
  await assert.rejects(
    runAgent({ ...options, model: 'unconfigured' }),
    /not configured/
  );
  await assert.rejects(runAgent({ ...options, apiKey: '' }), /unavailable/);
  //an unregistered tool name must never reach the action executor
  const original = globalThis.fetch;
  let hasExecuted = false;
  let calls = 0;
  globalThis.fetch = async () =>
    ++calls === 1
      ? reply({
          role: 'assistant',
          tool_calls: [
            { id: 'unknown', function: { name: 'unknown', arguments: '{}' } }
          ]
        })
      : reply({ role: 'assistant', content: 'Unavailable' });
  try {
    const result = await runAgent({
      ...options,
      actions: {
        ...options.actions,
        execute: async () => {
          hasExecuted = true;
          return {};
        }
      }
    });
    assert.equal(hasExecuted, false);
    assert.equal(result.cards[0].state, 'error');
  } finally {
    globalThis.fetch = original;
  }
});

test('named agent-run captures trusted caller and delegates through business event', async () => {
  //bootstrap the real plugin chain with synthetic transport and owned
  // scratch state
  const original = globalThis.fetch;
  const key = process.env.OPENROUTER_TEST_KEY;
  const run = fs.mkdtempSync(path.join(os.tmpdir(), 'p00-runner-'));
  let calls = 0;
  process.env.OPENROUTER_TEST_KEY = 'synthetic-test-only';
  globalThis.fetch = async () =>
    ++calls === 1
      ? reply({
          role: 'assistant',
          tool_calls: [
            { id: 'read', function: { name: 'read_item', arguments: '{}' } }
          ]
        })
      : reply({ role: 'assistant', content: 'Read completed' });

  try {
    const server = await bootstrap(config(path.join(run, 'state.json')));
    const outcome = await server.resolve('agent-run', {
      caller: {
        id: 'proof-editor',
        companyId: 'officepress-proof',
        role: 'editor'
      },
      model: models[0],
      prompt: 'Read',
      context: {}
    });
    assert.equal(outcome.code, 200);
    const result = outcome.results as Awaited<ReturnType<typeof runAgent>>;
    assert.equal(result.cards[0].state, 'done');
    assert.equal(
      (result.cards[0].result as { title: string }).title,
      'Planning notes'
    );
    //disabling the domain provider must also prevent model-runtime
    // registration
    const disabled = await bootstrap(config(path.join(run, 'disabled.json')), [
      'agent-domain'
    ]);
    assert.equal(disabled.plugin('agent-runtime'), undefined);
    assert.equal((await disabled.resolve('agent-run', {})).code, 0);
  } finally {
    //restore global transport, environment and scratch files even on
    // assertion failure
    globalThis.fetch = original;
    if (key === undefined) delete process.env.OPENROUTER_TEST_KEY;
    else process.env.OPENROUTER_TEST_KEY = key;
    fs.rmSync(run, { recursive: true, force: true });
  }
});
