import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function NavList({ flex, gap }) {
  console.log("flex:", flex);
  console.log("gap:", gap);

  return (
    <div
      className={`flex ${flex} ${gap ? `gap-${gap}` : "gap-0"} `}
      style={{ width: "auto" }}
    >
      <a
        href="#proyectos"
        className="flex nav-link items-center transition-colors hover:bg-black hover:text-white"
      >
        Proyectos
      </a>

      <a
        href="#habilidades"
        className="flex nav-link items-center transition-colors hover:bg-black hover:text-white  "
      >
        Habilidades
      </a>

      <a
        href="#sobremi"
        className="flex nav-link items-center transition-colors hover:bg-black hover:text-white  p-2"
      >
        Sobre Mi
      </a>

      <a
        href="#contacto"
        className="flex nav-link items-center transition-colors hover:bg-black hover:text-white  "
      >
        Contacto
      </a>
    </div>
  );
}

export function NavbarSimple({ flex, gap }) {
  return (
    <div className="fixed z-10 bg-gray-100 md:w-[100%] lg:px-[12rem] nav-mobile w-full text-[12px] items-center">
      <div className="flex justify-between text-black md:px-4">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="cursor-pointer nav-link transition-colors hover:bg-black hover:text-white text-[12px]"
        >
          <span className="span-code lg:text-xl">{"<"}</span> Jaycode{" "}
          <span className="span-code">{"/>"}</span>
        </Typography>
        <NavList flex={flex} gap={gap} />
      </div>
    </div>
  );
}
