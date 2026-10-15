/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        card: '#111111',
        brand: {
          light: '#ff8fa8',
          DEFAULT: '#FF9EB5',
          dark: '#e68da2'
        }
      }
    },
  },
  plugins: [],
}