import React from "react";
import ImageHike from "../images/ImageHike.png";
import BlueMountain from "../images/BlueMountain.svg";

const Imgsec = () => {
  const containerStyle = {
    position: "relative",
    backgroundColor: "white",
  };

  const backgroundImageStyle = {
    width: "100%",
    filter: "brightness(70%)",
  };

  const overlayContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontFamily: "Marker Brush Script MT, Brush Script Std, cursive, fantasy",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
  };

  const overlayTextStyle = {
    margin: "0",
    fontSize: "24px",
  };

  const overlayImageStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "auto",
    paddingTop: "10px",
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      overlayTextStyle: {
        fontSize: "18px",
      },
      overlayImageStyle: {
        maxWidth: "150px",
      },
    },
    '@media (max-width: 480px)': {
      overlayTextStyle: {
        fontSize: "16px",
      },
      overlayImageStyle: {
        maxWidth: "120px",
      },
    },
  };

  const mergeStyles = (style, responsive) => {
    let merged = { ...style };
    for (let key in responsive) {
      if (window.matchMedia(key).matches) {
        merged = { ...merged, ...responsive[key] };
      }
    }
    return merged;
  };

  return (
    <div style={containerStyle}>
      <img src={ImageHike} style={backgroundImageStyle} alt="Hiking" />
      <div style={overlayContentStyle}>
        <p style={mergeStyles(overlayTextStyle, responsiveStyle)}>
          THE ASANAS PURIFY OUR BODY AND <br /> KEEP IT HEALTHY, MAKING IT A
          SUITABLE <br /> VEHICLE FOR THE SOUL
        </p>
        <img
          src={BlueMountain}
          style={mergeStyles(overlayImageStyle, responsiveStyle)}
          alt="Blue Mountain"
        />
        <br />
        <button type="button" className="btn btn-outline-primary">
          See more
        </button>
      </div>
    </div>
  );
};

export default Imgsec;
