import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f3',
          100: '#e4ebe1',
          200: '#c9d8c4',
          300: '#a4bd9d',
          400: '#7d9e75',
          500: '#5d8155',
          600: '#476743',
          700: '#395236',
          800: '#2f422d',
          900: '#273726',
        },
        cream: '#faf7f0',
        ink: '#20261f',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
