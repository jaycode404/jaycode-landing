import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "./Socials";

export default function Header() {
  const [text] = useTypewriter({
    words: ["React", "JavaScript", "Node", "WebDev"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 4000,
  });

  const [headerId, setHeaderId] = useState("");

  useEffect(() => {
    const showHeaderId = () => {
      const headerDiv = document.getElementById("header");

      if (headerDiv) {
        setHeaderId("header");
      } else {
        console.error("No se encontró ningún div con el ID especificado.");
      }
    };

    showHeaderId();
  }, []);

  return (
    <div id="header" className="relative">
      <div className="grid grid-cols-2 text-black items-center h-screen">
        <div className="h-[15rem] w-[15rem] imagen-bg place-self-center"></div>
        <div className="flex flex-col gap-2 ">
          <Typography variant="h1" className="text-8xl ">
            Jacob<span className="dot">.</span>
          </Typography>

          <Typography
            variant="p"
            className="text-left text-wrap text-black w-[90%]"
          >
            Soy un desarrollador web fullstack con experiencia en tecnologías
            como React, JavaScript y Node. Transformo ideas en código y resuelvo
            desafíos de manera efectiva. Mi enfoque pragmático y experiencia
            respaldada me permite abordar proyectos de manera integral.
          </Typography>
          <div className="w-[30rem]">
            <Socials
              size={2}
              gap={10}
              header={`${headerId ? "true" : "false"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
