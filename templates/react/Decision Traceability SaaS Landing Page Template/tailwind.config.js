/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: '#FAFAFA',
        surface: '#FFFFFF',
        obsidian: '#111111',
        charcoal: '#333333',
        subtle: '#737373',
        border: '#E5E5E5',
        accent: '#252525',
        primary: '#000000',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      }
    }
  },
  plugins: [],
}