/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pale-orange':'#ECDFBC',
      'pale-green': '#E6F8EC',
      'light-green': '#E2F9EE',
      'bright-green': '#0FBA81',
      'black': '#000',
      'white': '#FFFFFF',
      'bright-orange': '#FFBA43',
    },
    extend: {},
  },
  plugins: [],
}