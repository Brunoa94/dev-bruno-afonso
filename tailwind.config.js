/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid-right-bottom': '15px 15px 0px 0px #29004D',
      },
      fontFamily: {   
        "roboto": ['Roboto', 'sans-serif'],
        "reddit": ['Reddit Mono', 'monospace'],
      },
      backgroundImage: {
        circularEllipse: 'repeating-radial-gradient(#2e1065, 5px, #f5f5f5 8px, #f5f5f5 120px);'
      },
      screens: {
        'h-less-700': { 'raw': '(max-height: 699px)' },
      }
    },
  },
  plugins: [require("daisyui")],
}

