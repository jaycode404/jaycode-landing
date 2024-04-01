import React, { useContext } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";

import Socials from "./Socials";
import ContactForm from "./ContactForm";
import { GeneralContext } from "../context/GeneralContext";

export default function Contacto() {
  const { darkMode, toggleTheme } = useContext(GeneralContext);
  return (
    <section id="contacto" className="container">
      <div className="info-box last">
        <Typography variant="h1" className=" section-title text-gradient">
          Contacto<span className="dot">.</span>
        </Typography>
        {darkMode && <div className="light-md-blue"></div>}

        <div>
          <Typography variant="p" className="parrafo">
            ¡Contactame! Estaré leyendo<br></br> tu propuesta en breve y será un
            placer colaborar.
          </Typography>
        </div>
        <Socials invert="social-invert" size={2.8} gap={5} />
      </div>
      <ContactForm />
    </section>
  );
}
