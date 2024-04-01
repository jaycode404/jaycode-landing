import React, { useContext, useEffect } from "react";
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
  const { darkMode, toggleTheme } = useContext(GeneralContext);
  console.log(darkMode, "desde App");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    
      <div className={` h-auto `}>
        <NavbarSimple />
        <div className="mx-auto gap-10 section-bg">
          <Header />
          <Proyectos />
          <Habilidades />
          <Section />
          <Contacto />
        </div>
        <div className="bg-black ">
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
