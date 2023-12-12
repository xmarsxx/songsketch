/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cdd6ea",
          200: "#9baed5",
          300: "#6885bf",
          400: "#365daa",
          500: "#043495",
          600: "#032a77",
          700: "#021f59",
          800: "#02153c",
          900: "#010a1e",
        },
        pink: {
          100: "#fee6ee",
          200: "#fbb6cd",
          300: "#e87da1",
          400: "#bf406a",
          500: "#950434",
          600: "#660022",
          700: "#4d001a",
        },
      },
    },
  },
  plugins: [],
};
