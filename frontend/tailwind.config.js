/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        oswald: ['Oswald', 'sans-serif'], 
        garamond: ['EB Garamond', 'serif']
      }
    },
  },
  plugins: [],
}