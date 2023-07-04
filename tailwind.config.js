/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
      colors: {
        'light-mistyRose': '#F9E6E6',
        'light-oldLace': '#F9F6E6',
        'light-alabaster': '#EBF9E6',
        'light-honeydew': '#E6F9F1',
        'light-lavender': '#E6F1F9',
        'light-purpleDew': '#EBE6F9',
        'light-pinkLace': '#FFDDF4',
        'light-softGrey': '#f2f2f2',
        'candyRed': '#C61F2B',
        'schoolBusYellow': '#FCD800',
        'barbiePink': '#DA1884',
        'blueberry': '#4F86F7',
        'candyGreen': '#25D366',
        'fadeBlack': '#1e1e1e',
        'charcoal': '#36454F',
        'silver': '#e3e8ef',
      }
    },
  },
  plugins: [],
}