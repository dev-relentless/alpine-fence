import type { Config } from 'tailwindcss';

/**
 * Braddock Concrete — concrete & excavation brand.
 * Palette: iron near-blacks, poured-cement grays, signal orange.
 * Typography: monolithic black grotesque display + sturdy grotesque body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Iron — the structure
        iron: {
          50:  '#f5f6f7',
          100: '#e9ebed',
          200: '#d0d4d8',
          300: '#aab1b7',
          400: '#7e8790',
          500: '#626b74',
          600: '#4e565e',
          700: '#3f454c',
          800: '#2a2e33',
          900: '#1b1e22',
          950: '#0e1013',
        },
        // Cement — cured-concrete neutrals
        cement: {
          50:  '#f7f7f5',
          100: '#efeeea',
          200: '#dfddd6',
          300: '#c6c3b8',
        },
        // Signal — excavation-marker orange
        signal: {
          300: '#ffb37d',
          400: '#ff8c42',
          500: '#f26a10',
          600: '#c9520a',
          700: '#9c3f0a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display': '0.02em',
        'tag': '0.22em',
      },
      backgroundImage: {
        // Dark pour with depth
        'iron-depth': 'linear-gradient(170deg, #0e1013 0%, #1b1e22 55%, #2a2e33 100%)',
        // Board-form tie lines on dark surfaces
        'formwork': 'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 56px)',
        // Orange slabs broken by expansion joints — the brand stripe
        'joints': 'repeating-linear-gradient(90deg, #f26a10 0px, #f26a10 88px, #0e1013 88px, #0e1013 100px)',
      },
      boxShadow: {
        'slab': '0 1px 0 rgba(14,16,19,0.06), 0 20px 50px -22px rgba(14,16,19,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
