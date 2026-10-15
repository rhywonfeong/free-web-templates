/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        recon: {
          'bg-ivory': '#FEFDFB',
          'bg-cream': '#FAF9F6',
          'surface-card': '#FDFCF8',
          'surface-muted': '#F7F7F5',
          'pine': '#053E30',
          'pine-dark': '#05392C',
          'green-muted': '#345A50',
          'text-strong': '#111917',
          'border': '#D7DAD7',
          'divider': '#E6E7E5',
          'gold': '#B89B5E',
          'success-soft': '#DCEFE5',
          'success-text': '#0C513C',
          'exception-soft': '#F6E6C8',
          'exception-text': '#76551B',
          'error-soft': '#F1D8D1',
          'error-text': '#7B3024',
        }
      },
      boxShadow: {
        'soft': '0 24px 80px rgba(17, 25, 23, 0.08)',
        'panel': '0 18px 50px rgba(17, 25, 23, 0.10)',
        'float': '0 18px 44px rgba(5, 62, 48, 0.12)',
      }
    },
  },
  plugins: [],
}