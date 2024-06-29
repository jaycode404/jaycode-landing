import React from "react";

export default function LogoSlider() {
  const sliderStyle = {
    "--width": " 100px",
    "--height": "50px",
    "--quanity": "50px",
  };
  return (
    <div className="logo-slider-container">
      {/* maccintosh */}
      <img src="/assets/macintosh.png" alt="" className="mac mac-shadow" />
      {/* caroussel */}
      <div className="div-lights"></div>
      <div className="logos">
        <div className="screen-lights">
          <div className="logo-slider" style={sliderStyle}>
            <img src="/assets/react-3.svg" alt="" />
            <img src="/assets/js-logo.png" alt="" />
            <img src="/assets/tail-logo.png" alt="" />
            <img src="/assets/html-logo.png" alt="" />
            <img src="/assets/css-logo.png" alt="" />
            <img
              src="/assets/mysql-logo.png"
              alt=""
              className="social-invert"
            />
            <img src="/assets/nodejs-logo.png" alt="" />
          </div>
          <div className="logo-slider" style={sliderStyle}>
            <img src="/assets/react-3.svg" alt="" />
            <img src="/assets/js-logo.png" alt="" />
            <img src="/assets/tail-logo.png" alt="" />
            <img src="/assets/html-logo.png" alt="" />
            <img src="/assets/css-logo.png" alt="" />
            <img
              src="/assets/mysql-logo.png"
              alt=""
              className="social-invert"
            />
            <img src="/assets/nodejs-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
