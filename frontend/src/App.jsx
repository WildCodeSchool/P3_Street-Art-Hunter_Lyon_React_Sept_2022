import { BrowserRouter } from "react-router-dom";
import Router from "@pages/Router";

import "./App.css";

import { CurrentUserContextProvider } from "./contexts/userContext";
import { CurrentPhotoContextProvider } from "./contexts/photoContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <CurrentPhotoContextProvider>
          <Router />
        </CurrentPhotoContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
