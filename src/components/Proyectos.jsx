import React, { useContext } from "react";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";

export default function Proyectos() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="proyectos">
      <div>
        <h2>
          Proyectos<span>.</span>
        </h2>
        <p>Aquí menos palabras, más trabajo:</p>
        <a href="/proyectosall">Ver todos</a>
        {darkMode && <div></div>}
      </div>
      <ProyectosGrid />
    </section>
  );
}
