import clsx from 'clsx';

/** Seamless horizontal ticker — the list is rendered twice and scrolled 50%. */
export default function Ticker({
  items,
  className,
  separator = '◆',
}: {
  items: readonly string[];
  className?: string;
  separator?: string;
}) {
  const row = (ariaHidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-flag-500 text-[8px]" aria-hidden>{separator}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={clsx('overflow-hidden', className)}>
      <div className="flex w-max animate-ticker">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
