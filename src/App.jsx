import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import InfluencerSignup from "./components/InfluencerSignup";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<InfluencerSignup />} />
      </Routes>
    </div>
  );
}

export default App;
