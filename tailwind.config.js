/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        scale50: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.5)'},
          '100%': {transform: 'scale(1)'},
        },
        scale0: {
          '0%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(0)'},
        }
      },
      animation: {
        scale: 'scale50 3s ease-in-out infinite',
        poweroff: 'scale0 50ms ease-out'
      },
      boxShadow: {
        'inner-xl': 'inset 0px 0px 50px 10px rgba(0, 0, 0, 0.3)',
        'sunken': 'inset 0px 10px 3px -5px #000,' +
            'inset -10px 0px 3px -5px #000,' +
            'inset 0px -10px 3px -5px #000,' +
            'inset 10px 0px 3px -5px #000',
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
