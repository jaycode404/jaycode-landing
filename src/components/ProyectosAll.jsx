import { Typography } from "@material-tailwind/react";
import React from "react";
import ProyectosGrid from "./ProyectosGrid";

export default function ProyectosAll() {
  return (
    <div  className="proyectos-all-container">
      <h2 className="section-title">Todos los proyectos</h2>
      <ProyectosGrid />
    </div>
  );
}
