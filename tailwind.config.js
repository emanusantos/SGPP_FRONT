/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        orkneyLight: ["Orkney-Light", "sans-serif"],
        orkney: ["Orkney-Regular", "sans-serif"],
        orkneyMd: ["Orkney-Medium", "sans-serif"],
        orkneyBold: ["Orkney-Bold", "sans-serif"],
      },
      colors: {
        primary: "#1E2022",
        "gray-dark": "#C9D6DE",
        "gray-light": "#F0F5F9",
      },
    },
  },
  plugins: [],
};
