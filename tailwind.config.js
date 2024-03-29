/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      semiBlack: "#2d2e32",
      lightGreen: "#6aaa64",
      lightGray: "#a1a1a1",
      pGray: "#767676",
      cardBg: "#d4cfc4",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
