import { Carousel } from "@material-tailwind/react";
import { useContext } from "react";

import { GeneralContext, GeneralProvider } from "../context/GeneralContext";
import { ProyectCard } from "./ProyectCard";
export function Slider() {
  const nombre = useContext(GeneralContext);
  return (
    <GeneralProvider>
      {console.log(nombre)}
      <Carousel
        className="flex rounded-xl w-[45rem] h-[36rem] "
        transition={{ type: "tween", duration: ".5" }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-orange-300"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
      </Carousel>
    </GeneralProvider>
  );
}
