import React, { useEffect } from "react";
import ProyectCard from "./ProyectCard";

export const data = [
  {
    id: 1,
    title: "CodeFlix",
    desc: "CodeFlix es una plataforma de contenido dirigida a programadores que se encuentran en algun punto similar al que yo estuve, donde necesitas consumir bastante información técnica y conceptos nuevos, aprender las tecnologías que se usan para cierto tipo de proyectos. El objetivo de brindar esta ayuda es para optimizar el tiempo de busqueda en el basto YouTube y consumir el contenido que me ha funcionado a mi como desarrollador web con clientes reales actuales que en algun momento comenzó solo sabiendo progrmar un landing page.Ojala les sirva. Este app es una SPA desarrollada con React, usando firebase para guardar los datos de los videos, react router para renderizar los componentes funcionales que se necesitan en cada una de las rutas. Tambien he agregado la funcion de Login para cuando debo agregar un video nuevo, un feature solo accesible para administradores y manter limpia la pagina.",
    imageLink: "/assets/screenshot-1.png",
    siteLink: "https://codeflix-tan.vercel.app/",
    tecnologias: ["react", "javascript", "tailwind", "firebase", "css", "html"],
    colSpan: 2,
    rowSpan: 4,
  },

  {
    id: 3,
    title: "RamdoMusic",
    desc: "RamdoMusic es una aplicación web que hice para mi mismo, encontrar nuevas canciones dependiendo de mi mood me llevo a crearla, en este punto estaba experimentando con librerias de componentes, asi que la hice con Material Tailwind, una librearia optima y buena para comenzar y experimentar. En el App simplemente escribes una palabra respecto a como te sientes y te devolveera las principales canciones que hagan referencia a esa palabra clave.",
    imageLink: "/assets/screenshot-2.png",
    siteLink: "https://randomusic.vercel.app/",
    tecnologias: ["react", "javascript", "materialUI", "css", "html"],
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    title: "Recordatorios",
    desc: "Una aplicacion muy popular, sin embargo la hice con el enfoque de ayudar a mis hermanos a administrar sus tareas de la escuela de manera rapido para ahorrar papel y tiempo, salvar tiempo es una de las mayores ventajas de usar codigo y tecnologia en general. Con esta app aplique el darkmode, una nueva libreria de componentes y comence a desarropllar habilidades con la libreria de css TAILWIND. Tienes un simple formulario donde agreagas el titulo y descripcion de la tarea, puedes editarla cuando desees, y eliminarla una vez se haya realizado.",
    imageLink: "/assets/screenshot-3.png",
    siteLink: "https://recordatorios-crud-app.vercel.app/",
    tecnologias: ["react", "javascript", "materialUI", "css", "html"],
    colSpan: 1,
    rowSpan: 6,
  },
  {
    id: 5,
    title: "Pedagogia",
    desc: "Uno de mis primeros encargos de clientes reales, una maestra con academia independiente requiere una landing page para sus clientes. Solicitaba cierta paleta de colores e imagenes con el enfasis de que fuera amigable para los ninos y sus madres a la hora de verla, un simple formulario de contacto con botones directos a su telefono, ventajas, etc.",
    imageLink: "/assets/screenshot-4.png",
    siteLink: "https://pedagogia-landing.vercel.app/",
    tecnologias: ["react", "javascript", "css", "html"],
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
    desc: "Este proyecto es una landing page desarrollada para un cliente que deseaba una página visualmente atractiva La landing page tiene las siguientes características diseño atractivo la página está diseñada para captar la atención de los visitantes con un diseño moderno y llamativo exposición de platillos principales una sección dedicada a mostrar los platillos principales del cliente con imágenes de alta calidad y descripciones tentadoras sección de promociones un área específica para destacar promociones y ofertas especiales que el cliente ofrece ayudando a atraer y retener a los visitantes formulario de contacto incluye un formulario de contacto fácil de usar para que los visitantes puedan enviar consultas o hacer reservas directamente desde la página",
    imageLink: "/assets/screenshot-6.png",
    siteLink: "https://burger-landing-ten.vercel.app/",
    tecnologias: ["react", "javascript", "css", "html"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 8,
    title: "Veterinaria",
    desc: "Este proyecto es una landing page de servicios veterinarios creada para un cliente que buscaba una página funcional y atractiva. Incluye un diseño profesional que refleja la calidad de los servicios, con colores y elementos visuales personalizados. La página presenta reseñas de Google para generar confianza, widgets de contacto rápido como un globo de WhatsApp, y un formulario de contacto fácil de usar. Ofrece una descripción detallada de los servicios, fotos de alta calidad, y llamadas a la acción estratégicas, todo adaptado a las necesidades específicas del cliente para una experiencia de usuario eficiente..",
    imageLink: "/assets/screenshot-7.png",
    siteLink: "https://apaloosa.vercel.app/",
    tecnologias: ["react", "javascript", "css", "html"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 9,
    title: "Encriptador",
    desc: "Este proyecto es un encriptador de JavaScript, una aplicación práctica que se centra en el manejo de cadenas de texto. En esta etapa, el objetivo principal era practicar y perfeccionar el uso de scripts para la manipulación de elementos del DOM. La aplicación permite encriptar y desencriptar texto, proporcionando una herramienta útil para comprender cómo funcionan las operaciones de cadena y cómo se pueden aplicar técnicas de encriptación básicas en JavaScript. Además, el proyecto ofrece una oportunidad para mejorar las habilidades en la gestión de datos y en la implementación de funcionalidades interactivas, facilitando la interacción con los elementos del DOM y la manipulación dinámica del contenido en la web.",
    imageLink: "/assets/screenshot-8.png",
    siteLink: "https://encriptador-javascript.vercel.app/",
    tecnologias: ["react", "javascript", "css", "html"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 10,
    title: "Propiedades",
    desc: "Este proyecto es una aplicación FullStack desarrollada para un cliente, diseñada para administrar propiedades de bienes raíces. La aplicación ofrece una serie de características clave, incluyendo la capacidad de subir imágenes al servidor, así como funciones completas para crear, editar y eliminar propiedades. El diseño y la programación se llevaron a cabo completamente desde cero, abarcando tanto el frontend como el backend para garantizar una integración fluida y una experiencia de usuario coherente. La solución fue adaptada a las necesidades específicas del cliente, incorporando todas las funcionalidades solicitadas y un diseño que refleja la identidad y los objetivos del negocio. Desde la interfaz de usuario hasta la gestión de datos en el servidor, el proyecto proporciona una herramienta completa y eficaz para la gestión de bienes raíces",
    imageLink: "/assets/screenshot-9.png",
    siteLink: "https://admin-propiedades.vercel.app/",
    tecnologias: ["react", "HTML", "javascript", "CSS", "Firebase"],
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 11,
    title: "Salon App",
    desc: "Esta aplicación está diseñada para una clienta y ofrece una solución integral para la gestión de un salón. Los clientes pueden registrarse utilizando su correo electrónico y agendar citas al seleccionar los servicios que desean. La aplicación cuenta con un panel de administración donde la clienta puede ver, crear y eliminar citas, facilitando la gestión de reservas. Desarrollada con React en el frontend, Node.js en el backend y MySQL para la base de datos, la aplicación emplea JWT para la autenticación segura y hashing de contraseñas para proteger la información del usuario. El diseño es limpio y se ajusta a las especificaciones solicitadas por la clienta, e incluye características adicionales como reseñas, fotos y un formulario de contacto para facilitar la comunicación. Esta solución proporciona una plataforma completa y eficiente para la gestión de citas y servicios en el salón.",
    imageLink: "/assets/screenshot-10.png",
    siteLink: "https://www.salonapp.lat",
    tecnologias: ["html", "javascript", "css", "react", "mysql", "nodejs"],
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
