/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#005497',
        'title-input': 'rgb(154, 193, 242)',
        'grade-bar': 'rgb(167, 239, 193)',
        "linkedn-blue" :  "#0072b1"
      }
    },
  },
  plugins: [],
}

