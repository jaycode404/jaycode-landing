import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

export default function ProyectosGrid() {
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    const getProyects = () => {
      fetch("http://localhost:4000/proyectos")
        .then((res) => res.json())
        .then((data) => {
          setProyectos(data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    };
    getProyects()
  }, []);

  console.log(proyectos)
  const imagenStyle = {
    filter: "blur(3px)",
  };

  return (
    
    <div className="grid grid-cols-3 grid-rows-34 gap-4 p-4">

      <div className="col-span-2 row-span-12 rounded-xl box p-2 border-2 border-black relative">
        <div
          className="bg-cover bg-center absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "url('https://bespoke-kashata-1a54d2.netlify.app/assets/graph.png')",
            ...imagenStyle,
          }}
        ></div>
        <Typography className="relative z-1">{proyectos.title}</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-2 border-black relative">
        <div
          className="bg-cover bg-center absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "url('https://bespoke-kashata-1a54d2.netlify.app/assets/bmo.png')",
            ...imagenStyle,
          }}
        ></div>
        <Typography className="relative z-1">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-12 rounded-xl box p-2 border-2 border-black relative">
        <div
          className="bg-cover bg-center absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "url('https://bespoke-kashata-1a54d2.netlify.app/assets/foto.png')",
            ...imagenStyle,
          }}
        ></div>
        <Typography className="relative z-1">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-2 border-black relative">
        <div
          className="bg-cover bg-center absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "url('https://bespoke-kashata-1a54d2.netlify.app/assets/cuadricula.jpg')",
            ...imagenStyle,
          }}
        ></div>
        <Typography className="relative z-1">Nombre de un Proyecto</Typography>
      </div>
      <div className="col-span-1 row-span-8 rounded-xl box p-2 border-2 border-black relative">
        <div
          className="bg-cover bg-center absolute inset-0 rounded-xl"
          style={{
            backgroundImage: "url('public/assets/macintosh.png')",
            ...imagenStyle,
          }}
        ></div>
        <Typography className="relative z-1">Nombre de un Proyecto</Typography>
      </div>
    </div>
  );
}
