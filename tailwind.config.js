/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'zaneo': {
          'green': '#2CBDB0',
          'green-light': '#B6F0E9',
          'green-dark': '#17726D',
          'black': '#000000',
        },
      },
    },
  },
  plugins: [],
}

