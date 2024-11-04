/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#EEE8E2",
        letter: "#D4C8C6",
        coupons: "#F0B4BC",
        timeline: "#E26475",
        gallery: "#A23A60",
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
