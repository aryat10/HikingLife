import "./App.css";
import Discoversec from "./components/Discoversec";
import Featuresec from "./components/Featuresec";
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
    </div>
  );
}

export default App;
