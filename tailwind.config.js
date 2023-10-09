/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./request.html",
    "./main.js",
    "./request.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'request-blue': '#001391',
        'request-white': '#fafafa',
        'pure-white': '#ffffff',
        'white': '#f7f7f2',
        'black': '#141414',
        'black-two': '#141414',
        'gray': '#7b7b79',
        'gray-one': '#727272',
        'gray-text-dark': '#979797',
        'gray-dark': '#989898',
        'blue': '#192a9b',

      },
    },
  },
  plugins: [],
}