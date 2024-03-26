import {
  Card,
  Textarea,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function ContactForm() {
  return (
    <Card
      color="transparent"
      shadow={true}
      className="card-form"
    >
      <form className="contact-form">
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
              <input placeholder="Arnold" className="md:w-[100%] w-[80%] input-style" />
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
