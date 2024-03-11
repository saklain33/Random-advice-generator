/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Modimi: ["Madimi One", "sans-serif"],
      },
      boxShadow: {
        "inner-outline-gradient-to-r":
          "inset 0 0 0 3px #f43f5e, inset 0 0 0 6px #38bdf8",
      },
    },
  },
  plugins: [],
};
