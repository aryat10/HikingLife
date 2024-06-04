const Feauturesec = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1 style={{ padding: "5px", fontFamily: "ariel", marginLeft: "10px" }}>
        HIKING AND CAMPING
      </h1>
      <h2 style={{ padding: "5px", marginLeft: "10px" }}>
        <strong>CLASSES</strong>
      </h2>
      <div
        style={{
          borderBottom: "2px solid skyblue",
          width: "100px",
          margin: "10px 0",
          marginLeft: "17px",
        }}
      ></div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/634/263/original/school-bag-icon-design-template-vector.jpg"
              style={{ width: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              {" "}
              <strong>ACTIVITIES</strong>{" "}
            </h3>
            <p style={{ textAlign: "justify" }}>
              During a hike, participants can engage in a variety of activities
              such as bird watching, photography, and identifying flora and
              fauna along the trail. Hiking often involves navigating through
              diverse terrains, which may include climbing rocky paths, crossing
              streams and other{" "}
            </p>
          </div>
          <div className="col">
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/452/984/non_2x/mountaineer-on-the-top-adventure-color-icon-illustration-vector.jpg"
              style={{ width: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              {" "}
              <strong>HIKING</strong>{" "}
            </h3>
            <p style={{ textAlign: "justify" }}>
              Hiking is a popular outdoor activity that involves walking in
              natural environments, often on trails or footpaths. It offers a
              unique blend of physical exercise and nature immersion, allowing
              participants to explore scenic landscapes, experience varying
              terrains, and enjoy fresh air{" "}
            </p>
          </div>
          <div className="col">
            <img
              src="https://png.pngtree.com/png-vector/20190804/ourlarge/pngtree-mountain-landscape-hill-nature-tree-flat-color-icon-vector-png-image_1650027.jpg"
              style={{ width: "200px", borderRadius: "50%" }}
              alt=""
            />
            <h3>
              {" "}
              <strong>MOUNTAINS</strong>{" "}
            </h3>
            <p style={{ textAlign: "justify" }}>
              Mountains add an exhilarating dimension to hiking, offering
              breathtaking views and a sense of adventure. Hiking in mountainous
              regions presents unique challenges, such as steep ascents, rocky
              paths, and varying weather conditions, which test physical
              endurance{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feauturesec;
