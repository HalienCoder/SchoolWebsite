/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./src/**/*",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: { banner: "url('/dist/resources/banner1.png')" },
      colors: {
        main: "#171c8f",
        second: "#f7675e",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans - serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
