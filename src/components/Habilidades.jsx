import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="flex h-screen  items-center text-white gap-[5rem] sobremi"
    >
      <div>
        <Typography variant="h1" className="text-7xl text-left mb-10">
          Habilidades<span className="dot">.</span>
        </Typography>
        <Typography variant="lead" className="w-[80%] parrafo">
          Desarrollador Full Stack con habilidades sólidas en
          <span className="JavaScript"> JavaScript</span>,
          <span className="HTML"> HTML</span>,<span className="CSS"> CSS</span>,
          <span className="Tailwind text-gradient"> Tailwind</span>,
          <span className="MySQL"> MySQL</span> y
          <span className="Node"> Node.js</span>. Experiencia en la creación de
          soluciones web eficientes y escalables. Comprometido con la mejora
          continua y el aprendizaje constante para afrontar nuevos desafíos
          tecnológicos.
        </Typography>
      </div>
      <Slider />
    </section>
  );
}
