// context/generalContext.js
import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const nombre = "jacob";
  const appMessage = "hola desde context por app";
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
    
  };
  const data = { nombre, appMessage, darkMode, setDarkMode, toggleTheme };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};

export { GeneralProvider, GeneralContext };
