import React, { useContext, useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "./Socials";
import { GeneralContext } from "../context/GeneralContext";
import Particles from "./Particles";

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
      <Particles />
      <div className="header-container">
        <div className="header-info">
          <h1 className="hero-title">
            jacob<span className="dot">.</span>
          </h1>

          <p className="side-border">
            <i>
              {/* hay que pomeer este texto em italica */}
              Programador web full-stack inclinado al diseño UX / UI con gusto
              por la creación y resolución de problemas mediante el código.
            </i>
          </p>

          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user icon"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            CV
          </button>
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
