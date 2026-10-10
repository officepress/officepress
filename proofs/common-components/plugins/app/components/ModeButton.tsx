//modules
import { useEffect, useState } from 'react';

//client
import Icon from './Icon.js';

/**
 * Render the light/dark toggle and persist the selected mode for the next
 * visit.
 */
export default function ModeButton() {
  const [ mode, setMode ] = useState('light');
  //switch the visible mode and update its browser persistence
  function handleToggle() {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    setMode(next);
    try {
      localStorage.setItem('op-mode', next);
    } catch {}
  }
  //adopt the document’s initial color mode after hydration

  useEffect(
    () => setMode(document.documentElement.dataset.mode || 'light'),
    []
  );

  return (
    <button
      type="button"
      className="op-icon-btn op-icon-btn--circle op-theme-btn"
      aria-label={mode === 'dark' ? 'Dark mode' : 'Light mode'}
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      onClick={handleToggle}
    >
      <Icon name="sun" className="op-icon--sun" />
      <Icon name="moon" className="op-icon--moon" />
    </button>
  );
};
