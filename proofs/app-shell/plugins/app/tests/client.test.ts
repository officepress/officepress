//node
import assert from 'node:assert/strict';
import test from 'node:test';

//client
import { requestJson } from '../client.js';

//--------------------------------------------------------------------//
// JSON response contracts

//successful endpoints may return an event envelope or raw fixture JSON
test('JSON client unwraps event results and retains raw responses', async (ctx) => {
  //setup: stub the HTTP boundary, leaving JSON decoding and client logic
  // real
  const payloads: unknown[] = [ { results: { id: 'item-1' } }, [ 'raw' ], null ];
  ctx.mock.method(globalThis, 'fetch', async () => {
    return new Response(JSON.stringify(payloads.shift()), { status: 200 });
  });

  //action/assert: preserve the endpoint result contract across response
  // formats
  assert.deepEqual(await requestJson('/api/fixture'), { id: 'item-1' });
  assert.deepEqual(await requestJson('/api/fixture'), [ 'raw' ]);
  assert.equal(await requestJson('/api/fixture'), null);
});

//mutation metadata is shared by every feature using this browser adapter
test('JSON client sends CSRF mutations and forwards cancellation', async (ctx) => {
  //setup: capture the request that a real transport would receive
  let request: RequestInit | undefined;
  ctx.mock.method(
    globalThis,
    'fetch',
    async (_input: Parameters<typeof fetch>[0], options?: RequestInit) => {
      request = options;
      return new Response(JSON.stringify({ results: 'saved' }), {
        status: 200
      });
    }
  );
  const controller = new AbortController();

  //action: submit feature data using the page's CSRF token and signal
  assert.equal(
    await requestJson(
      '/api/fixture',
      { title: 'Updated' },
      'csrf-token',
      controller.signal
    ),
    'saved'
  );

  //assert: transport metadata and payload survive without leaking into
  // results
  assert.equal(request?.method, 'POST');
  assert.equal(request?.signal, controller.signal);
  assert.deepEqual(request?.headers, { 'Content-Type': 'application/json' });
  assert.deepEqual(JSON.parse(String(request?.body)), {
    title: 'Updated',
    csrf: 'csrf-token'
  });
});

//errors may come from application handlers or an unexpected upstream
// envelope
test('JSON client reports application and HTTP errors with a safe fallback', async (ctx) => {
  //setup: exercise both HTTP-200 event errors and transport failures
  const responses = [
    { payload: { error: 'Denied' }, status: 200 },
    { payload: { error: { message: 'Conflict' } }, status: 409 },
    { payload: { error: { message: 123 } }, status: 502 },
    { payload: null, status: 503 }
  ];
  ctx.mock.method(globalThis, 'fetch', async () => {
    const response = responses.shift()!;
    return new Response(JSON.stringify(response.payload), {
      status: response.status
    });
  });

  //action/assert: meaningful messages survive; malformed errors remain
  // readable
  await assert.rejects(() => requestJson('/api/fixture'), /Denied/);
  await assert.rejects(() => requestJson('/api/fixture'), /Conflict/);
  await assert.rejects(() => requestJson('/api/fixture'), /Request failed/);
  await assert.rejects(() => requestJson('/api/fixture'), /Request failed/);
});
