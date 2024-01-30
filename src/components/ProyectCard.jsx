import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";
import {Iconos}  from './Iconos'  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  export function ProyectCard() {
    return (
      <Card className="mt-[8rem] w-96 h-[25rem] mx-[4.5rem]">
        <CardHeader floated={false} color="blue-gray" className="relative">
          <img src="https://picsum.photos/200/400" alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            CRUD de empleados
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Visitar</Button>
          <i class="fa-brands fa-html5"></i>
        </CardFooter>
      </Card>
    );
  }
  