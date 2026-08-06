import type { Config } from 'tailwindcss';

/**
 * Utah Pergola Experts — outdoor-living brand.
 * Palette: warm timber browns, linen lights, dusk-sky blue.
 * Typography: slab-serif display (beams) + friendly grotesque body.
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Timber — the structure
        timber: {
          50:  '#faf8f4',
          100: '#f3eee4',
          200: '#e4dac6',
          300: '#cfbd9d',
          400: '#b39a72',
          500: '#977c55',
          600: '#7b6243',
          700: '#604c36',
          800: '#423428',
          900: '#2b221b',
          950: '#191410',
        },
        // Linen — sun-washed lights
        linen: {
          50:  '#fcfaf5',
          100: '#f7f2e8',
          200: '#ede4d1',
          300: '#dcccab',
        },
        // Sky — dusk blue through the slats
        sky: {
          300: '#9ec7dd',
          400: '#64a3c4',
          500: '#3b82a8',
          600: '#2b6689',
          700: '#234f6a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display': '0.01em',
        'tag': '0.22em',
      },
      backgroundImage: {
        // Evening timber with depth
        'timber-depth': 'linear-gradient(168deg, #191410 0%, #2b221b 55%, #423428 100%)',
        // Sun through the rafters — angled slat shadows on dark surfaces
        'slats': 'repeating-linear-gradient(105deg, rgba(252,250,245,0.045) 0px, rgba(252,250,245,0.045) 3px, transparent 3px, transparent 42px)',
        // Sky panels broken by rafter lines — the brand stripe
        'rafters': 'repeating-linear-gradient(90deg, #3b82a8 0px, #3b82a8 72px, #191410 72px, #191410 84px)',
      },
      boxShadow: {
        'pergola': '0 1px 0 rgba(25,20,16,0.06), 0 20px 50px -22px rgba(25,20,16,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
