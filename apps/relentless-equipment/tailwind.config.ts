import type { Config } from 'tailwindcss';

/**
 * Relentless Equipment — rental yard brand.
 * Palette: carbon black, dust neutrals, volt yellow.
 * Typography: condensed industrial display + utilitarian sans body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Carbon black structure
        carbon: {
          50:  '#f6f6f5',
          100: '#e7e7e5',
          200: '#cbcbc7',
          300: '#a5a5a0',
          400: '#7a7a74',
          500: '#5e5e58',
          600: '#4a4a45',
          700: '#3a3a36',
          800: '#262624',
          900: '#181816',
          950: '#0b0b0a',
        },
        // Dust — warm jobsite neutrals
        dust: {
          50:  '#fbfaf7',
          100: '#f3f1ea',
          200: '#e5e1d3',
          300: '#cfc8b0',
        },
        // Volt yellow — high-vis accent
        volt: {
          300: '#ffe873',
          400: '#fedf3f',
          500: '#f5cf11',
          600: '#d4ac05',
          700: '#a58108',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'headline': '0.01em',
        'tag': '0.22em',
      },
      backgroundImage: {
        'carbon-fade': 'linear-gradient(180deg, #0b0b0a 0%, #181816 55%, #262624 100%)',
        'hazard': 'repeating-linear-gradient(-45deg, #f5cf11 0, #f5cf11 14px, #0b0b0a 14px, #0b0b0a 28px)',
      },
      boxShadow: {
        'yard': '0 1px 0 rgba(11,11,10,0.08), 0 16px 44px -18px rgba(11,11,10,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
