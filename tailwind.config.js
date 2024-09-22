/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Permanent Marker"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
        exo: ['"Exo"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
