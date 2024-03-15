import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function NavList({ flex, gap }) {
  console.log("flex:", flex);
  console.log("gap:", gap);

  return (
    <div
      className={` flex ${flex} ${gap ? `gap-${gap}` : "gap-0"}`}
      style={{ width: "auto" }}
    >
      <div className=" ">
        <a
          href="#proyectos"
          className="flex nav-link  items-center transition-colors hover:bg-black hover:text-white font-medium p-4"
        >
          Proyectos
        </a>
      </div>
      <div className=" ">
        <a
          href="#habilidades"
          className="flex nav-link  items-center transition-colors hover:bg-black hover:text-white font-medium p-4"
        >
          Habilidades
        </a>
      </div>
      <div className=" ">
        <a
          href="#sobremi"
          className="flex nav-link  items-center transition-colors hover:bg-black hover:text-white font-medium p-4"
        >
          Sobre Mi
        </a>
      </div>
      <div className=" ">
        <a
          href="#contacto"
          className="flex nav-link  items-center transition-colors hover:bg-black hover:text-white font-medium p-4"
        >
          Contacto
        </a>
      </div>
      
    </div>
  );
}

export function NavbarSimple({ flex, gap }) {
  return (
    <div className="fixed w-[100%] z-30 px-[14rem] bg-gray-100 ">
      <div className=" flex items-center text-black justify-between ">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="cursor-pointer  nav-link transition-colors hover:bg-black hover:text-white"

        >
          <span className="span-code">{"<"}</span> Jaycode{" "}
          <span className="span-code">{"/>"}</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList flex={flex} gap={gap} />
        </div>
      </div>
    </div>
  );
}
