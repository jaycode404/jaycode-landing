import { useParams } from "react-router-dom";
import { data } from "./ProyectosGrid.jsx";
import { Button } from "@material-tailwind/react";
export default function ProyectSpace() {
  const { id } = useParams();
  const proyecto = data.find((proyecto) => proyecto.id === parseInt(id));

  const {
    proyectDesc,
    proyectTitle,
    imageLink,
    colSpan,
    rowSpan,
    proyectSite,
  } = proyecto;
  return (
    <div className="proyect-container">
      <div>
        <img src={imageLink} className="proyect-img" alt="proyect-imag" />
      </div>
      <div className="proyect-info-container">
        <h2 className="proyect-title">{proyectTitle}</h2>
        <p>{proyectDesc}</p>
        <a href={proyectSite}>
          <Button className="proyect-button"> Visitar</Button>
        </a>
      </div>
    </div>
  );
}
