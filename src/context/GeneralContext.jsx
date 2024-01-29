// context/generalContext.js
import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const nombre = "jacob";
  const appMessage = "hola desde context por app";
  const data = { nombre, appMessage };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};

export { GeneralProvider, GeneralContext };
