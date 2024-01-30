import React from "react";
import { Typography } from "@material-tailwind/react";
import { Gallery } from "./Gallery";
export default function Section() {
  return (
    <section
      id="sobremi"
      className="flex h-screen mt-[10rem text-white gap-5 sobremi items-center"
    >
      <div>
        <Typography variant="h1" className="text-7xl text-left">
          Sobre mí<span className="dot">.</span>
        </Typography>
        <Typography variant="lead" className="w-[80%] ">
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
