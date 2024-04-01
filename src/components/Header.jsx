import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
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
      }
    };

    showHeaderId();
  }, []);

  return (
    <header id="header">
      <div className="header-container container">
        <div className="hero-img"></div>
        <div className="info-box">
          <Typography variant="h1" className="hero-title">
            Jacob<span className="dot">.</span>
          </Typography>

        <div className="light-md-blue"></div>
          <Typography variant="p" className="parrafo">
            Landing page de introducción a mi perfil profesional, donde expongo
            mi trabajo e información sintetizada respecto a mí.
          </Typography>
          <Socials
          invert="social-invert"
            size={2.7}
            gap={10}
            header={`${headerId ? "true" : "false"}`}
          />
        </div>
      </div>
    </header>
  );
}
