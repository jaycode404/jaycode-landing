import React, { useContext } from "react";
import { Slider } from "./components/Slider";
import { GeneralContext, GeneralProvider } from "./context/GeneralContext";
import Header from "./components/Header";
import { Typography } from "@material-tailwind/react";
import Section from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import BentoGrid from "./components/Grid";
import { NavList, NavbarSimple } from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-auto">
      <NavbarSimple />
      <GeneralProvider>
        <div className=" mx-auto gap-10 section-bg">
          <Header />
          <Proyectos />
          <Habilidades />
          <Section />
          <Contacto />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </GeneralProvider>
    </div>
  );
}

export default App;
