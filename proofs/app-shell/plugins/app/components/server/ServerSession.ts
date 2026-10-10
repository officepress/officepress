//client
import type { ServerSessionProps, ServerSessionPermission } from './types.js';
import { matchAnyEvent, matchAnyRoute } from './helpers.js';

//--------------------------------------------------------------------//
// Types

export type { ServerSessionProps };

//--------------------------------------------------------------------//
// Classes

/**
 * Read the serialized session presentation and its permissions in React. This
 * facade does not verify credentials; the server remains authoritative.
 */
export default class Session {
  //wrap the serialized session fields supplied by the server provider
  public static load(data: ServerSessionProps) {
    return new Session(data);
  }

  //server-supplied session fields used by guest and permission presentation
  // checks
  public readonly data: ServerSessionProps;

  //returns true if the session is a guest
  public get guest() {
    return !this.data.id;
  }

  //store the serialized session fields without performing credential
  // verification
  public constructor(data: ServerSessionProps) {
    this.data = data;
  }

  //return whether every requested permission matches the serialized permits
  public can(...permits: ServerSessionPermission[]) {
    //if there are no permits, then we are good
    if (permits.length === 0) {
      return true;
    }
    //get the permissions of the token
    const permissions = this.data.permits || [];
    //string permissions are events
    const events = permissions.filter(
      (permission) => typeof permission === 'string'
    );
    //object permissions are routes
    const routes = permissions.filter(
      (permission) => typeof permission !== 'string'
    );
    //every permit must match a permission
    return (
      Array.isArray(permits) &&
      permits.every((permit) =>
        typeof permit === 'string'
          ? matchAnyEvent(permit, events)
          : matchAnyRoute(permit, routes)
      )
    );
  }
};
