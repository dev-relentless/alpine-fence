import type { Config } from 'tailwindcss';

/**
 * Harlow & Stone Landscapes — premium design-build brand.
 * Palette: warm stone neutrals, deep moss, bronze accent.
 * Typography: editorial serif display + refined sans body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral foundation — paper, parchment, stone
        ivory: {
          50:  '#fdfbf6',
          100: '#faf6ec',
          200: '#f3ecd9',
          300: '#e8dcbe',
          400: '#d6c69a',
        },
        stone: {
          50:  '#f7f5f1',
          100: '#ece8df',
          200: '#d8d1c1',
          300: '#b9ae97',
          400: '#8f8472',
          500: '#6b6354',
          600: '#524b3f',
          700: '#3d3830',
          800: '#2a2620',
          900: '#1a1714',
          950: '#0d0b09',
        },
        // Deep moss — primary brand green, restrained and editorial
        moss: {
          50:  '#f1f4ef',
          100: '#dde5d7',
          200: '#bbcbb0',
          300: '#92ad84',
          400: '#6c8d5f',
          500: '#4f7044',
          600: '#3c5734',
          700: '#30462a',
          800: '#283823',
          900: '#1f2c1c',
          950: '#101810',
        },
        // Bronze accent — warm metallic, used sparingly
        bronze: {
          50:  '#faf6ee',
          100: '#f1e7cd',
          200: '#e2cd9b',
          300: '#cfae6a',
          400: '#b88f48',
          500: '#9e7639',
          600: '#7e5c2e',
          700: '#624728',
          800: '#4d3923',
          900: '#3d2e1e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display-tight': '-0.02em',
        'eyebrow': '0.18em',
      },
      backgroundImage: {
        'moss-deep': 'linear-gradient(135deg, #101810 0%, #1f2c1c 50%, #283823 100%)',
        'ivory-soft': 'linear-gradient(180deg, #fdfbf6 0%, #faf6ec 100%)',
      },
      boxShadow: {
        'editorial': '0 1px 0 rgba(26,23,20,0.06), 0 12px 40px -16px rgba(26,23,20,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
