import React from "react";

export default function PictureRoll() {
  const rollStyle = {
    "--quantity": "8",
  };

  return (
    <div className="banner">
      <div className="roll" style={{ "--quantity": 8 }}>
        <div className="picture" style={{ "--position": "1" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "2" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "3" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "4" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "5" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "6" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "7" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
        <div className="picture" style={{ "--position": "8" }}>
          <img src="/assets/pokemon.jpg" alt="" />
        </div>
      </div>
      <div className="content">
        <h2 data-content="JACOB">JACOB</h2>
        <div className="autor">
          <h4>JCODE</h4>
          <p>
            <b>webDesing</b>
          </p>
          <p>lmao ya quiero chambear</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
}
