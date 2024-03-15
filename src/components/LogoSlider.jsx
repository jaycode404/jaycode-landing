import React from "react";

export default function LogoSlider() {
  return (
    <div className="relative">
      <img src="/src/assets/macintosh.png" alt="" className="mr-4 mac-shadow" />
      <div className="absolute top-6 item flex items-center right-[6rem]">
        <div className="logos-container bg-gray-300">
          <div className="logos">
            <div className="logo-slide">
              <img src="/src/logos/react-3.svg" alt="" />
              <img src="/src/logos/js-logo.png" alt="" />
              <img src="/src/logos/tail-logo.png" alt="" />
              <img src="/src/logos/html-logo.png" alt="" />
              <img src="/src/logos/css-logo.png" alt="" />
              <img src="/src/logos/mysql-logo.png" alt="" className="social-invert"/>
              <img src="/src/logos/nodejs-logo.png" alt="" />
            </div>
            <div className="logo-slide">
              <img src="/src/logos/react-3.svg" alt="" />
              <img src="/src/logos/js-logo.png" alt="" />
              <img src="/src/logos/tail-logo.png" alt="" />
              <img src="/src/logos/html-logo.png" alt="" />
              <img src="/src/logos/css-logo.png" alt="" />
              <img src="/src/logos/mysql-logo.png" alt="" className="social-invert"/>
              <img src="/src/logos/nodejs-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
