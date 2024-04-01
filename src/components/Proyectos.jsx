import React, { useContext } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import ProyectosGrid from "./ProyectosGrid";
import { GeneralContext } from "../context/GeneralContext";
export default function Proyectos() {
  const {darkMode} = useContext(GeneralContext)
  

  return (
    <section id="proyectos" className="container">
      <div className="info-box">
        <Typography variant="h2" className="section-title">
          Proyectos<span className="dot">.</span>
        </Typography>
        <Typography variant="p" className="parrafo">
          Aquí menos palabras, más trabajo:
        </Typography>
        <Button color="blue">
          <a href="/proyectosall">Ver todos</a> </Button>
          {darkMode && <div className="light-md-blue"></div>}
      </div>
      <ProyectosGrid />
    </section>
  );
}
