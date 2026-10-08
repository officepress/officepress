import cookie from "@stackpress/lib/cookie";
import type { HttpResponse } from "@stackpress/ingest";

/** Ingest 0.10.8 overwrites Set-Cookie per revision. Its final header pass permits
 * this app-owned adapter to preserve every revision, including token deletion. */
export function preserveCookies(
  res: HttpResponse,
  options: Parameters<typeof cookie.serialize>[2],
) {
  const cookies: string[] = [];
  for (const [name, entry] of res.session.revisions.entries()) {
    const settings = entry.options || options;
    if (entry.action === "remove") {
      cookies.push(
        cookie.serialize(name, "", { ...settings, expires: new Date(0) }),
      );
    } else if (entry.action === "set" && typeof entry.value !== "undefined") {
      for (const value of Array.isArray(entry.value)
        ? entry.value
        : [entry.value]) {
        cookies.push(cookie.serialize(name, value, settings));
      }
    }
  }
  if (cookies.length) res.headers.set("Set-Cookie", cookies);
}
