import { createContext, useContext, type ReactNode } from "react";
export type DetailPanel = {
  id?: string;
  title: string;
  content: ReactNode;
  onClose?: () => void;
};
const Panels = createContext({
  showDetails: (_panel: DetailPanel) => {},
  closeDetails: () => {},
  mobile: false,
});
export const PanelProvider = Panels.Provider;
/** Shared with component plugins. The shell owns focus, inert state and exclusivity. */
export function usePanels() {
  return useContext(Panels);
}
