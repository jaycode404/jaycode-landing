import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

export default function ProyectosGrid() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const getProyectos = () => {
      fetch("http://localhost:4000/proyectos")
        .then((res) => res.json())
        .then((data) => {
          setProyectos(data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    };
    getProyectos();
  }, []);

  const imagenStyle = {
    filter: "blur(3px)",
  };

  return (
    <div className="proyect-grid-container">
      <div className="bg-gray-400 col-span-2 row-span-4">
        <p>Proyect name</p>
      </div>
      <div className="bg-blue-100 col-span-1 row-span-6">
        <p>Proyect name</p>
      </div>
      <div className="bg-orange-500 col-span-2 row-span-3">
        <p>Proyect name</p>
      </div>
      <div className="bg-green-100 col-span- row-span-6">
        <p>Proyect name</p>
      </div>
      <div className="bg-red-100 col-span-1 row-span-5">
        <p>Proyect name</p>
      </div>
      <div className="bg-yellow-500 col-span-1 row-span-5">
        <p>Proyect name</p>
      </div>
    </div>
  );
}
