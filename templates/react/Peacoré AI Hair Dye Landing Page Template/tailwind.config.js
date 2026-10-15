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
        // Redefined pure black and charcoal to deep, rich plum/pink tones
        black: '#251119',
        charcoal: '#3D1C28',
        white: '#FFF0F4', // Warmed up the white text to a subtle pinkish tint
        rosegold: '#F0B1C4',
        hotpink: '#FF89C1',
        dustypink: '#A16474',
      },
      animation: {
        'reveal-up': 'revealUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        revealUp: { 
          '0%': { opacity: '0', transform: 'translateY(40px)' }, 
          '100%': { opacity: '1', transform: 'translateY(0)' } 
        },
        fadeIn: { 
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' } 
        },
        float: { 
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-10px)' } 
        },
      }
    }
  },
  plugins: [],
}