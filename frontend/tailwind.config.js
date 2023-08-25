/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowtop: "0 12px 9px 7px black",
      },
    },
    fontFamily: {
      "playfair-display": ["Playfair Display", "serif"],
    },
  },
  plugins: [],
}
