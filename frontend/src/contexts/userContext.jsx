/* eslint-disable camelcase */
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
  const [active, setActive] = React.useState(false);
  const [is_checked, setIsChecked] = React.useState(false);

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
        active,
        setActive,
        is_checked,
        setIsChecked,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
