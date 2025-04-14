/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Use class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#52c41a",    // Custom green primary color
          background: "#141414", // Dark background color
          header: "#1b1b1b",     // Header background
          card: "#1f1f1f",       // Card background color
        },
      },
    },
    plugins: [],
  };
  