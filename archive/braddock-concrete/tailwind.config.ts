import type { Config } from 'tailwindcss';

/**
 * Braddock Concrete — forged-steel industrial brand.
 * Palette drawn from the badge logo: charcoal iron, chrome steel,
 * amber signal orange. Chamfered plates, steel sheen, joint stripes.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Iron — the charcoal field of the badge
        iron: {
          50:  '#f5f6f7',
          100: '#e9ebed',
          200: '#d0d4d8',
          300: '#aab1b7',
          400: '#7e8790',
          500: '#626b74',
          600: '#4e565e',
          700: '#3f454c',
          800: '#2b2f34',
          900: '#1d2024',
          950: '#131518',
        },
        // Cement — cured-concrete neutrals
        cement: {
          50:  '#f7f7f5',
          100: '#efeeea',
          200: '#dfddd6',
          300: '#c6c3b8',
        },
        // Steel — the chrome lettering
        steel: {
          100: '#eef0f2',
          200: '#dde0e4',
          300: '#c3c8ce',
          400: '#a6adb5',
          500: '#8d939a',
        },
        // Signal — the badge's amber trim
        signal: {
          300: '#ffb95c',
          400: '#fa9e33',
          500: '#ef8b1c',
          600: '#cf6f10',
          700: '#a3560d',
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
        // The badge's vignetted charcoal
        'forge-depth': 'radial-gradient(120% 90% at 50% 0%, #2b2f34 0%, #1d2024 48%, #131518 100%)',
        // Chrome sheen for display text
        'steel-sheen': 'linear-gradient(180deg, #f2f4f6 0%, #ccd1d7 40%, #9aa1a9 55%, #e3e6ea 72%, #aeb5bc 100%)',
        // Amber slabs broken by expansion joints — the brand stripe
        'joints': 'repeating-linear-gradient(90deg, #ef8b1c 0px, #ef8b1c 88px, #131518 88px, #131518 100px)',
      },
      boxShadow: {
        'slab': '0 1px 0 rgba(19,21,24,0.06), 0 20px 50px -22px rgba(19,21,24,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
