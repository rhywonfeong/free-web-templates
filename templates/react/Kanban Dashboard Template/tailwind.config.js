/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}