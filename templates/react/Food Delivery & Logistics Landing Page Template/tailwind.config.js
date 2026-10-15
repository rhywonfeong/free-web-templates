/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Island Run logo palette: hot pink, electric purple, deep navy, tropical green
          primary: '#F0148C',
          purple: '#7B2FD6',
          navy: '#141238',
          accent: '#5EF2A6',
        },
        surface: '#F8F4FB',
      },
    },
  },
  plugins: [],
};
