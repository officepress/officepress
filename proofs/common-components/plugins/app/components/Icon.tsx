/**
 * Render one icon from the shared sprite with the caller supplied
 * accessibility props.
 */
export default function Icon({
  name,
  className = ''
}: {
  name: string,
  className?: string
}) {
  return (
    <svg
      className={`op-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <use href={`/icons.svg#i-${name}`} />
    </svg>
  );
};
