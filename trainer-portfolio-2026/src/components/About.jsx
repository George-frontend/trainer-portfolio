import "../styles/about.css";
import photo from "../assets/images/photo.jpg";
import { CheckCircle, Minus  } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      
      <div className="photo">
        <img src={photo} alt="Venelin Hristov, certified fitness coach" width="200" height="400" />
      </div>

      <div className="desktop-about">

        <div className="mobile-about">
          <span className="primary-span"><Minus  /> About</span>

          <h2 className="about-h2">Built on Science. Driven by Results.</h2>

          <p>
            My name is Venelin Hristov and I have been doing powerlifting for 3 years. I have completed a 
            powerlifting instructor course at the National Sports Academy, 
            as well as the 14th Strong by Science Fitness Coaching Academy.
          </p>

          <p>
            I am currently continuing my development in the mentoring program of the Strong by Science Pro Academy 
            and the Vasil Levski National Sports Academy. My goal is to help people become stronger, 
            healthier and more confident in their bodies, using scientifically proven methods, 
            by adapting training to the person's life, and not the person's life to training.
          </p>
        </div>

        <div className="certificates">
          <span className="certificates-span"><CheckCircle /> Strong by Science</span>
          <span className="certificates-span"><CheckCircle /> Sports Academy Vasil Levski</span> 
        </div>
      </div>
    </section>
  )
}

export default About
