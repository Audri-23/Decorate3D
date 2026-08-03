/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#f9f4e9',
          200: '#f3e6cd',
          300: '#e9d3a4',
          400: '#dbba72',
          500: '#c89d44',
          600: '#a17a16',
          700: '#946e19',
          800: '#79571b',
          900: '#65481d',
        },
        cream: {
          50: '#ffffff',
          100: '#fbf9f5',
          200: '#f6f2e9',
          300: '#eee8d9',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        decorate3d: {
          "primary": "#a17a16",
          "primary-content": "#ffffff",
          "secondary": "#2c302e",
          "accent": "#c89d44",
          "neutral": "#1e232a",
          "base-100": "#fbf9f5",
          "base-200": "#f4f0e6",
          "base-300": "#e8e2d4",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",
    ],
  },
}
