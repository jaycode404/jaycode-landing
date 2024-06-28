import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import ProyectCard from "./ProyectCard";

import { data } from "./ProjectSlider";
export default function ProyectosGrid() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <div className="project-container">
      {data.map((proyecto, index) => {
        return <ProyectCard key={index} proyecto={proyecto} />;
      })}
    </div>
  );
}
