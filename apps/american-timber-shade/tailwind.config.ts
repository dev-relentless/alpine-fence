import type { Config } from 'tailwindcss';

/**
 * American Timber Shade — premium outdoor-living brand.
 * Palette: cedar heartwood, warm ink, a brass accent used sparingly,
 * and a bone-white field so the photography carries the page.
 * Register: modern-premium. Fraunces display, Inter body, hairline
 * rules, big photographs, calm whitespace.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cedar heartwood — the timber
        cedar: {
          50:  '#fbf6f1',
          100: '#f5e9dc',
          200: '#ead0b6',
          300: '#dcb089',
          400: '#c98a5b',
          500: '#b56f3f',
          600: '#9c5832',
          700: '#7f452a',
          800: '#663926',
          900: '#533022',
          950: '#2e1810',
        },
        // Warm ink — type and grounded sections
        ink: {
          50:  '#f6f5f3',
          100: '#e8e6e1',
          200: '#cfcbc3',
          300: '#aba59b',
          400: '#857e73',
          500: '#6a6257',
          600: '#554e45',
          700: '#453f38',
          800: '#3a352f',
          900: '#2a2622',
          950: '#17140f',
        },
        // Brass — one accent, used like hardware
        brass: {
          100: '#f6ecd2',
          200: '#ecd9a3',
          300: '#dfc06d',
          400: '#cfa548',
          500: '#b98a32',
          600: '#9a6f27',
          700: '#7a5620',
        },
        // Bone — the page
        bone: {
          50:  '#faf8f4',
          100: '#f4f0e8',
          200: '#e9e2d5',
          300: '#d9cfbd',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.015em',
        tag: '0.18em',
        button: '0.16em',
      },
      backgroundImage: {
        'bone-glow': 'radial-gradient(90% 70% at 50% 0%, #f4f0e8 0%, #faf8f4 100%)',
        'ink-depth': 'linear-gradient(180deg, #17140f 0%, #2a2622 100%)',
        'cedar-depth': 'linear-gradient(160deg, #2e1810 0%, #533022 55%, #663926 100%)',
      },
      boxShadow: {
        plate: '0 1px 0 rgba(23,20,15,0.04), 0 24px 56px -28px rgba(23,20,15,0.35)',
        lift: '0 30px 80px -30px rgba(23,20,15,0.45)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
