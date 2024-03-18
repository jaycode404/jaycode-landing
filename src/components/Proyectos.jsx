import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import ProyectosGrid from "./ProyectosGrid";
export default function Proyectos() {
  return (
    <section id="proyectos" className="text-black frame-section ">
      <div className="margin-section-info">
        <Typography
          variant="h1"
          className="text-6xl lg:text-left text-center section-title "
        >
          Proyectos<span className="dot">.</span>
        </Typography>
        <Typography variant="lead" className="w-[80%] text-center mx-auto">
          Aquí menos palabras, más trabajo:
        </Typography>
      </div>
      <ProyectosGrid />
    </section>
  );
}
