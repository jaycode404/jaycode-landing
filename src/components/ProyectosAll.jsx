import { Typography } from "@material-tailwind/react";
import React from "react";
import ProyectosGrid from "./ProyectosGrid";

export default function ProyectosAll() {
  return (
    <section className="section">
      <h2>Todos los proyectos</h2>
      <ProyectosGrid />
    </section>
  );
}
