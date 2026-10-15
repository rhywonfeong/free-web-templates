/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#F5F5F5',
          200: '#CCCCCC',
          400: '#888888',
          600: '#3D3D3D',
          700: '#2A2A2A',
          800: '#1E1E1E',
          850: '#181818',
          900: '#111111',
          950: '#0A0A0A',
        },
        energy: {
          fire: '#FF3A00',
          flame: '#FF5A1A',
          voltage: '#C8F200',
          blood: '#CC0000',
          ember: '#E84300',
        }
      },
      boxShadow: {
        'glow-fire': '0 0 24px rgba(255,58,0,0.35)',
        'glow-voltage': '0 0 24px rgba(200,242,0,0.35)',
      }
    },
  },
  plugins: [],
}