/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",    // Deep Navy Background
        secondary: "#aaa6c3",  // Muted Gray Text
        tertiary: "#151030",   // Card Background
        accent: "#915eff",    // Professional Purple
      },
    },
  },
  plugins: [],
}