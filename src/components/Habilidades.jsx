import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import LogoSlider from "./LogoSlider";
export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="grid grid-flow-col gap-1 frame-section text-black "
    >
      <div className=" h-[25rem] w-[25rem]">
        <LogoSlider />
      </div>
      <div>
        <Typography
          variant="h1"
          className="text-7xl text-left margin-section-info mb-10 section-title"
        >
          Habilidades<span className="dot">.</span>
        </Typography>
        <Typography variant="p" className="w-[90%] margin-section-info">
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
        </Typography>
      </div>
    </section>
  );
}
