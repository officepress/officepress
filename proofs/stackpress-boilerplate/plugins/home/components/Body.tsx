//modules
import { useLanguage } from 'r22n';

/**
 * Render the baseline Home content inside the shared application provider.
 */
export default function Body() {
  const { _ } = useLanguage();
  return (
    <div>
      <h1 className="text-2xl theme-info">{_('Home Page')}</h1>
      <p>{_('Home Page Description')}</p>
    </div>
  );
};
