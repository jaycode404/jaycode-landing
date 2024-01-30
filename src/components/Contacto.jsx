import React from "react";
import { Typography } from "@material-tailwind/react";
import { Slider } from "./Slider";
import { ContactForm } from "./ContactForm";
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="flex h-[40rem]  items-center text-white gap-[5rem] contacto justify-between"
    >
      <div>
        <Typography variant="h1" className="text-7xl text-left mb-10">
          Contacto<span className="dot">.</span>
        </Typography>
      </div>
      <ContactForm />
    </section>
  );
}
