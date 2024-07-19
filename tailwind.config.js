/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
