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
          '0%': { transform: 'scale(1) translateZ(0)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
          '50%': { transform: 'scale(1.05) translateZ(20px)', boxShadow: '0 20px 25px -5px rgba(255, 107, 107, 0.4), 0 10px 10px -5px rgba(255, 107, 107, 0.2)' },
          '100%': { transform: 'scale(1) translateZ(0)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-10px, 15px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      },
      animation: {
        'pop-out': 'popOut 3s ease-in-out infinite',
        'blob': 'blob 7s infinite',
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