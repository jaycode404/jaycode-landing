import React from "react";
import { Typography } from "@material-tailwind/react";
import { Gallery } from "./Gallery";
export default function Section() {
  return (
    <section id="sobremi" className="container">
      <div className="info-box">
        <Typography variant="h2" className="section-title">
          Sobre mí<span className="dot">.</span>
        </Typography>
        <p className="parrafo">
          Programador web full-stack con gusto por la creación y resolución de
          problemas mediante el código. Busco integrarme a un equipo donde pueda
          reforzar mis habilidades, aportar valor y ampliar mi conocimiento en
          un entorno colaborativo y dinámico.
        </p>
      </div>
      <Gallery />
    </section>
  );
}
