import type { Config } from 'tailwindcss';

/**
 * SPX Construction — design·build studio brand.
 * Palette: warm graphite, plaster bone, smoked brass — quiet luxury.
 * Typography: architectural serif display + refined sans body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm graphite — the structure
        carbon: {
          50:  '#f7f6f4',
          100: '#eceae6',
          200: '#d6d3cc',
          300: '#b5b1a6',
          400: '#8e897c',
          500: '#706b5f',
          600: '#57534a',
          700: '#423f38',
          800: '#2d2b26',
          900: '#1d1b18',
          950: '#121110',
        },
        // Plaster whites — the light
        bone: {
          50:  '#fbfaf7',
          100: '#f5f3ee',
          200: '#eae6dd',
          300: '#d8d2c3',
          400: '#bdb5a0',
        },
        // Smoked brass — used sparingly, never shouted
        brass: {
          100: '#f2ecdd',
          200: '#e3d7b9',
          300: '#cdb98b',
          400: '#b49c63',
          500: '#997f47',
          600: '#7a6538',
          700: '#5e4e2e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display': '0.01em',
        'eyebrow': '0.28em',
        'button': '0.18em',
      },
      backgroundImage: {
        'carbon-depth': 'linear-gradient(165deg, #121110 0%, #1d1b18 55%, #2d2b26 100%)',
        'bone-wash': 'linear-gradient(180deg, #fbfaf7 0%, #f5f3ee 100%)',
      },
      boxShadow: {
        'gallery': '0 1px 0 rgba(18,17,16,0.05), 0 24px 60px -28px rgba(18,17,16,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
