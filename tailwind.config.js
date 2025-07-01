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
          '30': "rgba(128, 139, 150, 0.6)",
        },
        lightBlue: "#7687DA",
        darkBlue: "#5970BF",
        
        fontColor: {
          light:{
            DEFAULT: "#F0F0F0",
            '90'  : "rgba(240, 240, 240, 0.9)",
          },

          gray: "#858585",  
          lightGray :"#585858" ,
          soft: "#DEDEDE",
          extraSoft:"#BFCAD6CC"
        },

        present: "#0B8C56",
        past: "#FF7171",
      },
      fontWeight: {
        510: '510', 
        590: '590', 
        600: '600', 
    },
  },
  plugins: [],
}
