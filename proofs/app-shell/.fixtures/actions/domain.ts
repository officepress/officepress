//modules
import Engine from '@stackpress/inquire/Engine';

//--------------------------------------------------------------------//
// Types

//verified public identity projection used by feature access checks
export type Caller = { id: string, roles: string[] };

//supported fixture arguments; revisions and operation IDs protect mutations
export type Input = {
  id?: string,
  title?: string,
  expectedRevision?: number,
  operationId?: string
};

//caller-owned shell item projected with its optimistic concurrency revision
export type Item = { id: string, title: string, revision: number };

//--------------------------------------------------------------------//
// Classes

/**
 * Execute app-scoped, reversible fixture actions. Construct with the store
 * Engine and app ID; read, rename and undo enforce owner access and
 * revisions.
 */
export class Actions {
  //bind every query and receipt to this app’s store-owned executor and
  // scope
  public constructor(
    //store-owned executor used for app-scoped fixture queries
    public readonly database: Engine,
    //app identifier bound to every item and operation receipt
    public readonly appId: string
  ) {}
  //read the app-scoped item for the authorized caller
  public async read(
    user: Caller,
    id = 'welcome',
    executor = this.database
  ): Promise<Item> {
    if (
      !user ||
      !user.roles.some((role) => [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role))
    )
      throw new Error('Forbidden.');
    //derive the caller-owned welcome ID only after authorization succeeds
    if (id === 'welcome') id = `welcome-${user.id}`;
    const rows = await executor.query<Item>(
      'SELECT "id","title","revision" FROM "shell_item" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
      [ id, this.appId, user.id ]
    );
    if (!rows[0]) throw new Error('Record is unavailable.');
    return rows[0];
  }
  //rename the item with a revision check and an idempotent operation
  // receipt
  public async rename(user: Caller, request: Input): Promise<Item> {
    const input: Input = {
      id: request.id,
      title: request.title,
      expectedRevision: request.expectedRevision,
      operationId: request.operationId
    };
    if (!user?.roles.some((role) => [ 'ADMIN', 'MEMBER' ].includes(role)))
      throw new Error('Read-only account.');
    if (
      typeof input.id !== 'string' ||
      typeof input.title !== 'string' ||
      !input.title.trim() ||
      input.title.length > 120 ||
      !Number.isInteger(input.expectedRevision) ||
      typeof input.operationId !== 'string' ||
      !/^[-:\w]{8,100}$/.test(input.operationId)
    )
      throw new Error('Invalid action input.');
    return this.database.transaction(async (connection) => {
      const executor = new Engine(connection);
      executor.before = this.database.before;
      const before = await this.read(user, input.id, executor);
      const operationRows = await executor.query<{
        payload: { input: Input, result: Item }
      }>(
        'SELECT "payload" FROM "shell_operation" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
        [ input.operationId!, this.appId, user.id ]
      );
      if (operationRows[0]) {
        if (
          !Object.keys(input).every(
            (key) =>
              operationRows[0].payload.input[key as keyof Input] ===
              input[key as keyof Input]
          )
        )
          throw new Error('Operation ID already used for a different action.');
        return operationRows[0].payload.result;
      }
      const rows = await executor.query<Item>(
        'UPDATE "shell_item" SET "title" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id","title","revision"',
        [
          input.title!.trim(),
          input.id!,
          user.id,
          this.appId,
          input.expectedRevision!
        ]
      );
      if (!rows[0])
        throw new Error('Selection changed. Reload before trying again.');
      await executor.query(
        'INSERT INTO "shell_operation" ("id","app_id","owner_id","payload") VALUES (?,?,?,?)',
        [
          input.operationId!,
          this.appId,
          user.id,
          { input, result: rows[0], before }
        ]
      );
      return rows[0];
    });
  }
  //reverse the caller’s recorded rename only when no intervening edit
  // occurred
  public async undo(user: Caller, operationId: string, undoId: string) {
    const rows = await this.database.query<{
      payload: { before: Item, result: Item }
    }>(
      'SELECT "payload" FROM "shell_operation" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
      [ operationId, this.appId, user.id ]
    );
    if (!rows[0]) throw new Error('Operation is unavailable.');
    const operation = rows[0].payload;
    return this.rename(user, {
      id: operation.before.id,
      title: operation.before.title,
      expectedRevision: operation.result.revision,
      operationId: undoId
    });
  }
};
