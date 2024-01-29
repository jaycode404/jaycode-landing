import React, { useContext } from "react";
import { Slider } from "./components/Slider";
import { GeneralContext, GeneralProvider } from "./context/GeneralContext";
import Header from "./components/Header";
import { Typography } from "@material-tailwind/react";
import Section from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
function App() {
  return (
    <div className="flex flex-col h-auto gap-10 items-center justify-center my-0 diagonal">
      <GeneralProvider>
        <div className="flex flex-col gap-10 w-[75%]">
          <Header />
          <Section />
          <Proyectos />
          <Habilidades />
          <Contacto />
        </div>
      </GeneralProvider>
    </div>
  );
}

export default App;
