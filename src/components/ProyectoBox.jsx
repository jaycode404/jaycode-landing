import React from "react";
import { Typography } from "@material-tailwind/react";

export default function ProyectoBox(props) {
  const imagenStyle = {
    filter: "blur(3px)",
  };

  const {proyecto} = props;
  const {title, image,cols, rows} = proyecto;
  
  return (
    <div className={`col-span-${cols} row-span-${rows} rounded-xl box p-2 border-4 border-black relative`}>
      <div
        className="bg-cover bg-center absolute inset-0 rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          ...imagenStyle,
        }}
      ></div>
      <Typography className="relative ">{title}</Typography>
    </div>
  );
}
