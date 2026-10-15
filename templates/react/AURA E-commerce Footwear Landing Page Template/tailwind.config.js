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
        brand: {
          50: '#f0f7ff',
          100: '#dcecff',
          200: '#b9d9ff',
          300: '#87bbff',
          400: '#4c94ff',
          500: '#2563ff',
          600: '#1c4ee6',
          700: '#1c3fba',
          800: '#1d3794',
          900: '#1d3275',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(37, 99, 255, 0.18)',
        soft: '0 10px 40px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}