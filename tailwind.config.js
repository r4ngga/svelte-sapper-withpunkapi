/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.svelte",
      // may also want to include HTML files
      "./src/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
