import assert from "node:assert/strict";
import type Engine from "@stackpress/inquire/Engine";
import { Actions } from "../domain.js";
export async function actionContracts(db: Engine) {
  const user = { id: "domain-owner", roles: ["MEMBER"] };
  await db.query(
    'INSERT INTO "shell_item" ("id","app_id","owner_id","title","revision") VALUES (?,?,?,?,0)',
    ["domain-card", "domain-app", user.id, "Original"],
  );
  const actions = new Actions(db, "domain-app");
  await assert.rejects(
    actions.read({ id: "other", roles: ["ADMIN"] }, "domain-card"),
  );
  await assert.rejects(
    actions.rename(
      { ...user, roles: ["READONLY"] },
      {
        id: "domain-card",
        title: "Denied",
        expectedRevision: 0,
        operationId: "denied-op",
      },
    ),
  );
  const input = {
    id: "domain-card",
    title: "Changed",
    expectedRevision: 0,
    operationId: "operation-one",
  };
  const first = await actions.rename(user, input);
  assert.equal(first.revision, 1);
  const retry = await actions.rename(user, {
    operationId: "operation-one",
    expectedRevision: 0,
    title: "Changed",
    id: "domain-card",
  });
  assert.deepEqual(retry, first);
  assert.equal((await actions.read(user, "domain-card")).revision, 1);
  await assert.rejects(actions.rename(user, { ...input, title: "Different" }));
  await assert.rejects(
    actions.rename(user, { ...input, operationId: "operation-stale" }),
  );
  const undo = await actions.undo(user, "operation-one", "operation-undo");
  assert.equal(undo.title, "Original");
  assert.equal(undo.revision, 2);
  await assert.rejects(
    actions.undo(user, "operation-one", "operation-undo-again"),
  );
  // A transaction rollback must not absorb an unrelated concurrent write.
  let release!: () => void, entered!: () => void;
  const gate = new Promise<void>((r) => (release = r)),
    ready = new Promise<void>((r) => (entered = r));
  const rolling = db
    .transaction(async () => {
      entered();
      await gate;
      throw new Error("rollback fixture");
    })
    .catch(() => {});
  await ready;
  const external = db.query(
    'INSERT INTO "shell_theme" ("id","app_id","payload","revision") VALUES (?,?,?,1)',
    ["concurrent", "concurrent", {}],
  );
  release();
  await rolling;
  await external;
  assert.equal(
    (
      await db.query('SELECT "id" FROM "shell_theme" WHERE "id" = ?', [
        "concurrent",
      ])
    ).length,
    1,
  );
  return [
    "Owner and read-only permissions enforced before actions",
    "JSONB key order and reordered input do not break idempotent replay",
    "Stale/reused operations rejected; Undo restores data once",
    "Unrelated SQL request cannot join and vanish with another request rollback",
  ];
}
