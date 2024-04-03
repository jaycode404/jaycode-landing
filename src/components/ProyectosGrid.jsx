import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";

export default function ProyectosGrid() {
  const { darkMode } = useContext(GeneralContext);
  const data = [
    {
      proyectTitle: "CodeFlix",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/public/screenshot-1.png",
      colSpan: 2,
      rowSpan: 4,
    },
    {
      proyectTitle: "Portafolio",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/public/screenshot-2.png",
      colSpan: 1,
      rowSpan: 6,
    },
    {
      proyectTitle: "RamdoMusic",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/public/screenshot-3.png",
      colSpan: 2,
      rowSpan: 3,
    },
    {
      proyectTitle: "Recordatorios ",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/public/screenshot-4.png",
      colSpan: 1,
      rowSpan: 6,
    },
    {
      proyectTitle: "CodeFlix",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/assets/bmo.png",
      colSpan: 1,
      rowSpan: 5,
    },
    {
      proyectTitle: "CodeFlix",
      proyectDesc: "una descripcion corta whatever",
      imageLink: "/assets/bmo.png",
      colSpan: 1,
      rowSpan: 5,
    },
  ];

  return (
    <div className="proyect-grid-container ">
      {data.map(
        ({ proyectDesc, proyectTitle, imageLink, colSpan, rowSpan }, index) => (
          <div
            key={index}
            className="proyect-item-container"
            style={{
              gridColumnEnd: `span ${colSpan}`,
              gridRowEnd: `span ${rowSpan}`,
              position: "relative",
            }}
          >
            <div
              className="proyect-item"
              style={{
                backgroundImage: `url(${imageLink})`,
                position: "absolute",
              }}
            ></div>
            <p className="proyect-title">{proyectTitle}</p>
          </div>
        )
      )}
    </div>
  );
}
