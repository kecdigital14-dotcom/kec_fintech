/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 add this
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          400: '#fb7185', // Light coral for gradients and highlights
          600: '#f43f5e', // Medium coral for hover states
          900: '#be123c', // Dark coral for the body gradient
        },
      },
    },
  },
  plugins: [],
};
