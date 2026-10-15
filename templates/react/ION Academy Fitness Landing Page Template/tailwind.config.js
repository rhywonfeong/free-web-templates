/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#8DB600',       // green-electric
          bright: '#9DC800',      // green-bright
          neon: '#AADD00',        // green-neon
          purple: '#7C3AED',      // purple-core
          purpleBright: '#8B5CF6',// purple-bright
          blue: '#3B82F6',        // blue-data
        },
        neutral: {
          50: '#F5F5F5',
          100: '#D4D4D4',
          200: '#AFAFAF',
          300: '#8A8A8A',
          400: '#6B6B6B',
          500: '#525252',
          600: '#3D3D3D',
          700: '#2E2E2E',
          800: '#222222',
          850: '#1A1A1A',
          900: '#111111',
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.08em',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(141,182,0,0.3)',
        'glow-secondary': '0 0 20px rgba(124,58,237,0.25)',
        'glow-data': '0 0 20px rgba(59,130,246,0.25)',
      },
      backdropBlur: {
        md: '12px', // Explicit 12px blur for Glassmorphism Sutil
      }
    },
  },
  plugins: [],
}