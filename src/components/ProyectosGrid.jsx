import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";

export const data = [
  {
    id: 1,
    proyectTitle: "CodeFlix",
    proyectDesc: "CodeFlix es una plataforma de contenido dirigida a programadores, que ofrece una amplia selección de recursos educativos y entretenidos. Desde tutoriales prácticos hasta charlas inspiradoras, CodeFlix es el destino ideal para programadores de todos los niveles. Ofrece herramientas interactivas y una interfaz fácil de usar para facilitar el aprendizaje y la colaboración.",
    imageLink: "/assets/screenshot-1.png",
    colSpan: 2,
    rowSpan: 4,
  },
  {
    id: 2,
    proyectTitle: "Portafolio",
    proyectDesc: "una descripcion corta whatever",
    imageLink: "/assets/screenshot-2.png",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 3,
    proyectTitle: "RamdoMusic",
    proyectDesc: "una descripcion corta whatever",
    imageLink: "/assets/screenshot-3.png",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    proyectTitle: "Recordatorios ",
    proyectDesc: "una descripcion corta whatever",
    imageLink: "/assets/screenshot-4.png",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 5,
    proyectTitle: "Pedagogia",
    proyectDesc: "una descripcion corta whatever",
    imageLink: "/assets/screenshot-5.png",
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 6,
    proyectTitle: "CodeFlix",
    proyectDesc: "una descripcion corta whatever",
    imageLink: "/assets/bmo.png",
    colSpan: 1,
    rowSpan: 5,
  },
];

export default function ProyectosGrid() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <div className="proyect-grid-container ">
      {data.map(
        (
          { proyectDesc, proyectTitle, imageLink, colSpan, rowSpan, id },
          index
        ) => (
          <div
            key={index}
            className="proyect-item-container"
            style={{
              gridColumnEnd: `span ${colSpan}`,
              gridRowEnd: `span ${rowSpan}`,
              position: "relative",
            }}
          >
            <a href={`/proyectosall/${id}`}>
              <div
                className="proyect-item"
                style={{
                  backgroundImage: `url(${imageLink})`,
                  position: "absolute",
                }}
              ></div>
            </a>
            <p className="proyect-title">{proyectTitle}</p>
          </div>
        )
      )}
    </div>
  );
}


