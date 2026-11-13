export default function SpecTable({ rows, title }: { rows: { label: string; value: string }[]; title?: string }) {
  return (
    <div>
      {title && <h2 className="eyebrow">{title}</h2>}
      <dl className={`${title ? 'mt-5 ' : ''}grid gap-x-10 sm:grid-cols-2`}>
        {rows.map((s) => (
          <div key={s.label} className="grid grid-cols-[120px_1fr] gap-4 border-b border-obsidian-800 py-3 text-sm">
            <dt className="text-obsidian-400">{s.label}</dt>
            <dd className="text-obsidian-100">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
