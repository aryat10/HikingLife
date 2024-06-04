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
      <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>ROCK CLIMBING</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
            1. CLASSES & EVENTS
          </h2>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>
            Hatha is the most classic yoga. Its origin is in the Raya Yoga of
            Patanjali and other classical texts such as Bhagavad Gita and Hatha
            Yoga Pradipika.
          </p>
          <div
            style={{
              borderBottom: "3px solid skyblue",
              width: "100px",
              margin: "10px 0",
            }}
          ></div>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>
            10 modules divided into 7 weekends
          </p>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>
            <strong>Start</strong>
            <br />
            April 15
            <br />
            20.00 hs
          </p>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>
            <strong>Price</strong>
            <br />
            $900
          </p>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={rockClimb}
            alt="Hiker"
            style={{ width: "200px", borderRadius: "50%" }}
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
  );
};

export default Rocksec;
