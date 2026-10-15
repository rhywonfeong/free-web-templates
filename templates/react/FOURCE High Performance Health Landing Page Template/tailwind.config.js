/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forgee: {
          dark: '#0A2E00',
          mid: '#1A5C00',
          light: '#FFFFFF',
          accent: '#CCFF00',
          'accent-hover': '#AAEE00',
          muted: '#9E9E9E',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 16px rgba(0,0,0,0.08)',
        'elevated': '0 8px 32px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}