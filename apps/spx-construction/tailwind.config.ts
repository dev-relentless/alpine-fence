import type { Config } from 'tailwindcss';

/**
 * SPX Construction — residential general contractor brand.
 * Palette: iron charcoal, poured-concrete neutrals, signal orange.
 * Typography: hard grotesque display + utilitarian sans body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal structure
        iron: {
          50:  '#f5f6f7',
          100: '#e6e8ea',
          200: '#c9cdd2',
          300: '#a2a9b1',
          400: '#767f89',
          500: '#5a626c',
          600: '#464d56',
          700: '#383e45',
          800: '#25292e',
          900: '#17191d',
          950: '#0c0d10',
        },
        // Poured concrete neutrals
        concrete: {
          50:  '#fafaf8',
          100: '#f2f1ed',
          200: '#e4e2da',
          300: '#cfccbf',
          400: '#aaa696',
        },
        // Signal orange — jobsite accent
        signal: {
          300: '#ffb266',
          400: '#ff9438',
          500: '#f97b16',
          600: '#e05f06',
          700: '#b84a08',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'headline': '-0.015em',
        'tag': '0.22em',
      },
      backgroundImage: {
        'blueprint': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'iron-fade': 'linear-gradient(180deg, #0c0d10 0%, #17191d 60%, #25292e 100%)',
      },
      boxShadow: {
        'plate': '0 1px 0 rgba(12,13,16,0.08), 0 16px 44px -18px rgba(12,13,16,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
