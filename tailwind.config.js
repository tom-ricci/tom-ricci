const defaultTheme = require('tailwindcss/defaultTheme')
let plugin = require('tailwindcss/plugin')

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
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '1': 'repeat(1, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '18': 'repeat(18, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '1': 'repeat(1, minmax(0, 1fr))'
      },
      gridColumn: {
        'span-0': "span 0 / span 1"
      }
    },
  },
  plugins: [
    plugin(function({ matchVariant }) {
      matchVariant("ar", (value) => `@media (min-aspect-ratio: ${value})`, {
        sort(a, z) {
          return parseInt(a.value) - parseInt(z.value);
        },
        values: {
          // hey w3c it would be great if css could support vertical asymptotes that would make this much better
          "vert": "1/0.001",
          "9x18": "9/18",
          "9x16": "9/16",
          "9x13": "9/13",
          "9x10": "9/10",
          "9x9": "9/9",
          "10x9": "10/9",
          "13x9": "13/9",
          "16x9": "16/9",
          "31x18": "31/18",
          "18x9": "18/9",
          // hey w3c it would be great if css could support horizontal asymptotes that would make this much better
          "horiz": "9999/1"
        }
      });
    })
  ]
}
