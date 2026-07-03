/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glitch: ["GlitchGoblin", "sans-serif"],
      },
      colors: {
        accent: "#7c5cf6",
        accent2: "#d6469f",
      },
    },
  },
  plugins: [require("tailwindcss-pseudo-elements")],
};
