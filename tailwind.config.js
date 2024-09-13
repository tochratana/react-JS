const flowbitePlugin = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
export default {
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
        bg_secondary: "#2563eb",
      },
      boxShadow: {
        green_light: "0_4px_10px_rgba(22,163,74,0.8)",
      },
    },
  },
  plugins: [flowbitePlugin],
};
