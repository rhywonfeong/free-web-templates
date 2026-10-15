/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C2C2C2',
          400: '#6B6B6B',
          600: '#3D3D3D',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#111111',
          950: '#0A0A0A',
        },
        signal: {
          core: '#E8400A',
          bright: '#FF5A26',
          deep: '#C23508',
          glow: 'rgba(232, 64, 10, 0.4)',
        },
        steel: {
          muted: '#5A7080'
        },
        absolute: {
          white: '#FFFFFF',
          black: '#000000',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.01em',
        widest: '0.15em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
};