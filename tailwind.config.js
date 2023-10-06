/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#0a2a42",
          "200": "#0a2942",
        },
        black: "#000",
        slategray: "#678398",
        color: "#00000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
