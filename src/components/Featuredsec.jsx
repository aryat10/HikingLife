
import './Feature.css';

const Featuredsec = () => {
  return (
    <div className="feature-section">
      <div className="heading">
        <h2>HIKING AND CAMPING</h2>
        <p><strong>CLASSES</strong></p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-image">
            <img src="https://thumbs.dreamstime.com/b/backpack-icon-vector-summer-camp-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-166039044.jpg" alt="Description 1" />
            <h3>ACTIVITIES</h3> {/* Added heading for card 1 */}
          </div>
          <div className="card-content">
            <p>When hiking, you can enjoy a variety of activities such as exploring nature trails, spotting wildlife, taking photographs of scenic views, and enjoying picnic</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqAcHnr03osRRhQ07tZayQ-Q3RXIHKoKSTA&s" alt="Description 2" />
            <h3>HIKING</h3> {/* Added heading for card 2 */}
          </div>
          <div className="card-content">
            <p>Embark on an adventure and explore the great outdoors through hiking! Whether it's a leisurely stroll through wooded trails or a challenging ascent to breathta</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKMs-WAFuIgi_DVwEdA9lNXxwk9iDx0Jisw&s" alt="Description 3" />
            <h3>MOUNTAINS</h3> {/* Added heading for card 3 */}
          </div>
          <div className="card-content">
            <p>Escape to the majesty of the mountains and experience the awe-inspiring beauty of towering peaks, sweeping valleys, and serene alpine lakes. Whether you're an </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featuredsec;
