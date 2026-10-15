/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          black: '#050510',
          deep: '#0a0a1a',
          blue: {
            electric: '#00b4ff',
            neon: '#00d4ff',
            glow: '#40e0ff',
          },
          purple: {
            dark: '#1a0a3e',
            mid: '#3d1a8e',
            bright: '#8b3dff',
            neon: '#b44dff',
          },
          pink: {
            hot: '#ff2d8a',
            neon: '#ff45a0',
          },
          gold: '#d4a853',
          white: {
            DEFAULT: '#f0eeff',
            dim: 'rgba(240, 238, 255, 0.55)',
          },
          card: {
            bg: 'rgba(15, 10, 40, 0.7)',
            border: 'rgba(0, 180, 255, 0.15)',
          }
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'ticker': 'tickerScroll 25s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bob': 'bob 2s ease-in-out infinite',
        'sparkle-float': 'sparkleFloat linear infinite',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        tickerScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
        sparkleFloat: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}