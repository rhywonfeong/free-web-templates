/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "hero-sub": "hsl(var(--hero-sub))",
      },
      fontFamily: {
        geist: ['"Geist Sans"', 'sans-serif'],
        general: ['"General Sans"', 'sans-serif'],
      },
      animation: {
        'marquee-scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}