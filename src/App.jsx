import "./App.css";
import Discoversec from "./components/Discoversec";
import Featuresec from "./components/Featuresec";
import Footer from "./components/Footer";
import Icesec from "./components/Icesec";
import Imgsec from "./components/Imgsec";
import Navbar from "./components/Navbar";
import Rocksec from "./components/Rocksec";
import Visitingsec from "./components/Visitingsec";

function App() {
  return (
    <div>
      <Navbar />
      <Discoversec />
      <Featuresec />
      <Rocksec />
      <Visitingsec />
      <Icesec />
      <Imgsec />
      <Footer />
    </div>
  );
}

export default App;
