import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="flex h-screen mt-[10rem]  items-center text-white gap-[5rem] proyectos"
    >
      <div>
        <Typography variant="h1" className="text-7xl text-left">
          Proyectos<span className="dot">.</span>
        </Typography>
        <Typography variant="lead" className="w-[80%] parrafo">
          Aquí menos palabras, más trabajo:
        </Typography>
      </div>
      <Slider />
    </section>
  );
}
