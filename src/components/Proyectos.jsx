import React, { useContext } from "react";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";

export default function Proyectos() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="proyectos" className="section">
      <div>
        <h2 className="section-title">
          Proyectos<span className="dot">.</span>
        </h2>
        <p>Aquí menos palabras, más trabajo:</p>
        <button className="button" href="/proyectosall">
          Ver todos
        </button>
        {darkMode && <div></div>}
      </div>
      {/* <ProyectosGrid /> */}
    </section>
  );
}
