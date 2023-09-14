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
        "light-aqua": "#CAFAFE",
        "btn-unclick": "#FC4445",
        "btn-click": "#8EE4AF",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans - serif"],
        Patua: ["Patua One", "cursive"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
