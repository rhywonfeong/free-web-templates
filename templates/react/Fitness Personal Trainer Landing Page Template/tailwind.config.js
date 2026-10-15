/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#050D1A',
          blue: '#2979FF',
          blueDark: '#0B3D91',
          light: '#F2F2F2',
          gray: '#B0B0B0',
          darker: '#0B1628',
        }
      }
    },
  },
  plugins: [],
}