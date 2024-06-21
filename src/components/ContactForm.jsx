import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { GeneralContext } from "../context/GeneralContext";

export default function ContactForm() {
  const { darkMode } = useContext(GeneralContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d26d7xt", "template_337rfpn", form.current, {
        publicKey: "640qWiNVvwnks4LLD",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "E-mail enviado!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="card-form">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
          <div className="lg:flex md:gap-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black">
                Tu nombre:
              </label>
              <input
                type="text"
                id="name"
                name="to_name"
                placeholder="Arnold"
                className="input-style"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black">
                Tu email:
              </label>
              <input
                type="email"
                id="email"
                name="from_name"
                placeholder="arnold@gmail.com"
                className="input-style"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label htmlFor="message" className="text-black">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea-style"
              maxLength={100}
              placeholder="Me gustaría colaborar..."
            />
          </div>
        </div>

        <button type="submit" className="boton-light boton-form button-font">
          Enviar
        </button>
      </form>
    </div>
  );
}
