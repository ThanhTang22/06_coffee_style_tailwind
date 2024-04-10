/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./js/**/*.{html,js}"
  ],

  theme: {
    
    extend: {
      fontFamily: {
        'body': 'Karla , sans-senif',
      },
      colors:{
        // Primary
        '--clr-Ebony_Clay': '#1d1f2e',
        '--clr-Cape_Palliser': ' #a25f4b',
        '--clr-Black_Pearl': ' #050827'
      }
    },
    
  },
  plugins: [],
}

