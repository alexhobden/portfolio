/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoblack: ["robotoblack", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 400px rgba(255, 255, 255, 0.6), 0 0 800px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".yellobox": {
          boxShadow: `
             8px 8px #000000
          `,

          // border: "solid 4px #000000",
        },

        ".blackbox": {
          boxShadow: `
            8px 8px #f6cd3b
          `,
        },
      });
    },
  ],
};
