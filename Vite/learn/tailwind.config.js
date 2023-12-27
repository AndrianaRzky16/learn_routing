import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/*.html", "node_modules/preline/dist/*.js"],
  theme: {
    // extend: {
    //   colors: {
    //     primary: "#000000",
    //     secondary: "#ffff",
    //     danger: "#4444",
    //     success: "#4675",
    //   },
    //   fontFamily: {
    //     sans: ["Inter", "sans-serif"],
    //     serif: ["Georgia", "serif"],
    //   },
    // },
  },
  // darkMode: "class",

  plugins: [
    require("preline/plugin"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-primary": {
          "background-color": "#000000",
        },
        ".bg-secondary": {
          "background-color": "#ffff",
        },
        ".bg-danger": {
          "background-color": "#4444",
        },
        ".bg-success": {
          "background-color": "#4675",
        },
        ".text-primary": {
          color: "#000000",
        },
        ".text-secondary": {
          color: "#ffff",
        },
        ".text-danger": {
          color: "#4444",
        },
        ".text-success": {
          color: "#4675",
        },
        ".border-primary": {
          "border-color": "#000000",
        },
        ".border-secondary": {
          "border-color": "#ffff",
        },
        ".yooooo": {
          "background-color": "#000000",
          color: "#ffff",
          padding: ".5rem 1rem",
          "border-radius": "0.5rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
