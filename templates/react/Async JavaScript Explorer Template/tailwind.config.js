/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'], // For compressed headlines
        mono: ['JetBrains Mono', 'monospace'], // For code and body
      },
      colors: {
        stage: '#000000',
        grid: '#141414',
        card: '#0B0B0B',
        ui: '#282828',
        indigo: '#17182B',
        maroon: '#19060B',
        white: '#F2F2F2',
        accent: {
          red: '#DE4C36',
          purple: '#801EF7',
          pink: '#F71E6A',
          blue: '#1E6EF7',
          cyan: '#1EDAF7',
          yellow: '#FECB24',
          lime: '#D1F65A',
          green: '#34F58A',
          rose: '#C34262'
        }
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #9F9F9F 100%)',
      }
    },
  },
  plugins: [],
}