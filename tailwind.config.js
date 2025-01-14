/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('daisyui'),
  ],
}
