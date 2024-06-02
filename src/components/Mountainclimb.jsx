import './Mountain.css';

const Mountainclimb = () => {
  return (
    <div className="mountain-container">
      <div className="heading">
        <h2 style={{ fontWeight: 'bold' }}>MOUNTAINEERING</h2>
        <p>ICE CLIMBING</p>
        <h4 style={{ fontWeight: 'bold' }}>2. ACTIVITY</h4>
      </div>
      <div className="image-container">
        <img src="https://t4.ftcdn.net/jpg/03/69/08/61/360_F_369086156_vgKRRPaKyhqsBz2a2pmnZvUcm2NXDrjy.jpg" alt="Mountaineering" />
      </div>
    </div>
  );
};

export default Mountainclimb;
