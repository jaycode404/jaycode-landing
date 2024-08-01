import { useParams } from "react-router-dom";
import { data } from "./ProjectSlider";
import SpanDynamic from "./SpanDinamyc";
export default function ProyectSpace() {
  const { id } = useParams();
  const proyecto = data.find((proyecto) => proyecto.id === parseInt(id));

  const { desc, title, imageLink, siteLink, tecnologias } = proyecto;
  return (
    <div className="project-space">
      <a href={siteLink}>
        <img src={imageLink} className="project-img" alt="project-img" />
      </a>
      <div className="project-space-info">
        <h2 className="project-title">{title}</h2>
        <p>{desc}</p>
        <div className="project-tec">
          {tecnologias.map((tecnologia, i) => {
            return <SpanDynamic key={i} text={`#${tecnologia}`} />;
          })}
        </div>
        <a href={siteLink} target="_blank" className="button">
          {" "}
          Visitar
        </a>
      </div>
    </div>
  );
}
