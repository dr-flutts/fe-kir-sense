/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#42566F',
        'secondary': '#D9D9D9',
        'light': '#F1F4FD26',
      }
    },
  },
  plugins: [],
}
