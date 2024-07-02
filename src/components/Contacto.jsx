import React, { useContext } from "react";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
import { GeneralContext } from "../context/GeneralContext";

export default function Contacto() {
  const { darkMode } = useContext(GeneralContext);

  return (
    <section id="contacto" className="contacto-container">
      <ContactForm />

      <div className="info-box">
        <h2>
          Contacto<span className="dot">.</span>
        </h2>
        
        <div>
          <p>
            ¡Contáctame! Estaré leyendo tu propuesta en breve y será un placer
            colaborar.
          </p>
          <p>Aquí mis redes donde podrás encontrarme y contactarme:</p>
        </div>
        <Socials gap={'1rem'} />
      </div>
    </section>
  );
}
