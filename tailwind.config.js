/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
          'transform-style': 'preserve-3d',
        },
      })
    },
  ],
}