import { Typography } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { NavList } from "./Navbar";
import Socials from "./Socials";
import { GeneralContext } from "../context/GeneralContext";

export default function Footer() {
  const [inFooter, setFooter] =useState(true);
  const {darkMode} =useContext(GeneralContext)
  
  useEffect(() => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = " " + currentYear;
  }, []);

  return (
    <div className=" text-white lg:h-[20rem] w-[100%] py-4">
      <div className="flex flex-col gap-10 md:gap-6 lg:px-[20rem] md:px-[10rem] items-center">
        <div className="col-span-1 row-span-12 rounded-xl  self-center">
          <Typography className="footer-title" variant="h6">
            Desarrollo Web Jaycode
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <div className="footer-navlist">

          <NavList inFooter={inFooter} flex="flex" gap={0} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography className="footer-title" variant="h6">
            Sociales
          </Typography>
          <div className="p-2">
          <Socials footer="footer"  gap={4} size={2} />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Typography  className="footer-sign text-gray-500">
          Diseñado y programado por Jaycode
          <span id="year"></span>
        </Typography>
      </div>
    </div>
  );
}
