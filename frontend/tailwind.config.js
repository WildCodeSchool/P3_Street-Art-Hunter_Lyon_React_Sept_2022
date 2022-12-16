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
        tel: "url('/src/assets/tel.svg')",
        lyon: "url('/src/assets/Lyon.svg')",
        camera: "url('/src/assets/cameraIcon.png')",
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
  plugins: [],
};
