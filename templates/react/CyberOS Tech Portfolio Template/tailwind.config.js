/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#07070a",
        panel: "#0d0d14",
        cyan: {
          neon: "#00f3ff",
        },
        purple: {
          neon: "#bc13fe",
        },
        muted: "#8a8a9e",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Courier New'", "monospace"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 243, 255, 0.35)",
        "neon-strong": "0 0 30px rgba(0, 243, 255, 0.55)",
        purple: "0 0 20px rgba(188, 19, 254, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gridmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gridmove: "gridmove 8s linear infinite",
        pulseglow: "pulseglow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
