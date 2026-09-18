/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fafcff", // Very light blue-tinted white for sky reflection
        secondary: "#00b4d8", // Bright sky blue
        tertiary: "#ffd166", // Soft sunlight gold
        dimWhite: "rgba(0, 0, 0, 0.6)", // Changed to dark for contrast on white
        dimCyan: "rgba(0, 180, 216, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Back to clean sans-serif
      },
      keyframes: {
        popOut: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', boxShadow: '0 10px 30px rgba(255,0,110,0.3)' },
          '50%': { transform: 'scale(1.15) translateY(-10px)', boxShadow: '0 25px 50px rgba(255,0,110,0.6)' },
        }
      },
      animation: {
        'pop-out': 'popOut 2.5s ease-in-out infinite',
      },
      boxShadow: {
        'utopia': '0 10px 30px rgba(0, 180, 216, 0.1), 0 0 40px rgba(255, 255, 255, 0.5)',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};