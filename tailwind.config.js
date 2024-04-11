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
        '--clr-Black_Pearl': ' #050827',

        //hue
        // '--clr-hue-gray' : 'rgba(5, 8, 39, 0.5)',
        // '--clr-hue-black' : 'rgba(5, 8, 39, 0.7)'

      },

      backgroundImage:{
        'hero': "linear-gradient(60deg,rgba(5, 8, 39, 0.5),rgba(5, 8, 39, 0.7)),url(../asset/background/coffee_Mugs.jpg)",

        // 'test': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../src/images/icon-bg.jpg')",

        'parallax': 'url(../asset/background/parallax.jpg)',
      }


    },
    
  },
  plugins: [],
}

