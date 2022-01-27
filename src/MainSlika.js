import React from "react";
import slika from "./DSC_5637.jpg";
import "./MainSlika.css";

function MainSlika() {
  return (
    <div
      className="slika"
      style={{
        width: "100%",
        height: "600px",
        objectFit: "cover",
        background: `url(${slika})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="grid"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          paddingTop: "280px",
        }}
      >
        <button className="btn">Portfolio</button>
      </div>
    </div>
  );
}

export default MainSlika;
