/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#1C232B',
        'brand-blue': '#5E7A96',
        'brand-light-blue': '#9FB3C8',
        'brand-gray': '#6B7280',
        'brand-bg': '#F5F7F8',
        'brand-bg-alt': '#EEF2F5',
        'brand-dark-text': '#2D3947',
      }
    },
  },
  plugins: [],
}