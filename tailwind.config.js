/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          shark: ['SharkMadeInJapan', 'sans-serif'],
    },
    colors: {
        'neon-green': '#B9D4AA',
        'high-priority': '#8A0000',
        'low-priority': '#4caf50'
    }
  },
  plugins: [],
}
}
