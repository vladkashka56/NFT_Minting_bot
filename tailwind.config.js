module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        'span-16': 'span 16 / span 16',
      },
      colors: {
        'pink': '#fe2e77',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}