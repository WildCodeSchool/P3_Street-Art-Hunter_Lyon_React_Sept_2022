/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#14D2E6",
        pink: "#FF66C4",
        bottomlight: "#7971B5",
        bottomdark: "#02051F",
      },
      backgroundImage: {
        "home-image": "url('/src/assets/HomeBackground.png')",
        "logo-home": "url('/src/assets/LogoHome.png')",
        "main-background": "url('/src/assets/MainBack.svg')",
        "menu-burger": "url('/src/assets/burger.svg')",
        "menu-cross": "url('/src/assets/crossBurger.svg')",
        bottomNavGrad: "url('/src/assets/Gradient.png')",
        tel: "url('/src/assets/tel-mieux.svg')",
        lyon: "url('/src/assets/Lyon.svg')",
        graph1: "url('src/assets/graph1.jpg')",
        graph2: "url('src/assets/graph2.jpg')",
        graph3: "url('src/assets/graph3.jpg')",
        graph4: "url('src/assets/graph4.jpg')",
        graph5: "url('src/assets/graph5.jpg')",
        graph6: "url('src/assets/graph6.jpg')",
        shop1: "url('src/assets/Shop1.jpg')",
        shop2: "url('src/assets/Shop2.jpg')",
        shop3: "url('src/assets/Shop3.jpg')",
        camera: "url('/src/assets/cameraIcon.svg')",
        step1: "url('/src/assets/Steps.svg')",
        step3: "url('/src/assets/Step3.png')",
        step4: "url('/src/assets/registrstep.png')",
        fondStepper: "url('/src/assets/bg-stepper.png')",
        localisation: "url('/src/assets/localisation.svg')",
        map: "url('/src/assets/map.svg')",
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
