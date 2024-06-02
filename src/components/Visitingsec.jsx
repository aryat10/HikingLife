import './Visiting.css';

const Visitingsec = () => {
  return (
    <div className="visiting-container">
      <h2 className="heading">PLACES TO VISIT</h2>
      <h2 className="heading">IN AUTUMN</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image">
            <img src="https://as2.ftcdn.net/v2/jpg/04/44/13/53/1000_F_444135304_xEH2XhaYPmFcBpVt0w9vfVD5gz1flvJo.jpg" alt="Mountain Loop" />
          </div>
          <div className="card-content">
            <h4>Mountain Loop</h4>
            <p>Experience the breathtaking views and challenging trails of the Mountain Loop.</p>
            <p className="location">Location: 0.3 miles</p>
          </div>
          <button className="see-more-button">See More</button>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://thumbs.dreamstime.com/b/shey-phoksundo-national-park-black-glyph-icon-deepest-lake-nepal-trans-himalayan-region-flora-fauna-diversity-alpine-lake-231994983.jpg" alt="National Park" />
          </div>
          <div className="card-content">
            <h4>National Park</h4>
            <p>Explore the diverse flora and fauna in our expansive National Park.</p>
            <p className="location">Location: 0.3 miles</p>
          </div>
          <button className="see-more-button">See More</button>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://i.pinimg.com/564x/f3/46/2b/f3462bf670fe6deb8da05e78beafea6a.jpg" alt="Canyon Trail" />
          </div>
          <div className="card-content">
            <h4>Canyon Trail</h4>
            <p>Discover the winding paths and stunning rock formations of the Canyon Trail.</p>
            <p className="location">Location: 0.3 miles</p>
          </div>
          <button className="see-more-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Visitingsec;
