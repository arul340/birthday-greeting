/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#EEE8E2",
        mandy: "#D05D6C",
        rose: "#EFB4BC",
      },
    },
    fontFamily: {
      georama: ["Georama", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
