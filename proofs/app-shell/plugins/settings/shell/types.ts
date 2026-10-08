import type { ThemeState } from "../theme/domain.js";
export type ShellData = {
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
    agent: boolean;
    notifications: boolean;
    theme: boolean;
    about: boolean;
  };
  theme?: ThemeState;
};
