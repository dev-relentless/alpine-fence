import clsx from 'clsx';

/**
 * The Apex mark — a two-facet peak with the "A" cut through it,
 * standing on a slab. Pure SVG so it renders crisp at any size and
 * inverts cleanly on dark surfaces.
 */
export default function ApexMark({
  className,
  tone = 'dark',
  title,
}: {
  className?: string;
  /** `dark` for light backgrounds, `light` for dark backgrounds. */
  tone?: 'dark' | 'light';
  title?: string;
}) {
  const ink = tone === 'dark' ? '#0e1114' : '#f7f6f2';
  const paper = tone === 'dark' ? '#f7f6f2' : '#0e1114';
  return (
    <svg
      viewBox="0 0 64 64"
      className={clsx('shrink-0', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {/* left facet */}
      <polygon points="32,6 8,50 32,50" fill={ink} />
      {/* right facet — vermilion flag side */}
      <polygon points="32,6 56,50 32,50" fill="#e8431f" />
      {/* the A's counter */}
      <polygon points="32,27 41.5,44 22.5,44" fill={paper} />
      {/* slab */}
      <rect x="6" y="53" width="52" height="5" fill={ink} />
    </svg>
  );
}
