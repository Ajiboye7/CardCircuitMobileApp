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
    },
  },
  plugins: [],
}
