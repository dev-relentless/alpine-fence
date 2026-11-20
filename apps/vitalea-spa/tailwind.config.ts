import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Drawn from the Vitalea logo: blush pink, champagne gold, deep plum.
        blush: {
          50: '#fdf8f6',
          100: '#fbeee9',
          200: '#f7dcd4',
          300: '#efc3b8',
          400: '#e4a295',
          500: '#d58172',
          600: '#c06351',
          700: '#a04f40',
          800: '#854338',
          900: '#703a32',
        },
        gold: {
          50: '#faf6ec',
          100: '#f3ead2',
          200: '#e7d5a3',
          300: '#d9bc6e',
          400: '#cda647',
          500: '#bd9134',
          600: '#a3772a',
          700: '#835d25',
          800: '#6d4c24',
          900: '#5e4122',
        },
        cream: '#fdf9f6',
        ink: '#2e2126',
        plum: '#3b2a31',
        'plum-deep': '#241a1f',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(112, 58, 50, 0.25)',
        card: '0 10px 40px -16px rgba(112, 58, 50, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
