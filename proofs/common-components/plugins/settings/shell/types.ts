//client
import type { Caller } from '../../auth/types.js';
import type { ThemeState } from '../theme/domain.js';
import type { ComponentLink } from './registry.js';

//--------------------------------------------------------------------//
// Types

//shared public caller, CSRF and route inputs passed to feature views
export type ComponentProps = {
  csrf: string,
  user: Caller,
  path: string,
  automations?: boolean
};

//safe app, caller and enabled capability data used to compose the shell
export type ShellData = {
  components: ComponentLink[],
  componentId?: string,
  title?: string,
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
    automations: boolean,
    agent: boolean,
    notifications: boolean,
    theme: boolean,
    about: boolean
  },
  theme?: ThemeState
};
