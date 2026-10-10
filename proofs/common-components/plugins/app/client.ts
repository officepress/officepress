//--------------------------------------------------------------------//
// Functions

/**
 * Read a user-facing message from the event error envelope. Unknown provider
 * or proxy payloads fall back to the same useful request failure message.
 */
function getErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error;

  //error objects may carry a message, but their other fields stay untrusted
  if (error && typeof error === 'object' && 'message' in error) {
    if (typeof error.message === 'string') return error.message;
  }
  return 'Request failed.';
}

/**
 * Send a JSON request and return its results, surfacing HTTP or application
 * failures to the caller. The endpoint's caller supplies the result contract.
 */
export async function requestJson<T = unknown>(
  path: string,
  body?: unknown,
  csrf?: string,
  signal?: AbortSignal
): Promise<T> {
  //reads use GET; mutations carry the page's CSRF token in their JSON body
  const response = await fetch(path, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify({ ...(body as object), csrf }) : undefined,
    signal
  });

  //narrow the JSON boundary before reading application error/results fields
  const payload: unknown = await response.json();
  const envelope =
    payload && typeof payload === 'object' && !Array.isArray(payload)
      ? (payload as Record<string, unknown>)
      : {};

  //application errors can accompany HTTP 200, so check both boundaries
  if (!response.ok || envelope.error) {
    throw new Error(getErrorMessage(envelope.error));
  }

  //event adapters wrap results; fixture endpoints may return raw JSON
  // instead
  return (envelope.results ?? payload) as T;
};
