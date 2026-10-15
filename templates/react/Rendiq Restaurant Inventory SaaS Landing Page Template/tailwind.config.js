/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          100: '#F3FFB3',
          300: '#DEFF4D',
          400: '#CEFE00',
        },
        green: {
          500: '#63AC39',
        },
        red: {
          400: '#EF4948',
        },
        orange: {
          400: '#FF9F00',
        },
        neutral: {
          0: '#FCFBFC',
          50: '#F0EFF0',
          100: '#E2E1E2',
          300: '#B8B7B8',
          500: '#8A898A',
          700: '#3D3C3D',
          900: '#0C0C0C',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'img-breathe': 'img-breathe 9s ease-in-out infinite alternate',
        'leaf-sway': 'leaf-sway 4s ease-in-out infinite alternate',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        'img-breathe': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
        'leaf-sway': {
          '0%': { transform: 'rotate(-5deg) translateY(0)' },
          '100%': { transform: 'rotate(10deg) translateY(-5px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}