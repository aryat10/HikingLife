

const Visitingsec = () => {
  return (
    <div style={{ backgroundColor: "white", paddingBottom: '5px' }}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "2rem", // Relative units for better scaling
          marginLeft: "1rem", // Relative units for better scaling
          fontFamily: "system-ui",
          textAlign: 'center',
          marginRight: '1095px' // Center the title for better responsiveness
        }}
      >
        PLACES TO VISIT <br /> IN AUTUMN
      </h1>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-12 col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx8ZAkidhpn5AqjmuXePMoKLPY93wfuGHr3IkLWOYZJ8yCKkaLBRQ0EeGZCoRFrw-vsg&usqp=CAU"
              style={{ width: "100%", maxWidth: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              <strong>Mountain Loop</strong>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Hiking through a mountain loop offers an exhilarating blend of
              challenge and beauty, making it a favorite among outdoor
              enthusiasts. As you navigate the winding trails, you're greeted by
              the diverse landscape, with each turn revealing new vistas – from
              towering peaks to verdant
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3EZ1hEkSqgqMVZHO4vWsZTlUrhBgKhJXZQ&s"
              style={{ width: "100%", maxWidth: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              <strong>National Park</strong>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Exploring a mountain loop in a National park is an awe-inspiring
              experience that combines the majesty of pristine nature with the
              thrill of adventure. As you embark on the trail, you'll traverse a
              diverse array of landscapes, from dense forests and alpine meadows
              to rocky ridges
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="https://thumbs.dreamstime.com/b/grand-canyon-icon-vector-sign-symbol-isolated-white-backg-background-your-web-mobile-app-design-logo-concept-133735761.jpg"
              style={{ width: "100%", maxWidth: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              <strong>Canyon Trail</strong>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Mountains add an exhilarating dimension to hiking, offering
              breathtaking views and a sense of adventure. Hiking in mountainous
              regions presents unique challenges, such as steep ascents, rocky
              paths, and varying weather conditions, which test physical
              endurance
            </p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="button" className="btn btn-outline-primary">
          See More
        </button>
      </div>
    </div>
  );
};

export default Visitingsec;
