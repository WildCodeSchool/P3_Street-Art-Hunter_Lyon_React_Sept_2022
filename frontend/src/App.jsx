import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

import "./App.css";

import { CurrentUserContextProvider } from "./contexts/userContext";
import { CurrentPhotoContextProvider } from "./contexts/photoContext";
import { CurrentAdminContextProvider } from "./contexts/adminContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <CurrentPhotoContextProvider>
          <CurrentAdminContextProvider>
            <Router />
          </CurrentAdminContextProvider>
        </CurrentPhotoContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
