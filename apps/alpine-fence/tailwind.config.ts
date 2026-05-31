import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ───────────────────────────────────────────────────────────
        // Brand palette — PREMIUM REFRESH (May 2026)
        // `alpine` and `compoxen` retain their token names so existing
        // class names continue to work, but their values have been
        // retuned from bright kelly-green / yellow to deep forest /
        // warm bronze for a more refined, easier-on-the-eyes feel.
        // ───────────────────────────────────────────────────────────
        alpine: {
          50:  '#f1f6f3',
          100: '#dde9e1',
          200: '#bcd2c5',
          300: '#93b6a3',
          400: '#6a9981',
          500: '#4a7d65',
          600: '#356350',
          700: '#295041',
          800: '#214036',
          900: '#1a322b',
          950: '#0d1f1a',
        },
        cedar: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d8b5',
          300: '#e9bc85',
          400: '#df9853',
          500: '#d67d2d',
          600: '#c66523',
          700: '#a44d1f',
          800: '#853f20',
          900: '#6d351d',
          950: '#3a1a0e',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        mountain: {
          50:  '#f1f6f3',
          100: '#dde9e1',
          200: '#bcd2c5',
          300: '#93b6a3',
          400: '#6a9981',
          500: '#4a7d65',
          600: '#356350',
          700: '#295041',
          800: '#214036',
          900: '#1a322b',
          950: '#0d1f1a',
        },
        // Compoxen retains the token but shifts from bright yellow to
        // warm muted bronze — refined, premium, and a better visual
        // match for the actual composite material it represents.
        compoxen: {
          50:  '#faf6ef',
          100: '#f4ead4',
          200: '#e8d4a6',
          300: '#d8b771',
          400: '#c89849',
          500: '#b07d34',
          600: '#92632a',
          700: '#744d23',
          800: '#5c3e1f',
          900: '#4a331c',
          950: '#261910',
        },
        // ── Premium landscape palette (aliases of alpine/compoxen
        //    + a new warm cream "oat" for soft backgrounds) ────────
        forest: {
          50:  '#f1f6f3',
          100: '#dde9e1',
          200: '#bcd2c5',
          300: '#93b6a3',
          400: '#6a9981',
          500: '#4a7d65',
          600: '#356350',
          700: '#295041',
          800: '#214036',
          900: '#1a322b',
          950: '#0d1f1a',
        },
        bronze: {
          50:  '#faf6ef',
          100: '#f4ead4',
          200: '#e8d4a6',
          300: '#d8b771',
          400: '#c89849',
          500: '#b07d34',
          600: '#92632a',
          700: '#744d23',
          800: '#5c3e1f',
          900: '#4a331c',
          950: '#261910',
        },
        oat: {
          50:  '#fdfbf6',
          100: '#f8f1e3',
          200: '#f0e3c5',
          300: '#e6d2a3',
          400: '#d8bb78',
          500: '#c5a05a',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        // Premium hero gradient — deep evergreen, no blue cast
        'hero-gradient':     'linear-gradient(135deg, #0d1f1a 0%, #1a322b 50%, #214036 100%)',
        // Compoxen brand gradient — warm bronze (was bright yellow)
        'compoxen-gradient': 'linear-gradient(135deg, #744d23 0%, #92632a 50%, #c89849 100%)',
        // Trust band — warm cream → white (was minty green)
        'trust-gradient':    'linear-gradient(180deg, #fdfbf6 0%, #ffffff 100%)',
        // Landscape-specific aliases
        'forest-hero':       'linear-gradient(135deg, #0d1f1a 0%, #1a322b 45%, #214036 100%)',
        'oat-soft':          'linear-gradient(180deg, #fdfbf6 0%, #ffffff 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loading-bar': 'loadingBar 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        loadingBar: {
          '0%': { width: '0%', marginLeft: '0%' },
          '50%': { width: '60%', marginLeft: '20%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
