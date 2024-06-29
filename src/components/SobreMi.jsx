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
          Programador web full-stack con gusto por la creación y resolución de
          problemas mediante el código. Busco integrarme a un equipo donde pueda
          reforzar mis habilidades, aportar valor y ampliar mi conocimiento en
          un entorno colaborativo y dinámico.
        </p>
      </div>
        <PictureRoll />
    </section>
  );
}
