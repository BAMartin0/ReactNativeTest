/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./global.css",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#D5C6AB",
        secondary: {
          DEFAULT: "#B19E99",
          100: "#A17764",
          200: "#855C4B",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
