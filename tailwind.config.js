/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*"],
  theme: {
    extend: {
      backgroundImage: { banner: "url('/dist/resources/banner1.png')" },
      colors: {
        main: "#171c8f",
        second: "#e03c31",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans - serif"],
      },
    },
  },
  plugins: [],
};
