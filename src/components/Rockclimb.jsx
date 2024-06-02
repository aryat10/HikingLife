
import './Rock.css';

const Rockclimb = () => {
  return (
    <div className="container">
      <h2 style={{ fontWeight: 'bold' }}>ROCK CLIMBING</h2>
      <div className="classes-events">
        <div className="text">
          <h4 style={{ fontWeight: 'bold' }}>1. CLASSES AND EVENTS</h4>
          <p>Join us for our rock climbing classes and events where you'll learn essential techniques, safety practices, and gain confidence in tackling various climbing routes. Our experienced instructors will guide you through both indoor and outdoor climbing experiences, catering to climbers of all skill levels.</p>
          <p>10 modules divided into 7 weekends</p> {/* New text */}
          <div className="module-info">
            <div>Start</div>
            <div>Price</div>
          </div>
          <div className="module-info">
            <div>April 15</div>
            <div>$900</div>
          </div>
          <div className="module-info">
            {/* <div>20.00 hs</div> */}
          </div>
        </div>
        <div className="circle">
          <img src="https://img.freepik.com/premium-vector/man-climbing-mountain-vector-mountain-climb-icon-hiking-icon-symbol-mountain-climb-vector-illus_1147484-732.jpg" alt="Climbing" />
        </div>
      </div>
    </div>
  )
}

export default Rockclimb;
