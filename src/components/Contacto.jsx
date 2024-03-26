import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import { ContactForm } from "./ContactForm";
import Socials from "./Socials";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="container"
    >
      <div className="info-box last">
        <Typography
          variant="h1"
          className=" section-title text-gradient"
        >
          Contacto<span className="dot">.</span>
        </Typography>
        <div>
          <Typography variant="p" className="parrafo">
            ¡Contactame! Estaré leyendo<br></br> tu propuesta en breve y será un placer
            colaborar.
          </Typography>
        </div>
        <div className="lg:p-4 ">
          <Socials gap={6} size={2.5} />
        </div>
      </div>
      <div className="">
        <ContactForm />
      </div>
    </section>
  );
}
