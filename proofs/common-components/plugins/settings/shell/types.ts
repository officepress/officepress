import type { ThemeState } from "../theme/domain.js";
import type { ComponentLink } from "./registry.js";
export type ShellData = {
  components: ComponentLink[];
  componentId?: string;
  title?: string;
  user: { id: string; name: string; roles: string[] } | null;
  csrf: string;
  app: {
    id: string;
    name: string;
    family: string;
    version: string;
    build: string;
  };
  capabilities: {
    automations: boolean;
    agent: boolean;
    notifications: boolean;
    theme: boolean;
    about: boolean;
  };
  theme?: ThemeState;
};
