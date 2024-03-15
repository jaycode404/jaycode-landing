import React, { useContext } from "react";
import { Slider } from "./components/Slider";
import { GeneralContext, GeneralProvider } from "./context/GeneralContext";
import Header from "./components/Header";
import { Typography } from "@material-tailwind/react";
import Section from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import BentoGrid from "./components/Grid";
import { NavList, NavbarSimple } from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-auto">
      <NavbarSimple />
      <GeneralProvider>
        <div className="w-[70%] mx-auto gap-10 ">
          <div>
            {/* <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
              <div className="h-[40rem] w-[60rem] rounded-full bg-blue-500 absolute bottom-[-60%] left-[-20%] filter blur-[100px] z-[-1]"></div>
              <div className="h-[40rem] w-[60rem] rounded-full bg-purple-500 absolute bottom-[-60%] right-[-20%] filter blur-[100px] z-[-1]"></div>
            </div> */}

            <Header />
          </div>
          <Proyectos />
          <Habilidades />
          <Section />
          <Contacto />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </GeneralProvider>
    </div>
  );
}

export default App;
