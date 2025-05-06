/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // enables dark mode via class strategy
    theme: {
      extend: {},
    },
    theme: {
      extend: {
        animation: {
          blink: "blink 1s step-start infinite",
        },
        keyframes: {
          blink: {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        },
      },
    },
    plugins: [],
  };
  