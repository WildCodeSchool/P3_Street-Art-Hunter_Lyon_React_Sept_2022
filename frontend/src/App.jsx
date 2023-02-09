import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

import "./App.css";

import { CurrentUserContextProvider } from "./contexts/userContext";
import { CurrentPhotoContextProvider } from "./contexts/photoContext";
import { CurrentAdminContextProvider } from "./contexts/adminContext";
import { CurrentResponsiveContextProvider } from "./contexts/responsiveContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <CurrentPhotoContextProvider>
          <CurrentAdminContextProvider>
            <CurrentResponsiveContextProvider>
              <Router />
            </CurrentResponsiveContextProvider>
          </CurrentAdminContextProvider>
        </CurrentPhotoContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
