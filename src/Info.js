import React from "react";
import "./Info.css";
import logo from "./LOG2.png";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Link } from "react-router-dom";
function Info() {
  return (
    <>
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
              height: "200px",
              margin: "-30px 0 0 -10px",
            }}
          ></img>
        </Link>
        <h1
          style={{
            fontSize: "3rem",
            justifyContent: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          INFORMACIJE
        </h1>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <PhoneEnabledIcon
          style={{
            fontSize: "3rem",
          }}
        ></PhoneEnabledIcon>
        <h3>+387/66-289-772</h3>
      </div>
      <div
        style={{
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "400px",
        }}
      >
        <p>
          Pozdrav, da li zelis da svoje trenutke sacuvas u obliku najljepsih
          slika u koje ces se zaljubiti? Ako je odgovor da, na pravom si mjestu.
          Ja sam Dejan Stojkovic i bavim se fotografijom duze vrijeme. Veoma
          drustven i sigurno prava opcija ako zelite kvalitet. Rezervacije se
          sve brze popunjavaju, nemoj da cekas, rezervisi i ti svoj datum, ne
          zelis da najljepse uspomene budu samo sjecanja.
        </p>
      </div>
    </>
  );
}

export default Info;
