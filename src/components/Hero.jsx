
import './Hero.css';
import hik from '../images/hik.png'
const Hero = () => {
  return (
    <div className="hero-container">
      <img src={hik} className="hero-img" alt="Celebration" />
      <div className="text">
        <h1>Discover your
            <br />
        next Hike</h1>
        <h6>DISCOVER YOUR
          <br />
        NEXT HIKE</h6>
        <p>Lorem ipsum dolor sit
        <br />
        ipsum dolor sit</p>
      </div>
    </div>
  );
}

export default Hero;
