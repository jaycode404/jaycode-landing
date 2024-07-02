import React from "react";
import { Gallery } from "./Gallery";
import PictureRoll from "./PictureRoll";
export default function Section() {
  return (
    <section id="sobremi" className="section">
      <div>
        <h2>
          Sobre mí<span className="dot">.</span>
        </h2>
        <p>
          Me gusta crear aplicaciones útiles para mi entorno, mi filosofia del
          codigo es materializar soluciones a través de la programación. 
        </p>
        <p>Busco
          integrarme a un equipo donde pueda reforzar mis habilidades, aportar
          valor y ampliar mi conocimiento en un entorno colaborativo y dinámico.</p>
      </div>
      <PictureRoll />
    </section>
  );
}
