/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable dark mode via toggling a "dark" class
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#10B981', // emerald-500 (green)
            dark: '#047857',    // emerald-700 (darker green)
          },
        },
      },
    },
    plugins: [],
  }
  