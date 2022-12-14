import "./App.css";
import Stepper from "@pages/Stepper";
import BottomNav from "@components/BottomNav";
import ScoreBoard from "@components/ScoreBoard";

function App() {
  return (
    <div>
      <Stepper />
      <ScoreBoard />
      <BottomNav />
    </div>
  );
}

export default App;
