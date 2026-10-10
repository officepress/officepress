//node
import assert from 'node:assert/strict';

//modules
import type Engine from '@stackpress/inquire/Engine';

//client
import { Actions } from '../domain.js';

/**
 * Verify public fixture actions, permissions, revision conflicts and
 * operation replay.
 */
export async function actionContracts(database: Engine) {
  const user = { id: 'domain-owner', roles: [ 'MEMBER' ] };
  await database.query(
    'INSERT INTO "shell_item" ("id","app_id","owner_id","title","revision") VALUES (?,?,?,?,0)',
    [ 'domain-card', 'domain-app', user.id, 'Original' ]
  );
  const actions = new Actions(database, 'domain-app');
  //non-web callers must receive the owned rejection before any ID
  // dereference
  await assert.rejects(
    actions.read(undefined as unknown as Parameters<typeof actions.read>[0]),
    /Forbidden/
  );
  await assert.rejects(
    actions.read({ id: 'other', roles: [ 'ADMIN' ] }, 'domain-card')
  );
  await assert.rejects(
    actions.rename(
      { ...user, roles: [ 'READONLY' ] },
      {
        id: 'domain-card',
        title: 'Denied',
        expectedRevision: 0,
        operationId: 'denied-op'
      }
    )
  );
  const input = {
    id: 'domain-card',
    title: 'Changed',
    expectedRevision: 0,
    operationId: 'operation-one'
  };
  const first = await actions.rename(user, input);
  assert.equal(first.revision, 1);
  const retry = await actions.rename(user, {
    operationId: 'operation-one',
    expectedRevision: 0,
    title: 'Changed',
    id: 'domain-card'
  });
  assert.deepEqual(retry, first);
  assert.equal((await actions.read(user, 'domain-card')).revision, 1);
  await assert.rejects(actions.rename(user, { ...input, title: 'Different' }));
  await assert.rejects(
    actions.rename(user, { ...input, operationId: 'operation-stale' })
  );
  const undo = await actions.undo(user, 'operation-one', 'operation-undo');
  assert.equal(undo.title, 'Original');
  assert.equal(undo.revision, 2);
  await assert.rejects(
    actions.undo(user, 'operation-one', 'operation-undo-again')
  );
  //a transaction rollback must not absorb an unrelated concurrent write
  let release!: () => void;
  let entered!: () => void;
  const gate = new Promise<void>(
    (resolveRelease) => (release = resolveRelease)
  );
  const ready = new Promise<void>(
    (resolveEntered) => (entered = resolveEntered)
  );
  const rolling = database
    .transaction(async () => {
      entered();
      await gate;
      throw new Error('rollback fixture');
    })
    .catch(() => {});
  await ready;
  const external = database.query(
    'INSERT INTO "shell_theme" ("id","app_id","payload","revision") VALUES (?,?,?,1)',
    [ 'concurrent', 'concurrent', {} ]
  );
  release();
  await rolling;
  await external;
  assert.equal(
    (
      await database.query('SELECT "id" FROM "shell_theme" WHERE "id" = ?', [
        'concurrent'
      ])
    ).length,
    1
  );
  return [
    'Owner and read-only permissions enforced before actions',
    'JSONB key order and reordered input do not break idempotent replay',
    'Stale/reused operations rejected; Undo restores data once',
    'Unrelated SQL request cannot join and vanish with another request rollback'
  ];
};
