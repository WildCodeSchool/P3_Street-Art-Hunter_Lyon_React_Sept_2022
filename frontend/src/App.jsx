import BlocConnexion from "./components/BlocConnexion";
import "./App.css";
// eslint-disable-next-line import/order, import/no-unresolved
import Stepper from "@pages/Stepper";

function App() {
  return (
    <div>
      <BlocConnexion />
      <Stepper />
    </div>
  );
}

export default App;
