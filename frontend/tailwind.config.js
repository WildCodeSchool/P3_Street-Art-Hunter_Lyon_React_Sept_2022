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
        "main-background": "url('/src/assets/MainBack.png')",
        "menu-burger": "url('/src/assets/burger.svg')",
        bottomNavGrad: "url('/src/assets/Gradient.png')",
        tel: "url('/src/assets/tel.svg')",
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
        camera: "url('/src/assets/cameraIcon.png')",
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
  plugins: [],
};
