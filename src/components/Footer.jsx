import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { NavList } from "./Navbar";
import Socials from "./Socials";

export default function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = " " + currentYear;
  }, []);

  return (
    <div className="text-white h-[20rem] w-[100%] py-4">
      <div className="flex flex-col gap-10 px-[20rem] justify-center">
        <div className="col-span-1 row-span-12 rounded-xl">
          <Typography className="flex flex-col items-center" variant="h6">
            Desarrollo Web Jaycode
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <NavList flex="flex" gap={0} />
        </div>
        <div className="flex flex-col items-center">
          <Typography className="" variant="h6">
            Sociales
          </Typography>
          <div className="p-2">
            <Socials invert="social-invert" gap={4} size={2} />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Typography variant="p" className="text-gray-500">
          Diseñado y programado por Jaycode
          <span id="year"></span>
        </Typography>
      </div>
    </div>
  );
}
