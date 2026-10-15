/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#F7F5F2',
        'charcoal': '#1A1A1A',
        'beige': '#E8E4D9',
        'taupe': '#B8B0A3',
        'gold-accent': '#C5A880'
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}