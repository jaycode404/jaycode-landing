import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Input, Typography, Card } from "@material-tailwind/react";
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
    <Card color="transparent" shadow={true} className="card-form">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2 ">
          <div className="lg:flex md:gap-2">
            <div className="flex flex-col">
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-black "
              >
                Tu nombre:
              </Typography>
              <input
                type="text"
                name="to_name"
                placeholder="Arnold"
                className="md:w-[100%] w-[80%] input-style"
              />
            </div>
            <div className="flex flex-col gap">
              <Typography
                variant="h6"
                color="blue-gray"
                className=" text-black"
              >
                Tu email:
              </Typography>
              <input
                type="email"
                name="from_name"
                placeholder="arnold@gmail.com"
                className="md:w-[100%] w-[80%] input-style"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-black"
            >
              Mensaje:
            </Typography>
            <textarea
              name="message"
              className="w-full textarea-style"
              type="text-area"
              maxLength={100}
              placeholder="Me gustaría colaborar..."
            />
          </div>
        </div>

        <Button type="submit" className="mt-6 boton-light boton-form button-font" fullWidth>
          Enviar
        </Button>
      </form>
    </Card>
  );
}
