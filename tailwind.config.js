/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkestGrey: "#232127",
        darkGrey: "#34313D",
        purple: "#3A3054",
        blue: "#2BD0D0",
        grey: "#9E9AA8",
        lightBlue: "#9AE3E3",
        backgroundColor: "#EFF1F7",
      },
    },
  },
  plugins: [],
};
