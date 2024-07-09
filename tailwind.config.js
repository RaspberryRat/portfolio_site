/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  safelist: [
    'animate-turnOff',
    'animate-turnOn',
    'animate-open',
    'animate-close',
    'animate-foldersOn',
    'animate-foldersOff'
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
        },
        folderOpen: {
          '0%': { transform: 'scale(0, 0)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        folderClose: {
          '0%': { transform: 'scale(1, 1)' },
          '100%': { transform: 'scale(0, 0)' }
        },
        foldersTurnOff: {
          '0%': {
            transform: 'scale(1, 1) translateY(0%), translateX(0%)'
          },
          '100%': {
            transform: 'scale(0, 0) translateY(-300%) translateX(70%)'
          }
        },
        foldersTurnOn: {
          '0%': {
            transform: 'scale(0, 0) translateY(-300%) translateX(70%)'
          },
          '100%': {
            transform: 'scale(1, 1) translateY(0%), translateX(0%)'
          },
        },
      },
      animation: {
        scale: 'scale50 3s ease-in-out infinite',
        powerOff: 'scale0 50ms ease-out',
        turnOff: 'tvOff 750ms ease-out forwards',
        turnOn: 'tvOn 750ms ease-out forwards',
        foldersOff: 'foldersTurnOff 400ms ease-out forwards',
        foldersOn: 'foldersTurnOn 1000ms ease-out forwards',
        open: 'folderOpen 500ms ease-in forwards',
        close: 'folderClose 500ms ease-in forwards',
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
        'pale-brown': '#C1A17B',
        'menu-blue': '#0161f9',
        'menu-biege': '#f1ece0',
        'font-biege': '#c5c2b9',
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
