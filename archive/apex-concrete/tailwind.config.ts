import type { Config } from 'tailwindcss';

/**
 * Apex Concrete — "summit-grade" concrete brand.
 * Basalt darks, warm cured-concrete neutrals, and a vermilion survey-flag
 * accent. Drafting-grid textures, contour lines, and a peak (apex) motif.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Basalt — cool volcanic darks
        basalt: {
          50:  '#f4f5f6',
          100: '#e6e8ea',
          200: '#cdd1d5',
          300: '#a9b0b7',
          400: '#7c858e',
          500: '#5f6870',
          600: '#4a525a',
          700: '#3b4248',
          800: '#272c31',
          900: '#191d21',
          950: '#0e1114',
        },
        // Slab — warm cured-concrete neutrals
        slab: {
          50:  '#f7f6f2',
          100: '#efede7',
          200: '#e2dfd6',
          300: '#cdc8bb',
          400: '#aea79a',
          500: '#8f887b',
        },
        // Flag — vermilion survey-flag accent
        flag: {
          50:  '#fff1ec',
          100: '#ffdfd3',
          200: '#ffbfa8',
          300: '#ff9573',
          400: '#f7643d',
          500: '#e8431f',
          600: '#c73515',
          700: '#9f2a12',
          800: '#7f2512',
        },
        // Glacier — cool highlight for diagrams & secondary accents
        glacier: {
          100: '#e4f0f4',
          200: '#c6dfe7',
          300: '#9cc4d2',
          400: '#6ea4b8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.01em',
        tag: '0.24em',
      },
      backgroundImage: {
        // Basalt vignette for dark sections
        'basalt-depth': 'radial-gradient(120% 90% at 50% 0%, #272c31 0%, #191d21 48%, #0e1114 100%)',
        // Drafting grid — light paper
        'grid-paper':
          'linear-gradient(to right, rgba(14,17,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,17,20,0.06) 1px, transparent 1px)',
        // Drafting grid — dark
        'grid-dark':
          'linear-gradient(to right, rgba(247,246,242,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,246,242,0.06) 1px, transparent 1px)',
        // Form-board stripe: vermilion slabs split by joints
        'joints': 'repeating-linear-gradient(90deg, #e8431f 0px, #e8431f 72px, #0e1114 72px, #0e1114 80px)',
        // Hazard chevrons — thin diagonal stripe
        'chevrons': 'repeating-linear-gradient(135deg, #e8431f 0 10px, transparent 10px 20px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      boxShadow: {
        slab: '0 1px 0 rgba(14,17,20,0.06), 0 24px 60px -28px rgba(14,17,20,0.45)',
        card: '0 1px 2px rgba(14,17,20,0.06), 0 12px 32px -16px rgba(14,17,20,0.25)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ticker: 'ticker 48s linear infinite',
        rise: 'rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
