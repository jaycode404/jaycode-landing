import React from "react";
import { Typography } from "@material-tailwind/react";

export default function ProyectosGrid() {
  const data = [
    {
      imageLink: "/assets/bmo.png",
      colSpan: 2,
      rowSpan: 4,
    },
    {
      imageLink: "/assets/bmo.png",
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
          style={{
            gridColumnEnd: `span ${colSpan}`,
            gridRowEnd: `span ${rowSpan}`,
            border: "1px solid black",
            padding: "1rem",
          }}
        >
          <p>Proyecto {index + 1}</p>
        </div>
      ))}
    </div>
  );
}
