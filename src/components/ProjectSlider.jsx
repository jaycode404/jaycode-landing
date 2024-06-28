import React, { useEffect } from "react";

const ProjectSlider = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".project-slider .item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let active = 3;

    const loadShow = () => {
      if (items.length > 0 && active >= 0 && active < items.length) {
        let stt = 0;
        items[active].style.transform = "none";
        items[active].style.zIndex = 1;
        items[active].style.filter = "none";
        items[active].style.opacity = 1;

        for (let i = active + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
      } else {
        console.error(
          'El índice activo está fuera del rango o no hay elementos en "items".'
        );
      }
    };

    loadShow();

    next.addEventListener("click", () => {
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
    });

    prev.addEventListener("click", () => {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    });
  }, []);

  return (
    <div className="project-slider">
      <div className="item">
        <h3>proyecto 1</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <div className="item">
        <h3>proyecto 2</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <div className="item">
        <h3>proyecto 3</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <div className="item">
        <h3>proyecto 4</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <div className="item">
        <h3>proyecto 5</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <div className="item">
        <h3>proyecto 6</h3>
        <p>lorem import moduleName from 'module'</p>
      </div>
      <button id="next">+</button>
      <button id="prev">-</button>
    </div>
  );
};

export default ProjectSlider;
