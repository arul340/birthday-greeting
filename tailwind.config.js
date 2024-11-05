/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#EEE8E2",
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
