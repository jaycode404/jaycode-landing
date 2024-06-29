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
      <div className="footer-section ">
        <h6>Desarrollo Web Jcode</h6>
          <div className="footer-navlist">
            <NavList inFooter={true} flex="flex" gap={0} />
        </div>
        <div>
          <h6>Sociales</h6>
          <div>
            <Socials footer="footer" gap={4} size={2} />
          </div>
        </div>
      </div>
      <div className="section footer-last">
        <p>
          Diseñado y programado por Jaycode
          <span id="year"></span>
        </p>
      </div>
    </footer>
  );
}
