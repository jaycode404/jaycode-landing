import {
  Card,
  Textarea,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function ContactForm() {
  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-8 w-80 max-w-screen-lg sm:w-96 text-white">
        <div className="flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-white"
          >
            Tu nombre
          </Typography>
          <Input
            size="lg"
            placeholder=""
            className="placeholder-white !border-t-blue-gray-200 focus:!border-t-blue-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-white"
          >
            Tu email
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            className="placeholder-white !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-white"
          >
            Mensaje
          </Typography>
          <Textarea
            type="text-area"
            maxLength={100}
            size="lg"
            placeholder="Me gustaría colaborar..."
            className="placeholder-white
            bg-transparent !border-t-blue-gray-200 no-focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6 boton-light" fullWidth>
          Enviar
        </Button>
      </form>
    </Card>
  );
}
