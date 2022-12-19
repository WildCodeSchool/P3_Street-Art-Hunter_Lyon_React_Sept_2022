import Home from "@pages/Home";
import Menu from "@pages/Menu";
import Scores from "@pages/Scores";
import Stepper from "@pages/Stepper";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stepper" element={<Stepper />} />
      <Route path="/scores" element={<Scores />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/help" element={<Home />} />
      <Route path="/galerie" element={<Home />} />
      <Route path="/map" element={<Home />} />
      <Route path="/profil" element={<Home />} />
      <Route path="/favoris" element={<Home />} />
      <Route path="/magalerie" element={<Home />} />
      <Route path="/badges" element={<Home />} />
    </Routes>
  );
}

export default App;
