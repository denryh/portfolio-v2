/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        display: ['"Paytone One"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}