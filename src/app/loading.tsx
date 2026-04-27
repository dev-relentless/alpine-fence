export default function Loading() {
  return (
    <section className="section-padding bg-white" role="status" aria-label="Loading content">
      <div className="section-container max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Branded loading bar */}
          <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-alpine-500 to-compoxen-400 rounded-full animate-loading-bar" />
          </div>
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-alpine-100 rounded-lg w-2/3 mx-auto" />
            <div className="h-5 bg-stone-200 rounded w-1/2 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="h-40 bg-stone-200 rounded-xl" />
                  <div className="h-5 bg-stone-200 rounded w-3/4" />
                  <div className="h-4 bg-stone-100 rounded w-full" />
                  <div className="h-4 bg-stone-100 rounded w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
