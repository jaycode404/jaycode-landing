import React, { createContext, useContext, useState } from "react";

// Crear un nuevo contexto
const SectionContext = createContext();

// Hook personalizado para usar el contexto
export const useSectionContext = () => useContext(SectionContext);

// Proveedor del contexto
export const SectionProvider = ({ children }) => {
  const [sectionId, setSectionId] = useState(null);

  return (
    <SectionContext.Provider value={{ sectionId, setSectionId }}>
      {children}
    </SectionContext.Provider>
  );
};
