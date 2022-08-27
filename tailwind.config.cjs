/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage:{
        backImage:'url(/src/assets/BackgroundKid.png)'
      },
      fontFamily:{
        sans:'Roboto,sans-serif',
      },
    },
  },
  plugins: [
    require('tailwindcss-counter')(),
  ],
}
