import React from "react";
import LogoSlider from "./LogoSlider";

export default function Habilidades() {
  return (
    <section id="habilidades" className="section">
      <div>
        <LogoSlider />
      </div>
      <div>
        <h2>
          Habilidades<span className="dot">.</span>
        </h2>
        <p>
          Desarrollador Full Stack con habilidades sólidas en JavaScript, React,
          HTML, CSS, Tailwind, MySQL y Node.js. Experiencia en la
          {/* este texto hay que dividirlo en dos partes uno con tecnologias front y el otro back  y ademas las softskills */}
          creación de soluciones web eficientes y escalables. Comprometido con
          la mejora continua y el aprendizaje constante para afrontar nuevos
          desafíos tecnológicos.
        </p>
      </div>
    </section>
  );
}
