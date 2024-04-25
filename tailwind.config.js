/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": "'Raleway', sans-serif"
      },
      colors: {
        "primary_color": "#0fa4af",
        "secondry_color": "#afdde5",
        "third_color": "#f3f0e6",
        "fourth_color": "#465048",
      }
    },
  },
  plugins: [require("daisyui")],

}

