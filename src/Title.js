import "./Title.css";

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
          <h1>Mjesto za logo</h1>
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
          <div>
            <button className="btn1">Portfolio |</button>
            <a
              className="btna"
              href="https://www.instagram.com/rsd_photography_/"
              target="_blank"
            >
              Instagram |
            </a>
            <button className="btn1">Kontakt | </button>
            <button className="btn1">Info</button>
          </div>
          {/* <div>
            <h3
              style={{
                marginTop: "120px",
              }}
            >
              K Teslić | Banja Luka | Doboj
            </h3>
            <h3
              style={{
                letterSpacing: "4px",
              }}
            >
              T +387/66-289-772
            </h3>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Title;
