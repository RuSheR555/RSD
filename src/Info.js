import React from "react";
import "./Info.css";
import logo from "./LOG2.png";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Link } from "react-router-dom";
function Info() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          background: "black",
          height: "110px",
          position: "fixed",
          top: "0",
          width: "100%",
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
          className="infoTitle"
          style={{
            fontSize: "3rem",
            margin: "auto",
            marginTop: "30px",
            marginLeft: "350px",
          }}
        >
          INFORMACIJE
        </h1>
      </div>
      <div className="divInfo">
        <div
          className="p1"
          style={{
            width: "600px",
            display: "flex",
            textAlign: "center",
            fontSize: "1.5rem",
            marginTop: "110px",
            paddingBottom: "400px",
            marginLeft: "40px",
          }}
        >
          <div
            style={{
              marginTop: "350px",
            }}
          >
            <p
              style={{
                fontSize: "2.5rem",
              }}
            >
              RSD photography
            </p>
            <p>
              Pozdrav, da li zelis da svoje trenutke sacuvas u obliku najljepsih
              slika u koje ces se zaljubiti? Ako je odgovor da, na pravom si
              mjestu. Ja sam Dejan Stojkovic i bavim se fotografijom duze
              vrijeme. Veoma drustven i sigurno prava opcija ako zelite
              kvalitet. Rezervacije se sve brze popunjavaju, nemoj da cekas,
              rezervisi i ti svoj datum, ne zelis da najljepse uspomene budu
              samo sjecanja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
