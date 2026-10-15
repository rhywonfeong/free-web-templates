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
          blue: '#0055B8',
          'blue-dark': '#003F99',
          'blue-darkest': '#002D75',
          orange: '#FF8C00',
          'orange-hover': '#E67700',
          yellow: '#FFD600',
          green: '#00A86B',
          purple: '#7B2FBE',
          pink: '#E91E8C'
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F5F6FA',
          100: '#E8EAEF',
          300: '#B0B5C3',
          600: '#4A4F61',
          900: '#0D0E14',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'hover': '0 8px 24px rgba(0,85,184,0.15)',
        'cta': '0 4px 12px rgba(255,140,0,0.35)',
        'modal': '0 16px 48px rgba(0,0,0,0.24)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #002D75 0%, #0055B8 100%)',
        'promo-gradient': 'linear-gradient(90deg, #7B2FBE 0%, #E91E8C 100%)',
        'cta-gradient': 'linear-gradient(90deg, #FF8C00 0%, #FFD600 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0D0E14 0%, #1A2240 100%)',
      }
    },
  },
  plugins: [],
}