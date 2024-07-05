import React, { useEffect, useState, useRef } from "react";
import SpanDynamic from "./SpanDinamyc";
const ProyectCard = ({ proyecto }) => {
  const { id, desc, title, imageLink, siteLink, tecnologias } = proyecto;

  const spanRef = useRef(null);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (spanRef.current) {
      setClassName(spanRef.current.textContent.slice(1));
    }
  }, []);
  return (
    <a href={`/proyectosall/${id}`} className="project-card">
      <img className="project-img" src={imageLink} alt={title} />

      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-desc">{desc}</p>
      </div>

      <div className="project-footer">
        <div className="project-tec">
          {tecnologias.map((tecnologia, i) => {
            return <SpanDynamic key={i} text={`#${tecnologia}`} />;
          })}
        </div>
        <a
          className="button"
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar
        </a>
        <i className="fa-brands fa-html5"></i>
      </div>
    </a>
  );
};

export default ProyectCard;
