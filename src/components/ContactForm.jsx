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
      className="p-4 w-[90%] items-center"
    >
      <form className="w-[100%]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <div className="flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 text-black"
              >
                Tu nombre
              </Typography>
              <input placeholder="Arnold" className="max-w-[80%] input-style" />
            </div>
            <div className="flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 text-black"
              >
                Tu email
              </Typography>
              <input
                placeholder="arnold@gmail.com"
                className="max-w-[80%] input-style"
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
