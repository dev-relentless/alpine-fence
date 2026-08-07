import type { Config } from 'tailwindcss';

/**
 * Utah Pergola Experts — heritage outdoor-living brand.
 * Palette drawn from the logo: parchment field, walnut timbers,
 * terracotta sienna, golden sun. Old-money register: garamond
 * serifs, hairline rules, generous whitespace.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Walnut — the timbers
        timber: {
          50:  '#faf6ed',
          100: '#f4ecda',
          200: '#e7d7b6',
          300: '#d4ba8b',
          400: '#bb9660',
          500: '#9f7742',
          600: '#855e31',
          700: '#6a4a27',
          800: '#52391f',
          900: '#3c2a17',
          950: '#281b0e',
        },
        // Parchment — the logo field
        linen: {
          50:  '#fbf7ec',
          100: '#f7efda',
          200: '#eee1c2',
          300: '#e0cc9e',
        },
        // Sienna — the terracotta arc, used like a wax seal
        sienna: {
          100: '#f5dcd2',
          200: '#e9b8a5',
          300: '#d98d72',
          400: '#c66549',
          500: '#b04a2f',
          600: '#933a24',
          700: '#74301f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'display': '0.005em',
        'tag': '0.2em',
        'button': '0.22em',
      },
      backgroundImage: {
        // Soft parchment light, like the logo's arch
        'parchment-glow': 'radial-gradient(90% 70% at 50% 0%, #f7efda 0%, #fbf7ec 100%)',
        // Espresso walnut for grounded sections
        'walnut-depth': 'linear-gradient(180deg, #281b0e 0%, #3c2a17 100%)',
      },
      boxShadow: {
        'plate': '0 1px 0 rgba(40,27,14,0.05), 0 18px 44px -24px rgba(40,27,14,0.22)',
      },
    },
  },
  plugins: [],
};

export default config;
