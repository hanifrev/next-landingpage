module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        ex70: "4.375rem",
      },
      margin: {
        "-30x": "-30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
