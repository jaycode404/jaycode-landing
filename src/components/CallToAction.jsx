import React from "react";
import Socials from "./Socials";
export default function CallToAction() {
  return (
    <section className="call-action">
      <div>
        <h2 className="title">
          ¿Tienes un proyecto? <br />
          <span className="tailwind">Vamos a construirlo!</span>
        </h2>
      </div>
      <div className="cta-socials">
        <h3 className="firebase">Contáctame:</h3>
        {/* <Socials gap={"1rem"} /> */}
        <a href="#contacto" className="button">
          Enviar Mensaje
        </a>
      </div>
    </section>
  );
}
