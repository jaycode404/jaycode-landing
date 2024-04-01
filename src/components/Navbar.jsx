import React, { useContext, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";

export function NavList() {
  const { darkMode, toggleTheme } = useContext(GeneralContext);
  return (
    
    <div className="nav-list">
      <a href="/#proyectos" className="nav-link">
        Proyectos
      </a>

      <a href="/#habilidades" className="nav-link  ">
        Habilidades
      </a>

      <a href="/#sobremi" className="nav-link">
        Sobre Mi
      </a>

      <a href="/#contacto" className="nav-link  ">
        Contacto
      </a>
    
    <button onClick={toggleTheme} size="sm" className="theme-button">
    {darkMode ? "🌙" : "🔆"}
    </button>
    </div>
    
  );
}

export function NavbarSimple({ flex, gap }) {
  const { darkMode, toggleTheme } = useContext(GeneralContext);

  return (
    <div className={` navbar-container`}>
      <div className="navbar-div">
        <Typography as="a" href="/" variant="h6" className="nav-logo nav-link">
          <span className="span-code lg:text-xl">{"<"}</span> Jaycode{" "}
          <span className="span-code">{"/>"}</span>
        </Typography>
        <NavList flex={flex} gap={gap} />
        
        
      </div>
    </div>
  );
}
