const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: "#2F2E41",
        red: "#E06C75",
        green: "#08C8B6",
        blue: "#528BFF",
        purple: "#C678DD",
        yellow: "#E5C07B"
      },
      fontFamily: {
        sans: ["INTERNAL_SF", ...defaultTheme.fontFamily.sans],
        serif: ["INTERNAL_NY", ...defaultTheme.fontFamily.serif],
        mono: ["INTERNAL_JB", ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [],
}
