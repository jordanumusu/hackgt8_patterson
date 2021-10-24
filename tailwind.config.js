const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Rubik']
      },
      backgroundImage: theme => ({
      'login': "url('../assets/images/loginBackground.jpg')",
      
      }),
      colors: {
        white: "#FFFFFF",
        secondary: "#FFD166",
        kindagreen:" #30af48",
        tertiary: "#2f86ce",
        test: "#f4f9fc",
        gray: colors.trueGray,
        purple: colors.purple
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
