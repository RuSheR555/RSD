import React from "react";
import slika1 from "./w32312.png";
import { Link } from "react-router-dom";
import logo from "./LOG2.png";
import "./Kontakt.css";

function Kontakt() {
  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/">
          {" "}
          <img
            src={logo}
            style={{
              height: "180px",
              margin: "-30px 0 0 0px",
            }}
          ></img>
        </Link>
        <h1
          style={{
            fontSize: "3rem",
            margin: "auto",
            marginTop: "30px",
            marginLeft: "350px",
          }}
        >
          KONTAKT
        </h1>
      </div>
      <img
        className="slika1"
        src={slika1}
        style={{
          width: "200px",
          margin: "300px 0 0 900px",
        }}
      ></img>
    </div>
  );
}

export default Kontakt;
