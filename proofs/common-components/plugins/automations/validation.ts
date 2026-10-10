//client
import type { Caller } from '../auth/types.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Read the status carried by the feature error for response formatting.
 */
export function getResponseStatus(error: unknown) {
  return error instanceof Error &&
    'status' in error &&
    typeof error.status === 'number' &&
    error.status >= 400 &&
    error.status <= 599
    ? error.status
    : 500;
};

/**
 * Require a recognized app role before reading feature-owned data.
 */
export function requireReadAccess(caller: Caller) {
  if (
    !caller?.id ||
    !caller.roles?.some((role) =>
      [ 'ADMIN', 'MEMBER', 'READONLY' ].includes(role)
    )
  )
    throw new WorkflowError('You do not have access to automations.', 403);
};

/**
 * Require an allowed write role before changing feature-owned data.
 */
export function requireWriteAccess(caller: Caller, shouldRequireAdmin = false) {
  requireReadAccess(caller);
  if (
    !caller.roles.includes('ADMIN') &&
    (shouldRequireAdmin || !caller.roles.includes('MEMBER'))
  )
    throw new WorkflowError('Only administrators can change automations.', 403);
};

/**
 * Validate and normalize a bounded text value for the feature’s domain rules.
 */
export function validateText(value: unknown, label: string, max = 200) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > max)
    throw new WorkflowError(
      `${label} is required and must be at most ${max} characters.`
    );
  return value.trim();
};

//--------------------------------------------------------------------//
// Classes

/**
 * Carry a workflow or automation failure and its response status.
 */
export class WorkflowError extends Error {
  //retain the feature status for event/HTTP error formatting
  public constructor(
    message: string,
    //response status forwarded by the feature’s error adapter
    public status = 400
  ) {
    super(message);
  }
};
