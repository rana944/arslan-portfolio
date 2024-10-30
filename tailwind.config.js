/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#433A4A'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        abhaya: ['AbhayaLibre', 'libre'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("tailwindcss-safe-area")
  ],
}

