/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Inter", 'sans-serif'],
      content: ["Montserrat", "sans-serif"]
    },
    maxWidth: {
      tenPercentLess: "90%"
    }
  },
  plugins: [],
}

