/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('img/bg.png')",
      },
    },
  },
  plugins: [],
};
