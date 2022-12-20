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
      backgroundImage: {
        "home-image": "url('/src/assets/HomeBackground.png')",
        "logo-home": "url('/src/assets/LogoHome.png')",
        "main-background": "url('/src/assets/MainBack.png')",
        "menu-burger": "url('/src/assets/burger.svg')",
        bottomNavGrad: "url('/src/assets/Gradient.png')",
        tel: "url('/src/assets/tel-mieux.png')",
        lyon: "url('/src/assets/Lyon.svg')",
        camera: "url('/src/assets/cameraIcon.png')",
        step1: "url('/src/assets/Steps.svg')",
        step3: "url('/src/assets/Step3.png')",
        step4: "url('/src/assets/registrstep.png')",
      },
      fontFamily: {
        "main-font": ["ui-monospace", "VT323"],
        "secondary-font": ["ui-sans-serif", "Poppins"],
      },
      dropShadow: {
        photobutton: ["1px 1px 4px #FFFFFF"],
        bottomtop: ["1px 1px 3px #FFFFFF"],
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require("@tailwindcss/forms")],
};
