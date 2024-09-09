/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoblack: ["robotoblack", "sans-serif"],
        inria: ["inria", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 300px rgba(255, 230, 230, 0.6), 0 0 600px rgba(255, 230, 230, 0.4)",
        text: "0 0 300px rgba(255, 230, 230, 0.2)",
      },
      borderColor: {
        "custom-opacity": "rgba(255, 255, 255, 0.6)", // 70% opacity
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
