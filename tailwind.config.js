/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoblack: ["robotoblack", "sans-serif"],
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
