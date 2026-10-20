//modules
import { useEffect, useState } from 'react';

//client
import Icon from '../../../app/components/Icon.js';

/**
 * Navigate within the two preference sections while keeping native anchors.
 */
export default function Navigation() {
  const [ section, setSection ] = useState('language');
  useEffect(() => {
    const changed = () =>
      setSection(location.hash === '#time-zone' ? 'time-zone' : 'language');
    changed();
    window.addEventListener('hashchange', changed);
    return () => window.removeEventListener('hashchange', changed);
  }, []);
  return (
    <nav
      className="settings-nav op-settings__nav preferences-nav"
      aria-label="User Preferences"
    >
      {[
        [ 'language', 'Language', 'languages' ],
        [ 'time-zone', 'Time zone', 'clock' ]
      ].map(([ id, label, icon ]) => (
        <a
          className="op-settings__item"
          key={id}
          href={`#${id}`}
          aria-current={section === id ? 'true' : undefined}
        >
          <span className="op-icon-slot">
            <Icon name={icon} />
          </span>
          {label}
        </a>
      ))}
      <hr className="app-nav-divider" />
      <a className="op-settings__item" href="/">
        <span className="op-icon-slot">
          <Icon name="arrow-left" />
        </span>
        Back to App
      </a>
    </nav>
  );
};
