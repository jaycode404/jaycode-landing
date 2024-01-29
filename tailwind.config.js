const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      transform: {
        "-5": "skewY(-5deg)",
      },
    },
  },
  plugins: [],
});
