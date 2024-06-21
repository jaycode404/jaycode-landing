import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

export function NavList({ inFooter }) {
  const { darkMode, toggleTheme } = useContext(GeneralContext);
  return (
    <div className="navlist-container">
      <a href="/#proyectos">Proyectos</a>
      <a href="/#habilidades">Habilidades</a>
      <a href="/#sobremi">Sobre Mi</a>
      <a href="/#contacto">Contacto</a>

      {!inFooter && (
        <button onClick={toggleTheme} size="sm">
          {darkMode ? "🌙" : "🔆"}
        </button>
      )}
    </div>
  );
}

export function NavbarSimple({ flex, gap }) {
  const { darkMode, toggleTheme } = useContext(GeneralContext);

  return (
    <nav className="navbar-container">
      <div>
        <span as="a" href="/">
          Jaycode
        </span>
      </div>
      <NavList />
    </nav>
  );
}
