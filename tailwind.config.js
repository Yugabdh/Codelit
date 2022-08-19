/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#5f53e4",
          "100": "#5549da",
          "200": "#4b3fd0",
          "300": "#4135c6",
          "400": "#372bbc",
          "500": "#2d21b2",
          "600": "#2317a8",
          "700": "#190d9e",
          "800": "#0f0394",
          "900": "#05008a"
        },
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
