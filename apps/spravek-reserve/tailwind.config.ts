import type { Config } from 'tailwindcss';

/**
 * Spravek Reserve — luxury vehicle rentals, by allocation.
 * Palette: obsidian black, bone neutrals, champagne gold, brushed silver.
 * Typography: editorial serif display + geometric sans (matches the Montserrat lockup).
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50:  '#f5f5f4',
          100: '#e4e4e2',
          200: '#c6c6c3',
          300: '#9d9d99',
          400: '#74746f',
          500: '#57574f',
          600: '#434340',
          700: '#323230',
          800: '#1e1e1d',
          900: '#121211',
          950: '#080808',
        },
        bone: {
          50:  '#fbfaf6',
          100: '#f4f1e8',
          200: '#e8e2d2',
          300: '#d4cbb3',
        },
        champagne: {
          200: '#eadcbd',
          300: '#dcc698',
          400: '#d2b77e',
          500: '#c8a96a',
          600: '#a98a4e',
          700: '#846a39',
        },
        silver: {
          200: '#f4f5f6',
          300: '#d9dce0',
          400: '#c9ccd1',
          500: '#9ea3aa',
          600: '#6a6e74',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.06em',
        'reserve': '0.62em',
        'tag': '0.32em',
      },
      backgroundImage: {
        'obsidian-fade': 'linear-gradient(180deg, #080808 0%, #121211 60%, #1e1e1d 100%)',
        'silver-text': 'linear-gradient(180deg, #FFFFFF 0%, #D9DCE0 45%, #9EA3AA 100%)',
        'gold-text': 'linear-gradient(180deg, #EADCBD 0%, #C8A96A 55%, #A98A4E 100%)',
      },
      boxShadow: {
        'reserve': '0 30px 80px -30px rgba(0,0,0,0.9)',
        'gold': '0 0 0 1px rgba(200,169,106,0.35), 0 20px 60px -20px rgba(200,169,106,0.25)',
      },
      maxWidth: {
        'reserve': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
