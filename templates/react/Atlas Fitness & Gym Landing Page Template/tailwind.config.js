/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          300: '#AAAAAA',
          500: '#666666',
          700: '#333333',
          800: '#222222',
          850: '#1A1A1A',
          900: '#111111',
          950: '#080808',
        },
        acid: {
          DEFAULT: '#C8F400',
          hover: '#B5E000',
        },
        fire: {
          DEFAULT: '#E8200A',
          hover: '#C01800',
        },
        ember: '#FF4D1A',
        offwhite: '#F0EFE8',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      letterSpacing: {
        'tightest': '-.05em',
        'widest': '.15em',
      }
    },
  },
  plugins: [],
}