import "./App.css";
// eslint-disable-next-line import/no-unresolved
import BottomNav from "@components/BottomNav";
// eslint-disable-next-line import/no-unresolved
import Stepper from "@pages/Stepper";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <div>
      <Connexion />
      <Stepper />
      <BottomNav />
    </div>
  );
}

export default App;
