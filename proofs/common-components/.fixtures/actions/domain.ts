import type Engine from "@stackpress/inquire/Engine";
export type Caller = { id: string; roles: string[] };
export type Item = { id: string; title: string; revision: number };
export type Input = {
  id?: string;
  title?: string;
  expectedRevision?: number;
  operationId?: string;
};
export class Actions {
  constructor(
    readonly db: Engine,
    readonly appId: string,
  ) {}
  async read(user: Caller, id = "welcome"): Promise<Item> {
    if (id === "welcome") id = `welcome-${user.id}`;
    if (
      !user ||
      !user.roles.some((r) => ["ADMIN", "MEMBER", "READONLY"].includes(r))
    )
      throw new Error("Forbidden.");
    const rows = await this.db.query<Item>(
      'SELECT "id","title","revision" FROM "shell_item" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
      [id, this.appId, user.id],
    );
    if (!rows[0]) throw new Error("Record is unavailable.");
    return rows[0];
  }
  async rename(user: Caller, request: Input): Promise<Item> {
    const input: Input = {
      id: request.id,
      title: request.title,
      expectedRevision: request.expectedRevision,
      operationId: request.operationId,
    };
    if (!user?.roles.some((r) => ["ADMIN", "MEMBER"].includes(r)))
      throw new Error("Read-only account.");
    if (
      typeof input.id !== "string" ||
      typeof input.title !== "string" ||
      !input.title.trim() ||
      input.title.length > 120 ||
      !Number.isInteger(input.expectedRevision) ||
      typeof input.operationId !== "string" ||
      !/^[-:\w]{8,100}$/.test(input.operationId)
    )
      throw new Error("Invalid action input.");
    return this.db.transaction(async () => {
      const before = await this.read(user, input.id);
      const op = await this.db.query<{
        payload: { input: Input; result: Item };
      }>(
        'SELECT "payload" FROM "shell_operation" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
        [input.operationId!, this.appId, user.id],
      );
      if (op[0]) {
        if (
          !Object.keys(input).every(
            (key) =>
              op[0].payload.input[key as keyof Input] ===
              input[key as keyof Input],
          )
        )
          throw new Error("Operation ID already used for a different action.");
        return op[0].payload.result;
      }
      const rows = await this.db.query<Item>(
        'UPDATE "shell_item" SET "title" = ?, "revision" = "revision" + 1 WHERE "id" = ? AND "owner_id" = ? AND "app_id" = ? AND "revision" = ? RETURNING "id","title","revision"',
        [
          input.title!.trim(),
          input.id!,
          user.id,
          this.appId,
          input.expectedRevision!,
        ],
      );
      if (!rows[0])
        throw new Error("Selection changed. Reload before trying again.");
      await this.db.query(
        'INSERT INTO "shell_operation" ("id","app_id","owner_id","payload") VALUES (?,?,?,?)',
        [
          input.operationId!,
          this.appId,
          user.id,
          { input, result: rows[0], before },
        ],
      );
      return rows[0];
    });
  }
  async undo(user: Caller, operationId: string, undoId: string) {
    const rows = await this.db.query<{
      payload: { before: Item; result: Item };
    }>(
      'SELECT "payload" FROM "shell_operation" WHERE "id" = ? AND "app_id" = ? AND "owner_id" = ?',
      [operationId, this.appId, user.id],
    );
    if (!rows[0]) throw new Error("Operation is unavailable.");
    const op = rows[0].payload;
    return this.rename(user, {
      id: op.before.id,
      title: op.before.title,
      expectedRevision: op.result.revision,
      operationId: undoId,
    });
  }
}
