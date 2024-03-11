/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#dfaeee",
        lightSkyBlue: "#94bbe9",
      },
      fontFamily: {
        Modimi: ["Madimi One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
