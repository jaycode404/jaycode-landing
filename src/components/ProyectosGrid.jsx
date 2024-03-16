import React from "react";
import { Typography } from "@material-tailwind/react";

export default function ProyectosGrid() {
  const imagenStyle = {
    filter: "blur(3px)",
  };

  return (
    <div className="grid grid-cols-3 grid-rows-34 gap-4 p-4">
      <div className="col-span-2 row-span-12 rounded-xl box p-2 border-4 border-black relative">
        <div className="bg-cover bg-center absolute inset-0 rounded-xl" style={{ backgroundImage: "url('src/assets/graph.png')", ...imagenStyle }}></div>
        <Typography className="relative z-10">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-4 border-black relative">
        <div className="bg-cover bg-center absolute inset-0 rounded-xl" style={{ backgroundImage: "url('/src/assets/bmo.png')", ...imagenStyle }}></div>
        <Typography className="relative z-10">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-12 rounded-xl box p-2 border-4 border-black relative">
        <div className="bg-cover bg-center absolute inset-0 rounded-xl" style={{ backgroundImage: "url('/src/assets/foto.png')", ...imagenStyle }}></div>
        <Typography className="relative z-10">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-4 border-black relative">
        <div className="bg-cover bg-center absolute inset-0 rounded-xl" style={{ backgroundImage: "url('/src/assets/cuadricula.jpg')", ...imagenStyle }}></div>
        <Typography className="relative z-10">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-4 border-black relative">
        <div className="bg-cover bg-center absolute inset-0 rounded-xl" style={{ backgroundImage: "url('src/assets/macintosh.png')", ...imagenStyle }}></div>
        <Typography className="relative z-10">Nombre de un Proyecto</Typography>
      </div>
    </div>
  );
}
