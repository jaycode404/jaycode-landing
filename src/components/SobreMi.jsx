import React from "react";
import { Typography } from "@material-tailwind/react";
export default function Section() {
  return (
    <section id="sobremi" className="flex flex-col h-screen mt-[10rem]  justify-center text-white gap-10 sobremi">
      <Typography variant="h1" className="text-7xl text-left">
        Sobre mí<span className="dot">.</span>
      </Typography>
      <Typography variant="lead" className="w-[80%] parrafo">
        Programador web full-stack con gusto por la creación y resolución de
        problemas mediante el código. Busco integrarme a un equipo donde pueda
        reforzar mis habilidades, aportar valor y ampliar mi conocimiento en un
        entorno colaborativo y dinámico.
      </Typography>
    </section>
  );
}
