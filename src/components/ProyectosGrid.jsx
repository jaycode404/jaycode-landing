import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";

export const data = [
  {
    id: 1,
    proyectTitle: "CodeFlix",
    proyectDesc:
      "CodeFlix es una plataforma de contenido dirigida a programadores, que ofrece una amplia selección de recursos educativos y entretenidos. Desde tutoriales prácticos hasta charlas inspiradoras, CodeFlix es el destino ideal para programadores de todos los niveles. Ofrece herramientas interactivas y una interfaz fácil de usar para facilitar el aprendizaje y la colaboración.",
    imageLink: "/assets/screenshot-1.png",
    proyectSite: "https://jayflix-six.vercel.app/",
    colSpan: 2,
    rowSpan: 4,
  },
  {
    id: 2,
    proyectTitle: "Portafolio",
    proyectDesc: "Un portafolio personal que muestra mis proyectos y habilidades.",
    imageLink: "/assets/screenshot-2.png",
    proyectSite: "https://jaycode-landing.vercel.app/",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 3,
    proyectTitle: "RamdoMusic",
    proyectDesc: "RamdoMusic es una aplicación web para descubrir, escuchar y compartir música de manera gratuita. Explora una amplia variedad de géneros y artistas, crea listas de reproducción personalizadas y sigue a tus artistas favoritos.",
    imageLink: "/assets/screenshot-3.png",
    proyectSite: "https://randomusic.vercel.app/",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    proyectTitle: "Recordatorios",
    proyectDesc: "Una aplicación simple de recordatorios para ayudarte a organizar tus tareas diarias. Agrega, edita y elimina recordatorios fácilmente, y recibe notificaciones para recordarte las tareas importantes.",
    imageLink: "/assets/screenshot-4.png",
    proyectSite: "https://recordatorios-crud-app.vercel.app/",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 5,
    proyectTitle: "Pedagogia",
    proyectDesc: "Pedagogia es una plataforma educativa que ofrece recursos y materiales didácticos para docentes y estudiantes. Explora contenido educativo de alta calidad, participa en actividades interactivas y colabora con otros educadores.",
    imageLink: "/assets/screenshot-5.png",
    proyectSite: "https://pedagogia-landing.vercel.app/",
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 6,
    proyectTitle: "CodeFlix",
    proyectDesc: "CodeFlix es una plataforma de streaming de video que ofrece una amplia variedad de contenido, incluyendo películas, series de televisión, documentales y más. Disfruta de contenido ilimitado en cualquier momento y lugar.",
    imageLink: "/assets/bmo.png",
    proyectSite: "asdasd",
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
          <a
            href={`/proyectosall/${id}`}
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
              <a href={`/proyectosall/${id}`} className="proyect-title">
                {proyectTitle}
              </a>
            </a>
          </a>
        )
      )}
    </div>
  );
}
