import "./Title.css";
import slika1 from "./w32312.png";
import { Link } from "react-router-dom";
import logo from "./LOG2.png";
function Title() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          className="title"
          style={{
            marginTop: "auto",
            display: "flex",
            margin: " 50px 60px  250px 150px",
            flexDirection: "column",
          }}
        >
          <div className="logo">
            <img
              src={logo}
              style={{
                width: "230px",
                margin: "0 0 -70px -10px",
              }}
            ></img>
          </div>
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <h1
              style={{
                marginBottom: "-23px",
              }}
            >
              DEJAN
            </h1>
            <h1>STOJKOVIĆ</h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            margin: "auto",
            marginTop: "90px",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <button className="btn1">Portfolio |</button>
            <div className="btna">
              <a
                className="btna"
                href="https://www.instagram.com/rsd_photography_/"
                target="_blank"
              >
                Instagram |
              </a>
            </div>
            <button className="btn1">Kontakt | </button>
            <Link to="/info">
              {" "}
              <button className="btn1">Info</button>
            </Link>
          </div>

          <img
            className="slika1"
            src={slika1}
            style={{
              width: "200px",
              margin: "100px 0 0 300px",
            }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Title;
