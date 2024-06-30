import React from "react";
import LogoSlider from "./LogoSlider";
import Particles from "./Particles";
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
        <Particles />
        <p>
          Soy desarrollador Full Stack con habilidades sólidas en el entorno
          web. Éstas son las tecnologias basado en los intereses de las
          aplicaciones que me gusta crear.
          {/* este texto hay que dividirlo en dos partes uno con tecnologias front y el otro back  y ademas las softskills */}
        </p>
        <div className="tecnologias-side">
          <div>
            <h4 className="front-title firebase">FrontEnd</h4>
            <ul className="frontend-container">
              <li>JavaScript</li>
              <li>REACT</li>
              <li>HTML</li>
              <li>Tailwind</li>
              <li>CSS</li>
              <li>SASS</li>
            </ul>
          </div>
          <div>
            <h4 className="back-title tailwind">BackEnd</h4>
            <ul className="frontend-container">
              <li>NODE.JS</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
