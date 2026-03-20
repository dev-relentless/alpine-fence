export default function Loading() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-4xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-stone-200 rounded w-2/3 mx-auto" />
          <div className="h-5 bg-stone-200 rounded w-1/2 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 p-6 rounded-lg bg-stone-100">
                <div className="h-40 bg-stone-200 rounded" />
                <div className="h-5 bg-stone-200 rounded w-3/4" />
                <div className="h-4 bg-stone-200 rounded w-full" />
                <div className="h-4 bg-stone-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
