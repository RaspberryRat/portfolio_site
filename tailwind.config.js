/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0px 0px 50px 10px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'main-yellow': '#fecd45',
        'alt-blue': '#2568fb',
        'pale-brown': '#C1A17B'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #fecd45 49%, white 40%)',
        'matt-gradient': 'linear-gradient(145deg, #d6bfae, #c3a594)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
