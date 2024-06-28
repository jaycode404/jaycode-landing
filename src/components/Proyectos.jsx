import React, { useContext } from "react";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";
import ProjectSlider from "./ProjectSlider";

export default function Proyectos() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="proyectos" className="section">
      <div className="proyectos-info">
        <h2 className="section-title">
          Proyectos<span className="dot">.</span>
        </h2>
        <p>Aquí menos palabras, más trabajo:</p>
        <a className="button" href="/proyectosall">
          Ver todos
        </a>
        <div id="particles-js"></div>
        {darkMode && <div></div>}
      </div>
      {/* <ProyectosGrid /> */}
      <ProjectSlider />
    </section>
  );
}
