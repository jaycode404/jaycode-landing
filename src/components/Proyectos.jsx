import React, { useContext } from "react";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";
import ProjectSlider from "./ProjectSlider";

export default function Proyectos() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="proyectos"  >
      <div className="proyectos-info">
        <h2>
          Proyectos<span className="dot">.</span>
        </h2>
        <p>
          Aquí, un catalogo de los proyectos que he creado para diferentes industrias.
        </p>
        <p>
          En belleza, veterinaria, restaurants y diversos mercados he trabajado como consultora para brindar mejoras a las empresas.
        </p>
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
