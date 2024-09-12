/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoblack: ["robotoblack", "sans-serif"],
        inria: ["inria", "sans-serif"],
        comfortaa: ["comfortaa", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 180px rgba(255, 230, 230, 0.3), 0 0 200px rgba(255, 130, 50, 0.2)",
        boxglow: "0 0 20px rgba(255, 130, 50, 0.8)",
        innerboxglow:
          "inset -1px -1px 10px rgba(0,0,0, 0.4), inset 1px 1px 10px rgba(255,255,255, 0.4), 0 0 20px rgba(255, 130, 50, 0.8)",
        lamp: "0 50px 100px rgba(255, 130, 50, 0.5), 0 50px 200px rgba(255, 130, 50, 0.3)",
        inlamp: "inset 0 50px 100px rgba(255, 130, 50, 0.6)",
        uplamp: "0 -200px 100px rgba(255, 130, 50, 0.2)",
        obj: "0 0 20px rgba(255, 130, 50, 0.8)",
      },
      borderColor: {
        "custom-opacity": "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".glowing-image-filter": {
          height: "auto",
          filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))",
        },
        ".before-glow": {
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: "0",
            background: "inherit", // Placeholder for dynamic src
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
            borderRadius: "inherit",
            filter: "blur(0.8rem) saturate(3)",
          },
        },
      });
    },

    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-textr": {
          textShadow: "0 0 20px rgba(255, 130, 50, 0.8)",
        },
        ".text-shadow-textb": {
          textShadow: "0 0 20px rgba(50, 130, 255, 0.8)",
        },
        ".text-shadow-btext": {
          textShadow:
            "0 0 10px rgba(255, 130, 50, 0.5), 0 0 50px rgba(255, 130, 50, 0.2)",
        },
      });
    },
  ],
};
