import { useRef } from "react";
import {
  Card,
  Textarea,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d26d7xt', 'template_uc77t9q', form.current, {
        publicKey: '640qWiNVvwnks4LLD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Card
      color="transparent"
      shadow={true}
      className="card-form"
    >
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2 ">
          <div className="lg:flex md:gap-2">
            <div className="flex flex-col">
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-black "
              >
                Tu nombre
              </Typography>
              <input name="user_name"  placeholder="Arnold" className="md:w-[100%] w-[80%] input-style" />
            </div>
            <div className="flex flex-col gap">
              <Typography
                variant="h6"
                color="blue-gray"
                className=" text-black"
              >
                Tu email
              </Typography>
              <input
                name="user_email"
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
              Mensaje
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

        <Button className="mt-6 boton-light" fullWidth>
          Enviar
        </Button>
      </form>
    </Card>
  );
}
