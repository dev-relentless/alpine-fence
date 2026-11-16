# Pergola Experts — brand assets

Drop production brand assets in this folder. Until they exist the site uses an inline SVG mark (`src/components/Logo.tsx`) and a generated Open Graph card (`src/app/opengraph-image.tsx`).

| File                   | Purpose                   | Notes             |
| ---------------------- | ------------------------- | ----------------- |
| `logo.svg`             | Primary mark              | Used in header    |
| `logo-light.svg`       | Inverted mark             | Dark surfaces     |
| `favicon.ico`          | Browser favicon           | 32x32 minimum     |
| `apple-touch-icon.png` | iOS home-screen icon      | 180x180           |
| `icon-192.png`         | PWA icon                  | 192x192           |
| `icon-512.png`         | PWA icon                  | 512x512           |
| `og.jpg`               | Open Graph / social share | 1200x630          |

Project photography goes in `public/pergola/projects/`.

## Local landscape (`public/pergola/local/`)

Each state site carries one photograph that is genuinely of that state —
`hero.jpg` (1920×1080) for the homepage/about hero and `og-bg.jpg` (1200×630)
for the generated social card. This folder is **per-state**: the generator
never copies it from the template. Captions come from `<state>.local` in
`scripts/new-pergola-state.mjs`.

All current images are public domain / CC0 (Wikimedia Commons):

| State | File | Author | License | |
| --- | --- | --- | --- | --- |
| arizona | Ironwood Forest National Monument (26092479174).jpg | BLMArizona | Public domain | [source](https://commons.wikimedia.org/wiki/File:Ironwood_Forest_National_Monument_(26092479174).jpg) |
| colorado | Bear Lake Trailhead, Estes Park, United States (Unsplash).jpg | Peter Pryharski epicpeter | CC0 | [source](https://commons.wikimedia.org/wiki/File:Bear_Lake_Trailhead,_Estes_Park,_United_States_(Unsplash).jpg) |
| idaho | Hulls Gulch (23300855124).jpg | BLMIdaho | Public domain | [source](https://commons.wikimedia.org/wiki/File:Hulls_Gulch_(23300855124).jpg) |
| nevada | Visit to Red Rock Canyon in Nevada on April 7, 2026 - 10.jpg | U.S. Department of the Interior | Public domain | [source](https://commons.wikimedia.org/wiki/File:Visit_to_Red_Rock_Canyon_in_Nevada_on_April_7,_2026_-_10.jpg) |
| utah | Wasatch Wildfire Crisis Strategy Landscape in Real Life (20231004-FS-NJC-001).jpg | Forest Service Photography | Public domain | [source](https://commons.wikimedia.org/wiki/File:Wasatch_Wildfire_Crisis_Strategy_Landscape_in_Real_Life_(20231004-FS-NJC-001).jpg) |
| washington | Mount Rainier - HCP - October 17, 2022 - 049 - Reflection Lake.jpg | Vulturesong | CC0 | [source](https://commons.wikimedia.org/wiki/File:Mount_Rainier_-_HCP_-_October_17,_2022_-_049_-_Reflection_Lake.jpg) |
| wyoming | Sunrise (50544645051).jpg | GrandTetonNPS | Public domain | [source](https://commons.wikimedia.org/wiki/File:Sunrise_(50544645051).jpg) |
