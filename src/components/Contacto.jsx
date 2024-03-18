import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import { ContactForm } from "./ContactForm";
import Socials from "./Socials";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="text-black frame-section grid lg:grid-cols-2 lg:gap-6 md:gap-0"
    >
      <div className="order-last">
        <ContactForm />
      </div>
      <div className="mt-4 text-center">
        <Typography
          variant="h1"
          className="text-6xl margin-section-info  section-title "
        >
          Contacto<span className="dot">.</span>
        </Typography>
        <div>
          <Typography variant="p" className="pl-5 px-4">
            ¡Contactame! Estaré leyendo tu propuesta en breve y será un placer
            colaborar.
          </Typography>
        </div>
        <div className="lg:p-4 ">
          <Socials gap={6} size={2.5} />
        </div>
      </div>
    </section>
  );
}
