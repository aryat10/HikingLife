import icon from "../images/icon.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* First Column */}
        <div
          style={{ textAlign: "left", flex: "1 1 300px", marginBottom: "20px" }}
        >
          <p style={{ margin: "0", fontWeight: "bold", marginBottom: "5px" }}>
            About
          </p>
          <p style={{ margin: "0", textAlign: "justify" }}>
            At Hiking Life, we're passionate about the great outdoors and
            helping people experience
          </p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
          >
            <img
              src={icon}
              alt=""
              style={{ height: "35px", width: "35px", cursor: "pointer" }}
            />
            <span
              style={{
                marginLeft: "10px",
                color: "#1ca9c9",
                fontWeight: "bold",
              }}
            >
              Hiking Life
            </span>
          </div>
        </div>
        {/* Second Column */}
        <div
          style={{
            textAlign: "right",
            flex: "1 1 300px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0", fontWeight: "bold", marginBottom: "5px" }}>
            ABOUT
          </p>
          <div>
            <a href="#">Team</a>
            <br />
            <a href="#">Join us</a>
            <br />
            <a href="#">Ethics</a>
            <br />
            <a href="#">Goals</a>
            <br />
          </div>
        </div>
        {/* Third Column */}
        <div
          style={{
            textAlign: "right",
            flex: "1 1 300px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0", fontWeight: "bold", marginBottom: "5px" }}>
            ABOUT
          </p>
          <div>
            <a href="#">Team</a>
            <br />
            <a href="#">Join us</a>
            <br />
            <a href="#">Ethics</a>
            <br />
            <a href="#">Goals</a>
            <br />
          </div>
        </div>
      </div>

      <p style={{ margin: "0", marginTop: "10px" }}>
        © 2024 HIKING LIFE. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
