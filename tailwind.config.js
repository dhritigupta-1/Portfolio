/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--bg-tertiary)",
        accent: "var(--color-accent)",
        "theme-main": "var(--text-main)",
        "theme-border": "var(--border-color)",
      },
    },
  },
  plugins: [],
}