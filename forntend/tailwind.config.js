/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./pubilc/assests/top-view-vegetables-cooked-sliced-such-as-green-bell-pepper-eggplant-red-cherry-tomatoes-inside-black-plate-dark.jpg')",
      }
    },
  },
  plugins: [],
}

