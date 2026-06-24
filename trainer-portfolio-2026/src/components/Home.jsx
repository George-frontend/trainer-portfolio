import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Feedback from "../components/Feedback.jsx";
import Contact from "../components/Contact.jsx";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    
    if (location.state?.scrollTo) {
    document.getElementById(location.state.scrollTo).scrollIntoView();
  }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Feedback />
      <Contact />
    </>
  )
}

export default Home