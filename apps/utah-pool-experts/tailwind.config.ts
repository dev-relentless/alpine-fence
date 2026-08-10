import type { Config } from 'tailwindcss';

/**
 * Utah Pool Experts — clear-water service brand.
 * Deep pool blues over bright aqua, white-tile surfaces, and a
 * sun-cream accent. Clean geometric sans everywhere: this is the
 * crisp, chlorine-balanced counterpart to the family's timber brands.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep end — headers, footers, ink
        pool: {
          50:  '#eef8fb',
          100: '#d7eef5',
          200: '#b3dfec',
          300: '#7fc8dd',
          400: '#43a8c7',
          500: '#268bab',
          600: '#1f7090',
          700: '#1e5b76',
          800: '#1f4c62',
          900: '#1e4053',
          950: '#0e2937',
        },
        // Shallow end — bright aqua actions
        aqua: {
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        // Deck — warm off-whites
        deck: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        // Sun-cream accent
        sun: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tag: '0.18em',
        button: '0.06em',
      },
      backgroundImage: {
        // Light shimmer at the top of hero sections
        'water-light': 'radial-gradient(90% 70% at 50% 0%, #d7eef5 0%, #f8fafc 100%)',
        // Deep-end gradient for dark sections
        'deep-end': 'linear-gradient(180deg, #0e2937 0%, #1e4053 100%)',
      },
      boxShadow: {
        float: '0 1px 0 rgba(14,41,55,0.04), 0 18px 44px -24px rgba(14,41,55,0.28)',
      },
      borderRadius: {
        tile: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
