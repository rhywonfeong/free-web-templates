/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        pitch: {
          50: "#e6f7ee",
          100: "#b3e8cf",
          200: "#80d9b0",
          300: "#4dc991",
          400: "#26be7a",
          500: "#07A751",
          600: "#069647",
          700: "#05793a",
          800: "#045c2c",
          900: "#023f1e",
        },
        accent: {
          50: "#fef8e6",
          100: "#fdeab3",
          200: "#fcdc80",
          300: "#fbce4d",
          400: "#fac426",
          500: "#F9B800",
          600: "#e0a600",
          700: "#b38500",
          800: "#866300",
          900: "#594200",
        },
      },
    },
  },
  plugins: [],
}