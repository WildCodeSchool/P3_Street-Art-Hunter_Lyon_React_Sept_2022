/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useRef } from "react";

const CurrentPhotoContext = createContext();

export function CurrentPhotoContextProvider({ children }) {
  // on utilise un hook personnalisé

  const contextPhoto = useRef("");
  const contextPhotoCoord = useRef([45.7578137, 4.8320114]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentPhotoContext.Provider
      value={{
        contextPhoto,
        contextPhotoCoord,
      }}
    >
      {children}
    </CurrentPhotoContext.Provider>
  );
}

export const useCurrentPhotoContext = () => useContext(CurrentPhotoContext);
