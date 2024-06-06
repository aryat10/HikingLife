const Icesec = () => {
  return (
    <div
      style={{
        backgroundColor: "#002244",
        padding: "20px",
        display: "flex",
        flexDirection: "row", // Keep elements in a row by default
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap", // Allow wrapping for smaller screens
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: "0 1 400px", // Ensure the image container takes up to 400px
          marginBottom: "20px", // Space at the bottom for small screens
        }}
      >
        <img
          src="https://img.freepik.com/premium-photo/rear-view-man-walking-hill-with-hiking-backpack-sticks_130488-857.jpg"
          alt="Description"
          style={{
            borderRadius: "50%",
            width: "100%", // Responsive width
            maxWidth: "400px", // Max width for large screens
            height: "auto", // Auto height to maintain aspect ratio
            objectFit: "cover",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        />
        <p
          style={{
            color: "#99FFFF",
            fontFamily:
              "Marker Brush Script MT, Brush Script Std, cursive, fantasy",
            marginTop: "10px",
            textAlign: "center",
            padding: "0 10px", // Padding to prevent text overflow on small screens
          }}
        >
          WALKING IN NATURE AS A RECREATIONAL ACTIVITY
        </p>
      </div>

      <div
        style={{
          color: "white",
          flex: "1 1 60%", // Adjust flex for responsiveness
          textAlign: "justify",
          marginLeft: "20px", // Margin for spacing between image and text
          fontFamily: "Georgia, serif",
          minWidth: "280px", // Ensure minimum width for the text container
        }}
      >
        <h1>
          MOUNTAINEERING <br /> ICE CLIMBING
        </h1>
        <br />
        <h2>2. ACTIVITIES</h2>
        <p>
          Ice climbing and hiking are exhilarating outdoor activities that
          combine physical endurance, mental focus, and a love for nature. Ice
          climbing involves ascending ice formations such as frozen waterfalls,
          icefalls, and cliffs covered with ice using specialized equipment like
          ice axes and crampons. It requires strength, skill, and precision,
          offering climbers a unique challenge and the reward of breathtaking
          views from the top. Hiking, on the other hand, is a more accessible
          and leisurely activity that involves walking through trails and
          natural landscapes. It allows adventurers to explore forests,
          mountains, and valleys, enjoying the beauty and tranquility of the
          wilderness.
        </p>
        <div
          style={{
            borderBottom: "3px solid skyblue",
            width: "100%",
            maxWidth: "300px", // Max width for large screens
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
    </div>
  );
};

export default Icesec;
