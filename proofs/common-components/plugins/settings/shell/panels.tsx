//modules
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

//--------------------------------------------------------------------//
// Types

//shell-owned detail dock content supplied by feature components
export type DetailPanel = {
  id?: string,
  title: string,
  content: ReactNode,
  onClose?: () => void
};

//--------------------------------------------------------------------//
// Constants

const Panels = createContext({
  showDetails: (_panel: DetailPanel) => {},
  closeDetails: () => {},
  mobile: false
});

//shell-owned context provider used by features to open and close the detail
// dock
export const PanelProvider = Panels.Provider;

//--------------------------------------------------------------------//
// Hooks

/**
 * Shared with component plugins. The shell owns focus, inert state and
 * exclusivity.
 */
export function usePanels() {
  return useContext(Panels);
};
