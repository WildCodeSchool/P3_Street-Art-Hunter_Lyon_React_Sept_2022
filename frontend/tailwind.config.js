/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#00FFF2",
        pink: "#FF66C4",
        bottomlight: "#7971B5",
        bottomdark: "#02051F",
      },
      boxShadow: {
        bottomNavRight: "40px 40px 0px 40px #4d4875",
        bottomNavLeft: "-40px 40px 0px 40px #4d4875",
      },
      backgroundImage: {
        bottomNavGrad: "url('/src/assets/Gradient.png')",
      },
    },
  },
  plugins: [],
};
