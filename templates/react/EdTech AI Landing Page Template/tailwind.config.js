/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'sans-serif'] 
      },
      colors: {
        brand: {
          base: '#12141a',
          surface: '#1a1d24',
          accent: '#ccff00',
          accentDark: '#99cc00',
          text: '#f8fafc',
          muted: '#8b949e',
          border: 'rgba(255,255,255,0.06)'
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.1em',
      }
    }
  },
  plugins: [],
}