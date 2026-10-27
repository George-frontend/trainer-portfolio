import "../styles/about.css";
import poster from "../assets/images/about-poster.jpg";
import video from "../assets/videos/about.mp4";
import { Minus } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="video">
        <video
          src={video}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label="Venelin Hristov, certified fitness coach"
        />
      </div>

      <div className="desktop-about">
        <div className="mobile-about">
          <span className="primary-span">
            <Minus /> About
          </span>

          <h2 className="about-h2">Built on Science. Driven by Results.</h2>

          <p>
            My name is Venelin Hristov and I have been doing powerlifting for 3
            years. I have completed a powerlifting instructor course at the
            National Sports Academy, as well as the 14th Strong by Science
            Fitness Coaching Academy.
          </p>

          <p>
            I am currently continuing my development in the mentoring program of
            the Strong by Science Pro Academy and the Vasil Levski National
            Sports Academy. My goal is to help people become stronger, healthier
            and more confident in their bodies, using scientifically proven
            methods, by adapting training to the person's life, and not the
            person's life to training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
