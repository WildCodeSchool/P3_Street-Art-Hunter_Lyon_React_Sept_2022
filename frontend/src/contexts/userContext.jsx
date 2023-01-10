import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé

  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const [takePicture, setTakePicture] = useLocalStorage("takePicture", []);
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [pictures, setPictures] = useLocalStorage("pictures", []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentUserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        setUser,
        token,
        setToken,
        takePicture,
        setTakePicture,
        artists,
        setArtists,
        pictures,
        setPictures,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
