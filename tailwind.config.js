/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#22c55e",
        secondColor: "#86198f",
        headingColor: "#181A1E",
        textColor: "#4E545F"
      },

      boxShadow: {
        panelShadow: "rgba(17, 17, 46, 0.15) 0px 40px 100px 0px",
      }
    },
  },
  plugins: [],
}