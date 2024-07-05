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
      <div>
        <h3 className="firebase">Contáctame:</h3>
        <Socials gap={"1rem"} />
      </div>
    </section>
  );
}
