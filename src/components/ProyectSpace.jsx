import { useParams } from "react-router-dom";
import { data } from "./ProjectSlider";
import { Button } from "@material-tailwind/react";
export default function ProyectSpace() {
  const { id } = useParams();
  const proyecto = data.find((proyecto) => proyecto.id === parseInt(id));

  const { desc, title, imageLink, siteLink } = proyecto;
  return (
    <div className="project-space">
      <div>
        <img src={imageLink} className="project-img" alt="project-img" />
      </div>
      <div className="project-space-info">
        <h2 className="project-title">{title}</h2>
        <p>{desc}</p>
        <a href={siteLink} 
        target="_blank"
        className="button">
          {" "}
          Visitar
        </a>
      </div>
    </div>
  );
}
