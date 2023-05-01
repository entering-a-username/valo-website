/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  theme: {
    fontFamily: {
      'Tungsten': ['Tungsten-Bold', 'arial', 'georgia', 'sans-serif'],
      'footer-font': ['FF-Mark-W05', 'arial', 'sans-serif'],
    },
    letterSpacing: {
      veryTight: '-.1em',
      veryVeryTight: '-.15em',
      wide: '.2em',
    },
    screens: {
      'smsm': '100px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'sm-md': '674px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md-lg': '860px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg-xl': '1092px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('gif.webp')"
      }
    },
  },
  plugins: [],
}
