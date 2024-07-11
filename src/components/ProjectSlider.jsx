import React, { useEffect } from "react";
import ProyectCard from "./ProyectCard";

export const data = [
  {
    id: 1,
    title: "CodeFlix",
    desc: "CodeFlix es una plataforma de contenido dirigida a programadores, que ofrece una amplia selección de recursos educativos y entretenidos. Desde tutoriales prácticos hasta charlas inspiradoras, CodeFlix es el destino ideal para programadores de todos los niveles. Ofrece herramientas interactivas y una interfaz fácil de usar para facilitar el aprendizaje y la colaboración.",
    imageLink: "/assets/screenshot-1.png",
    siteLink: "https://codeflix-tan.vercel.app/",
    tecnologias: ["react", "javascript", "tailwind", "firebase"],
    colSpan: 2,
    rowSpan: 4,
  },

  {
    id: 3,
    title: "RamdoMusic",
    desc: "RamdoMusic es una aplicación web para descubrir, escuchar y compartir música de manera gratuita. Explora una amplia variedad de géneros y artistas, crea listas de reproducción personalizadas y sigue a tus artistas favoritos.",
    imageLink: "/assets/screenshot-2.png",
    siteLink: "https://randomusic.vercel.app/",
    tecnologias: ["react", "javascript"],
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    title: "Recordatorios",
    desc: "Una aplicación simple de recordatorios para ayudarte a organizar tus tareas diarias. Agrega, edita y elimina recordatorios fácilmente, y recibe notificaciones para recordarte las tareas importantes.",
    imageLink: "/assets/screenshot-3.png",
    siteLink: "https://recordatorios-crud-app.vercel.app/",
    tecnologias: ["react", "javascript"],
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 5,
    title: "Pedagogia",
    desc: "Creación de landing page para cliente enfocado en la mejora de imagen de su negocio. Una pagina web disenada para dar a conocer su servicio pedagogico con los requerimientos esteticos y responsive pedidos.",
    imageLink: "/assets/screenshot-4.png",
    siteLink: "https://pedagogia-landing.vercel.app/",
    tecnologias: ["react", "javascript"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 6,
    title: "IndexSearch",
    desc: "index search es un modelo de busqueda que filtra rapidamente una lista de contactos o de otro tipo de informacion basada en el input search del cliente, este es un mock como ejercicio",
    imageLink: "/assets/screenshot-5.png",
    siteLink: "https://busqueda-indexada.vercel.app/",
    tecnologias: ["react", "javascript", "vite", "css"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 7,
    title: "Restaurant",
    desc: "Proyecto landing page para cliente, buscaba algo interesante a la vista, exponer sus platillos principales una seccion de promociones ademas de un formulario de contacto",
    imageLink: "/assets/screenshot-6.png",
    siteLink: "https://burger-landing-ten.vercel.app/",
    tecnologias: ["react", "javascript"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 8,
    title: "Veterinaria",
    desc: "Landing page de servicios veterinarios de un cliente, solicita sus reviews de google anteriores ademas de widgets de contacto rapido como globo de whatsapp",
    imageLink: "/assets/screenshot-7.png",
    siteLink: "https://apaloosa.vercel.app/",
    tecnologias: ["react", "javascript"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 9,
    title: "Encriptador",
    desc: "Una de las apps de ejercicios más comunes para el manejo de strings, en esta etapa practicaba el dominio de los scripts para manejar elementos del DOM",
    imageLink: "/assets/screenshot-8.png",
    siteLink: "https://encriptador-javascript.vercel.app/",
    tecnologias: ["HTML", "javascript", "CSS"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 10,
    title: "Propiedades",
    desc: "Aplicacion FullStack para cliente, administra propiedades de bienes raices, sube imagenes a servidor, elimina, crea edita. Diseñada  y programada por mí desde Front Hasta el Back.",
    imageLink: "/assets/screenshot-9.png",
    siteLink: "https://admin-propiedades.vercel.app/",
    tecnologias: ["HTML", "javascript", "CSS"],
    colSpan: 1,
    rowSpan: 5,
  },
];

const ProjectSlider = ({ children }) => {
  useEffect(() => {
    const items = document.querySelectorAll(".project-slider .project-card");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let active = 3;

    const loadShow = () => {
      if (items.length > 0 && active >= 0 && active < items.length) {
        let stt = 0;
        items[active].style.transform = "none";
        items[active].style.zIndex = 1;
        items[active].style.filter = "none";
        items[active].style.opacity = 1;

        for (let i = active + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
      } else {
        console.error(
          'El índice activo está fuera del rango o no hay elementos en "items".'
        );
      }
    };

    loadShow();

    next.addEventListener("click", () => {
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
    });

    prev.addEventListener("click", () => {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    });
  }, []);

  return (
    <div className="project-slider">
      {data.map((proyecto, index) => (
        <ProyectCard key={index} proyecto={proyecto} />
      ))}
      <button id="next">{">"}</button>
      <button id="prev">{"<"}</button>
    </div>
  );
};

export default ProjectSlider;
