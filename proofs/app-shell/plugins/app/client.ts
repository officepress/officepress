export async function api<T = any>(
  path: string,
  body?: unknown,
  csrf?: string,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(path, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify({ ...(body as object), csrf }) : undefined,
    signal,
  });
  const data = await response.json();
  if (!response.ok || data.error)
    throw new Error(
      typeof data.error === "string"
        ? data.error
        : data.error?.message || "Request failed.",
    );
  return data.results ?? data;
}
