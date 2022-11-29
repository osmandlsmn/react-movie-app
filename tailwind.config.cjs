/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        background: "#192026",
        primary: "#868686",
        secondary: "#374151",
      },
    },
  },
  plugins: [],
};
