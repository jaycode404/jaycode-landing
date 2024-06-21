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
    <div>
      <div>
        <div>
          <h6 className="footer-title">
            Desarrollo Web Jaycode
          </h6>
        </div>
        <div className="flex flex-col items-center">
          <div className="footer-navlist">
            <NavList inFooter={true} flex="flex" gap={0} />
          </div>
        </div>
        <div>
          <Typography className="footer-title" variant="h6">
            Sociales
          </Typography>
          <div>
            <Socials footer="footer" gap={4} size={2} />
          </div>
        </div>
      </div>
      <div>
        <p>
          Diseñado y programado por Jaycode
          <span id="year"></span>
        </p>
      </div>
    </div>
  );
}
