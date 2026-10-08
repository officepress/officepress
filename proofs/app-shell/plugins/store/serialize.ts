import { AsyncLocalStorage } from "node:async_hooks";
import type Engine from "@stackpress/inquire/Engine";
/** The baseline uses one connection. Serialize every request outside a transaction,
 * so another HTTP request cannot accidentally join a running transaction. */
export function serializeConnection(engine: Engine) {
  const active = new AsyncLocalStorage<boolean>();
  let tail: Promise<unknown> = Promise.resolve();
  const connection = engine.connection;
  const raw = connection.query.bind(connection),
    transaction = connection.transaction.bind(connection);
  function exclusive<T>(run: () => Promise<T>): Promise<T> {
    if (active.getStore()) return run();
    const next = tail.catch(() => {}).then(() => active.run(true, run));
    tail = next;
    return next;
  }
  connection.query = ((...args: Parameters<typeof raw>) =>
    exclusive(() => raw(...args))) as typeof connection.query;
  connection.transaction = ((callback: Parameters<typeof transaction>[0]) =>
    exclusive(() => transaction(callback))) as typeof connection.transaction;
  return engine;
}
