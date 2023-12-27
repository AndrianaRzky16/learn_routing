/** @type {import('tailwindcss').Config} */

export default {
  content: [
     'index.html', './src/**/*.{js,jsx,ts,tsx}', './node_modules/preline/preline.js', 
  ],
  theme: {
     extend: {
      colors: {
        primary: '#467F8C',
        secondary: '#D98841',
        danger: '#EA3125',
        success: '#26EB77'
      },
     },
  },
  darkMode: true,
  plugins: [
    //  eslint-disable-next-line no-undef
     require('preline/plugin'),
    ],
 }