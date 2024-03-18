import React from "react";
import { Typography } from "@material-tailwind/react";
import { Gallery } from "./Gallery";
export default function Section() {
  return (
    <section id="sobremi" className="frame-section text-black grid md:grid-cols-2 gap-4">
      <div className="margin-section-info text-center">
        <Typography variant="h1" className="text-6xl lg:text-left section-title">
          Sobre mí<span className="dot">.</span>
        </Typography>
        <Typography variant="p" className="w-[90%] lg:text-left">
          Programador web full-stack con gusto por la creación y resolución de
          problemas mediante el código. Busco integrarme a un equipo donde pueda
          reforzar mis habilidades, aportar valor y ampliar mi conocimiento en
          un entorno colaborativo y dinámico.
        </Typography>
      </div>
      <Gallery />
    </section>
  );
}
