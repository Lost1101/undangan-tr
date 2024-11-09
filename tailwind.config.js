/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '50': '50%',
        '75': '75%',
        '90': '90%',
      },
      fontFamily: {
        tangerine : ['Tangerine', 'cursive'],
        playwrite : ['Playwrite DE Grund', 'cursive'],
        pwdisplay : ['Playfair Display', 'serif'],
        nanumgoth : ['Nanum Gothic', 'sans-serif'],
        aboreto : ['Aboreto', 'system-ui'],
        arapey : ['Arapey', 'serif'],
        worksans : ['Work Sans', 'sans-serif'],
      },
      screens: {
        'phone': '480px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1440px',
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
        },
        fadeInTop: {
          '0%': {opacity: '0', transform: 'translateY(-200px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'scaleX(0.5)', transformOrigin: 'left' },
          '100%': { opacity: '1', transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'scaleX(0.5)', transformOrigin: 'right' },
          '100%': { opacity: '1', transform: 'scaleX(1)', transformOrigin: 'right' },
        },
      },
      animation: {
        fade : 'fade 1s ease-out forwards',
        fadein: 'fadein 5s ease-out forwards',
        fadeinfast: 'fadein 1s ease-out forwards',
        flower: 'flower 3s ease-in-out infinite',
        fadeInTop: 'fadeInTop 1s ease-out forwards',
        fadeInTopLong: 'fadeInTop 1.5s ease-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}