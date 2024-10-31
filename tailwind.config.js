/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      colors: {
        primary: "#FFFFFF", // Teal Blue
        secondary: "#D3D3D3", // Light Gray
        accent: "#FFA500", // Orange
      },
    },
  },
  plugins: [require("daisyui")],
};
