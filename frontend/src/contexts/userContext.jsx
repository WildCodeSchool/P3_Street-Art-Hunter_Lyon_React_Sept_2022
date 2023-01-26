/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();

  const [pseudoID, setPseudoID] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  return (
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        open,
        handleClickOpen,
        handleClose,
        id,
        setId,
        pseudoID,
        setPseudoID,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
