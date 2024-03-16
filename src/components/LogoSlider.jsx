import React from "react";

export default function LogoSlider() {
  return (
    <div className="relative">
      <img
        src="public/assets/macintosh.png"
        alt=""
        className="mr-4 mac-shadow "
      />
      <div className="absolute top-6 item flex items-center right-[6rem]">
        <div className="logos-container bg-gray-300">
          <div className="logos">
            <div className="logo-slide">
              <img src="public/assets/react-3.svg" alt="" />
              <img src="public/assets/js-logo.png" alt="" />
              <img src="public/assets/tail-logo.png" alt="" />
              <img src="public/assets/html-logo.png" alt="" />
              <img src="public/assets/css-logo.png" alt="" />
              <img
                src="public/assets/mysql-logo.png"
                alt=""
                className="social-invert"
              />
              <img src="public/assets/nodejs-logo.png" alt="" />
            </div>
            <div className="logo-slide">
              <img src="public/assets/react-3.svg" alt="" />
              <img src="public/assets/js-logo.png" alt="" />
              <img src="public/assets/tail-logo.png" alt="" />
              <img src="public/assets/html-logo.png" alt="" />
              <img src="public/assets/css-logo.png" alt="" />
              <img
                src="public/assets/mysql-logo.png"
                alt=""
                className="social-invert"
              />
              <img src="public/assets/nodejs-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
