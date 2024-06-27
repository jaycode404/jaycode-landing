import React from "react";
import { Slider } from "./Slider";
import LogoSlider from "./LogoSlider";

export default function Habilidades() {
  return (
    <section id="habilidades" className="section">
      <div>
        <h2 >
          Habilidades<span className="dot">.</span>
        </h2>
        <p>
          Desarrollador Full Stack con habilidades sólidas en JavaScript, React,
          HTML, CSS, Tailwind, MySQL y Node.js. Experiencia en la creación de
          soluciones web eficientes y escalables. Comprometido con la mejora
          continua y el aprendizaje constante para afrontar nuevos desafíos
          tecnológicos.
        </p>
      </div>
      <div>
        {/* <LogoSlider /> */}
      </div>
    </section>
  );
}
