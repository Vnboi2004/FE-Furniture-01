/** @type {import('tailwindcss').Config} */
export default {
  // Enable feature dark
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#054C73",
        bgPrimary: "#DFE9F4",
        hColor: "#333333",
        pColor: "#666666",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
}

