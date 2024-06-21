import React, { useContext, useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "./Socials";
import { GeneralContext } from "../context/GeneralContext";

export default function Header() {
  const [text] = useTypewriter({
    words: ["React", "JavaScript", "Node", "WebDev"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 4000,
  });

  const [headerId, setHeaderId] = useState("");
  const { darkMode, toggleTheme } = useContext(GeneralContext);

  useEffect(() => {
    const showHeaderId = () => {
      const headerDiv = document.getElementById("header");
      if (headerDiv) {
        setHeaderId("header");
      } else {
        // Código adicional si fuera necesario
      }
    };

    showHeaderId();
  }, []);

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-info">
          <h1 className="hero-title">
            jacob<span className="dot">.</span>
          </h1>

          <p className="side-border">Me gusta crear aplicaciones útiles para mi entorno

           es divertidoasdasdddddddddddddddddddd 
          </p>
          <button className="button">hola</button>
        </div>

        <div className="hero-img"></div>
      </div>
      {/* <Socials
        invert="social-invert"
        size={2.7}
        gap={10}
        header={`${headerId ? "true" : "false"}`}
      /> */}
    </header>
  );
}
