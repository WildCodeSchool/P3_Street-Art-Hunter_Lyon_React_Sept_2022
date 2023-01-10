/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const [takePicture, setTakePicture] = useLocalStorage("takePicture", []);
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [pictures, setPictures] = useLocalStorage("pictures", []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentUserContext.Provider
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
        open,
        handleClickOpen,
        handleClose,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
