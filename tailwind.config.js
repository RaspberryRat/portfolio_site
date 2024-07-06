/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-yellow': '#fecd45',
        'alt-blue': '#2568fb',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #fecd45 49%, white 40%)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
