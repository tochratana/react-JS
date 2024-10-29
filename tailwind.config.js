const flowbitePlugin = require("flowbite/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg_primary: "#020617",
        bg_primaryOld: "#0f172a",
        text_primary: "#94a3b8",
        text_primaryLight: "#e2e8f0",
        text_dark_primary: "#000",
        bg_secondary: "#2563eb",
        custom_gradient:
          "linear-gradient(to right top, #a5d74a, #e1bb35, #ff9b51, #ff817f, #ff78af, #eb6fbd, #cf6bca, #ab6ad6, #8f56ca, #7242be, #4f31b2, #1a21a7)",
      },
      boxShadow: {
        green_light: "0 4px 10px rgba(22, 163, 74, 0.8)",
      },
      spacing: {
        custom_padding: "12px 10%",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right top, #a5d74a, #e1bb35, #ff9b51, #ff817f, #ff78af, #eb6fbd, #cf6bca, #ab6ad6, #8f56ca, #7242be, #4f31b2, #1a21a7)",
      },
      maxWidth: {
        custom_ssm: "300px",
      },
      screens: {
        phone_screen: "300px",
      },
    },
  },
  plugins: [flowbitePlugin],
});
