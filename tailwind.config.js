/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#fdf2d4",
        "secondary":"#890101",
        "secondary-red":"#f54842",
      }
    },
    container:{
      padding:"2rem",
      center:true,
    },
    screens:{
      sm:"640px",
      md:"768px"
    }
  },
  plugins: [],
}
