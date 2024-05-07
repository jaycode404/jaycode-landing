import React, { useContext } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";
export default function Proyectos() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="proyectos" className="container">
      <div className="info-box">
        <Typography variant="h2" className="section-title">
          Proyectos<span className="dot">.</span>
        </Typography>
        <p className="parrafo">Aquí menos palabras, más trabajo:</p>
        <a href="/proyectosall" className="button boton-light">
          Ver todos
        </a>
        {darkMode && <div className="light-md-blue"></div>}
      </div>

      <ProyectosGrid />
    </section>
  );
}
