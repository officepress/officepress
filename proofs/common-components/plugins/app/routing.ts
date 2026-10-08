/** Decode an identifier from a feature's detail/update path. */
export function routeRecordId(path: string): string {
  const segments = path.split("/");
  if (segments.length !== 4) return "";
  try {
    return decodeURIComponent(segments[3]);
  } catch {
    return "";
  }
}
