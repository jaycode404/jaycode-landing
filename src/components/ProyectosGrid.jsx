import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { GeneralContext } from "../context/GeneralContext";
import ProyectCard from "./ProyectCard";

export const data = [
  {
    id: 1,
    title: "CodeFlix",
    desc: "CodeFlix es una plataforma de contenido dirigida a programadores, que ofrece una amplia selección de recursos educativos y entretenidos. Desde tutoriales prácticos hasta charlas inspiradoras, CodeFlix es el destino ideal para programadores de todos los niveles. Ofrece herramientas interactivas y una interfaz fácil de usar para facilitar el aprendizaje y la colaboración.",
    imageLink: "/assets/screenshot-1.png",
    siteLink: "https://jayflix-six.vercel.app/",
    colSpan: 2,
    rowSpan: 4,
  },
  {
    id: 2,
    title: "Portafolio",
    desc: "Un portafolio personal que muestra mis proyectos y habilidades.",
    imageLink: "/assets/screenshot-2.png",
    siteLink: "https://jaycode-landing.vercel.app/",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 3,
    title: "RamdoMusic",
    desc: "RamdoMusic es una aplicación web para descubrir, escuchar y compartir música de manera gratuita. Explora una amplia variedad de géneros y artistas, crea listas de reproducción personalizadas y sigue a tus artistas favoritos.",
    imageLink: "/assets/screenshot-3.png",
    siteLink: "https://randomusic.vercel.app/",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    title: "Recordatorios",
    desc: "Una aplicación simple de recordatorios para ayudarte a organizar tus tareas diarias. Agrega, edita y elimina recordatorios fácilmente, y recibe notificaciones para recordarte las tareas importantes.",
    imageLink: "/assets/screenshot-4.png",
    siteLink: "https://recordatorios-crud-app.vercel.app/",
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 5,
    title: "Pedagogia",
    desc: "Creación de landing page para cliente enfocado en la mejora de imagen de su negocio. Una pagina web disenada para dar a conocer su servicio pedagogico con los requerimientos esteticos y responsive pedidos.",
    imageLink: "/assets/screenshot-5.png",
    siteLink: "https://pedagogia-landing.vercel.app/",
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 6,
    title: "IndexSearch",
    desc: "index search es un modelo de busqueda que filtra rapidamente una lista de contactos o de otro tipo de informacion basada en el input search del cliente, aumentando la eficiencia y el ahorro de tiempo del programa.",
    imageLink: "/assets/screenshot-6.png",
    siteLink: "https://busqueda-indexada.vercel.app/",
    colSpan: 1,
    rowSpan: 5,
  },
];

export default function ProyectosGrid() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <div className="proyect-container">
      {data.map((proyecto) => (
        <ProyectCard proyecto={proyecto} />
      ))}
    </div>
  );
}
