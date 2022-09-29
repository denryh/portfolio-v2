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
        display: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        flash: {
          '0%': {
            transform: "translateX(0)"
          },
          '100%': {
            left: "translateX(48px)"
          }
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
