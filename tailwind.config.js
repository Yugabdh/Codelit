/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2d21b2",
        "primary-medium": "#5445FF",
        "primary-faint": "#857AFF",
        "bg-dark": "#1C1B29", 
        "bg-medium": "#272735",
        "bg-faint": "#39394B",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
