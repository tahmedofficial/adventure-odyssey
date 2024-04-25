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
        "primary_text_color": "#000000",
        "primary_bg_color": "#f2f2f2",
      }
    },
  },
  plugins: [require("daisyui")],

}

