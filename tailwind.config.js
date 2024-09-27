/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine : ['Tangerine', 'cursive'],
        playwrite : ['Playwrite DE Grund', 'cursive'],
        pwdisplay : ['Playfair Display', 'serif'],
        nanumgoth : ['Nanum Gothic', 'sans-serif'],
      },
      screens: {
        'phone': '480px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors:{
        'undangan' : {
          100: '#f3f4f6',
          200: '#cfc2a2',
          300: '#97837a',
          400: '#763b31',
          500: '#544038'
        }
      },
      keyframes: {
        fade: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'}
        },
        fadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        flower: {
          '0%': { transform: 'rotate(15deg) scale(1)' },
          '50%': { transform: 'rotate(0deg) scale(1.1)' },
          '100%': { transform: 'rotate(15deg) scale(1)' },
        }
      },
      animation: {
        fade : 'fade 1s ease-out forwards',
        fadein: 'fadein 5s ease-out forwards',
        flower: 'flower 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}