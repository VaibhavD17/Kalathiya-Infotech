module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinCounter: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        bounce2s: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }, // or -20px for right-to-left
        },
      },
      animation: {
        spinSlow: 'spinSlow 20s linear infinite',
        bounce2s: 'bounce2s 2s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        floatX: 'floatX 5s ease-in-out infinite', // ✅ added this
      },
    },
  },
  plugins: [],
};
