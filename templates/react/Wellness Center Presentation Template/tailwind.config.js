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
          dark: '#3A4D39',     // Deep mossy sage
          light: '#F2F5F0',    // Very light misty sage
          cream: '#ECEBE4',    // Warm stone/cream
          gold: '#C2A878',     // Muted earth gold
          indigo: '#4F6F52',   // Rich mid-sage (maps seamlessly to existing components)
          blue: '#739072',     // Soft sage accent
          'text-dark': '#2C3930',
          'text-light': '#F9FAF8',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}