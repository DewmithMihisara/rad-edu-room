/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0063ff',
        },
        secondary: {
          DEFAULT: '#09ff00',
        },
        tertiary: {
          DEFAULT: '#ff0008',
        }
      },
      fontFamily: {
        sans: ['Inter',"sans-serif"],
        serif: ['Jost',"sans"]
      },
    },
  },
  plugins: [],
}

