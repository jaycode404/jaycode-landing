import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import ProyectosGrid from "./ProyectosGrid";
export default function Proyectos() {
  

  return (
    <section id="proyectos" className="container">
      <div className="info-box">
        <Typography variant="h2" className="section-title">
          Proyectos<span className="dot">.</span>
        </Typography>
        <Typography variant="lead" className="parrafo">
          Aquí menos palabras, más trabajo:
        </Typography>
      </div>
      <ProyectosGrid />
    </section>
  );
}
