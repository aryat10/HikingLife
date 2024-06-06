import ImageHike from "../images/ImageHike.png";
import BlueMountain from "../images/BlueMountain.svg";

const Imgsec = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "white" }}>
      <img
        src={ImageHike}
        style={{ width: "100%", filter: "brightness(70%)" }}
        alt="Hiking"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily:
            "Marker Brush Script MT, Brush Script Std, cursive, fantasy",
          margin: "0",
          textAlign: "center",
          fontSize: "24px",
          marginTop: "50px",
          padding: "10px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p style={{ margin: "0" }}>
          THE ASANAS PURIFY OUR BODY AND <br /> KEEP IT HEALTHY, MAKING IT A
          SUITABLE <br /> VEHICLE FOR THE SOUL
        </p>
        <img
          src={BlueMountain}
          style={{
            width: "100%", // Use full width on small screens
            maxWidth: "200px", // Limit max width to 200px
            height: "auto", // Maintain aspect ratio
            paddingTop: "10px",
          }}
          alt="Blue Mountain"
        />
        <br />
        <button type="button" className="btn btn-outline-primary">
          see more
        </button>
      </div>
    </div>
  );
};

export default Imgsec;
