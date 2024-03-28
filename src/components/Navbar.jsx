import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function NavList() {
  

  return (
    <div
      className="nav-list"
    >
      <a
        href="/#proyectos"
        className="nav-link"
      >
        Proyectos
      </a>

      <a
        href="/#habilidades"
        className="nav-link  "
      >
        Habilidades
      </a>

      <a
        href="/#sobremi"
        className="nav-link"
      >
        Sobre Mi
      </a>

      <a
        href="/#contacto"
        className="nav-link  "
      >
        Contacto
      </a>
    </div>
  );
}

export function NavbarSimple({ flex, gap }) {
  return (
    <div className="navbar-container">
      <div className="navbar-div">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="nav-logo nav-link"
        >
          <span className="span-code lg:text-xl">{"<"}</span> Jaycode{" "}
          <span className="span-code">{"/>"}</span>
        </Typography>
        <NavList flex={flex} gap={gap} />
      </div>
    </div>
  );
}
