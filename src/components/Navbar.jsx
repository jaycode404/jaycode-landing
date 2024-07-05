import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export function NavList({ inFooter, fontSize }) {
  const { darkMode, toggleTheme } = useContext(GeneralContext);

  return (
    <div className="navlist-container " style={{ fontSize: fontSize }}>
      <a href="/#proyectos">Proyectos</a>
      <a href="/#habilidades">Habilidades</a>
      <a href="/#sobremi">Sobre Mí</a>
      <a href="/#contacto">Contacto</a>
      {/* 
      {!inFooter && (
        <button className="dark-theme-button" onClick={toggleTheme} size="sm">
          {darkMode ? "🌙" : "🔆"}
        </button>
      )} */}
    </div>
  );
}

export function NavbarSimple({ flex, gap }) {
  const { darkMode, toggleTheme } = useContext(GeneralContext);

  return (
    <nav className="navbar-container">
      <div>
        <a href="/">Jcode</a>
      </div>
      <NavList />
    </nav>
  );
}
