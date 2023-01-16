import { createContext, useContext, useState } from "react";

const CurrentPhotoContext = createContext();

export function CurrentPhotoContextProvider({ children }) {
  // on utilise un hook personnalisé

  const [photo, setPhoto] = useState("");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentPhotoContext.Provider value={{ photo, setPhoto }}>
      {children}
    </CurrentPhotoContext.Provider>
  );
}

export const useCurrentPhotoContext = () => useContext(CurrentPhotoContext);
