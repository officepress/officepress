//client
import type { PreferenceState } from './types.js';

export type {
  PreferenceChoice,
  PreferenceLanguage,
  PreferenceState
} from './types.js';
export {
  default as LocalizationProvider,
  useLocalization
} from './components/Provider.js';

/**
 * Save one account choice through its CSRF-protected REST adapter.
 */
export async function updatePreference(
  section: keyof PreferenceState,
  value: string | null,
  revision: number,
  csrf: string
): Promise<PreferenceState> {
  const response = await fetch('/api/v1/user-preference/me', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ section, value, revision, csrf })
  });
  //narrow the transport envelope before reading provider/proxy error fields
  const payload: unknown = await response.json();
  const envelope =
    payload && typeof payload === 'object' && !Array.isArray(payload)
      ? (payload as Record<string, unknown>)
      : {};
  if (!response.ok || envelope.error)
    throw new Error(
      typeof envelope.error === 'string'
        ? envelope.error
        : 'Unable to save this preference.'
    );
  if (!envelope.results || typeof envelope.results !== 'object')
    throw new Error(
      'The preference response was incomplete. Reload and try again.'
    );
  //the authenticated server action owns the successful state contract
  return envelope.results as PreferenceState;
};
