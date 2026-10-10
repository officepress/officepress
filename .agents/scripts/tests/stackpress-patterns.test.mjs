import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectPlugin, verifyProof } from '../verify-stackpress-patterns.mjs';

test('recognizes direct lazy routes and view bindings', () => {
  assert.deepEqual(inspectPlugin(`
    import type { Result } from './pages/read.js';
    import { createService } from './service.js';
    server.on('route', ({ctx}) => {
      ctx.get('/about', () => import('./pages/read.js'));
      ctx.route('POST', '/about', () => import('./pages/update.js'));
      ctx.view.get('/about', '@/plugins/about/views/read');
      ctx.on('changed', () => import('./events/changed.js'));
    });`), []);
});

test('rejects eager, named, parameterized, indirect and inline request handlers', () => {
  const invalid = [
    `import read from './pages/read.js'; ctx.get('/about', read);`,
    `import * as pages from './pages/read.js'; ctx.get('/about', pages.default);`,
    `export {default as read} from './pages/read.js';`,
    `ctx.get('/about', function read(){return import('./pages/read.js')});`,
    `ctx.get('/about', (props) => import('./pages/read.js'));`,
    `ctx.get('/about', lazy(() => import('./pages/read.js')));`,
    `ctx.post('/about', ({res}) => res.json({ok:true}));`,
    `ctx.route('POST', '/about', updatePage('save'));`,
    `ctx.get('/about', () => import(modulePath));`,
    `ctx.get('/about', () => import('./pages/read.js').then(module => ({default: module.default('save')})));`,
    `ctx.get('/about', () => { return import('./pages/read.js'); });`,
    `import View from './views/read.js';`,
    `import action from './events/read.js'; ctx.on('read', action);`,
  ];
  for (const source of invalid) assert.ok(inspectPlugin(source).length, source);
});

test('allows type imports, eager config providers and non-Ingest domain subscriptions', () => {
  assert.deepEqual(inspectPlugin(`
    import {type PageData} from './pages/read.js';
    import {createIdentity} from './identity.js';
    import transition from './events/transition.js';
    server.on('config', ({ctx}) => ctx.register('identity', createIdentity(ctx)));
    workflows.subscribe(transition(service));`), []);
});

for (const proof of ['proofs/app-shell', 'proofs/common-components', 'proofs/stackpress-boilerplate', 'proofs/agent-mode-compatibility']) {
  test(`${proof} preserves authored lazy import boundaries`, () => {
    const {plugins, errors} = verifyProof(proof);
    assert.ok(plugins > 0);
    assert.deepEqual(errors, []);
  });
}

test('installed Ingest defers import callbacks and invokes their default action', async () => {
  const { default: Router } = await import('../../../proofs/app-shell/node_modules/@stackpress/ingest/esm/Router.js');
  const router = new Router();
  let loads = 0, runs = 0;
  router.get('/lazy', async () => {
    loads++;
    return { default({res}) { runs++; res.results({loaded:true}); } };
  }, 19);
  assert.equal(loads, 0);
  assert.equal(runs, 0);
  const imports = [...router.imports.values()].flatMap(value => [...value]);
  assert.equal(imports.length, 1);
  assert.equal(imports[0].priority, 19);
  const response = await router.resolve('GET', '/lazy');
  assert.equal(response.code, 200);
  assert.deepEqual(response.results, {loaded:true});
  assert.equal(loads, 1);
  assert.equal(runs, 1);
});

test('installed missing-event outcome requires an explicit success check', async () => {
  const { default: Router } = await import('../../../proofs/app-shell/node_modules/@stackpress/ingest/esm/Router.js');
  const response = await new Router().resolve('not-registered');
  assert.equal(response.code, 0);
  assert.equal(response.results, null);
});
