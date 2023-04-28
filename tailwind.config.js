/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  theme: {
    fontFamily: {
      'Tungsten': ['Tungsten-Bold', 'arial', 'georgia', 'sans-serif']
    },
    letterSpacing: {
      veryTight: '-.1em'
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('gif.webp')"
      }
    },
  },
  plugins: [],
}
