export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-stone-500 sm:flex-row">
        <span className="font-medium text-stone-700">Alpine Fence &amp; Deck</span>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
