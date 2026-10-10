/**
 * Published 0.10.8 Profile schema references API models that the session
 * package does not define. Its SQL generator treats unresolved relations as
 * scalar fields but omits them from CREATE TABLE, causing
 * `profile.applications does not exist`. Remove only these two absent
 * external relationships before generation. If an adopter composes the API
 * models, retain them. Never modify vendor files.
 */
export async function normalizeIdentitySchema({
  req
}: {
  req: {
    data(name: string): {
      schema(): Promise<{
        model: Record<string, { columns: { name: string }[] }>
      }>
    }
  }
}) {
  const schema = await req.data('transformer').schema();
  const profile = schema.model?.Profile;
  if (!profile?.columns) return;
  profile.columns = profile.columns.filter(
    (column: { name: string }) =>
      !(column.name === 'applications' && !schema.model.Application) &&
      !(column.name === 'sessions' && !schema.model.Session)
  );
};
