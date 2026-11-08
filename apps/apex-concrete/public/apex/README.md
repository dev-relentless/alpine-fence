# Apex Concrete — brand assets

The site generates its own favicon, Apple touch icon, PWA icons, and Open Graph card from code
(`src/app/icon.svg`, `apple-icon.tsx`, `pwa-icon/route.tsx`, `opengraph-image.tsx`), so nothing is
required here to ship.

Drop production photography in `public/apex/projects/` when it exists. Files under `/apex/` are
served with immutable long-lived cache headers (see `next.config.js`), so version filenames.
