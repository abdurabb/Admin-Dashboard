/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  backgroundColor: {
    'light': 'bg-gray-100',
    'dark': 'bg-gray-800',
  },
}

