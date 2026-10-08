import type { HttpServer } from "@stackpress/ingest";
import { actions } from "stackpress-session";
import { fixturePassword, fixtureAccounts } from "../../config/fixtures.js";

/** Public credentials for disposable local proof databases only. Never run this
 * against an existing app database. The top-level proof owns its empty DB. */
export { fixturePassword, fixtureAccounts } from "../../config/fixtures.js";
export async function seedIdentity(
  ctx: HttpServer<any>,
  includeRemoval = true,
  accounts = fixtureAccounts,
) {
  const auth = actions.make(ctx as any);
  const profiles: Record<
    string,
    { id: string; name: string; email: string; roles: string[] }
  > = {};
  for (const fixture of accounts) {
    if (!includeRemoval && fixture.username === "removal") continue;
    const existing = await auth.find({
      eq: { type: "email", token: fixture.email },
      columns: ["*", "profile.*"],
    });
    if (existing) {
      profiles[fixture.username] = {
        id: existing.profileId,
        name: fixture.name,
        email: fixture.email,
        roles: fixture.roles,
      };
      continue;
    }
    const profile = await auth.signup({ ...fixture, secret: fixturePassword });
    profiles[fixture.username] = {
      id: profile.id,
      name: profile.name,
      email: fixture.email,
      roles: fixture.roles,
    };
  }
  return profiles;
}
