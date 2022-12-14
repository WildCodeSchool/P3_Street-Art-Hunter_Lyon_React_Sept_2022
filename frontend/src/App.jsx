import BottomNav from "./components/BottomNav";
import BlocConnexion from "./components/BlocConnexion";
import "./App.css";
// eslint-disable-next-line import/order, import/no-unresolved
import Home from "@pages/Home";

function App() {
  return (
    <div>
      <BottomNav />
      <BlocConnexion />
      <Home />
    </div>
  );
}

export default App;
