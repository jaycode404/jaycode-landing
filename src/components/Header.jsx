import React from "react";
import { NavbarSimple } from "./Navbar";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <div className=" w-full h-screen">
      <NavbarSimple />
      <div className="flex text-white items-center h-[5rem] mt-[15rem] gap-[1rem] justify-between">
        <div>
          <Typography variant="h1" className="text-8xl mb-10">
            Jacob
          </Typography>
          <Typography variant="lead">
            "Llevo ideas al código, y desafíos a soluciones."
          </Typography>
          
        </div>
        <div>
          <img
            src="/src/assets/foto2.png"
            alt="imagen"
            className="imagen scale-50 mr-0"
          />
        </div>
      </div>
    </div>
  );
}
