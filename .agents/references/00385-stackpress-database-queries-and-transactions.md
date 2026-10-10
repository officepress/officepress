# Stackpress database queries and transactions

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when implementing business queries, transaction callbacks, query inspection or driver adapters.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r39"></a>

## R39. Execute dependent writes through the transaction-scoped connection

Use a transaction for writes that must commit or roll back together. The inspected Inquire Transaction callback receives a Connection, whose query method accepts a QueryObject. Throw on failure so the wrapper rolls back; a caught error that never escapes the callback can allow commit. An external integration is not rolled back with SQL.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
await database.transaction(async tx => {
  await tx.query({
    query: "UPDATE category SET name = ? WHERE id = ?",
    values: [name, id]
  });
  await tx.query({
    query: "INSERT INTO category_audit (categoryId) VALUES (?)",
    values: [id]
  });
});
```

Names are illustrative. If builders are needed inside the callback, an app may wrap the supplied connection in an Engine; do not assume tx is already an Engine. The probes used a mock PG resource to verify command sequencing, not real database atomicity.

Sources: [inquire/packages/inquire/src/types.ts, line 181](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/types.ts#L181); [inquire/packages/inquire-pg/src/Connection.ts, line 120](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pg/src/Connection.ts#L120); [inquire/specs/api/engine.md, line 142](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/specs/api/engine.md#L142).

<a id="r79"></a>

## R79. Bind query values while keeping the row contract explicit

Inquire provides typed builders and parameter bindings, including template-string interpolation. Use values as bindings instead of inserting user input into SQL text. Database business queries remain in events or their optional helpers.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
type CategoryRow = { id: number; name: string };
const rows = await database.select<CategoryRow>(["id", "name"])
  .from("category")
  .where("id = ?", [id]);

// Alternative raw-SQL shape:
const sameRows = await database.sql<CategoryRow>`
  SELECT id, name FROM category WHERE id = ${id}
`;
```

These are alternatives. Table/column identifiers are authored SQL; interpolated values are bound data. Type parameters describe expected rows; they do not validate arbitrary runtime rows.

Sources: [inquire/packages/inquire/src/Engine.ts, line 237](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/Engine.ts#L237); [inquire/packages/inquire/src/builder/Select.ts, line 205](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/builder/Select.ts#L205); [inquire/packages/inquire-pg/src/Connection.ts, line 54](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pg/src/Connection.ts#L54).

<a id="r80"></a>

## R80. Inspect a builder without executing it; await it to run the query

A builder's query method returns SQL plus values. Its then implementation makes it awaitable and executes through the Engine. Inspection and execution are distinct steps.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
const builder = database.select("*").from("category").where("id = ?", [id]);
const statement = builder.query();  // { query, values }, no database call
const rows = await builder;         // executes the query
```

Useful for inspecting, testing or adapting a query before execution. Awaiting the same builder again executes again; it is not a cached Promise result.

Sources: [inquire/packages/inquire/src/builder/Select.ts, line 159](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/builder/Select.ts#L159); [inquire/packages/inquire/src/builder/Select.ts, line 195](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/builder/Select.ts#L195).

<a id="r81"></a>

## R81. Use the query hook appropriate to the interception layer

Engine.before can inspect/change the logical QueryObject or return rows to bypass the connection query. Connection.before observes the formatted driver request. Both are single callback slots, not priority-aware event queues.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Logical query interception:
database.before = async request => {
  // Optionally inspect/change request.query and request.values.
  // Return rows (including []) only when intentionally supplying the result.
};
// Native formatted-query instrumentation:
database.connection.before = async request => {
  // Observe the selected driver's query form.
};
```

Returning no value continues normally. Preserve an existing callback if composing multiple integrations; assigning the slot replaces it. This is an optional interception capability, not a requirement to add caching or logging.

Sources: [inquire/packages/inquire/src/Engine.ts, line 209](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire/src/Engine.ts#L209); [inquire/packages/inquire-pg/src/Connection.ts, line 137](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pg/src/Connection.ts#L137).

<a id="r82"></a>

## R82. Keep native drivers behind the shared Engine/Connection boundary

A connector maps the selected native resource to an Inquire Connection and Engine. The connection formats placeholders and normalizes native results to rows, so business code can use the shared engine surface.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Connection owner's setup excerpt:
const database = connect(nativeResource);
ctx.register("database", database);

// App business event excerpt:
const rows = await ctx.plugin("database")
  .select("*").from("category").where("id = ?", [id]);
```

Select the supported connect export for the chosen driver. This does not promise that every database has identical SQL features or require a silent production fallback.

Sources: [inquire/packages/inquire-pg/src/helpers.ts, line 7](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pg/src/helpers.ts#L7); [inquire/packages/inquire-pg/src/Connection.ts, line 95](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pg/src/Connection.ts#L95); [inquire/packages/inquire-pglite/src/Connection.ts, line 97](https://github.com/stackpress/inquire/blob/039a1b5f41500aa63286a9f9b34f4c7f71b990a0/packages/inquire-pglite/src/Connection.ts#L97).
