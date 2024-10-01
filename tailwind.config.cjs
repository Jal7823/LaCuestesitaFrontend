/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        // light colors
        'custom-purpure-light':'#F9FAFF',
        'custom-purpure-dark-light':'#9E71CE',
        'custom-dark-blue':'#4977E7',
        'custom-light-blue':'#7CC5FA',
        'custom-light-green':'#86D1B3',
        'custom-white':'#F2F2F4',
        // darks colors
        'custom-primary-black':'#17212C',
        'custom-secondary-black':'#232E3C'
      }
    },
  },
  plugins: [],
};
