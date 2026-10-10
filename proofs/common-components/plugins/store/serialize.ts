//node
import { AsyncLocalStorage } from 'node:async_hooks';

//modules
import type Engine from '@stackpress/inquire/Engine';

/**
 * Serialize access to the proof's single database connection. Call this once
 * when store registers its Engine so concurrent requests cannot share a
 * transaction accidentally.
 */
export function serializeConnection(engine: Engine) {
  //--------------------------------------------------------------------//
  // Queue ownership

  //async context identifies work already inside the queue's current owner
  const isQueueOwner = new AsyncLocalStorage<boolean>();
  let queueTail: Promise<unknown> = Promise.resolve();
  const connection = engine.connection;
  const queryConnection = connection.query.bind(connection);
  const transactConnection = connection.transaction.bind(connection);

  //nested queries must run immediately; queueing behind their own outer
  // transaction would deadlock while that transaction awaited the query
  function runExclusive<T>(run: () => Promise<T>): Promise<T> {
    if (isQueueOwner.getStore()) return run();

    //recover only the queue link after a previous failure, allowing the
    // next caller to proceed; the failed caller still receives its original
    // rejection
    const pending = queueTail
      .catch(() => {})
      .then(() => isQueueOwner.run(true, run));
    queueTail = pending;
    return pending;
  }

  //--------------------------------------------------------------------//
  // Connection interception

  //preserve the connection's public signatures while applying one queue to
  // both standalone queries and complete transaction callback lifetimes
  connection.query = ((...args: Parameters<typeof queryConnection>) =>
    runExclusive(() => queryConnection(...args))) as typeof connection.query;
  connection.transaction = ((
    callback: Parameters<typeof transactConnection>[0]
  ) =>
    runExclusive(() =>
      transactConnection(callback)
    )) as typeof connection.transaction;

  //the Engine and callback connection retain their identity for SQL hooks
  return engine;
};
