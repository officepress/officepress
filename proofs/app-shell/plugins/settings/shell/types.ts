//modules
import type { LanguageConfig } from 'stackpress-language/types';

//client
import type {
  PreferenceState,
  PreferenceLanguage
} from '../preferences/types.js';
import type { ThemeState } from '../theme/domain.js';

//safe app, caller and enabled capability data used to compose the shell
export type ShellData = {
  user: { id: string, name: string, roles: string[] } | null,
  csrf: string,
  app: {
    id: string,
    name: string,
    family: string,
    version: string,
    build: string
  },
  capabilities: {
    agent: boolean,
    notifications: boolean,
    preferences: boolean,
    theme: boolean,
    about: boolean
  },
  preferences?: PreferenceState,
  language?: LanguageConfig,
  preferenceLanguages?: PreferenceLanguage[],
  theme?: ThemeState
};
