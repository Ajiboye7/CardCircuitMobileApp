/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030B11",
        secondary: {
          DEFAULT: "#3555F5",
          custom: "rgba(53, 85, 245, 0.2)",
        },
        tertiary: {
          DEFAULT: "#808B96", 
          '20': "rgba(128, 139, 150, 0.2)", 
          '30': "rgba(128, 139, 150, 0.3)",
        },
        lightBlue: "#7687DA",
        
        fontColor: {
          light: "#F0F0F0",  
          gray: "#858585",  
          lightGray :"#585858" ,
          soft: "#DEDEDE",
        },
      },
      fontWeight: {
        510: '510', 
        590: '590', 
        600: '600',
        700: '700', 
        400: '400', 
      },
      fontFamily:{
        sfProRoundedBlack:["SF-Pro-Rounded-Black, san-serif"],
        sfProRoundedBold:["SF-Pro-Rounded-Bold, san-serif"],
        sfProRoundedHeavy:["SF-Pro-Rounded-Heavy, san-serif"],
        sfProRoundedLight:["SF-Pro-Rounded-Light, san-serif"],
        sfProRoundedMedium:["SF-Pro-Rounded-Medium, san-serif"],
        sfProRoundedRegular:["SF-Pro-Rounded-Regular, san-serif"],
        sfProRoundedSemibold:["SF-Pro-Rounded-Semibold, san-serif"],
        sfProRoundedThin:["SF-Pro-Rounded-Thin, san-serif"],
        sfProRoundedUltralight:["SF-Pro-Rounded-UltraLIght, san-serif"],
        sfPro:["SF-Pro, san-serif"],
        sfProItalic:["SF-Pro-Italic, san-serif"],
      }
    },
  },
  plugins: [],
}
