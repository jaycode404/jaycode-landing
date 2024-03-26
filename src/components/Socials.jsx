import React from "react";

export default function Socials({ size, gap, invert, header }) {
  
  return (
    <div className={`flex gap-[3rem] mt-2`}>
      <a href="https://github.com/jaycode404" target="_blank">
        <img
          src="https://bespoke-kashata-1a54d2.netlify.app/assets/github.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      <a href="https://www.linkedin.com/in/jacob-flores-code/" target="_blank">
        <img
          src="https://bespoke-kashata-1a54d2.netlify.app/assets/linkedin.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      <a href="mailto:jaycode404@gmail.com" target="_blank">
        <img
          src="https://bespoke-kashata-1a54d2.netlify.app/assets/email.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      {header && (
        <a href="mailto:jaycode404@gmail.com" target="_blank">
          <img
            src="https://bespoke-kashata-1a54d2.netlify.app/assets/cv.png"
            alt=""
            style={{ width: `${size}rem` }}
            className={invert ? invert : ""}
          />
        </a>
      )}
    </div>
  );
}
