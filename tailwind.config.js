/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  safelist: [
    'animate-turnOff',
    'animate-turnOn'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem'
      },
      keyframes: {
        scale50: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        scale0: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },

        },
        tvOff: {
          '0%': { transform: 'scale(1, 1)', filter: 'brightness(100%)' },
          '100%': { transform: 'scale(0.6, 0)', filter: 'brightness(800%)' }
        },
        tvOn: {
          '0%': { transform: 'scale(0.6, 0)', filter: 'brightness(800%)' },
          '100%': { transform: 'scale(1, 1)', filter: 'brightness(100%)' }
        }
      },
      animation: {
        scale: 'scale50 3s ease-in-out infinite',
        powerOff: 'scale0 50ms ease-out',
        turnOff: 'tvOff 750ms ease-out forwards',
        turnOn: 'tvOn 750ms ease-out forwards'
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
