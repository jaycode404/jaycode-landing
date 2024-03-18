import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import LogoSlider from "./LogoSlider";
export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="grid md:grid-cols-2 gap-4 frame-section text-black md:gap-0  md:items-center"
    >
      <div className="">
        <LogoSlider />
      </div>
      <div className="margin-section-info  ">
        <Typography
          variant="h2"
          className="text-6xl lg:text-left  lg:margin-section-info  mb-10 section-title "
        >
          Habilidades<span className="dot">.</span>
        </Typography>
        <Typography variant="p" className="w-[90%] lg:margin-section-info ">
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
