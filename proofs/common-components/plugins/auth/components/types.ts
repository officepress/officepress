//--------------------------------------------------------------------//
// Types

//presentation data prepared by auth/pages/props.ts and the framework event
export type IdentityData = {
  identityPurgeComplete?: boolean,
  identityPurgeReady?: boolean,
  identityPage?: string,
  identityBase?: string,
  identityFamily?: import('../../settings/theme/client.js').Family,
  identityTheme?: import('../../settings/theme/client.js').ThemeState,
  identity?: {
    csrf?: string,
    roles?: string[],
    base?: string,
    user?: { name?: string }
  },
  csrf?: { token?: string }
};

//the profile/auth fields consumed by the handwritten identity forms
export type Result = {
  authId?: string,
  url?: string,
  secret?: string,
  id?: string,
  name?: string,
  image?: string,
  roles?: string[],
  auth?: Record<
    string,
    { id?: string, token?: string, verified?: boolean, secret?: string }
  >,
  [key: string]: unknown
};
