/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#184D47',      // Deep Forest Green
        secondary: '#F8F6F2',    // Warm Beige
        customWhite: '#FFFFFF',  // Neutral White
        customBlack: '#000000',  // Neutral Black
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // Premium Headers
        body: ['Inter', 'sans-serif'],      // Clean Body Text
      },
      borderRadius: {
        'premium': '14px', // Exactly between 12–16px
      }
    },
  },
  plugins: [],
}