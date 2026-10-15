/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,営業}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        geist: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}