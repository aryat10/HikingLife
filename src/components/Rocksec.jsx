import rockClimb from "../images/rockClimb.jpg";

const Rocksec = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginLeft: "5%" }}>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "2rem", // Using relative units for better scaling
          }}
        >
          ROCK CLIMBING
        </h1>
        <h2
          style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: "5px" }}
        >
          1. CLASSES & EVENTS
        </h2>
        <div
          style={{
            borderBottom: "3px solid skyblue",
            width: "300px",
            margin: "10px 0", // Left-align the line
          }}
        ></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <p style={{ fontSize: "1rem", margin: "10px 0" }}>
              Rock climbing offers a variety of classes and events designed to
              cater to climbers of all skill levels, from beginners to advanced
              enthusiasts. Classes typically include introductory sessions where
              newcomers learn the basics of climbing techniques, safety
              protocols, and equipment usage under the guidance of experienced
              instructors. Intermediate classes often focus on refining skills,
              improving climbing efficiency, and tackling more challenging
              routes. Advanced classes might delve into specialized techniques
              such as lead climbing, bouldering, and multi-pitch climbs.
            </p>
            <div
              style={{
                borderBottom: "3px solid skyblue",
                width: "200px",
                margin: "10px 0",
              }}
            ></div>
            <p style={{ fontSize: "1rem", margin: "10px 0" }}>
              10 modules divided into 7 weekends
            </p>
            <p style={{ fontSize: "1rem", margin: "10px 0" }}>
              <strong>Start</strong>
              <br />
              April 15
              <br />
              20.00 hs
            </p>
            <p style={{ fontSize: "1rem", margin: "10px 0" }}>
              <strong>Price</strong>
              <br />
              $900
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={rockClimb}
              alt="Hiker"
              style={{
                borderRadius: "50%",
                width: "100%",
                maxWidth: "300px", // Ensuring the max size for large screens
                height: "auto",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <p
              style={{
                color: "orange",
                fontFamily:
                  "Marker Brush Script MT, Brush Script Std, cursive, fantasy",
                marginTop: "10px",
              }}
            >
              WALKING IN NATURE AS A RECREATIONAL ACTIVITY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocksec;
