import React, { useContext } from "react";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
import { GeneralContext } from "../context/GeneralContext";

export default function Contacto() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="contacto" className="section">
      <div className="info-box">
        <h2>
          Contacto<span className="dot">.</span>
        </h2>
        {darkMode && <div></div>}
        <div>
          <p>
            ¡Contáctame! Estaré leyendo tu propuesta en breve y será un placer
            colaborar.
          </p>
        </div>
        {/* <Socials invert="social-invert" size={2.8} gap={5} /> */}
      </div>
      {/* <ContactForm /> */}
    </section>
  );
}
