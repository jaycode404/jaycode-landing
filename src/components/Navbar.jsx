import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#sobremi"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Sobre Mí
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#proyectos"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Proyectos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#habilidades"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Habilidades
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#contacto"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contacto
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  return (
    <Navbar className="fixed nav-top mx-auto max-w-[80%] px-6 py-3 mt-5 bg-blue-100">
      <div className="flex items-center justify-between text-blue-gray-900 w-[100%] ">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Jaycode
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}
