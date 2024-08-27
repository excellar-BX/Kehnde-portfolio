/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      courier: ["Courier"],
      Montserrat: "Montserrat",
    },
    colors: {
      primary: "#6da5c0",
      second: "#4bc0f6",
      slate: "#4c8062",
      coral: "#ffcc80",
      red: "#ff0000",
      coralgrad: "linear-gradient(270deg, #ffcc80, #de8f19)",
      transparent: "#ffffff00",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
