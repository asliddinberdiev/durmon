/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb86e",
        secondary: "#a3a3a3",
        text: "#bd834b",
        black: "#000",
        white: "#fff",
        input: "#cbcbcb",
        "white-dark": "#f6f6f6",
      },
      backgroundColor: {
        main: "#fbfbfb",
        section: "linear-gradient(#ffb86e 42%, #d9d9d9 0%)",
      },
      boxShadow: {
        card: "0px 0px 30px 0px #00000026",
      },
    },
    plugins: [],
  },
}