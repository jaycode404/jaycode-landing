import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import { ContactForm } from "./ContactForm";
import Socials from "./Socials";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="text-black frame-section grid grid-flow-col gap-6"
    >
      <div>
        <ContactForm />
      </div>
      <div className="">
        <Typography
          variant="h1"
          className="text-7xl margin-section-info pt-10 section-title "
        >
          Contacto<span className="dot">.</span>
        </Typography>
        <div>
          <Typography variant="p" className="pl-5">
            ¡Contactame! Estaré leyendo tu propuesta en breve y será un placer
            colaborar.
          </Typography>
        </div>
        <div className="p-4">
          <Socials gap={6} size={2.5} />
        </div>
      </div>
    </section>
  );
}
