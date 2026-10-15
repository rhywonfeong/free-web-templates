/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 30s linear infinite',
        'border-shift-aura': 'border-shift-aura 0.75s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'border-shift-aura': {
          to: { transform: 'translateX(-25%)' }
        }
      }
    },
  },
  plugins: [],
}