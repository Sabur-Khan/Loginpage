/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        "Roboto": ["'Roboto'"],
        "Roboto Mono": ["'Roboto Mono'"],
        "Noto Sans Georgian": ["'Noto Sans Georgian'"],
        "Roboto Flex": ["'Roboto Flex'"],
        "Roboto Serif": ["'Roboto Serif'"],
        "Inter": ["'Inter'"],
        "Montserrat": ["'Montserrat'"],
        "Poppins": ["'Poppins'"],
        "Oswald": ["'Oswald'"],

      }
    },
  },
  plugins: [],
}