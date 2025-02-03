/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd1ff',
          300: '#8eb3ff',
          400: '#5b88ff',
          500: '#1e56c3', // Primary blue
          600: '#1544a0',
          700: '#0f3282',
          800: '#0c266b',
          900: '#091c57',
        },
        accent: {
          light: '#ecdcf4', // Light purple
          beige: '#f3ecde', // Light beige
          dark: '#272932', // Dark gray
        },
      },
    },
  },
  plugins: [],
};