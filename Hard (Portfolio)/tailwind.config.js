/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8b86e0',
        'brand-teal': '#b5e5d5',
        'brand-orange': '#f9c47a',
        'brand-bg': '#f7f7f7',
        'brand-dark': '#1a1a1a',
        'brand-gray': '#4a4a4a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
