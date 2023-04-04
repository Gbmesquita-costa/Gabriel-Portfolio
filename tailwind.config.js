/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      "xs": {"min": "280px"},
      "s": {"min": "390px"},
      "md": {"min": "540px"},
      "lg": {"min": "640px"},
      "xl": {"min": "1280px"}
    }
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}