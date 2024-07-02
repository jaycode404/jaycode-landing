import { Typography } from "@material-tailwind/react";
import React, { useContext, useEffect } from "react";
import { NavList } from "./Navbar";
import Socials from "./Socials";
import { GeneralContext } from "../context/GeneralContext";

export default function Footer() {
  const { darkMode } = useContext(GeneralContext);

  useEffect(() => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    if (yearElement) {
      yearElement.textContent = " " + currentYear;
    }
  }, []);

  return (
    <footer>
      <div>
        <h6>Desarrollo Web Jcode</h6>
        <div>
          <NavList inFooter={true} flex="flex" gap={0} />
        </div>
      </div>
      <div>
        <h6>Sociales</h6>
        <Socials gap={'1rem'} />
      </div>
      <div>
        <p>
          Diseñado y programado por Jcode
          <span id="year"></span>
        </p>
      </div>
    </footer>
  );
}
