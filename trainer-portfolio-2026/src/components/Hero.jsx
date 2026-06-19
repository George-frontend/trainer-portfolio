import "../styles/hero.css";
import { Award } from "lucide-react";

const Hero = () => {

  return (
    <section id="hero" className="hero">

      <p className="primary-p"><Award size={14} /> Certified Fitness Coach</p>

      <h1 className="hero-h1">Take the first step towards a <span className="h1-span">better version of yourself</span></h1>

      <p className="secondary-p">It's time to stop putting off your health and build the body you've always wanted to live in. 
        As your coach, I will help you improve your health 
        and shape through proper movement and sustainable habits, without extremes and starvation.
      </p>

      <div className="actions">
        <a href="#contact" className="primary-btn">Book Now</a>
        <a href="#services" className="secondary-btn">View Services</a>
      </div>

      <hr className="line" />

      <div className="elements">

        <div className="children-elements">
          <span>12+</span>
          <p>Clients Coached</p>
        </div>

        <div className="children-elements">
          <span>92%</span>
          <p>Goal Achievement</p>
        </div>

        <div className="children-elements">
          <span>6+</span>
          <p>Months Experience</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
