/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid-right-bottom': '15px 15px 0px 0px #03A062',
      },
      fontFamily: {   
        "roboto": ['Roboto', 'sans-serif'],
        "reddit": ['Reddit Mono', 'monospace'],
      },
      backgroundImage: {
        circularEllipse: 'repeating-radial-gradient(#5c07a7, 5px, transparent 8px, transparent 120px);',
        spheres: 'radial-gradient(circle at 100px 100px, #03A062, #000);'
      },
      screens: {
        'h-less-700': { 'raw': '(max-height: 699px)' },
      }
    },
  },
  plugins: [require("daisyui")],
}

