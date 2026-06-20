import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import OneOnOneCoaching from "./pages/OneOnOneCoaching.jsx";
import RemoteCoaching from "./pages/RemoteCoaching.jsx";
import NutritionGuidance from "./pages/NutritionGuidance.jsx";

const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs/one-on-one-coaching" element={<OneOnOneCoaching />} />
        <Route path="/programs/remote-coaching" element={<RemoteCoaching />} />
        <Route path="/programs/nutrition-guidance" element={<NutritionGuidance />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
