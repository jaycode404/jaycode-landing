import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";

export default function ProyectosGrid() {
  const { darkMode } = useContext(GeneralContext);
  const data = [
    {
      imageLink: "/screenshot-1.png",
      colSpan: 2,
      rowSpan: 4,
    },
    {
      imageLink: "/screenshot-2.png",
      colSpan: 1,
      rowSpan: 6,
    },
    {
      imageLink: "/assets/bmo.png",
      colSpan: 2,
      rowSpan: 3,
    },
    {
      imageLink: "/assets/bmo.png",
      colSpan: 1,
      rowSpan: 6,
    },
    {
      imageLink: "/assets/bmo.png",
      colSpan: 1,
      rowSpan: 5,
    },
    {
      imageLink: "/assets/bmo.png",
      colSpan: 1,
      rowSpan: 5,
    },
  ];

  return (
    <div className="proyect-grid-container">
      {data.map(({ imageLink, colSpan, rowSpan }, index) => (
        <div
          key={index}
          className="proyect-item-container"
          style={{
            gridColumnEnd: `span ${colSpan}`,
            gridRowEnd: `span ${rowSpan}`,
            border: `1px solid ${darkMode ? "white" : "black"}`,
            position: "relative", // Establece posición relativa para el contenedor
          }}
        >
          <div
            className="proyect-item"
            style={{
              backgroundImage: `url(${imageLink})`,
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
            }}
          ></div>
          <p className="proyect-title" style={{ zIndex: 1 }}>
            Proyecto {index + 1}
          </p>
        </div>
      ))}
    </div>
  );
}
