import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import LogoSlider from "./LogoSlider";
export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="container"
    >
      
      <div className="info-box last">
        <Typography
          variant="h2"
          className="section-title "
        >
          Habilidades<span className="dot">.</span>
        </Typography>
        <p className="parrafo">
          Desarrollador Full Stack con habilidades sólidas en
          <span className="JavaScript"> JavaScript</span>,
          <span className="React"> React</span>,
          <span className="HTML"> HTML</span>,<span className="CSS"> CSS</span>,
          <span className="Tailwind text-gradient"> Tailwind</span>,
          <span className="MySQL"> MySQL</span> y
          <span className="Node"> Node.js</span>. Experiencia en la creación de
          soluciones web eficientes y escalables. Comprometido con la mejora
          continua y el aprendizaje constante para afrontar nuevos desafíos
          tecnológicos.
        </p>
      </div>
      <div >
        <LogoSlider />
      </div>
    </section>
  );
}
