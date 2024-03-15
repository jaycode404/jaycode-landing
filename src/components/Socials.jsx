import React from "react";

export default function Socials({ size, gap, invert, header }) {
  console.log(size);
  console.log(gap);
  return (
    <div className={`flex gap-${gap} `}>
      <a href="https://github.com/jaycode404" target="_blank">
        <img
          src="/src/logos/github.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      <a href="https://www.linkedin.com/in/jacob-flores-code/" target="_blank">
        <img
          src="/src/logos/linkedin.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      <a href="mailto:jaycode404@gmail.com" target="_blank">
        <img
          src="/src/logos/email.png"
          alt=""
          style={{ width: `${size}rem` }}
          className={`${invert} ? ${invert} : ''`}
        />
      </a>

      { header && (
        <a href="mailto:jaycode404@gmail.com" target="_blank">
          <img
            src="/src/logos/cv.png"
            alt=""
            style={{ width: `${size}rem` }}
            className={invert ? invert : ""}
          />
        </a>
      )}
    </div>
  );
}
