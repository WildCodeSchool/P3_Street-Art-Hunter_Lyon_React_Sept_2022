/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from "react";

const CurrentAdminContext = createContext();

export default CurrentAdminContext;

export function CurrentAdminContextProvider({ children }) {
  const [active, setActive] = React.useState(false);
  const [numberWork, setNumberWork] = React.useState();

  return (
    <CurrentAdminContext.Provider
      value={{ active, setActive, numberWork, setNumberWork }}
    >
      {children}
    </CurrentAdminContext.Provider>
  );
}

export const useCurrentAdminContext = () => useContext(CurrentAdminContext);
