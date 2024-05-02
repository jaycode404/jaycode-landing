import React, { useContext, useEffect, useState } from "react";
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
import { Router, Routes, Route } from "react-router";
import ProyectosAll from "./components/ProyectosAll";
import ProyectSpace from "./components/ProyectSpace";

function App() {
  const { darkMode, toggleTheme, setDarkMode } = useContext(GeneralContext);

  useEffect(() => {
    const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");

    // Función para manejar los cambios en la media query
    const handleDarkModeChange = (event) => {
      setDarkMode(event.matches);
    };

    // Configuración del listener para la media query
    darkModeMedia.addEventListener("change", handleDarkModeChange);

    // Establecer el modo oscuro inicial
    setDarkMode(darkModeMedia.matches);

    // Limpiar el listener al desmontar el componente
    return () => {
      darkModeMedia.removeEventListener("change", handleDarkModeChange);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    // Aplicar o quitar la clase dark-mode en el cuerpo del documento según el estado del modo oscuro
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]); // Se ejecuta cada vez que darkMode cambia

  return (
    <div className={` h-auto `}>
      <NavbarSimple />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectosall" element={<ProyectosAll />} />
        <Route path="/proyectosall/:id" element={<ProyectSpace />} />
      </Routes>
      <div className="bg-black footer">
        <Footer />
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <div className="mx-auto gap-10 section-bg">
        <Header />
        <Proyectos />
        <Habilidades />
        <Section />
        <Contacto />
      </div>
    </>
  );
}

export default App;
